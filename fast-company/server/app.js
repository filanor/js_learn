const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const chalk = require("chalk");
const initDataBase = require("./startUp/initDataBase");
const routes = require("./routes");

const PORT = config.get("port") ?? 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", routes);

async function start() {
  try {
    mongoose.connection.once("open", () => {
      initDataBase();
    });
    mongoose.connect(config.get("mongoUri"));
    app.listen(PORT, () =>
      console.log(chalk.green(`Server has been started at port ${PORT}`))
    );
  } catch (error) {
    console.log(chalk.red(error.message));
    process.exit(1);
  }
}

start();
