let ans=[{}];
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }
 async function dev1(value){
    var id = null;

    var div1=document.getElementById("div1");
    var pos = 20;
    id = setInterval(frame, 10);
    div1.style.position= "absolute";
    function frame() {
        if (pos == 450) {
          clearInterval(id);
        } else {
          pos++; 
          
          div1.style.right = pos + '%'; 
        }
      }
     await sleep(1000)
    div1.style.display="none";
    if(value==="Enter"){
        var div2=document.getElementById("div3");
        div2.style.display="block";
        
    }else if(value==="SB"){
        var div2=document.getElementById("div2");
        div2.style.display="block";
        
    }else if(value==="Rid"){
        var div2=document.getElementById("div7");
        div2.style.display="block";

    }
    ans[0].ans1=value;
    console.log(ans)
}
async function dev2(value){
    var id = null;

    var div1=document.getElementById("div2");
    var div2=document.getElementById("div3");
var pos = 20;
id = setInterval(frame, 10);
div1.style.position= "absolute";
function frame() {
    if (pos == 450) {
      clearInterval(id);
    } else {
      pos++; 
      
      div1.style.right = pos + '%'; 
    }
  }
 await sleep(1000)

div1.style.display="none";
div2.style.display="block";
ans[0].ans2=value;
console.log(ans)
}
async function dev3(value){
    var id = null;

var div1=document.getElementById("div3");
var pos = 20;
    id = setInterval(frame, 10);
    div1.style.position= "absolute";
    function frame() {
        if (pos == 450) {
          clearInterval(id);
        } else {
          pos++; 
          
          div1.style.right = pos + '%'; 
        }
      }
     await sleep(1000)
div1.style.display="none";
if(ans[0].ans1==="Enter"){
    var div2=document.getElementById("div6");
    div2.style.display="block";

}else{

    var div2=document.getElementById("div4");
    div2.style.display="block";
}
ans[0].ans3=value
console.log(ans)
}
async function dev4(value){
    var id = null;

var div1=document.getElementById("div4");
var div2=document.getElementById("div5");
var pos = 20;
    id = setInterval(frame, 10);
    div1.style.position= "absolute";
    function frame() {
        if (pos == 450) {
          clearInterval(id);
        } else {
          pos++; 
          
          div1.style.right = pos + '%'; 
        }
      }
     await sleep(1000)
div1.style.display="none";
div2.style.display="block";
ans[0].ans4=value

console.log(ans)
}
async function dev5(value){
    var id = null;

var div1=document.getElementById("div5");
var div2=document.getElementById("div6");
var pos = 20;
    id = setInterval(frame, 10);
    div1.style.position= "absolute";
    function frame() {
        if (pos == 450) {
          clearInterval(id);
        } else {
          pos++; 
          
          div1.style.right = pos + '%'; 
        }
      }
     await sleep(1000)
div1.style.display="none";
div2.style.display="block";
ans[0].ans5=value

console.log(ans)
}

async function dev6(value){
    var id = null;

var div1=document.getElementById("div6");
var pos = 20;
    id = setInterval(frame, 10);
    div1.style.position= "absolute";
    function frame() {
        if (pos == 450) {
          clearInterval(id);
        } else {
          pos++; 
          
          div1.style.right = pos + '%'; 
        }
      }
      await sleep(1000)
      div1.style.display="none";
if(ans[0].ans1==="Enter"){
    var div2=document.getElementById("div7");
    div2.style.display="block";

}else{

if(ans[0].ans4==="Yes"){

    var div2=document.getElementById("div7");
     div2.style.display="block";
    }else{
        
        var div2=document.getElementById("div9");
        div2.style.display="block";
}}
ans[0].ans6=value
console.log(ans)
}
async function dev8(value){
    var id = null;

    var div1=document.getElementById("div8");
    var div2=document.getElementById("div9");
    var pos = 20;
    id = setInterval(frame, 10);
    div1.style.position= "absolute";
    function frame() {
        if (pos == 450) {
          clearInterval(id);
        } else {
          pos++; 
          
          div1.style.right = pos + '%'; 
        }
      }
     await sleep(1000)
     div1.style.display="none";
    div2.style.display="block";
    ans[0].ans8=value
    console.log(ans)
}

