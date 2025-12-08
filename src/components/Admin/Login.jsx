import React, { useState } from 'react';
import { supabase } from '../../supabaseClient'; 
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import './Login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(""); 
  const [showPassword, setShowPassword] = useState(false); 
  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(""); 
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
      setLoading(false);
    } else {
      navigate('/admin/dashboard');
    }
  };

  return (
    <div className="login-page">

      <div className="login-blob blob-top"></div>
      <div className="login-blob blob-bottom"></div>

      <div className="login-card">
        <h2 className="login-title">Admin Access</h2>
        <p className="login-subtitle">Welcome back, Kyra.</p>
        
     
        {errorMsg && <div className="error-msg">⚠️ {errorMsg}</div>}

        <form onSubmit={handleLogin}>
          
    
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input 
              type="email" 
              className="modern-input"
              placeholder="Admin Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
          </div>

       
          <div className="input-group">
            <FaLock className="input-icon" />
            <input 
              type={showPassword ? "text" : "password"} 
              className="modern-input"
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
    
            <button 
              type="button" 
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? 'Authenticating...' : 'Enter Dashboard'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;