import userRegistrationModel from '../models/userRegistration.js';

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userRegistrationModel.findOne({ email });
    if (!user || user.password !== password) {
      res.status(401).json({ error: 'Invalid credentials' });
    }
    res.status(200).json({ message: 'login successfull' });
  } catch (error) {
    res.send(500).json({ message: error.message });
  }
};
