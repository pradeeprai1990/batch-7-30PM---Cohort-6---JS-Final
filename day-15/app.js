// console.log("welcome"); //Welcome

// setTimeout(()=>{
//     console.log("Ws"); //Ws
// },1000)

// console.log("IIP Academy"); //IIP Aacdemy

let loginPromise = false;

let myPromise = new Promise((success, reject) => {
  if (loginPromise) {
    success({
      _status: true,
      _message: "Login Done",
      _data: {
        name: "IIP Academy",
        course: "Full Stack Web Development",
      },
    });
  } else {
    reject({
      _status: false,
      _message: "Login Error",
    });
  }
});

let getMyData = async () => {
  try {
    let promiseRes = await myPromise;
    console.log(promiseRes._status);
    console.log(promiseRes._message);
  } catch (error) {
    console.log(error);
  }
};

getMyData();

// myPromise
// .then( (promiseRes)=>{ //Then is used to handle the success response of the promise
//     console.log(promiseRes._message); //success()
//     console.log(promiseRes._data); //success()

// } )
// .catch((error)=>{ //Catch is used to handle the error response of the promise
//      console.log(error._status);
//     console.log(error._message); //reject(  )

// })

//Promise Handling --> then and catch ,   async and await
