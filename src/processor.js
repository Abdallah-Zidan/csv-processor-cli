/**
 * @param {import('./types').Order[]} orders
 * @return {import("./types").ProcessingResult}
 */
export default function processOrders(orders) {
    const {averages, ranks} = getAverageAndBrandRanks(orders);

    let averagesArray = [];
    let popularArray = [];

    for (const [k, v] of Object.entries(averages)) {
        averagesArray.push([k,roundTo2DecimalPlaces(v)]);
    }

    for (const [k, v] of Object.entries(ranks)) {
        popularArray.push([k,mostPopularBrand(v)]);
    }

    return {popularArray, averagesArray}
}

/**@param {Record<string,number>} rank*/
function mostPopularBrand(rank) {
    return Object.keys(rank).reduce((prev, cur) => rank[prev] > rank[cur] ? prev : cur);
}

/**
 * @param {import('./types').Order[]} orders
 * @return {import('./types').DataAggregationResult}
 */
function getAverageAndBrandRanks(orders) {
    let averages = {};
    let ranks = {};
    let count = orders.length;

    orders.forEach(({product, quantity, brand}) => {
        if (averages[product]) {
            averages[product] += quantity / count;
        } else {
            averages[product] = quantity / count;
        }
        if (ranks[product]?.[brand]) {
            ranks[product][brand] += 1
        } else if (ranks[product]) {
            ranks[product] [brand] = 1;
        } else {
            ranks[product] = {[brand]: 1};
        }
    });

    return {averages, ranks};
}

function roundTo2DecimalPlaces(num) {
    return Number(num.toFixed(5));
}