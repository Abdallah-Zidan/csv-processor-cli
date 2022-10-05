import {describe, it, expect} from 'vitest';
import parseRecords from "./parse.js";
console.log = ()=>{}

describe('csv parsing suite', () => {
    it("should parse 2 csv comma seperated lines successfully and return expected list of objects", async () => {
        const input =
            'ID1,Minneapolis,shoes,2,Air\n' +
            'ID2,Chicago,shoes,1,Air';

        const expectedOutput =[
            {
                id: 'ID1',
                area: 'Minneapolis',
                product: 'shoes',
                quantity: 2,
                brand: 'Air'
            },
            {
                id: 'ID2',
                area: 'Chicago',
                product: 'shoes',
                quantity: 1,
                brand: 'Air'
            }
        ];

        const result = await parseRecords(input);
        expect(result).toHaveLength(expectedOutput.length);
        expect(result).toMatchObject(expectedOutput);
    });

    it('should convert quantity values into number and exclude records with invalid quantities', async () => {
        // assumption is that no non number or negative quantities should be excluded

        const input =
            'ID1,Minneapolis,shoes,2,Air\n' +
            'ID2,Chicago,shoes,h,Air\n'+
            'ID3,Minneapolis,shoes,-2,Polo';

        const result = await parseRecords(input);
        const [firstRecord] = result;
        expect(firstRecord.quantity).toBeGreaterThanOrEqual(0);
        // second and third record will be excluded
        expect(result).toHaveLength(1);
    });
});