async function dev7(value){
    var id = null;

var div1=document.getElementById("div7");
var pos = 20;
    id = setInterval(frame, 10);
    div1.style.position= "absolute";
    function frame() {
        if (pos == 450) {
          clearInterval(id);
        } else {
          pos++; 
          
          div1.style.right = pos + '%'; 
        }
      }
     await sleep(1000)
    div1.style.display="none";
if(ans[0].ans1==="Enter"){
    var div2=document.getElementById("div8");
    div2.style.display="block";

}else if(ans[0].ans1==="Rid"){
    

}else{

    var div2=document.getElementById("div9");
    div2.style.display="block";
}
ans[0].ans7=value
console.log(ans)
}
async function dev9(value){
    
    var id = null;

var div1=document.getElementById("div9");
var pos = 20;
id = setInterval(frame, 10);
div1.style.position= "absolute";
function frame() {
    if (pos == 450) {
      clearInterval(id);
    } else {
      pos++; 
      
      div1.style.right = pos + '%'; 
    }
  }
 await sleep(1000)
div1.style.display="none";

if(ans[0].ans1==="Enter"){
    var div2=document.getElementById("div10");
    

}else{


    var div2=document.getElementById("ANS");    
    if(ans[0].ans2==="0:15 orders"){
        
        div2.innerHTML=div2.innerHTML+"  <img src='Flock.png' class='faq-4ysJCk' alt='Flock image' width='304' > "
    }else{
        
        div2.innerHTML=div2.innerHTML+"  <img src='Fleet.png' class='faq-4ysJCk' alt='Fleet image' width='304' > "
        
    }}
    div2.style.display="block";
ans[0].ans9=value
console.log(ans)
}
async function dev10(value){
    var id = null;

    var div1=document.getElementById("div10");
    var pos = 20;
    id = setInterval(frame, 10);
    div1.style.position= "absolute";
    function frame() {
        if (pos == 450) {
            clearInterval(id);
        } else {
            pos++; 
            
            div1.style.right = pos + '%'; 
        }
    }
    await sleep(1000)
    div1.style.display="none";
    var div2=document.getElementById("ANS");    

    div2.innerHTML=div2.innerHTML+"  <img src='Hive.png' class='faq-4ysJCk' alt='Hive image' width='304' > "
    div2.style.display="block";
    ans[0].ans10=value
}

 async function dev1tab(value){
    var id = null;

    var div1=document.getElementById("div1tab");
    var pos = 20;
    id = setInterval(frame, 10);
    div1.style.position= "absolute";
    function frame() {
        if (pos == 450) {
          clearInterval(id);
        } else {
          pos++; 
          
          div1.style.right = pos + '%'; 
        }
      }
     await sleep(1000)
    div1.style.display="none";
    if(value==="Enter"){
        var div2=document.getElementById("div3tab");
        div2.style.display="block";
        
    }else if(value==="SB"){
        var div2=document.getElementById("div2tab");
        div2.style.display="block";
        
    }else if(value==="Rid"){
        var div2=document.getElementById("div7tab");
        div2.style.display="block";

    }
    ans[0].ans1=value;
    console.log(ans)
}
async function dev2tab(value){
    var id = null;

    var div1=document.getElementById("div2tab");
    var div2=document.getElementById("div3tab");
var pos = 20;
id = setInterval(frame, 10);
div1.style.position= "absolute";
function frame() {
    if (pos == 450) {
      clearInterval(id);
    } else {
      pos++; 
      
      div1.style.right = pos + '%'; 
    }
  }
 await sleep(1000)

div1.style.display="none";
div2.style.display="block";
ans[0].ans2=value;
console.log(ans)
}
async function dev3tab(value){
    var id = null;

var div1=document.getElementById("div3tab");
var pos = 20;
    id = setInterval(frame, 10);
    div1.style.position= "absolute";
    function frame() {
        if (pos == 450) {
          clearInterval(id);
        } else {
          pos++; 
          
          div1.style.right = pos + '%'; 
        }
      }
     await sleep(1000)
div1.style.display="none";
if(ans[0].ans1==="Enter"){
    var div2=document.getElementById("div6tab");
    div2.style.display="block";

}else{

    var div2=document.getElementById("div4tab");
    div2.style.display="block";
}
ans[0].ans3=value
console.log(ans)
}
async function dev4tab(value){
    var id = null;

var div1=document.getElementById("div4tab");
var div2=document.getElementById("div5tab");
var pos = 20;
    id = setInterval(frame, 10);
    div1.style.position= "absolute";
    function frame() {
        if (pos == 450) {
          clearInterval(id);
        } else {
          pos++; 
          
          div1.style.right = pos + '%'; 
        }
      }
     await sleep(1000)
div1.style.display="none";
div2.style.display="block";
ans[0].ans4=value

console.log(ans)
}
async function dev5tab(value){
    var id = null;

var div1=document.getElementById("div5tab");
var div2=document.getElementById("div6tab");
var pos = 20;
    id = setInterval(frame, 10);
    div1.style.position= "absolute";
    function frame() {
        if (pos == 450) {
          clearInterval(id);
        } else {
          pos++; 
          
          div1.style.right = pos + '%'; 
        }
      }
     await sleep(1000)
div1.style.display="none";
div2.style.display="block";
ans[0].ans5=value

console.log(ans)
}

