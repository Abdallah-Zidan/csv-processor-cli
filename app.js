import parseRecords from "./src/parse.js";

const input =
    'ID1,Minneapolis,shoes,2,Air\n' +
    'ID2,Chicago,shoes,1,Air\n' +
    'ID3,Central Department Store,shoes,5,BonPied\n' +
    'ID4,Quail Hollow,forks,3,Pfitzcraft';


parseRecords(input)
    .then(console.log)
    .catch(console.error);