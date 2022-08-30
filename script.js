// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
  // Write your code here
  let done = false,
      high_to_low,
      i,
      first_max,
      second_max;
      
  while (!done) {
    done = true;
    for (i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        done = false;
        high_to_low = array[i - 1];
        array[i - 1] = array[i];
        array[i] = high_to_low;
      }
    }
  }

  console.log(array);
  first_max = array.pop();
  second_max = array.pop();
  return second_max;
}
//Time complexiety :  O(log(n)*n);
//Space complexiety : O(1)
// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(input_string) {
  // Write your code here
  let count = {},
      checklist_0,
      alphabet,
      check_list;
  
  checklist_0 = input_string.replace(/[^a-zA-Z0-9]/g, '');

  check_list = checklist_0.split("");
  
    for (alphabet of check_list) {
      
          if (alphabet in count) {
            
            count[alphabet] += 1;
          } 
          else {
            
            count[alphabet] = 1;
          }
    }
  console.log(count);
  return count;
}
//Time complexiety :  O(n);
//Space complexiety :  O(1)
// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflattenObject) {
  let flatten_Object = {},
      key,
      j,
      temp;
      

    for (key in unflattenObject) {
      
          if (typeof unflattenObject[key] === "object" || Array.isArray(unflattenObject[key])) {
            
            temp = flatten(unflattenObject[key]);
            
            for (j in temp) {

                    flatten_Object[key + "." + j] = temp[j];
                }
          }   
          else {
            
            flatten_Object[key] = unflattenObject[key];
            
          }
  }
  return flatten_Object;
}
//Time complexiety :  #O(n*n);
//Space complexiety : O(n)
// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
 function unflatten(flatObject){
    let unflatten_Object = {},
     temp,
     substrings,
     property,
     i;
        for (key_property in flatObject) {

          substrings = key_property.split(".");
          temp = unflatten_Object;

              for (i = 0; i < substrings.length - 1; i++) {

                    if (!(substrings[i] in temp)) {

                      if (isFinite(substrings[i + 1])) {

                        temp[substrings[i]] = [];

                      } 
                      else {
                        
                        temp[substrings[i]] = {};
                      }
                    }
                temp = temp[substrings[i]];
              }
          temp[substrings[substrings.length - 1]] = flatObject[key_property];
        }
   return unflatten_Object;
  }
// Time complexiety  : O(n*n)
//Space complexiety : O(n)