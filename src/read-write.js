import fs from 'fs';
import path from 'path';
import {createArrayCsvWriter} from 'csv-writer';

/**
 *
 * @param {string} path
 * @return {Promise<string>}
 */
export async function readCSVFile(path) {
    return fs.promises.readFile(path, {
        encoding: "utf-8",
    });
}

/**
 * @param {string} fileName
 * @param {string} outputDir
 */
export function writeDataToFiles(fileName, outputDir) {
    /**
     * @param {import("./types").ProcessingResult} data
     */
    return async function (data) {
        const {averagesArray, popularArray} = data;
        const averagesWriter = createArrayCsvWriter({
            path: path.join(outputDir, `0_${path.basename(fileName)}`),
        });
        const popularWriter = createArrayCsvWriter({
            path: path.join(outputDir, `1_${path.basename(fileName)}`),
        })

        const writeAveragesPromise = averagesWriter.writeRecords(averagesArray);
        const writePopularPromise = popularWriter.writeRecords(popularArray);
        return Promise.all([writePopularPromise, writeAveragesPromise]);
    }
}

export async function ensureOutputDirExists(path) {
    if (!fs.existsSync(path)) {
        await fs.promises.mkdir(path, {
            recursive: true
        });
    }
}

export async function checkInputFileReadable(path) {
    try {
        await fs.promises.access(path, fs.constants.R_OK);
        return true;
    } catch (_) {
        return false;
    }
}

export async function checkDirWritable(path) {
    try {
        await fs.promises.access(path, fs.constants.W_OK);
        return true;
    } catch (_) {
        return false;
    }
}