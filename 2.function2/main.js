function palindrome(message){
    var reverse = message.split("").reverse().join("");
    if(message === reverse){
        return true;
    }else{
        return false;
    }
}
palindrome("hello");
palindrome("abcba");
console.log(palindrome("hello"));
console.log(palindrome("abcba"));