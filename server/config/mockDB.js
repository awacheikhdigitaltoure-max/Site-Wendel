const fs = require('fs');
const path = require('path');

const MOCK_FILE = path.join(__dirname, '../data/mockdata.json');

// Assurer que le dossier data existe
const dataDir = path.join(__dirname, '../data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);

const readData = () => {
  if (!fs.existsSync(MOCK_FILE)) {
    return { users: [], bookings: [], contacts: [] };
  }
  try {
    return JSON.parse(fs.readFileSync(MOCK_FILE, 'utf8'));
  } catch (e) {
    return { users: [], bookings: [], contacts: [] };
  }
};

const writeData = (data) => {
  fs.writeFileSync(MOCK_FILE, JSON.stringify(data, null, 2));
};

module.exports = {
  get: (collection) => readData()[collection] || [],
  save: (collection, item) => {
    const data = readData();
    if (!data[collection]) data[collection] = [];
    
    // Si l'item a un id, on vérifie s'il existe pour update
    const index = item._id ? data[collection].findIndex(i => i._id === item._id) : -1;
    
    if (index > -1) {
      data[collection][index] = { ...data[collection][index], ...item };
    } else {
      item._id = item._id || Date.now().toString();
      item.createdAt = item.createdAt || new Date();
      data[collection].push(item);
    }
    
    writeData(data);
    return item;
  },
  find: (collection, query) => {
    const items = readData()[collection] || [];
    return items.filter(item => {
      return Object.keys(query).every(key => item[key] === query[key]);
    });
  },
  findOne: (collection, query) => {
    const items = readData()[collection] || [];
    return items.find(item => {
      return Object.keys(query).every(key => item[key] === query[key]);
    });
  }
};
