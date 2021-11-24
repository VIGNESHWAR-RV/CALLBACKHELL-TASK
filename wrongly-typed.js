let div = document.createElement("div");
div.innerHTML = (`<div id="area"><img id="sheela" src="https://th.bing.com/th/id/R.17ad6d0d8150ed46a6bb8ca00d6a3ecd?rik=WEeL%2f5v40m6P1Q&riu=http%3a%2f%2fcliparts.co%2fcliparts%2f8Tz%2f8xz%2f8Tz8xzEgc.jpg&ehk=7i6luRVSSDVJ42rGWQR9wDeD6S33af7ugoFr7tkQBDE%3d&risl=&pid=ImgRaw&r=0" hidden></img><h1 id="head"></h1></div>`);
document.body.appendChild(div);

document.body.setAttribute("onload","timer10(10,timer9)");
let timer =()=>{
    document.getElementById("sheela").hidden = false;
    document.getElementById("head").innerText ="Happy Independence day Everyone!!!";
    setTimeout(()=>{
    let btn = document.createElement("button");
    btn.setAttribute("onclick","timer10(10,timer9)");
    btn.setAttribute("id","watchAgain");
    btn.innerHTML="click anywhere to count again"
    document.getElementById("head").innerHTML+=`<hr>`;
    document.getElementById("head").append(btn);
    document.body.setAttribute("onclick","timer10(10,timer9)");
    },1800);
}

let timer1 =(num,timer)=>{
    document.getElementById("head").innerText=num-9;
    setTimeout(()=>{
        timer();
    },1000);
   
}

let timer2 =(num,timer1)=>{
    document.getElementById("head").innerText=num-8;
    setTimeout(()=>{
        timer1(num,timer);
    },1000);
    
}

let timer3 =(num,timer2=timer2)=>{
    document.getElementById("head").innerText=num-7;
    setTimeout(()=>{
        timer2(num,timer1);
    },1000);
    
}

let timer4 =(num,timer3)=>{
    document.getElementById("head").innerText=num-6;
    setTimeout(()=>{
        timer3(num,timer2);
    },1000);
    
}

let timer5 =(num,timer4)=>{
    document.getElementById("head").innerText=num-5;
    setTimeout(()=>{
        timer4(num,timer3);
    },1000);
    
}

let timer6 =(num,timer5)=>{
    document.getElementById("head").innerText=num-4;
    setTimeout(()=>{
        timer5(num,timer4);
    },1000);
   
}

let timer7 =(num,timer6)=>{
    document.getElementById("head").innerText=num-3;
    setTimeout(()=>{
        timer6(num,timer5);
    },1000);
    
}

let timer8 =(num,timer7)=>{
    document.getElementById("head").innerText=num-2;
    setTimeout(()=>{
        timer7(num,timer6);
    },1000);
   
}

let timer9 =(num,timer8)=>{
    document.getElementById("head").innerText=num-1;
    setTimeout(()=>{
        timer8(num,timer7);
    },1000);
   
}

let timer10 =(num,timer9)=>{
    document.getElementById("head").innerText=10;
    document.getElementById("sheela").hidden = true;
    document.body.removeAttribute("onclick","timer10(10,timer9)");
    setTimeout(()=>{
        timer9(num,timer8);
    },1000);
   
}

