import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import './SplitText.css'; 

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

const SplitText = ({
  text,
  className = '',
  delay = 100,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  tag = 'p',
  repeat = 0,
  repeatDelay = 0,
  yoyo = false,
  onLetterAnimationComplete
}) => {
  const ref = useRef(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (document.fonts.status === 'loaded') {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    }
  }, []);

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return;
      const el = ref.current;
      if (el._rbsplitInstance) el._rbsplitInstance.revert();

      const startPct = (1 - threshold) * 100;
      const start = `top ${startPct}%`;

      const splitInstance = new GSAPSplitText(el, {
        type: splitType,
        linesClass: 'split-line',
        wordsClass: 'split-word',
        charsClass: 'split-char',
      });

      const targets = splitType.includes('chars') ? splitInstance.chars : splitInstance.words;

      gsap.fromTo(
        targets,
        { ...from },
        {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          repeat: repeat,
          repeatDelay: repeatDelay,
          yoyo: yoyo,
          
          /* 👇 UPDATED SCROLL TRIGGER SETTINGS */
          scrollTrigger: {
            trigger: el,
            start: start,
            /* 
               play = play animation when scrolling in
               none = do nothing when scrolling past
               none = do nothing when scrolling back past
               reset = reset animation state when scrolling back up (so it can play again)
            */
            toggleActions: "play none none reset", 
          },
          onComplete: onLetterAnimationComplete
        }
      );

      el._rbsplitInstance = splitInstance;
      return () => {
        if (el._rbsplitInstance) el._rbsplitInstance.revert();
      };
    },
    [text, fontsLoaded, repeat, repeatDelay, yoyo]
  );

  const style = {
    textAlign,
    display: 'inline-block',
    willChange: 'transform, opacity'
  };
  const classes = `split-parent ${className}`;

  switch (tag) {
    case 'h1': return <h1 ref={ref} style={style} className={classes}>{text}</h1>;
    case 'h2': return <h2 ref={ref} style={style} className={classes}>{text}</h2>;
    case 'span': return <span ref={ref} style={style} className={classes}>{text}</span>;
    default: return <p ref={ref} style={style} className={classes}>{text}</p>;
  }
};

export default SplitText;