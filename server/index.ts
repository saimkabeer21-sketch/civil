import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import projects from './data/projects.js';
import services from './data/services.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.get('/api/services', (req, res) => {
  res.json(services);
});

app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  console.log('Received Contact Form Submission:');
  console.log({ name, email, subject, message });
  res.status(200).json({ message: 'Message received successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
