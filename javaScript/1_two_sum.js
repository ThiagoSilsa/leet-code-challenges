const nums = [2, 7, 11, 15];

const target = 9;

/*
    TwoSum
    Pass for each item in num
    for each item, calculate de value to sum to achieve target number
    if a key with the value exist, print the actual index and the value od the key
    else:
    Save value and index of item in dict

 */

// Init disct

var twoSum = function (nums, target) {
  let saveNums = {};
  for (let i = 0; i < nums.length; i++) {
    if (saveNums[nums[i]] != undefined) {
      return [saveNums[nums[i]], i];
    } else {
      let sumValue = target - nums[i];
      saveNums[sumValue] = i;
    }
  }
};

console.log(twoSum(nums, target));
