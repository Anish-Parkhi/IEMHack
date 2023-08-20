import doctorRegistration from '../models/doctorRegistration.js';

export const newDoctorRegistration = async (req, res) => {
  const doctorData = req.body;
  const newDoctor = new doctorRegistration(doctorData);
  try {
    await newDoctor.save();
    res.status(200).json({ newDoctor });
  } catch (error) {
    res.status(407).json({ message: error.message });
  }
};

export const getRegisteredDoctor = async (req, res) => {
  try {
    const registerdDoctors = await doctorRegistration.find();
    res.status(200).json({ registerdDoctors });
  } catch (error) {
    res.send(404).json({ message: error.message });
  }
};