async function dev6tab(value){
    var id = null;

var div1=document.getElementById("div6tab");
var pos = 20;
    id = setInterval(frame, 10);
    div1.style.position= "absolute";
    function frame() {
        if (pos == 450) {
          clearInterval(id);
        } else {
          pos++; 
          
          div1.style.right = pos + '%'; 
        }
      }
      await sleep(1000)
      div1.style.display="none";
if(ans[0].ans1==="Enter"){
    var div2=document.getElementById("div7tab");
    div2.style.display="block";

}else{

if(ans[0].ans4==="Yes"){

    var div2=document.getElementById("div7tab");
     div2.style.display="block";
    }else{
        
        var div2=document.getElementById("div9tab");
        div2.style.display="block";
}}
ans[0].ans6=value
console.log(ans)
}
async function dev8tab(value){
    var id = null;

    var div1=document.getElementById("div8tab");
    var div2=document.getElementById("div9tab");
    var pos = 20;
    id = setInterval(frame, 10);
    div1.style.position= "absolute";
    function frame() {
        if (pos == 450) {
          clearInterval(id);
        } else {
          pos++; 
          
          div1.style.right = pos + '%'; 
        }
      }
     await sleep(1000)
     div1.style.display="none";
    div2.style.display="block";
    ans[0].ans8=value
    console.log(ans)
}

