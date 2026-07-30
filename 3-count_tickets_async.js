const fs = require('fs').promises;

async function countTickets(path) {
  try {
    const content = await fs.readFile(path, 'utf-8');

    const lines = content
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    if (lines.length <= 1) {
      const emptyMsg = 'Number of tickets: 0';
      console.log(emptyMsg);
      return emptyMsg;
    }

    const dataLines = lines.slice(1);
    const reportLines = [];

    const totalMsg = `Number of tickets: ${dataLines.length}`;
    console.log(totalMsg);
    reportLines.push(totalMsg);

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
      const sectorMsg = `Number of tickets in ${sector}: ${names.length}. List: ${names.join(', ')}`;
      console.log(sectorMsg);
      reportLines.push(sectorMsg);
    }

    return reportLines.join('\n');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countTickets;
