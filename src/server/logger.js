import bunyan from "bunyan";
import config from "./config";

const logger = new bunyan.createLogger({
    name: "MadameIrma",
    stream: process.stdout,
    level: config.LOG_LEVEL
});

export default logger;