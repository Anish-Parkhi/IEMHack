import express from 'express';
import {
  getRegisteredUsers,
  userRegistration,
} from '../controllers/userRegistration.js';

import {
  getRegisteredDoctor,
  newDoctorRegistration,
} from '../controllers/doctorRegistration.js';

import {
  loginUser
} from '../controllers/userLogin.js'

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello');
});
router.get('/api/registeruser', getRegisteredUsers);
router.post('/api/registeruser', userRegistration);
router.get('/api/registerdoctor', getRegisteredDoctor);
router.post('/api/registerdoctor', newDoctorRegistration);
router.post('/api/loginuser',loginUser)

export default router;
