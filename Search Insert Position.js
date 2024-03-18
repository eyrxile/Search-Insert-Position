var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right){
        let mid = Math.floor((left + right) / 2);

        if(nums[mid] === target){
            return mid;
        } else if(nums[mid] < target){
            left = mid + 1;
        } else{
            right = mid - 1;
        }
    }

    return left;
};

//Example usage:
const nums1 = [1, 3, 5, 6];
const target1 = 5;
console.log(searchInsert(nums1, target1));

const nums2 = [1, 3, 5, 6];
const target2 = 2;
console.log(searchInsert(nums2, target2));

const nums3 = [1, 3, 5, 6];
const target3 = 7;
console.log(searchInsert(nums3, target3));