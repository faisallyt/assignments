/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let ans=0;
  let check='aeiouAEIOU';
  for(let i=0;i<str.length;i++){
    let char=str[i];
    for(let j=0;j<10;j++){
      if(char===check[j]){
        ans++;
        break;
      }
    }
  }
  return ans;
}

module.exports = countVowels;