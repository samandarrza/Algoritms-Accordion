const arr1 = [3, 5, 6, 10, 11, 20];
const arr2 = [1, 2, 7, 8, 15, 19];

function marge(arr1, arr2,...rest) {
    const result = [...arr1, ...arr2,...rest.flat()]
    return result.sort((arr1, arr2)=> arr1 - arr2);
}
console.log(marge(arr1,arr2,[44,45,46],[6,8,40]));