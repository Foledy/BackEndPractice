function solution(nums){
    if (nums === null) {
        return [];
    }

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                ([nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]);
            }
        }
    }

    return nums;
}