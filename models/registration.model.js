const { Sequelize, DataTypes } = require("sequelize");
const mysqlDatabase = require("../database/mysql.database");

const sequelize = new Sequelize(
  mysqlDatabase.database,
  mysqlDatabase.user,
  mysqlDatabase.password,
  {
    host: mysqlDatabase.host,
    dialect: "mysql",
  }
);

const dbConnectionTest = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((error) => {
      console.error("Unable to connect to the database: ", error);
    });
};

const NewUser = sequelize.define("users", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// NewUser.create({
//   name: "azzuhry",
//   username: "zry128",
//   email: "azzuhry128@gmail.com",
//   password: "728103101770135294405210411355",
// })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.error("Failed to create a new record : ", error);
//   });

// const createTable = () => {
//   sequelize
//     .sync()
//     .then(() => {
//       console.log(`${NewUser} table created successfully`);
//     })
//     .catch((error) => {
//       consolelog("unable to create table: ", error);
//     });
// };

dbConnectionTest();
// createTable();

// module.exports(dbConnectionTest);
