import { Link } from 'react-router-dom';
import doctorImage from '../../assets/doctorImage.png';
import patientImage from '../../assets/patientImage.png';
import styles from './registration.module.css';
function Registration() {
  return (
    <div className={styles.registrationContainer}>
      <div className={styles.middleContainer}>
        <div>
          <div className={styles.ImageWrapper}>
            <Link style={{ textDecoration: 'none' }} to="/patientregistration">
              <img
                className={styles.patientImage}
                src={patientImage}
                alt="PatientImage"
              />
            </Link>
          </div>
          <div className={styles.text}>Register as Patient</div>
        </div>
        <div>
          <div className={styles.ImageWrapper}>
            <Link to="/doctorregistration">
              <img
                className={styles.doctorImage}
                src={doctorImage}
                alt="doctorImage"
              />
            </Link>
          </div>
          <div className={styles.text}>Register as Doctor</div>
        </div>
      </div>
      <Link to="/userlogin" className={styles.alreadyRegisteredContainer}>
        Already Registered ?
      </Link>
    </div>
  );
}

export default Registration;
