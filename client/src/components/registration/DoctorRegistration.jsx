import { Select } from '@mui/material';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import doctorImage from '../../assets/doctorpatient.svg';
import heartLogo from '../../assets/heart.svg';
import styles from './DoctorRegistration.module.css';
function DoctorRegistration() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: 'male',
    email: '',
    password: '',
    address: {
      fullAddress: '',
      pinCode: '',
      city: '',
      state: '',
    },
  });
  const handelInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [nestedProp, subProp] = name.split('.');
      setInfo((prevData) => ({
        ...prevData,
        [nestedProp]: {
          ...prevData[nestedProp],
          [subProp]: value,
        },
      }));
    } else {
      setInfo((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5000/users/api/registeruser',
        info
      );
      if (response.status === 200) {
        console.log('form submitted');
        navigate('/userlogin');
      }
    } catch (error) {
      console.log({ error: error.message });
    }
  };
  return (
    <div className={styles.PatientRegistrationContainer}>
      <div className={styles.ImageContainer}>
        <img className={styles.heartLogo} src={heartLogo} />
        <div className={styles.appointMents}>Book your appointment Today !</div>
        <img className={styles.doctorPatientImg} src={doctorImage} />
      </div>
      <form className={styles.formContainer}>
        <div className={styles.formHeader}>Create Account</div>
        <div className={styles.formName}>
          <TextField
            required
            sx={{ borderColor: 'black', width: '35%' }}
            id="outlined-basic"
            label="Firstname"
            variant="outlined"
            name="firstName"
            value={info.firstName}
            onChange={handelInputChange}
          />
          <TextField
            required
            sx={{ borderColor: 'black', width: '35%' }}
            id="outlined-basic"
            label="Lastname"
            variant="outlined"
            name="lastName"
            value={info.lastName}
            onChange={handelInputChange}
          />
        </div>
        <div className={styles.emailContainer}>
          <TextField
            required
            sx={{ borderColor: 'black', width: '85%' }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="email"
            value={info.email}
            onChange={handelInputChange}
          />
        </div>
        <div className={styles.passwordContainer}>
          <TextField
            required
            sx={{ width: '85%' }}
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            name="password"
            value={info.password}
            onChange={handelInputChange}
          />
        </div>
        <div className={styles.infoContainer}>
          <Select
            required
            sx={{ width: '35%' }}
            id="outlined-select-currency"
            defaultValue="male"
            name="gender"
            value={info.gender}
            onChange={handelInputChange}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
          <TextField
            required
            sx={{ width: '35%' }}
            id="outlined-number"
            label="Age"
            name="age"
            value={info.age}
            onChange={handelInputChange}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        {/* I am working here */}
        <div className={styles.adderessContainer}>
          <TextField
            required
            sx={{ borderColor: 'black', width: '35%' }}
            id="outlined-basic"
            label="Full Address"
            variant="outlined"
            name="address.fullAddress"
            value={info.address.fullAddress}
            onChange={handelInputChange}
          />
          <TextField
            required
            sx={{ borderColor: 'black', width: '35%' }}
            id="outlined-basic"
            label="City"
            variant="outlined"
            name="address.city"
            value={info.address.city}
            onChange={handelInputChange}
          />
        </div>
        <div className={styles.pinCodeContainer}>
          <TextField
            required
            sx={{ borderColor: 'black', width: '35%' }}
            id="outlined-basic"
            label="Pincode"
            variant="outlined"
            name="address.pinCode"
            type="number"
            value={info.address.pinCode}
            onChange={handelInputChange}
          />
          <TextField
            required
            sx={{ borderColor: 'black', width: '35%' }}
            id="outlined-basic"
            label="State"
            name="address.state"
            value={info.address.state}
            onChange={handelInputChange}
            variant="outlined"
          />
        </div>
        <Button
          sx={{ width: '30%', margin: 'auto', padding: '0.5rem' }}
          type="submit"
          variant="contained"
          onClick={handleSubmit}
        >
          Create Account
        </Button>
      </form>
    </div>
  );
}

export default DoctorRegistration;
