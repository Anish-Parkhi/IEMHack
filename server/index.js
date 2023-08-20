import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/userRoutes.js'
const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/users',userRouter)

const CONNECTION_URL =
  'mongodb+srv://anishparkhi03:dD7mR6SuEIAsRIrB@cluster0.f1gtezk.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
  })
  .catch((err) => {
    console.log(err.message);
  });
