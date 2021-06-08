// 删除元素 O1
const arr = [1,2,2,3,4,5]

const target = 2

let size = arr.length;

// for(let i = 0;i<size;i++){
//     if(target===arr[i]){
//         for(let y = i+1;y<size;y++){
//             arr[y-1] = arr[y]
//         }
//         i--
//         size--
//     }
// }

// console.log(arr)
let slow = 0
for(let fast = 0;fast<size;fast++){
    if(target!==arr[fast]){
        arr[slow] = arr[fast]
        slow++
    }
}
console.log(arr,slow)