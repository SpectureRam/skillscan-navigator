const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('SkillScan API is running 🚀');
});

app.use('/api/health', require('./routes/health'));

app.post('/api/ask-question', (req, res) => {
  const { role, message } = req.body;
  res.json({ reply: `Received input for ${role}: ${message}` });
});

app.listen(PORT, () => {
  console.log(`✅ Server is listening on http://localhost:${PORT}`);
});