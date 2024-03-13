import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import housingRoutes from './routes/housingRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import morgan from 'morgan';
import cors from 'cors'; // Import CORS


dotenv.config();

connectDB();

const app = express();

app.use(cors()); // Enable CORS for all routes

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}


app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/housing', housingRoutes);
app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 4000; // Default to 4000 if PORT is not set

app.listen(PORT, console.log(`Server running on port ${PORT}`));
