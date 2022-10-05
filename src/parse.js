import {parse} from "csv-parse";

/**
 * @param {string} input
 * @return {Promise<import('./types').Order[]>}
 */
export default function parseRecords(input) {
    return new Promise((resolve, reject) => {
        parse(input, {
            comment: '#',
        }, function (err, records) {
            if (err) {
                reject(err);
            }
            if (!records || !Array.isArray(records)) {
                reject(new Error("no records could be parsed correctly"))
            } else {
                resolve(records.map(mapRecordToOrder).filter(Boolean));
            }
        });
    });
}

/**
 * @param {Array<string>} record
 * @return {import('./types').Order | null}
 */
function mapRecordToOrder(record) {
    if (!isValidRecord(record)) {
        console.log("excluding invalid record ", JSON.stringify(record));
        return null;
    }

    const quantity = Number(record[3]);

    if (isNaN(quantity) || quantity < 0){
        console.log("excluding record due to its invalid quantity value ", JSON.stringify(record));
        return null;
    }

    return {
        id: record[0],
        area: record[1],
        product: record[2],
        quantity: quantity,
        brand: record[4],
    }
}

/**
 * @param {Array<string>} record
 * @return {boolean}
 */
function isValidRecord(record) {
    return !!(Array.isArray(record) && record[0] && record[1] && record[2] && record[3] && record[4])
}



