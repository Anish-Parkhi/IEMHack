import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'http://localhost:5000/users/api/loginuser',
        data
      );
      if (response.status === 200) {
        console.log('login successfull');
        navigate('/landing');
      }
    } catch (error) {
      console.log({ message: error.message });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className={styles.loginContainer}>
      <LockOutlinedIcon
        sx={{
          fontSize: '2rem',
          backgroundColor: '#988ABD',
          borderRadius: '50%',
          padding: '0.5rem',
          margin: 'auto',
        }}
      />
      <div className={styles.loginHeader}>Sign In</div>
      <TextField
        sx={{ width: '40%', margin: 'auto', marginBottom: '1rem' }}
        required
        id="outlined-basic"
        label="Email"
        variant="outlined"
        name="email"
        value={data.email}
        onChange={handleChange}
      />
      <TextField
        required
        sx={{ width: '40%', margin: 'auto', marginBottom: '1rem' }}
        className={styles.emailField}
        id="filled-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        name="password"
        value={data.password}
        onChange={handleChange}
      />
      <Button
        sx={{ padding: '0.4rem', width: '40%', margin: 'auto' }}
        variant="contained"
        onClick={handleSubmit}
      >
        Sign In
      </Button>
      <Link className={styles.registeredLink}>Dont have Account ?</Link>
    </div>
  );
}

export default Login;
