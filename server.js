import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const portfolioDir = path.join(__dirname, 'portfolio');

// Serve static portfolio files at root
app.use(express.static(portfolioDir));

// Also support /portfolio path prefix
app.use('/portfolio', express.static(portfolioDir));

// Serve QA assets if needed
const qaDir = path.join(__dirname, 'qa');
app.use('/qa', express.static(qaDir));

// Route for project case files
app.get('/project', (req, res) => {
  res.sendFile(path.join(portfolioDir, 'project.html'));
});

// Root index
app.get('/', (req, res) => {
  res.sendFile(path.join(portfolioDir, 'index.html'));
});

// Fallback to portfolio index
app.get('*', (req, res) => {
  res.sendFile(path.join(portfolioDir, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Portfolio server running at http://0.0.0.0:${PORT}`);
});
