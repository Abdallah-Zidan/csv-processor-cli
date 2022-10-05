import path from "path";
import chalk from "chalk";

import parseRecords from "./parse.js";
import processOrders from "./processor.js";
import {
    checkDirWritable,
    writeDataToFiles,
    ensureOutputDirExists,
    checkInputFileReadable,
    readCSVFile
} from "./read-write.js";


async function applyFSChecks(inputFile, outputDir) {
    await ensureOutputDirExists(outputDir);

    if (!await checkDirWritable(outputDir)) {
        console.log(chalk.redBright(`Oops, looks like the output directory is inaccessible.`))
        process.exit(1);
    }

    if (!await checkInputFileReadable(inputFile)) {
        console.log(chalk.redBright(`Oops, looks like the input file is inaccessible for reading.`))
        process.exit(1);
    }
}

export default async function run(inputFile, outputDir) {
    applyFSChecks(inputFile, outputDir)
        .then(() => readCSVFile(inputFile))
        .then(parseRecords)
        .then(processOrders)
        .then(writeDataToFiles(inputFile, outputDir))
        .then(() => {
            console.log(chalk.greenBright(`Successfully processed your data. check output files at ${path.resolve(outputDir)}`))
        })
        .catch(err => {
            console.log(chalk.redBright('Oops. an error happened during processing your data'))
            console.log(chalk.redBright(err.message));
        });
}

