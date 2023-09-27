
 const  getcolor = () =>{
    const randomNumber = Math.floor(Math.random() * 16777215);
   const randomcode="#" + randomNumber.toString(16);
 document.body.style.backgroundColor=randomcode;
 document.getElementById('colour-code').innerText=randomcode;
 navigator.clipboard.writeText(randomcode);

}

// event call
document.getElementById("btn").addEventListener(

    "click",
    getcolor
)
// inital call;
getcolor();

