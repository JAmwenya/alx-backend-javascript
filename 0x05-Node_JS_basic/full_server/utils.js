const fs = require('fs');

async function readDatabase(path) {
  try {
    const data = await fs.promises.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const fields = {};
    lines.slice(1).forEach((line) => {
      const [firstname, , , field] = line.split(',');
      if (field) {
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      }
    });

    return fields;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = readDatabase;