async function dev7tab(value){
    var id = null;

var div1=document.getElementById("div7tab");
var pos = 20;
    id = setInterval(frame, 10);
    div1.style.position= "absolute";
    function frame() {
        if (pos == 450) {
          clearInterval(id);
        } else {
          pos++; 
          
          div1.style.right = pos + '%'; 
        }
      }
     await sleep(1000)
    div1.style.display="none";
if(ans[0].ans1==="Enter"){
    var div2=document.getElementById("div8tab");
    div2.style.display="block";

}else if(ans[0].ans1==="Rid"){
    

}else{

    var div2=document.getElementById("div9tab");
    div2.style.display="block";
}
ans[0].ans7=value
console.log(ans)
}
async function dev9tab(value){
    
    var id = null;

var div1=document.getElementById("div9tab");
var pos = 20;
id = setInterval(frame, 10);
div1.style.position= "absolute";
function frame() {
    if (pos == 450) {
      clearInterval(id);
    } else {
      pos++; 
      
      div1.style.right = pos + '%'; 
    }
  }
 await sleep(1000)
div1.style.display="none";

if(ans[0].ans1==="Enter"){
    var div2=document.getElementById("div10tab");
    

}else{


    var div2=document.getElementById("ANStab");    
    if(ans[0].ans2==="0:15 orders"){
        
        div2.innerHTML="<img class='faq-oGTKYK' src='Flock.png' class='img-rounded' alt='Flock image'  > "
    }else{
        
        div2.innerHTML="<img class='faq-oGTKYK' src='Fleet.png' class='img-rounded' alt='Fleet image'  > "
        
    }}
    div2.style.display="block";
ans[0].ans9=value
console.log(ans)
}
async function dev10tab(value){
    var id = null;

    var div1=document.getElementById("div10tab");
    var pos = 20;
    id = setInterval(frame, 10);
    div1.style.position= "absolute";
    function frame() {
        if (pos == 450) {
            clearInterval(id);
        } else {
            pos++; 
            
            div1.style.right = pos + '%'; 
        }
    }
    await sleep(1000)
    div1.style.display="none";
    var div2=document.getElementById("ANStab");    

    div2.innerHTML=" <img class='faq-oGTKYK' src='Hive.png' class='img-rounded' alt='Hive image'  > "
    div2.style.display="block";
    ans[0].ans10=value
}

 async function dev1mob(value){
    var id = null;

    var div1=document.getElementById("div1mob");
    var pos = 20;
    id = setInterval(frame, 10);
    div1.style.position= "absolute";
    function frame() {
        if (pos == 450) {
          clearInterval(id);
        } else {
          pos++; 
          
          div1.style.right = pos + '%'; 
        }
      }
     await sleep(1000)
    div1.style.display="none";
    if(value==="Enter"){
        var div2=document.getElementById("div3mob");
        div2.style.display="block";
        
    }else if(value==="SB"){
        var div2=document.getElementById("div2mob");
        div2.style.display="block";
        
    }else if(value==="Rid"){
        var div2=document.getElementById("div7mob");
        div2.style.display="block";

    }
    ans[0].ans1=value;
    console.log(ans)
}
async function dev2mob(value){
    var id = null;

    var div1=document.getElementById("div2mob");
    var div2=document.getElementById("div3mob");
var pos = 20;
id = setInterval(frame, 10);
div1.style.position= "absolute";
function frame() {
    if (pos == 450) {
      clearInterval(id);
    } else {
      pos++; 
      
      div1.style.right = pos + '%'; 
    }
  }
 await sleep(1000)

div1.style.display="none";
div2.style.display="block";
ans[0].ans2=value;
console.log(ans)
}
async function dev3mob(value){
    var id = null;

var div1=document.getElementById("div3mob");
var pos = 20;
    id = setInterval(frame, 10);
    div1.style.position= "absolute";
    function frame() {
        if (pos == 450) {
          clearInterval(id);
        } else {
          pos++; 
          
          div1.style.right = pos + '%'; 
        }
      }
     await sleep(1000)
div1.style.display="none";
if(ans[0].ans1==="Enter"){
    var div2=document.getElementById("div6mob");
    div2.style.display="block";

}else{

    var div2=document.getElementById("div4mob");
    div2.style.display="block";
}
ans[0].ans3=value
console.log(ans)
}
async function dev4mob(value){
    var id = null;

var div1=document.getElementById("div4mob");
var div2=document.getElementById("div5mob");
var pos = 20;
    id = setInterval(frame, 10);
    div1.style.position= "absolute";
    function frame() {
        if (pos == 450) {
          clearInterval(id);
        } else {
          pos++; 
          
          div1.style.right = pos + '%'; 
        }
      }
     await sleep(1000)
div1.style.display="none";
div2.style.display="block";
ans[0].ans4=value

console.log(ans)
}
async function dev5mob(value){
    var id = null;

var div1=document.getElementById("div5mob");
var div2=document.getElementById("div6mob");
var pos = 20;
    id = setInterval(frame, 10);
    div1.style.position= "absolute";
    function frame() {
        if (pos == 450) {
          clearInterval(id);
        } else {
          pos++; 
          
          div1.style.right = pos + '%'; 
        }
      }
     await sleep(1000)
div1.style.display="none";
div2.style.display="block";
ans[0].ans5=value

console.log(ans)
}

