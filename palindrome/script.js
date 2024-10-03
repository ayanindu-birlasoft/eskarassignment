function isPalindrome(str) {
    return str === str.split('').reverse().join('');
  }
  
  function checkPalindrome() {
    var inputString = document.getElementById("inputString").value;
    var resultElement = document.getElementById("result");
    
    if (isPalindrome(inputString)) {
      resultElement.textContent = inputString + " is a palindrome.";
    } else {
      resultElement.textContent = inputString + " is not a palindrome.";
    }
  }
  