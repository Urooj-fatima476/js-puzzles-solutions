function checkoddeven(number){
    if(number % 2===0){
    return number + 'is an even number';
    }else{
    return number + 'is an odd number';
    }
}
var username = prompt('99');
username = parseInt(username);
var result =checkoddeven(username);
console.log(result);