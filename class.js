const sdfsd = new Set()
console.log(typeof sdfsd);

function getUserDetails (name , email){
    this.name = name
    this.email =email
}

const value = new getUserDetails("suman", "hello")
console.log({value});