var add = function add(a, b){
    return a + b;
}

var sub = function sub (a, b){
    return a - b;
}

//Callback function
var makeacall = function (a, b, add, sub){
    if(a>b)
        return sub(a,b);
    else{
        return add(a,b);
    }
}

var r = makeacall(5,3,add,sub); //8
console.log(r);


var print = function(){
    console.log("Hello");
}

setInterval(print, 1000);

setInterval(() => {
    console.log("Hello-2");
}, 2000);
