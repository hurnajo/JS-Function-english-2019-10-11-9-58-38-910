function countWords(message){
    return message.split(' ').length;
}
countWords('Good morning, I love JavaScript.'); // should return 5
console.log(countWords('Good morning, I love JavaScript.'));