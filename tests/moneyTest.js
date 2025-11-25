import {formatCurrency} from '../scripts/utils/money.js';


console.log('test suite: format currency');
console.log('converts cents in dollars ');

if(formatCurrency(2095)=== '20.95'){
  console.log('passed');
}
else{
  console.log('failed');
}

console.log('testing zero');

if(formatCurrency(0)=== '0.00'){
  console.log('passed');
}
else{
  console.log('failed');
}

console.log('Round up to the neareast cent')

if(formatCurrency(2000.5)=== '20.01'){
  console.log('passed');
}
else{
  console.log('failed');
}
