let str = "raja akash";
let str1 ="kumar";
let str3= str.concat(' ', str1);
console.log(str3);
console.log(str1.length)
console.log(str1.toUpperCase())
console.log(str1.toLowerCase())
console.log(str1[1])
console.log(str1.slice(2,[str1.length -1]))
console.log(str.replace("raja","groot"))
console.log(str.startsWith("raja"));
console.log(str.startsWith("akash"));
console.log(str.endsWith("akash"));
let nam =" raja ";
let age="0";
console.log(`hello my name is ${nam.trim()} and my age is ${age}.`)
let str4 =str1.split("");
console.log(str4);
console.log(str4.join(""));

let num1 =9;
let num2 =6;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);
console.log(++num1);
console.log(--num1);
let num3 ="7";
let num4 =parseInt(num3);
console.log(num4);
let num5 ="3.2";
let num6=parseInt(num5);
let num7=parseFloat(num5);
console.log(num6);
console.log(num7);
num8=Math.round(num5);
num8=Math.floor (num5);
num8=Math.ceil  (num5);
console.log(num8);
let num9 = Math.random();
num10 = Math.ceil(num9)
console.log(num10);