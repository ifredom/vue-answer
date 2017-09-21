// title: two sun
// level-easy
const twoSum = function(nums, target) {
    let temp = []
    for(let i=0; i<nums.length-1; i++){
        for(let j=i+1; j<nums.length; j++){
            if(target-nums[i]==nums[j]){
                temp = [i,j]
                break
            }
        }

    }
    return temp

}
twoSum([3, 2, 3], 6)
twoSum([6, 4, 2, 3], 6)


const threeSum = function(nums) {
    let temp = []
    for(let i=0; i<nums.length-1; i++){
        for(let j=i+1; j<nums.length; j++){
            for(let m=j+1; m<nums.length; m++){
                if(nums[i]+nums[j]+nums[m]==0){
                    temp.push([nums[i], nums[j], nums[m]])
                    // break
                }
            }
        }

    }
    temp.map(function( item ){
        return item.sort().toString()
    })

    // console.log(temp[0].toString())
    // console.log(temp[2].toString())
    // console.log(temp[0].toString()==temp[2].toString())
    // console.log(temp[0]==temp[2])
    console.log(temp)


    return temp

}
threeSum([-1, 0, 1, 2, -1, -4])
