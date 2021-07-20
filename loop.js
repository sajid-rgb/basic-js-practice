var myArray = [1,2,3,4,6,7,8,45]
// console.log(myArray.length)
// console.log(myArray[2])
for(var i=0;i<myArray.length;i++){
    var element = myArray[i]
    if(element%2==0){
        var evenArray = element;
        console.log("Even Array",evenArray,'\n')
    }
}
//10,12,14,16
var mySecondArray = [10,11,12,13,14,15,16]
var newArray = [];
for(var i=0;i<mySecondArray.length;i++){
    var element = mySecondArray[i]
    if(element%2==0){
        newArray.push(element)
    }
}
console.log("after pushing New Array",newArray,'\n')
for(var i=0;i<mySecondArray.length;i++){
    var element = mySecondArray[i]
    if(element%2==0){
        newArray.pop(element)
    }
}
console.log("after pop New Array",newArray,'\n')


//use  push pop different arrays 