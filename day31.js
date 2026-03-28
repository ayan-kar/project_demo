// async function greet() {
//     // nani
//    // throw ("404");
//     return 'ayan'; // return a promise
// }

// greet()
// .then((result)=>{
//     console.log("result:",result)
// })
// .catch((result)=>{          
//     console.log("result:",result)
// })

// // * asyn an arrow function  

// var hello = async ()=>{
//         console.log('hello')
//         return 'hello1'
// }
// hello().
// then((result)=>{
//     console.log(result)
// })
// .catch((result)=>{
// console.log("not done",result)
// })

// $ remember to check gemini and chatgpts chat


// var helo= async () => {
//     return 5;
// }
// console.log(helo())


// function getNum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         let num1=Math.floor(Math.random()*10)+1;
//         console.log(num1);
//         resolve();
//     },1000)
//      })
// }

// // *option1
// // async function demo(){
// //    await getNum();
// //    await getNum();
// //     await getNum();
// // }

// // *option2
// getNum()
// .then(()=>{
//     return getNum()
// })
// .then(()=>{
//     return getNum()
// })
// .then(()=>{
//     return getNum()
// }).catch()


// $ color change via await

// var h1=document.querySelector('h1')

// function colorcahnge(color1){
//     return new Promise((resolve,reject)=>{
//         if(color1){
//         setTimeout(()=>{
//             h1.style.color=color1;
//             resolve(`color change to ${color1}`);
//         },1000)
//     }else 
//         reject("no color found")
//     })
// }

// async function  calling(params) { // *handling or catching rejections.
//     try {

//     let result1= await colorcahnge('red');
//     console.log(result1)
//     let result2=await colorcahnge('yellow');
//     console.log(result2)
//     let result3=await colorcahnge('green');
//     console.log(result3)
//     let result4 = await colorcahnge();
//    ///  console.log(result4)  //  *no need here

//     } catch (error) {
//        console.log(error) 
//     }
//    let a=5 
//    console.log(a)
// }
// calling()  

//  ~ new chapter : JSON and API

// let js='{"fact":"A cat can sprint at about thirty-one miles per hour.","length":52}'
// let obj=JSON.parse(js)
// console.log(obj)
// console.log(JSON.stringify(obj))

// let url1='https://catfact.ninja/fact'
// fetch(url1)
// .then((res)=>{
//     //console.log('this is ',res)
//      //console.log('this is ',res.json())
//     return res.json() //  ? how
// }).then((data)=>{
// console.log(data)
//  return fetch(url1)    
// }).then((res)=>{
//         return res.json()
// }).then((data)=>{
// console.log(data)
// })
// .catch((err)=>{
// console.log('error',err)
// })
// // $These are all asynchronous calls, so JavaScript won't wait for this call to resolve, rather it will. Print or do the other functions like printing this first synchronous functions
// console.log('nigga')


// let url='https://catfact.ninja/fact'
// let url2='https://catfact.ninja/facta'
// async function calling(params) {
//  try { 
//     let response1 = await fetch(url)
//     console.log(response1)
//     let data1=await response1.json() // *WHAT DOES IT ACTUALLY DO 
//     console.log(data1)
//     console.log(data1.fact)

//     let response2 = await fetch(url2)
//     let data2=await response2.json()
//     console.log(data2.fact)
//  }
//  catch(err){
//     console.log('problem',err)
//  }
// }
// calling();


// let url='https://catfact.ninja/fact'
// let dog_url='https://dog.ceo/api/breeds/image/random'
// var p=document.querySelector('p')
// var btn=document.querySelector('button')
// var img=document.querySelector('img')

// async function calling(params) {
//    try {let res=await axios.get(url);
//     console.log(res,",",res.data)
//         return res.data.fact
//    }catch(e){
//       console.log('Error',e)
//       return  'no found'
//    }}

// async function calling_dog(params) {
//    try {let res=await axios.get(dog_url);
//    return res.data.message
//    }catch(e){
//       console.log('Error',e)
//       return  'no found'
//    }
// }

// btn.addEventListener('click',async ()=>{
//   let fact =  await calling();
//   let src1 =  await calling_dog();
//   console.log(fact)
//     p.innerText=fact
//    //console.log(img)
//    img.src=`${src1}`
// })


// const jokes = 'https://icanhazdadjoke.com'
// var config = { headers: { Accept: "application/json" } }

// async function calling () { 
//    let result =await axios.get(jokes,config)
// console.log(result.data.joke
// )
// }
// calling();


// const uni="http://universities.hipolabs.com/search?name="
// //let country='india'
//  let input=document.querySelector('input')
//   let p=document.querySelector('#list')
//    let btn=document.querySelector('#cn')
   
// let ul=document.querySelector('ul')
// async function getcolleges() {
//    try {
//     let res=  await axios.get(uni+input.value)
//    return (res.data)
//    }
//    catch(err){
//       console.log('we have some problem',err)
//    }
// }

// btn.addEventListener('click',async ()=>{
//    ul.innerText=''
//    console.log(input.innerText)
//        res1= await getcolleges()

//       for(name1 of res1){
//          //console.log(name1.name)
//          var li=document.createElement('li')
//          li.innerText=name1.name
//          ul.appendChild(li)
//       }
// })


// *Only By location

let p=document.querySelector('#list')
let btn=document.querySelector('#cn')

// async function calling(params) {
//     try {
//     let uni="http://universities.hipolabs.com/search?country="+country.value+"&name="+state.value
//         let result= await axios.get(uni)
//         console.log(uni)
//         return (result.data)
        
//     } catch (error) {
//         console.log('error',error)
//     }  
// }
// btn.addEventListener('click',async()=>{
    
//     p.innerText=''
//     let names =  await calling();
//     console.log(names)
//     for (namei of names)
//     {
//         let li=document.createElement('li')
//         li.innerText=namei.name
//         p.appendChild(li)
//     }
// })

// //*By state 

async function calling(params) {
    try{
    let country=document.querySelector('#country')
        let uni="http://universities.hipolabs.com/search?country="+country.value
        let res= await axios.get(uni)
        return res.data
    }catch(err)
    {
        console.log('error',err)
    }
}

btn.addEventListener('click',async()=>{

let state=document.querySelector('#state')
    p.innerText=''
    let names =  await calling();
    //console.log(names)
    for (uni of names)
    {
        if (uni["state-province"]==state.value){  
        let li=document.createElement('li')
        li.innerText=uni.name
        p.appendChild(li)
        }
    }
})
