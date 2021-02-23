const ages1=[21,22,23,24];
const ages2=[33,32,34,35];
const ages3=[45,43,46];
const result=[...ages1,...ages2,...ages3];
console.log(result);
const max =Math.max(...result);
console.log(max);