/*
Work through the problems in this file.  As you work through each problem periodically run: npm test
Your function name and the string must match the instructions exactly otherwise the tests will fail.
After writing your function uncomment the matching function reference at the bottom of the file.
*/

// 1. Write a function called helloWorld that returns the string 'Hello World!'.

function helloWorld() {
  return 'Hello World!';
};

/*
2. Write a function called lambdaSchool that has a single parameter called num.
     num will be a positive integer.
     If num is divisible by 3 return the string 'Lambda'
     If num is divisible by 5 return the string 'School'
     If num is divisible by 3 AND 5 return the string 'Lambda School' (notice the space)
     If num is NOT divisible by 3 or 5 then return num.

     Example:
             lambdaSchool(15); // returns 'Lambda School'
             lambdaSchool(8); // returns 8
*/

function lambdaSchool(num) {
  if (!(num % 3 === 0 || num % 5 === 0)) {
    return num;  
  } else if ((num % 3 === 0) && (num % 5 === 0)) {
    return 'Lambda School';    
  } else if (num % 5 === 0) {
    return 'School';
  } else if (num % 3 === 0) {
    return 'Lambda';
  }; 
};


// function lambdaSchool(num) {
//   if ((num % 3 === 0) && (num % 5 === 0)) {
//     return 'Lambda School';    
//   } else if (num % 5 === 0) {
//     return 'School';
//   } else if (num % 3 === 0) {
//     return 'Lambda';
//   } else if (!(num % 3 === 0 || num % 5 === 0)) {
//     return num; 
//   };
// };

// lambdaSchool(10);


// function lambdaSchool(num) {
//   switch (num) {
//     case ((num % 3 === 0) && (num % 5 === 0)): {
//       return 'Lambda School'; 
//     };
//     case (num % 5 === 0) : {
//       return 'School';
//     };
//     case (num % 3 === 0) : {
//       return 'Lambda';
//     };
//     case (!(num % 3 === 0 || num % 5 === 0)) : {
//       return num;
//     };
//   };
// };

// lambdaSchool(15);


/*
3. Write a function called longestString that has a single parameter called strs.
     strs will be an array of strings.
     Return the longest string that is in strs.
     If there is a tie for the longest string then return the one that occurs first.

     Example:
             longestString(['hi', 'hello', 'ni hao', 'guten tag']); // returns 'guten tag'
             longestString(['JavaScript', 'HTML', 'CSS']); // returns 'JavaScript'
*/

function longestString(strs) {
  //let strs = ['test 1', 'test 12', 'test 23', 'test 123', 'test 333', 'test 4444', 'test 1234', 'test 44', 'test 321', 'test 4321'];
  let longest = null;
  let tie = null;
  if (strs.length > 0) {
    console.log(strs.length);
    longest = strs[0];
    console.log(longest);
      if (strs.length > 1) {
        console.log(strs.length);
        for (let i = 1; i <= strs.length - 1; i++) {
          console.log(i);
          if (strs[i].length === longest.length) {
            tie = longest;
            console.log(tie);
          } else if (strs[i].length > longest.length) {
            longest = strs[i];
            console.log(longest);
          };
        };
    };
  };
  if (tie === null) {
    console.log(longest);
    return longest;
  } else if (tie.length >= longest.length) {
    console.log(tie);
    return tie;
  };
}

/*
4. Write a function called computeUserAverageAge that has a single parameter called users
     users is an array of user objects.
     Each user object has a property called age that is a number.
     Compute the average age of all user objects in the users array.
     Round off the decimals if needed and return the number.

     Example:
             const users = [{
               name: 'Brendan Eich',
               age: 56,
             }, {
               name: 'Linus Torvalds',
               age: 48,
             }, {
               name: 'Margaret Hamilton',
               age: 81,
             }];
             computeUserAverageAge(users); // returns 62 (This number is rounded up from 61.6666)
*/

function computeUserAverageAge(users) {
  let average = 0;
  for (let i=0;i<=users.length-1;i++) {
    console.log(i,users[i], users[i].age);
    average = average + users[i].age
  };
  average = Math.ceil(average / users.length);
  return average;
};

module.exports = {
 helloWorld,
 lambdaSchool,
 longestString,
 computeUserAverageAge
};
