function capitalizedEachword(sentence){
    var words = sentence.split(' ');
    var capitalizedwords = words.map((word)=>{
    return word.charAt(0).toUpperCase() + word.slice(1);
    });
    var capitalizedSentence=capitalizedwords.join(' ');
    return capitalizedSentence;
}
var input ="hello guyz whats going on";
var capitalizedSentence=capitalizedEachword(input);
console.log(capitalizedSentence);