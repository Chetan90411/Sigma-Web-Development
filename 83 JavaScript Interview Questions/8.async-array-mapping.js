async function arrMap(arr) {
  let promiseArr = [];

  for (let i = 0; i < arr.length; i++) {
    promiseArr.push(
      await new Promise((resolve) => {
        setInterval(() => {
          resolve(arr[i] * 2);
        }, 500);
      })
    );

    console.log(promiseArr[i]);
  }
  return promiseArr;
}

let arr = [1, 2, 3];
arr = arrMap(arr);
