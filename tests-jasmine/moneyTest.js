import {formatCurrency} from '../scripts/utils/money.js';

describe('test suite : fromat currency', ()=>{

it('converts cents into dollars', ()=>{

expect(formatCurrency(2095)).toEqual('20.95');
});
});

//16.13.48 is where i am 