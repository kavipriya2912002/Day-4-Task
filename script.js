//Q1: Do the below programs in anonymous function & IIFE

//a) Print odd numbers in an array
//Anonymous
var result=[];
var a=function (arr){
    for(var i=0;i<arr.length;i=i+1)
    {
        if(arr[i]%2!==0)
        {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(a([3,46,15,17,48,69,35,21,66,33,101]));
//IIFE
var res=[];
(function(ar){
    for(i=0;i<ar.length;i=i+1)
    {
        if(ar[i]%2!==0)
        {
            res.push(ar[i]);
        }
    }
    console.log(res);
})([3,46,15,17,48,69,35,21])
//________________________________________________________________________________________________________

//b)Convert all the strings to title caps in a string array

//Anonymous

var s=function (str) {
    str = str.toLowerCase().split(" ");
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
  }
  console.log(s("Hii this is day four task"));

  //IIFE

  (function (st) {
    st = st.toLowerCase().split(" ");
    for (var i = 0; i < st.length; i++) {
      st[i] = st[i].charAt(0).toUpperCase() + st[i].slice(1);
    }
    console.log(st.join(" "));
  })("Helloo this is day four task")
  //_________________________________________________________________________________________________________

//c)Sum of all numbers in an array
//Anonymous

var sum=0;
var b=function (arrayy){
    for(i=0;i<arrayy.length;i=i+1)
    {
        sum=sum+arrayy[i]
    }
    return sum;
}
console.log(b([10,35,23,4,7,45]));

//IIFE
var total=0;
(function (snum){
    for(i=0;i<snum.length;i=i+1)
    {
         total=total+snum[i]
    }
    console.log(total);

})([4,23,53,65,76,97,24])

//__________________________________________________________________________________________________________

//d) Return all the prime numbers in an array
//Anonymous

var isPrime=function (num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  } 
 var f= function (arrayy) {
    return arrayy.filter(num => isPrime(num));
  }
  console.log(f([2, 3, 4, 5, 6, 7, 8, 9, 10]));

//IIFE
(function (l)

{
    var arr = [];
arr = l.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
})
    console.log(arr);
})([27,15,17,13,19])

//________________________________________________________________________________________________________

//e) Return all the palindromes in an array
//Anonymous

const palindromes = [];
var pl=function (numbers) {

    for (let i = 0; i < numbers.length; i++) {
      if (ispal(numbers[i])) {
        palindromes.push(numbers[i]);
      }
    }
    return palindromes.join(", ");
}
    var ispal=function (number) {
      const numberStr = number.toString();
      const reversedNumberStr = numberStr.split('').reverse().join('');
      return numberStr === reversedNumberStr;
    }
  
  console.log(pl([121, 12321, 456, 1331,345678,131]));

  //IIFE


  (function(numbers) {
    const palindromes = [];
  
    for (let i = 0; i < numbers.length; i++) {
      if (isPalindrome(numbers[i])) {
        palindromes.push(numbers[i]);
      }
    }
  
    console.log(palindromes.join(", "));

    function isPalindrome(number) {
      const numberStr = number.toString();
      const reversedNumberStr = numberStr.split('').reverse().join('');
      return numberStr === reversedNumberStr;
    }
  })([121, 12321, 456, 1331, 78987, 45678,87654,34343]);
  



//________________________________________________________________________________________________________
 //f) Return median of two sorted arrays of the same size.
 //Anonymous


    const findMedian = function(arr1, arr2) {
     
      const merged = mergeArrays(arr1, arr2);
      const mid = Math.floor(merged.length / 2);
  
      if (merged.length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
      } else {
        return merged[mid];
      }
    };
  
    const mergeArrays = function(arr1, arr2) {
      const merged = [];
      let i = 0;
      let j = 0;
  
      while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
          merged.push(arr1[i]);
          i++;
        } else {
          merged.push(arr2[j]);
          j++;
        }
      }
  
      while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
      }
  
      while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
      }
  
      return merged;
    };
  
    console.log(findMedian([1,3,5],[2,4,6]));
  

//IIFE

