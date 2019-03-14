var arr2 = [{ a: 10 }, { a: 20 }, { a: 30 }, { a: 10 }, { a: 20 }, { a: 30 }];
var arr1 = [2, 3, 3, 4, 5, 2, 8, 9, 2];

function unique(arr) {
    var array = [];
    arr.forEach((item, index) => {
        if (array.indexOf(item) === -1) {
            array.push(item);
        }
    });
    return array;
}

let arr = unique(arr1)
console.log(arr);
