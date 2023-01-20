
const urlLocal="http://localhost:3000/furniture"

async function fetch(url) {

try {
   
    let res= await fetch("url")
    let data=await res.json()
    console.log(res);
console.log(data);
console.log("hello");

} catch (error) {
    return error
}


   

}

fetch(urlLocal)