var a = "string";
const reg =/[a,e,i,o,u]/gi;
var b = a.match(reg);
console.log(b.join(' , '));
console.log(b.length);