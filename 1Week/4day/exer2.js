function rev(arr) {
    var revArr = [];
    for (var i = arr.length - 1; i > 0; i--) {
        revArr.push(arr[i]);
    }
    return revArr;
}

console.log(rev([1, 2, -1, -90, 10]));
