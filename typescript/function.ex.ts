// // 함수 정의
// // return이 있는 함수
// function sub(x: number, y: number){
//     return x - y
// }



// const result = sub(10,5);
// console.log("결과:", result);

 const sub = (x: number, y: number) : number => {
     return x - y
 }

const result = sub(10,11);
console.log("결과:", result);

//return이 없는 하수

// function greet(name : string) : void{
//     console.log(`HELLO, ${name}`);
// }

const greet = (name: string) : void => {
    console.log(`HELLO, ${name}`);
}

greet("TypeScript!");

//객체를 반환하는 함수

const createUser = (id:number, name:string) : {id: number; name: string}=>{
    return {id,name}
}


const user_kim = createUser(1,"김기용");
console.log(`사용자 ID: ${user_kim.id}, 이름 : ${user_kim.name}`); 