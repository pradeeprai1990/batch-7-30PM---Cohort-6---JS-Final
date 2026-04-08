// // let count = 0;

// // function displayName() {
// //   count++;
// //   console.log(count);
// // }

// // // displayName()
// // // displayName()

// // // displayName()

// // //  displayName()

// // // displayName()

// // // function addData(){
// // //     console.log(10+20);

// // // }

// // // addData() //30
// // // addData() //30
// // // addData() //30

// // //Call
// // // Number( "10" ) //String Number -< Number Data

// // function addData(n, m) {
// //   console.log(n + m);
// // }

// // function minData(n, m) {
// //   console.log(n - m); //77-25
// // }

// // function mulData(value1, value2) {
// //   console.log(value1 * value2);
// // }

// // mulData(12, 99);

// // addData(25, 99);

// // addData(99, 77);

// // minData(88, 77);

// // function checkEvenOdd(num) {
// //   if (num % 2 == 0) {
// //     console.log("Even Number");
// //   } else {
// //     console.log("Odd Number");
// //   }
// // }

// // checkEvenOdd(25);

// // checkEvenOdd(88);

// // function simpleCal(value1, value2, opr) {
// //   //  25   -  30
// //   console.log(eval(`${value1}${opr}${value2}`));
// // //   eval('10+20*30')

// // //   `25+99``25-99``25*99``25/99`;

// //   // if(opr=="+"){
// //   //     console.log(value1+value2);

// //   // }
// //   // if(opr=="-"){
// //   //     console.log(value1-value2);

// //   // }
// //   //  if(opr=="*"){
// //   //     console.log(value1*value2);

// //   // }
// //   //  if(opr=="/"){
// //   //     console.log(value1/value2);

// //   // }
// // }

// // simpleCal(25, 99, "+"); //25+99

// // simpleCal(25, 39, "-"); //25-39

// // simpleCal(25, 39, "*"); //25*99

// // simpleCal(25, 39, "/"); //25/39

// // simpleCal(10, 3, "**"); 

// //  console.log(eval('10+25*99*hello'));


// // let n=Number("10") //Number ka 10

// // console.log(n);


// // function arrayOfSum( array ){
// //     let sum=0
// //     for(let v of array){
      
// //         sum=sum+v
        
// //     }
// //    return sum  
// // }


// // let nestedArray=[
// //     [25,66,77,66,99,88],
// //     [55,66,99,99,55],
// //     [55,66,99,99,55,12,25,99],
// //     [10,20,99,77,88,77],
// //     [10,20,99,77,88,77],
// // ]

// // for(let array of nestedArray){
// //     let outPut= arrayOfSum(array);
// //     console.log(array,outPut);
    
    
// // }

// // let outPut= arrayOfSum( [10,20,99,77,88,77] )
// // console.log(outPut);



// //  let outPut2=arrayOfSum( [55,66,99,99,55] )
// // console.log(outPut2);


// //  let outPut3=arrayOfSum( [55,66,99,99,55,12,25,99] )
// //  console.log(outPut3);

// // function addData(n,m){
// //     return n+m
// // }

// // let n=addData(25,99)
// // console.log(n);

// // console.log(addData(25,99));
 
// function taxCal(productPrice,taxRate){
//     let tax=productPrice*taxRate/100

//     return tax
   
// }


// // let taxCalPrice= taxCal(25000,10)

// let productName=prompt("Enter The Product Name:-")

// let productprice=Number(prompt("Enter The Product price:-"))

// let taxRate=Number(prompt("Enter The Product price:-"))


// let taxCalPrice=taxCal(productprice,taxRate) //100000,10


// console.log("Product Name",productName);
// console.log("Product Main Price",productprice);
// console.log("Product Tax rate",taxRate);
// console.log("Product Tax Cal Price",taxCalPrice);

// console.log("Product Final Total Price",productprice+taxCalPrice);


// Number("25") //25 Ko Convert in Number Return 



// function mulData(num1=1,num2=1,num3){
 
//      return num1*num2
    
// }


// console.log(mulData()); //1*1 = 1
 
// console.log(mulData(25,10)); 

// console.log(mulData(30)); 


let l=[10,20,30,99,77,88,15,25]

let [n,m,...rest]=l

console.log(n,m); //10,20
console.log(rest); //[30,99,77,88,15,25]



function sumData(...allValue){
    console.log(allValue); //Array
    

}


sumData(10,30,99,88,77,15,23,12)

sumData(10,30,99)


sumData(10,30,99,88)

//Arrow,function