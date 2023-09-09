const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const chalk = require("chalk");
const routes = require("./routes");

const PORT = config.get("port");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", routes);

async function start() {
  try {
    console.log(chalk.yellow("Connectin to DB..."));
    mongoose.connect(config.get("mongoUri"));

    app.listen(PORT, () => {
      console.log(chalk.cyan("Backend server has been started..."));
    });
  } catch (error) {
    // console.log(chalk.red(error.message));
    process.exit(1);
  }
}

start();
