// Error handling 

console.log("Welcome to tutorial 50");
try{

console.log("try block executed");
console.log(x);

console.log("try block ends here");
}
catch(e){
    console.log("catch block executed");

    console.log("what the error : ", e);
   
}
finally{
    console.log("finally block executed");
    console.log("finally block ends here");
}