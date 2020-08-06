const data = [10, 20, 30, 40];
let copy1 = data.slice(0);
let copy2 = data.slice(0);

copy1 = copy1.filter((num) => num <= 35);
copy2 = [...copy1];

console.log(copy2);

copy1 = copy1.filter((num) => num <= 25);
copy2 = [...copy1];
console.log(copy2);