async function dev6mob(value){
    var id = null;

var div1=document.getElementById("div6mob");
var pos = 20;
    id = setInterval(frame, 10);
    div1.style.position= "absolute";
    function frame() {
        if (pos == 450) {
          clearInterval(id);
        } else {
          pos++; 
          
          div1.style.right = pos + '%'; 
        }
      }
      await sleep(1000)
      div1.style.display="none";
if(ans[0].ans1==="Enter"){
    var div2=document.getElementById("div7mob");
    div2.style.display="block";

}else{

if(ans[0].ans4==="Yes"){

    var div2=document.getElementById("div7mob");
     div2.style.display="block";
    }else{
        
        var div2=document.getElementById("div9mob");
        div2.style.display="block";
}}
ans[0].ans6=value
console.log(ans)
}
async function dev8mob(value){
    var id = null;

    var div1=document.getElementById("div8mob");
    var div2=document.getElementById("div9mob");
    var pos = 20;
    id = setInterval(frame, 10);
    div1.style.position= "absolute";
    function frame() {
        if (pos == 450) {
          clearInterval(id);
        } else {
          pos++; 
          
          div1.style.right = pos + '%'; 
        }
      }
     await sleep(1000)
     div1.style.display="none";
    div2.style.display="block";
    ans[0].ans8=value
    console.log(ans)
}

async function dev7mob(value){
    var id = null;

var div1=document.getElementById("div7mob");
var pos = 20;
    id = setInterval(frame, 10);
    div1.style.position= "absolute";
    function frame() {
        if (pos == 450) {
          clearInterval(id);
        } else {
          pos++; 
          
          div1.style.right = pos + '%'; 
        }
      }
     await sleep(1000)
    div1.style.display="none";
if(ans[0].ans1==="Enter"){
    var div2=document.getElementById("div8mob");
    div2.style.display="block";

}else if(ans[0].ans1==="Rid"){
    

}else{

    var div2=document.getElementById("div9mob");
    div2.style.display="block";
}
ans[0].ans7=value
console.log(ans)
}
async function dev9mob(value){
    
    var id = null;

var div1=document.getElementById("div9mob");
var pos = 20;
id = setInterval(frame, 10);
div1.style.position= "absolute";
function frame() {
    if (pos == 450) {
      clearInterval(id);
    } else {
      pos++; 
      
      div1.style.right = pos + '%'; 
    }
  }
 await sleep(1000)
div1.style.display="none";

if(ans[0].ans1==="Enter"){
    var div2=document.getElementById("div10mob");
    

}else{


    var div2=document.getElementById("ANSmob");    
    if(ans[0].ans2==="0:15 orders"){
        
        div2.innerHTML="<img class='faq-vi8f13' src='Flock.png' class='img-rounded' alt='Flock image'  > "
    }else{
        
        div2.innerHTML="<img class='faq-vi8f13' src='Fleet.png' class='img-rounded' alt='Fleet image'  > "
        
    }}
    div2.style.display="block";
ans[0].ans9=value
console.log(ans)
}
async function dev10mob(value){
    var id = null;

    var div1=document.getElementById("div10mob");
    var pos = 20;
    id = setInterval(frame, 10);
    div1.style.position= "absolute";
    function frame() {
        if (pos == 450) {
            clearInterval(id);
        } else {
            pos++; 
            
            div1.style.right = pos + '%'; 
        }
    }
    await sleep(1000)
    div1.style.display="none";
    var div2=document.getElementById("ANSmob");    

    div2.innerHTML=" <img class='faq-vi8f13' src='Hive.png' class='img-rounded' alt='Hive image'  > "
    div2.style.display="block";
    ans[0].ans10=value
}

//Navigation Handlers
function navigateToAbout () {
  window.location.href='../About/about.html'
}