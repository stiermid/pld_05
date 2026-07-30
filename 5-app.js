const express = require('express');
const countTickets = require('./3-count_tickets_async');

const app = express();
const PORT = 1245;

const dbPath = process.argv[2] || 'tickets.csv';

// GET /
app.get('/', (req, res) => {
  res.send('BiletAZ API işləyir!');
});

// GET /tickets
app.get('/tickets', async (req, res) => {
  try {
    const report = await countTickets(dbPath);
    res.send(`This is the ticket report\n${report}`);
  } catch (error) {
    res.send('Cannot load the database');
  }
});

app.listen(PORT, () => {
  console.log(`BiletAZ Express API http://localhost:${PORT} portunda işləyir...`);
});

module.exports = app;