(function(){
    function getMedian(ar1, ar2, n)
       {
         let j = 0;
         let i = n - 1;
         while (ar1[i] > ar2[j] && j < n && i > -1)
         {
           let temp = ar1[i];
           ar1[i] = ar2[j];
           ar2[j] = temp;
           i--; j++;
         }
         ar1.sort(function(a, b){return a - b});
         ar2.sort(function(a, b){return a - b});
         return parseInt((ar1[n - 1] + ar2[0]) / 2, 10);
       }
        
       let ar1 = [ 1, 12, 15, 2, 38 ];
       let ar2 = [ 2, 13, 17, 30, 45 ];
     
       let n1 = 5;
       let n2 = 5;
       if (n1 == n2)
         console.log(getMedian(ar1, ar2, n1));
       
   })();
//______________________________________________________________________________________________________
//g) Remove duplicates from an array
//Anonymous

var dup=function(arrr) {
    
    const uniqueArr = arrr.filter(function(value, index, n) {
      return n.indexOf(value) === index;
    })
    return uniqueArr;
  }
  console.log(dup([1, 2, 2, 3, 4, 4, 5, 6, 6, 7]));

  //IIFE

  (function(arr) {
    
    const uniqueArray = arr.filter(function(value, index, r) {
      return r.indexOf(value) === index;
    })
    console.log(uniqueArray);
  }([1, 2, 2, 3, 4, 4, 5, 6, 6, 7,8,8,8,10]));

  //_____________________________________________________________________________________________________________

  //h) Rotate an array by k times
  //Anonymous

  var ro = function(rArray,k) {
    const rotateArray = function(rArray, k) {
      k = k % rArray.length;
      const rotated = rArray.slice(k).concat(rArray.slice(0, k));
      return rotated;
    }
  
    const rotatedArray = rotateArray(rArray, k);
    return rotatedArray;
  }
  console.log(ro([1,2,3,4,5],2));

  //IIFE

  (function(sArray,k) {
    const rotateArray = function(sArray, k) {
      k = k % sArray.length; 
      const rotated = sArray.slice(k).concat(sArray.slice(0, k));
      return rotated;
    }
    const rotatedArray = rotateArray(sArray, k);
    console.log(rotatedArray);
  }([1,2,3,4,5,6],2));
  
//____________________________________________________________________________________________________________________

 // Q2: Do the below programs in arrow functions.
 //a)Print odd numbers in an array
 //Arrow Function
 var results=[];
var oddd= (arrIn)=>{
    for(var i=0;i<arrIn.length;i=i+1)
    {
        if(arrIn[i]%2!==0)
        {
            results.push(arrIn[i]);
        }
    }
    return results;
}
console.log(oddd([3,46,15,17,48,69,35,21,66,33,101]));

//_________________________________________________________________________________________________________________

//b)Convert all the strings to title caps in a string array
//Arrow Function

var titl=(stri)=> {
    stri = stri.toLowerCase().split(" ");
    for (var i = 0; i < stri.length; i++) {
      stri[i] = stri[i].charAt(0).toUpperCase() + stri[i].slice(1);
    }
    return stri.join(" ");
  }
  console.log(titl("Hii this is day four task"));

  //_________________________________________________________________________________________________________________

  //c)Sum of all numbers in an array
  //Arrow Function

  var sumAll=0;
var sumOfAll=(inArray)=>{
    for(i=0;i<inArray.length;i=i+1)
    {
        sumAll=sumAll+inArray[i]
    }
    return sumAll;
}
console.log(sumOfAll([10,35,23,4,7,45,123]));

//_____________________________________________________________________________________________________________________

//d) Return all the prime numbers in an array
//Arrow Function

var isPrimeNum= (num)=> {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  } 
 var f= (primeArr)=> {
    return primeArr.filter(num => isPrimeNum(num));
  }
  console.log(f([2, 3, 4, 5, 6, 7, 8, 9, 10,97]));

  //e Return all the palindromes in an array
  //Arrow Function

  const palindromes_s = [];
var pld=(numbers) =>{

    for (let i = 0; i < numbers.length; i++) {
      if (ispal(numbers[i])) {
        palindromes_s.push(numbers[i]);
      }
    }
    return palindromes_s.join(", ");
}
    var ispal=function (number) {
      const numberStr = number.toString();
      const reversedNumberStr = numberStr.split('').reverse().join('');
      return numberStr === reversedNumberStr;
    }
  
  console.log(pld([121, 12321, 456, 1331,345678,131]));


  


