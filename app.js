import run from "./src/index.js";
import {program} from 'commander';
import inquirer from 'inquirer';
import chalk from "chalk";
import path from "path";

const DEFAULT_OUTPUT_DIR = './output';


program.description("CLI application for processing products csv file")
    .version("0.0.1")
    .argument("[inputFile]", "input csv file path.", undefined)
    .option("-o,--out <outputDir>", "output directory for results csv files", path.resolve(DEFAULT_OUTPUT_DIR));

async function askForFilePath() {
    const answers = await inquirer.prompt({
        type: 'input',
        name: 'inputFile',
        message: 'Enter the path of the csv file you want to process: ',
        validate: function (fileName) {
            // make sure file ends with .csv extension and have
            // a name that is at least 1 character long

            // although extensions can be misleading
            // the extension assumption relies on the document specs
            if (fileName.length < 5 || !fileName.endsWith('.csv')) {
                return "Looks like the file path you typed isn't valid. make sure you type the file path with extension";
            }
            return true;
        }
    });

    return answers['inputFile'];
}

program.action(async () => {
    try {
        let inputFile = '';
        console.log(chalk.greenBright("Let's do some processing...\n"));
        if (program.args.length < 1) {
            console.log(chalk.yellowBright('Oh no!, looks like you forgot to pass input file as an argument.\n'))
            console.log(chalk.yellowBright(chalk.bold('Relax ^_^. you can still continue from here.\n')));
            inputFile = await askForFilePath();
        } else {
            inputFile = program.args[0];
        }
        await run(inputFile, program.opts()['out']);
    } catch (error) {
        console.error(error);
    }
});

program.parse();