import {describe, it, expect} from 'vitest';
import processOrders from "../src/processor.js";
console.log = ()=>{}
describe('data processing suite',()=>{
    /**
     * @type {import('../src/types').Order[]}
     */
    const sampleOrders = [
        {
            id:'ID1',
            brand:"B1",
            product:"P1",
            quantity:4,
            area:'any',
        },
        {
            id:'ID2',
            brand:'B2',
            product:'P1',
            quantity:1,
            area:'any',
        },
        {
            id:'ID3',
            brand:'B2',
            product:'P1',
            quantity:1,
            area:'any',
        }
    ];

    it("should average of product P1 equals to 2",()=>{
        const {averagesArray} = processOrders(sampleOrders);
        expect(averagesArray[0][1]).toEqual(2);
    });

    it("should show that B2 is the most popular brand for product P1",()=>{
        const {popularArray} = processOrders(sampleOrders);
        expect(popularArray[0][1]).toEqual('B2');
    });
});