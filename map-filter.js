let age = [1,2,3,4,5];
const result = age.map(function(element){
    return element*element;
})
console.log(result);
//2
const result2 = age.map(x=>x*3);
console.log(result2);

//3
const result3 = age.filter(x=>x>3);
console.log(result3);