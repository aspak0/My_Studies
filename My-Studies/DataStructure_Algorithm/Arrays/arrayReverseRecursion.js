const revese = (arr) => {
    let front  = 0;
    let back = arr.length -1;

    recurs = (arr, front, back) => {
        let swap;
        if(front <= back) {
            swap = arr[front];
            arr[front] = arr[back];
            arr[back] = swap;

            return recurs(arr, front +1, back -1);
        }else {
            return arr;
        }
    }
    return recurs(arr, front, back);
}
const arr = ["a", "b", "c", "d"];
console.log(revese(arr));