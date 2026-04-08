
// let addData=()=>console.log("Welcome")


// let powerData=(value,power)=> value**power


// let outPut= powerData(10,3)

// console.log(outPut);



// let login=(username,passwprd)=>{
//               return  "login done"
//            }
// console.log(login());



//CallBack Function 
//Map()
//Filter()
//Reduce()
//forEach()


// let obj={
//     uname:"Pradeep",
//     uname:"Pradeep Ws",
//     uemail:"pradeep@wscubetech.com",
//     phone:[ 888888888, 9999999999, 7777777777, 6666666666],
//     courseName:["Python","Django","JavaScript","ReactJS"],
// }

// obj['courseDuration']="6 Month"

// console.log(obj);


// delete obj['phone']

// console.log(obj);



// console.log(obj.uname);
// console.log(obj.uemail);
// console.log(obj.phone);
// console.log(obj.courseName);

// obj.uname="Pradeep Rai"
// obj['uemail']="pradeep.rai@wscubetech.com"




// console.log(obj['uname']);
// console.log(obj['uemail']);



// let obj={
//     a:1,
//     b:1,
//     c:1,
//     d:5
// }


// obj['a']=obj['a']+1



// obj['d']=(obj['d'] ?? 0)+1

// console.log(obj);

// let obj={}
// let w="welcome to ws welcome wscubetech welcome" 
// for(let v of w){
//     if(v!==" "){
//          obj[v]=  (obj[v] ?? 0) +1
//     } 
// }

// //obj['w'] = 0+1 = 1 { w:1 }
// console.log(obj);

// //obj['e'] = 0+1 = 1 { w:1 ,e:1}


// let obj={
//     name:"pradeep",
//     email:"ws@gmail.com",
//     login:function(){ //Normol Function
//         console.log(this.name);
//         console.log(this.email);
//         // let userObj={
//         //     userName:"Demo",
//         //     userPassword:"12345"
//         // }
//         // return userObj
//     }
// }
 


// obj.login();
// obj.login();

// console.log(obj.name);

// console.log(obj.keys);
// console.log(obj);
let user=[ //Array of Object
    {
        name:"Pradeep",
        email:"pradeep@wscubtech.com"
    },
    {
        name:"Price",
        email:"ravi@gmail.com"
    },
    {
        name:"Ravi",
        email:"ravi@gmail.com"
    }
]

//Map()
//Filter()
//Find()
//Foreach()

for(let obj of user){
    console.log(obj.name);
    console.log(obj.email);
    
}