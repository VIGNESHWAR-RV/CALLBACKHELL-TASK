let div = document.createElement("div");
div.innerHTML = (`<div id="area"><img id="sheela" src="https://th.bing.com/th/id/R.17ad6d0d8150ed46a6bb8ca00d6a3ecd?rik=WEeL%2f5v40m6P1Q&riu=http%3a%2f%2fcliparts.co%2fcliparts%2f8Tz%2f8xz%2f8Tz8xzEgc.jpg&ehk=7i6luRVSSDVJ42rGWQR9wDeD6S33af7ugoFr7tkQBDE%3d&risl=&pid=ImgRaw&r=0" hidden></img><h1 id="head"></h1></div>`);
document.body.appendChild(div);

let timer10=()=>{
    let timer9=()=>{
        let timer8=()=>{
            let timer7=()=>{
                let timer6=()=>{
                    let timer5=()=>{
                        let timer4=()=>{
                            let timer3=()=>{
                                let timer2=()=>{
                                    let timer1=()=>{
                                        let timer=()=>{
                                            setTimeout(()=>{
                                                document.getElementById("sheela").hidden = false;
                                                document.getElementById("head").innerText ="Happy Independence day Everyone!!!";
                                                setTimeout(()=>{
                                                let btn = document.createElement("button");
                                                btn.setAttribute("onclick","timer10()");
                                                btn.setAttribute("id","watchAgain");
                                                btn.innerHTML="click anywhere to count again"
                                                document.getElementById("head").innerHTML+=`<hr>`;
                                                document.getElementById("head").append(btn);
                                                document.body.setAttribute("onclick","timer10()");
                                        },1800);
                                            },1000);
                                        }
                                        setTimeout(()=>{
                                            document.getElementById("head").innerText=1;
                                            timer();
                                        },1000); 
                                    }
                                   
                                    setTimeout(()=>{
                                        document.getElementById("head").innerText=2;
                                        timer1();
                                    },1000);
                                }
                               
                                setTimeout(()=>{
                                    document.getElementById("head").innerText=3;
                                    timer2();
                                },1000);
                            }
                            
                            setTimeout(()=>{
                                document.getElementById("head").innerText=4;
                                timer3();
                            },1000);
                        }
                
                        setTimeout(()=>{
                            document.getElementById("head").innerText=5;
                            timer4();
                        },1000);
                    }
                   
                    setTimeout(()=>{
                        document.getElementById("head").innerText=6;
                        timer5();
                    },1000);
                }
                setTimeout(()=>{
                    document.getElementById("head").innerText=7;
                    timer6();
                },1000);
            }
            setTimeout(()=>{
                document.getElementById("head").innerText=8;
                timer7();
            },1000);
        }
        setTimeout(()=>{
            document.getElementById("head").innerText=9;
            timer8();
        },1000);
    }
    document.getElementById("head").innerText=10;
    document.getElementById("sheela").hidden = true;
    document.body.removeAttribute("onclick","timer10()");
    setTimeout(()=>{
        timer9();
    },1000);
   
};
document.body.setAttribute("onload","timer10()");