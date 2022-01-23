const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const db = new Sequelize("uptasknode", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: "3306",
  define: {
    timestamps: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = db;
