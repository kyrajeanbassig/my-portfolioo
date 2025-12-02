import React, { useState } from 'react';
import { supabase } from '../../supabaseClient'; // Make sure this path points to your client file
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Login failed: " + error.message);
      setLoading(false);
    } else {
      // Login successful, go to dashboard
      navigate('/admin/dashboard');
    }
  };

  // Simple Inline Styles to match your dark theme
  const containerStyle = {
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    width: '300px',
    padding: '30px',
    background: 'rgba(0,0,0,0.5)',
    borderRadius: '10px',
    border: '1px solid #e92c78' // Pink border
  };

  const inputStyle = {
    padding: '12px',
    borderRadius: '5px',
    border: '1px solid #555',
    background: '#22030d',
    color: 'white'
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ marginBottom: '20px', color: '#f4b256' }}>Admin Access</h2>
      
      <form onSubmit={handleLogin} style={formStyle}>
        <input 
          type="email" 
          placeholder="Enter Admin Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          style={inputStyle}
          required
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          style={inputStyle}
          required
        />
        
        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;