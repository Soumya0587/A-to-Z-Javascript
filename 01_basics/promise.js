const promiseOne = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("async function");
        resolve()
        console.log("want to test");
    },1000)
})

promiseOne.then(()=>{
    console.log("promise resolved");
})

 new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("async function 1");
        resolve()
        console.log("want to test 2");
    },1000)
}).then(()=>{
    console.log("promise resolved 2");
})

promiseOne.then(()=>{
    console.log("promise resolved");
})

 new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("async function 1");
        resolve({name : "soumya",email : "sou@gmail.com"})
        console.log("want to test 2");
    },1000)
}).then(({name,email})=>{
    console.log({name});
})