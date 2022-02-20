async function makeAPICall(url){
   try{
     let res = await fetch(url);
     let data =await res.json();
     return data;

   }catch(error){

    console.log("error",error)
   }
}

function appenddata(image,parent){

   image.forEach((element)=>{
   let image=document.createElement("img")
    image.src=element.urls.small
   let tit=document.createElement("p")
    tit.innerHTML=element.user.name
    let div=document.createElement("div")
let arr=[]
div.append(image,tit)
div.addEventListener("click",()=>{
 
   arr.push(element)
   localStorage.setItem("my_img",JSON.stringify(arr))

window.location.href="final.html"

})
parent.append(div)
   });

}

export {makeAPICall,appenddata};