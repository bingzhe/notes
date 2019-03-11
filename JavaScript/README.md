# JavaScript

### 数组去重

1. ES6 Set 

``` js
function unique(arr){
    return Array.from(new Set(arr));
}

function unique(arr) {
    return [...new Set(arr)];
}
```

2. splice
``` js
function unique(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}
```

3. indexOf, includes, 
``` js
function unique(arr) {
    var array = [];
    arr.forEach((item, index) => {
        //  includes 条件 !array.includes(arr[i])
        if (array.indexOf(item) === -1) {
            array.push(item);
        }
    });
    return array;
}
```

1. reduce

``` js
const hash = {};
newArr = arr.reduce((preVal, curVal)=>{
    hash[curVal.id] ? "" : hash[curVal.id] = true && preVal.push(curVal);
    return preVal;
}, []);
```