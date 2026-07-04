//string  - 문자열

let message = "Hello, TypeScript!";
console.log(message);


let age: number = 30;
console.log(`나이: ${age}`);

let isStudent: boolean = false;
console.log (`학생인가요 > ${isStudent}`);

let carts: string[] = ["사과", "바나놔"];
console.log(`장바구니 : ${carts[1]}`);
console.log(`장바구니 : ${carts.join(",")}`);

let carts2: Array<string> = ["딸기", "포도", "키위"];
console.log(`장바구니2: ${carts2}`);