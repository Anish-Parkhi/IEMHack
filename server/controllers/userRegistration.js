import userRegistrationModel from '../models/userRegistration.js';

export const userRegistration = async (req, res) => {
  const userData = req.body;
  const newUser = new userRegistrationModel(userData);
  try {
    await newUser.save();
    res.status(200).json({ newUser });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getRegisteredUsers = async (req, res) => {
  try {
    const registeredUsers = await userRegistrationModel.find();
    res.status(200).json(registeredUsers);
  } catch (error) {
    res.send(404).json({ message: error.message });
  }
};
