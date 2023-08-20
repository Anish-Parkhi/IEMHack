import mongoose from 'mongoose';

const userRegistrationSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 0,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  medicalInfo: {
    height: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    medicalCondition: {
      type: String,
    },
  },
  address: {
    fullAddress: String,
    pinCode: Number,
    city: String,
    state: String,
  },
});

const userRegistration = mongoose.model(
  'userRegistratrion',
  userRegistrationSchema
);

export default userRegistration;
