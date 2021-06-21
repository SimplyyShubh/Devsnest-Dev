let myColor = ["Red","Green","White","Black"];

let str="";
myColor.forEach(color => {
    str = str.concat(color,",");
})

console.log(str);