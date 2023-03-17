//your JS code here. If required.
function manipulateArray(arr) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(arr);
    }, 3000);
  })
    .then((arr) => {
      const filteredArray = arr.filter((num) => num % 2 === 0);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(filteredArray);
        }, 1000);
      });
    })
    .then((filteredArray) => {
      const multipliedArray = filteredArray.map((num) => num * 2);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(multipliedArray);
        }, 2000);
      });
    })
    .then((finalArray) => {
      const outputDiv = document.getElementById("output");
      outputDiv.textContent = finalArray.join(", ");
    });
}

const inputArray = [1, 2, 3, 4];
manipulateArray(inputArray);