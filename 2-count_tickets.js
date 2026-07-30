const fs = require('fs');

function countTickets(path) {
  let content;

  try {
    content = fs.readFileSync(path, 'utf-8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const lines = content
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  if (lines.length <= 1) {
    console.log('Number of tickets: 0');
    return;
  }

  const dataLines = lines.slice(1);

  console.log(`Number of tickets: ${dataLines.length}`);

  const sectors = {};

  dataLines.forEach((line) => {
    const [name, sector] = line.split(',').map((item) => item.trim());

    if (sector && name) {
      if (!sectors[sector]) {
        sectors[sector] = [];
      }
      sectors[sector].push(name);
    }
  });

  for (const [sector, names] of Object.entries(sectors)) {
    console.log(
      `Number of tickets in ${sector}: ${names.length}. List: ${names.join(', ')}`
    );
  }
}

module.exports = countTickets;
