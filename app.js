let num1 = 2;
let num2 = 4;
console.log(num1-num2);
console.log(num1+num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);
console.log(++num1);
console.log(--num1);
console.log(num1===num2);
console.log(num1 >num2);
console.log(num1 >= num2);
console.log(num1 <num2);
console.log(num1 <= num2);

console.log(num1 ===num2 || num1 < num2);
console.log( !(num1 < num2 || num1 < num2));


let str1=" qwertyuiiuytrew"
let str2=" qwertyuiiuytrewqwertyuihgfdsa"
console.log(str1 < str2);

let b =40;
let l=2;
console.log("area of reactangle is",b*l);

let r=2;
let h=5;
console.log(Math.PI*r**2*h);

    if(r%2===0){
        console.log('even')
}else{
    console.log('odd')
}

console.log(r+l+h/3);

let p=22;
let r=2;
let n=3;
let t=2;
r=r/100;
let ci=p*[(1+(r/n))**(n*t) ]- p;
console.log(ci);


let r=5;
let vol=4/3*(Math.PI*(r**3));
console.log(vol);

let c =30;
let f=(9/5*c)+32;
console.log(f);

let d=30;
console.log(r+c+d/3);

let e = Math.sqrt(64);
console.log(e);

let circum = 2*Math.PI*(r);
console.log(circum);

console.log(1/2*(d*c));

console.log(d +=20);
console.log(d -=2);
console.log(d *=2);
console.log(d /=2);
let nam="two ";
let nam2="two";
console.log(nam.concat(nam2));

let num1 = 5;  
let num2 = 3;  
console.log(num1===5 && num2===3);
console.log(num1===5 || num2===13);
console.log(!(num1===5 && num2===3));
let num3=14;
if(num2<=num1 && num1<=num3){
    console.log("happy happy happy ")
}else{
    console.log("moye moye");
}
let result = num1 & num2;

console.log("Result of bitwise AND operation:", result); 

if(num1 % 1 === 0 && num1 % num1 === 0){
    console.log("prime number")
}else{console.log("not a p no.")}




// Define two strings to compare
let str1 = "dapple";
let str2 = "canana";

// Compare the strings using localeCompare() method
let comparisonResult = str1.localeCompare(str2);

// Determine the relationship between the strings based on the comparison result
if (comparisonResult < 0) {
    console.log(`${str1} comes before ${str2} in alphabetical order.`);
} else if (comparisonResult > 0) {
    console.log(`${str1} comes after ${str2} in alphabetical order.`);
} else {
    console.log(`${str1} and ${str2} are the same.`);
}


let year = 2024;
let leapYr= (year % 4 === 0)&&((year % 100 !== 0 )||(year % 400 === 0));
if(leapYr === true){
    console.log("leap year");
}else{console.log("not a leap yr")}

let password = "2ergfefbf";
if(password.length <=6 || password.length <=4 ){
    console.log("strength:Weak")
}else if(password.length <=6 || password.length <=10){
    console.log("strength:good")
}


