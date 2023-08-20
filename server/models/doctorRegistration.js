import mongoose from 'mongoose';

const doctorRegistrationSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  gender: String,
  address: {
    completeAddress: String,
    pinCode: Number,
    city: String,
    State: String,
  },
  specialty: [String],
  experience: String,
  contactNumber: Number,
});

const doctorRegistration = mongoose.model(
  'doctorRegistration',
  doctorRegistrationSchema
);

export default doctorRegistration;
