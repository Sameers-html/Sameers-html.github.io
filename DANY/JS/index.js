let ans=[{}];
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }
 async function dev1(value){
    

    var div1=document.getElementById("div1");
    
    
    div1.style.position= "absolute";
    
     
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
    sessionStorage.setItem("reloading", "true");
}
async function dev2(value){
    

    var div1=document.getElementById("div2");
    var div2=document.getElementById("div3");


div1.style.position= "absolute";


div1.style.display="none";
div2.style.display="block";
ans[0].ans2=value;
console.log(ans)
}
async function dev3(value){
    

var div1=document.getElementById("div3");

    
    div1.style.position= "absolute";
    
     
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
    

var div1=document.getElementById("div4");
var div2=document.getElementById("div5");

    
    div1.style.position= "absolute";
    
     
div1.style.display="none";
div2.style.display="block";
ans[0].ans4=value

console.log(ans)
}
async function dev5(value){
    

var div1=document.getElementById("div5");
var div2=document.getElementById("div6");

    
    div1.style.position= "absolute";
    
     
div1.style.display="none";
div2.style.display="block";
ans[0].ans5=value

console.log(ans)
}

async function dev6(value){
    

var div1=document.getElementById("div6");

    
    div1.style.position= "absolute";
    
      
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
    

    var div1=document.getElementById("div8");
    var div2=document.getElementById("div9");
    
    
    div1.style.position= "absolute";
    
     
     div1.style.display="none";
    div2.style.display="block";
    ans[0].ans8=value
    console.log(ans)
}

async function dev7(value){
    

var div1=document.getElementById("div7");

    
    div1.style.position= "absolute";
    
     
    div1.style.display="none";
if(ans[0].ans1==="Enter"){
    var div2=document.getElementById("div8");
    div2.style.display="block";

}else if(ans[0].ans1==="Rid"){
    window.location.href="/aboutus#form"
    

}else{

    var div2=document.getElementById("div9");
    div2.style.display="block";
}
ans[0].ans7=value
console.log(ans)
}
async function dev9(value){
    
    

var div1=document.getElementById("div9");


div1.style.position= "absolute";

div1.style.display="none";

if(ans[0].ans1==="Enter"){
    var div2=document.getElementById("div10");
    div2.style.display="block";
    

}else{


    var div2=document.getElementById("ANS");    
    if(ans[0].ans2==="0:15 orders"){
        
        div2.innerHTML="<img src='img/Flock.png' class='faq-4ysJCk_flock' alt='Flock image' > "
        div2.innerHTML=div2.innerHTML+'<div id="is_a_powerful_management_repor"><span>an on demand delivery application that delivers products and packages from<br>small businesses owners, restaurants, supermarkets...etc. </span></div><br/> <a href="/solutions#flockdata"><button class="rectangle-12-EoA0TL">LEARN MORE</button></a><br/><br/>';
        div2.scrollIntoView({behavior:'smooth'},true)
    }else{
        
        div2.innerHTML="  <img src='img/fleet@1x.png' class='faq-4ysJCk' alt='Fleet image'  > "
        div2.innerHTML=div2.innerHTML+'<div id="is_a_powerful_management_repor"><span>is a powerful management, reporting and admin dashboard system<br>built as a mobile first web based platform. Meaning, it works just as great on<br>mobile devices and computers, to let you control your delivery system</span></div><br/> <a href="/solutions#fleetdata"><button class="rectangle-12-EoA0TL">LEARN MORE</button></a><br/><br/>';
        div2.scrollIntoView({behavior:'smooth'},true)
    }
document.getElementById("div").style.display="block";
}
ans[0].ans9=value
console.log(ans)
}
async function dev10(value){
    
    
    var div1=document.getElementById("div10");
    
    
    div1.style.position= "absolute";
    
    
    div1.style.display="none";
    var div2=document.getElementById("ANS");    
    
    div2.scrollIntoView()
    div2.innerHTML="  <img src='img/Hive.png' class='faq-4ysJCk_Hive' alt='Hive image'  > "
    div2.innerHTML=div2.innerHTML+'<div id="is_a_powerful_management_repor"><span>an e-commerce solution that helps in delivering products directly from<br>the central warehouse or micro fulfillment centers to the retailers.</span></div><br/> <a href="/solutions#Hivedata"><button class="rectangle-12-EoA0TL">LEARN MORE</button></a><br/><br/>';
    // div2.style.display="block";
    document.getElementById("div").style.display="block";
    ans[0].ans10=value
}

 async function dev1tab(value){
    

    var div1=document.getElementById("div1tab");
    
    
    div1.style.position= "absolute";
    
     
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
    sessionStorage.setItem("reloading", "true");
    ans[0].ans1=value;
    console.log(ans)
}
async function dev2tab(value){
    

    var div1=document.getElementById("div2tab");
    var div2=document.getElementById("div3tab");


div1.style.position= "absolute";


div1.style.display="none";
div2.style.display="block";
ans[0].ans2=value;
console.log(ans)
}
async function dev3tab(value){
    

var div1=document.getElementById("div3tab");

    
    div1.style.position= "absolute";
    
     
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
    

var div1=document.getElementById("div4tab");
var div2=document.getElementById("div5tab");

    
    div1.style.position= "absolute";
    
     
div1.style.display="none";
div2.style.display="block";
ans[0].ans4=value

console.log(ans)
}
async function dev5tab(value){
    

var div1=document.getElementById("div5tab");
var div2=document.getElementById("div6tab");

    
    div1.style.position= "absolute";
    
     
div1.style.display="none";
div2.style.display="block";
ans[0].ans5=value

console.log(ans)
}

async function dev6tab(value){
    

var div1=document.getElementById("div6tab");

    
    div1.style.position= "absolute";
    
      
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
    

    var div1=document.getElementById("div8tab");
    var div2=document.getElementById("div9tab");
    
    
    div1.style.position= "absolute";
    
     
     div1.style.display="none";
    div2.style.display="block";
    ans[0].ans8=value
    console.log(ans)
}

async function dev7tab(value){
    

var div1=document.getElementById("div7tab");

    
    div1.style.position= "absolute";
    
     
    div1.style.display="none";
if(ans[0].ans1==="Enter"){
    var div2=document.getElementById("div8tab");
    div2.style.display="block";

}else if(ans[0].ans1==="Rid"){
    window.location.href="/aboutus#formtab";

}else{

    var div2=document.getElementById("div9tab");
    div2.style.display="block";
}
ans[0].ans7=value
console.log(ans)
}
async function dev9tab(value){
    
    

var div1=document.getElementById("div9tab");


div1.style.position= "absolute";

div1.style.display="none";

if(ans[0].ans1==="Enter"){
    var div2=document.getElementById("div10tab");
    
    div2.style.display="block";

}else{


    var div2=document.getElementById("ANStab");    
    var div3=document.getElementById("ANStab2");    
    if(ans[0].ans2==="0:15 orders"){
        
        div2.innerHTML="<img src='img/Flock.png' class='faq-oGTKYK_flock' alt='Flock image' > "
        div2.innerHTML=div2.innerHTML+'<div id="is_a_powerful_management_repor_tab"><span>an on demand delivery application that delivers products and packages from<br>small businesses owners, restaurants, supermarkets...etc. </span></div><br/> <a href="/solutions#flockdatatab"><button class="rectangle-12-EoA0TL_tab">LEARN MORE</button></a><br/><br/>';
    }else{
        
        div2.innerHTML="<img class='faq-oGTKYK_fleet' src='img/Fleet.png'  alt='Fleet image'  > "
        div2.innerHTML=div2.innerHTML+'<div id="is_a_powerful_management_repor_tab"><span>is a powerful management, reporting and admin dashboard system<br>built as a mobile first web based platform. Meaning, it works just as great on<br>mobile devices and computers, to let you control your delivery system</span></div><br/> <a href="/solutions#fleetdatatab"><button class="rectangle-12-EoA0TL_tab">LEARN MORE</button></a><br/><br/>';
        
    }
    document.getElementById("divtab").style.display="block";
    div3.scrollIntoView({behavior:'smooth'},true)
}
ans[0].ans9=value
console.log(ans)
}
async function dev10tab(value){
    

    var div1=document.getElementById("div10tab");
    
    
    div1.style.position= "absolute";
    function frame() {
        if (pos == 450) {
            clearInterval(id);
        } else {
            pos++; 
            
            div1.style.right = pos + '%'; 
        }
    }
    
    div1.style.display="none";
    var div2=document.getElementById("ANStab");    
    var div3=document.getElementById("ANStab2");    

    div2.innerHTML=" <img class='faq-oGTKYK_Hive' src='img/Hive.png'  alt='Hive image'  > "
    div2.innerHTML=div2.innerHTML+'<div id="is_a_powerful_management_repor_tab"><span>an e-commerce solution that helps in delivering products directly from<br>the central warehouse or micro fulfillment centers to the retailers.</span></div><br/> <a href="/solutions#Hivedatatab"><button class="rectangle-12-EoA0TL_tab">LEARN MORE</button></a><br/><br/>';
    // div2.style.display="block";
    document.getElementById("divtab").style.display="block";
    div3.scrollIntoView({behavior:'smooth'},true)
    ans[0].ans10=value
}

 async function dev1mob(value){
    

    var div1=document.getElementById("div1mob");
    
    
    div1.style.position= "absolute";
    
     
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
    sessionStorage.setItem("reloading", "true");
    
}
async function dev2mob(value){
    

    var div1=document.getElementById("div2mob");
    var div2=document.getElementById("div3mob");


div1.style.position= "absolute";


div1.style.display="none";
div2.style.display="block";
ans[0].ans2=value;
console.log(ans)
}
async function dev3mob(value){
    

var div1=document.getElementById("div3mob");

    
    div1.style.position= "absolute";
    
     
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
    

var div1=document.getElementById("div4mob");
var div2=document.getElementById("div5mob");

    
    div1.style.position= "absolute";
    
     
div1.style.display="none";
div2.style.display="block";
ans[0].ans4=value

console.log(ans)
}
async function dev5mob(value){
    

var div1=document.getElementById("div5mob");
var div2=document.getElementById("div6mob");

    
    div1.style.position= "absolute";
    
     
div1.style.display="none";
div2.style.display="block";
ans[0].ans5=value

console.log(ans)
}

async function dev6mob(value){
    

var div1=document.getElementById("div6mob");

    
    div1.style.position= "absolute";
    
      
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
    

    var div1=document.getElementById("div8mob");
    var div2=document.getElementById("div9mob");
    
    
    div1.style.position= "absolute";
    
     
     div1.style.display="none";
    div2.style.display="block";
    ans[0].ans8=value
    console.log(ans)
}

async function dev7mob(value){
    

var div1=document.getElementById("div7mob");

    
    div1.style.position= "absolute";
    
     
    div1.style.display="none";
if(ans[0].ans1==="Enter"){
    var div2=document.getElementById("div8mob");
    div2.style.display="block";

}else if(ans[0].ans1==="Rid"){
    window.location.href="/aboutus#formmob";
    

}else{

    var div2=document.getElementById("div9mob");
    div2.style.display="block";
}
ans[0].ans7=value
console.log(ans)
}
async function dev9mob(value){
    
    

var div1=document.getElementById("div9mob");


div1.style.position= "absolute";

div1.style.display="none";

if(ans[0].ans1==="Enter"){
    var div2=document.getElementById("div10mob");
    
    div2.style.display="block";

}else{


    var div2=document.getElementById("ANSmob");    
    var div3=document.getElementById("ANSmob2");    
    if(ans[0].ans2==="0:15 orders"){
        
        div2.innerHTML="<img class='faq-vi8f13_flock' src='img/Flock.png'  alt='Flock image'   > "
        div2.innerHTML=div2.innerHTML+'<div id="is_a_powerful_management_repor_mob"><span>an on demand delivery application that delivers products and packages from<br>small businesses owners, restaurants, supermarkets...etc. </span></div><br/> <a href="/solutions#flockdatamob"><button class="rectangle-12-EoA0TL_mob">LEARN MORE</button></a><br/><br/>';
    }else{
        
        div2.innerHTML="<img class='faq-vi8f13_fleet' src='img/fleet@1x.png' class='mg-rounded' alt='Fleet image'  > "
        div2.innerHTML=div2.innerHTML+'<div id="is_a_powerful_management_repor_mob_sp"><span>is a powerful management, reporting and admin dashboard system<br>built as a mobile first web based platform. Meaning, it works just as great on<br>mobile devices and computers, to let you control your delivery system</span></div><br/> <a href="/solutions#fleetdatamob"><button class="rectangle-12-EoA0TL_mob">LEARN MORE</button></a><br/><br/>';
    }
    document.getElementById("divmob").style.display="block";
    div3.scrollIntoView({behavior:'smooth'},true)
}
ans[0].ans9=value
console.log(ans)
}
async function dev10mob(value){
    

    var div1=document.getElementById("div10mob");
    
    
    div1.style.position= "absolute";
    function frame() {
        if (pos == 450) {
            clearInterval(id);
        } else {
            pos++; 
            
            div1.style.right = pos + '%'; 
        }
    }
    
    div1.style.display="none";
    var div2=document.getElementById("ANSmob");    
    var div3=document.getElementById("ANSmob2");    

    div2.innerHTML=" <img class='faq-vi8f13_Hive' src='img/Hive.png'  alt='Hive image'  > "
    div2.innerHTML=div2.innerHTML+'<div id="is_a_powerful_management_repor_mob_sp2"><span>an e-commerce solution that helps in delivering products directly from<br>the central warehouse or micro fulfillment centers to the retailers.</span></div><br/> <a href="/solutions#Hivedatamob"><button class="rectangle-12-EoA0TL_mob">LEARN MORE</button></a><br/><br/>';
    // div2.style.display="block";
    ans[0].ans10=value
    document.getElementById("divmob").style.display="block";
    div3.scrollIntoView({behavior:'smooth'},true)
}

function lightup11(x){
    
    
    document.getElementById('bacans11').style.background="var(--bgground)";
    document.getElementById('parans11').style.color="var(--white)";
    document.getElementById('textans11').style.color="var(--white)";
    document.getElementById('imgans11').src="img/Q1ans1.png";
  }
  function lightdown11(x){
    
    
    document.getElementById('bacans11').style.background="var(--white)";
    document.getElementById('parans11').style.color="var(--venice-blue)";
    document.getElementById('textans11').style.color="var(--venice-blue)";
    document.getElementById('imgans11').src="img/Q1ans1co.png";
}
function lightup12(x){
    
    
    document.getElementById('bacans12').style.background="var(--bgground)";
    document.getElementById('parans12').style.color="var(--white)";
    document.getElementById('textans12').style.color="var(--white)";
    document.getElementById('imgans12').src="img/Q1ans2.png";
  }
  function lightdown12(x){
    
    
    document.getElementById('bacans12').style.background="var(--white)";
    document.getElementById('parans12').style.color="var(--venice-blue)";
    document.getElementById('textans12').style.color="var(--venice-blue)";
    document.getElementById('imgans12').src="img/Q1ans2co.png";
}
function lightup13(x){
    
    
    document.getElementById('bacans13').style.background="var(--bgground)";
    document.getElementById('parans13').style.color="var(--white)";
    document.getElementById('textans13').style.color="var(--white)";
    document.getElementById('imgans13').src="img/Q1ans3.png";
  }
  function lightdown13(x){
    
    
    document.getElementById('bacans13').style.background="var(--white)";
    document.getElementById('parans13').style.color="var(--venice-blue)";
    document.getElementById('textans13').style.color="var(--venice-blue)";
    document.getElementById('imgans13').src="img/Q1ans3co.png";
}
function lightup14(x){
    
    
    document.getElementById('bacans14').style.background="var(--bgground)";
    document.getElementById('parans14').style.color="var(--white)";
    document.getElementById('textans14').style.color="var(--white)";
    document.getElementById('imgans14').src="img/Q1ans4.png";
  }
  function lightdown14(x){
    
    
    document.getElementById('bacans14').style.background="var(--white)";
    document.getElementById('parans14').style.color="var(--venice-blue)";
    document.getElementById('textans14').style.color="var(--venice-blue)";
    document.getElementById('imgans14').src="img/Q1ans4co.png";
}

function lightup21(x){
    
    
    document.getElementById('bacans21').style.background="var(--bgground)";
    document.getElementById('imgans21').src="img/Q2ans1.png";
    // document.getElementById('parans21').style.color="var(--white)";
    // document.getElementById('textans21').style.color="var(--white)";
  }
  function lightdown21(x){
    
    
    document.getElementById('bacans21').style.background="var(--white)";
    document.getElementById('imgans21').src="img/Q2ans1co.png";
    // document.getElementById('parans21').style.color="var(--venice-blue)";
    // document.getElementById('textans21').style.color="var(--venice-blue)";
}

function lightup22(x){
    
    
    document.getElementById('bacans22').style.background="var(--bgground)";
    document.getElementById('imgans22').src="img/Q2ans2.png";
    // document.getElementById('parans22').style.color="var(--white)";
    // document.getElementById('textans22').style.color="var(--white)";
  }
  function lightdown22(x){
    
    
    document.getElementById('bacans22').style.background="var(--white)";
    document.getElementById('imgans22').src="img/Q2ans2co.png";
    // document.getElementById('parans22').style.color="var(--venice-blue)";
    // document.getElementById('textans22').style.color="var(--venice-blue)";
}

function lightup23(x){
    
    
    document.getElementById('bacans23').style.background="var(--bgground)";
    document.getElementById('imgans23').src="img/Q2ans3.png";
    // document.getElementById('parans22').style.color="var(--white)";
    // document.getElementById('textans22').style.color="var(--white)";
  }
  function lightdown23(x){
    document.getElementById('bacans23').style.background="var(--white)";
    document.getElementById('imgans23').src="img/Q2ans3co.png";
    // document.getElementById('parans22').style.color="var(--venice-blue)";
    // document.getElementById('textans22').style.color="var(--venice-blue)";
}
function lightup31(x){
    
    
    document.getElementById('bacans31').style.background="var(--bgground)";
    document.getElementById('imgans31').src="img/Q3ans1.png";
    // document.getElementById('parans31').style.color="var(--white)";
    // document.getElementById('textans31').style.color="var(--white)";
  }
  function lightdown31(x){
    document.getElementById('bacans31').style.background="var(--white)";
    document.getElementById('imgans31').src="img/Q3ans1co.png";
    // document.getElementById('parans31').style.color="var(--venice-blue)";
    // document.getElementById('textans31').style.color="var(--venice-blue)";
}
function lightup32(x){
    
    
    document.getElementById('bacans32').style.background="var(--bgground)";
    document.getElementById('imgans32').src="img/Q3ans2.png";
    // document.getElementById('parans32').style.color="var(--white)";
    // document.getElementById('textans32').style.color="var(--white)";
  }
  function lightdown32(x){
    document.getElementById('bacans32').style.background="var(--white)";
    document.getElementById('imgans32').src="img/Q3ans2co.png";
    // document.getElementById('parans32').style.color="var(--venice-blue)";
    // document.getElementById('textans32').style.color="var(--venice-blue)";
}
function lightup33(x){
    
    
    document.getElementById('bacans33').style.background="var(--bgground)";
    document.getElementById('imgans33').src="img/Q3ans3.png";
    // document.getElementById('parans33').style.color="var(--white)";
    // document.getElementById('textans33').style.color="var(--white)";
  }
  function lightdown33(x){
    document.getElementById('bacans33').style.background="var(--white)";
    document.getElementById('imgans33').src="img/Q3ans3co.png";
    // document.getElementById('parans33').style.color="var(--venice-blue)";
    // document.getElementById('textans33').style.color="var(--venice-blue)";
}
function lightup34(x){
    
    
    document.getElementById('bacans34').style.background="var(--bgground)";
    document.getElementById('imgans34').src="img/Q3ans4.png";
    // document.getElementById('parans34').style.color="var(--white)";
    // document.getElementById('textans34').style.color="var(--white)";
  }
  function lightdown34(x){
    document.getElementById('bacans34').style.background="var(--white)";
    document.getElementById('imgans34').src="img/Q3ans4co.png";
    // document.getElementById('parans34').style.color="var(--venice-blue)";
    // document.getElementById('textans34').style.color="var(--venice-blue)";
}
function lightup41(x){
    
    
    document.getElementById('bacans41').style.background="var(--bgground)";
    document.getElementById('imgans41').src="img/yesans.png";
    // document.getElementById('parans41').style.color="var(--white)";
    // document.getElementById('textans41').style.color="var(--white)";
  }
  function lightdown41(x){
    document.getElementById('bacans41').style.background="var(--white)";
    document.getElementById('imgans41').src="img/yesansco.png";
    // document.getElementById('parans41').style.color="var(--venice-blue)";
    // document.getElementById('textans41').style.color="var(--venice-blue)";
}
function lightup42(x){
    
    
    document.getElementById('bacans42').style.background="var(--bgground)";
    document.getElementById('imgans42').src="img/noans.png";
    // document.getElementById('parans42').style.color="var(--white)";
    // document.getElementById('textans42').style.color="var(--white)";
  }
  function lightdown42(x){
    document.getElementById('bacans42').style.background="var(--white)";
    document.getElementById('imgans42').src="img/noansco.png";
    // document.getElementById('parans42').style.color="var(--venice-blue)";
    // document.getElementById('textans42').style.color="var(--venice-blue)";
}
function lightup51(x){
    
    
    document.getElementById('bacans51').style.background="var(--bgground)";
    document.getElementById('imgans51').src="img/Q5ans1.png";
    // document.getElementById('parans51').style.color="var(--white)";
    // document.getElementById('textans51').style.color="var(--white)";
  }
  function lightdown51(x){
    document.getElementById('bacans51').style.background="var(--white)";
    document.getElementById('imgans51').src="img/Q5ans1co.png";
    // document.getElementById('parans51').style.color="var(--venice-blue)";
    // document.getElementById('textans51').style.color="var(--venice-blue)";
}
function lightup52(x){
    
    
    document.getElementById('bacans52').style.background="var(--bgground)";
    document.getElementById('imgans52').src="img/Q5ans2.png";
    // document.getElementById('parans52').style.color="var(--white)";
    // document.getElementById('textans52').style.color="var(--white)";
  }
  function lightdown52(x){
    document.getElementById('bacans52').style.background="var(--white)";
    document.getElementById('imgans52').src="img/Q5ans2co.png";
    // document.getElementById('parans52').style.color="var(--venice-blue)";
    // document.getElementById('textans52').style.color="var(--venice-blue)";
}
function lightup53(x){
    
    
    document.getElementById('bacans53').style.background="var(--bgground)";
    document.getElementById('imgans53').src="img/Q5ans3.png";
    // document.getElementById('parans53').style.color="var(--white)";
    // document.getElementById('textans53').style.color="var(--white)";
  }
  function lightdown53(x){
    document.getElementById('bacans53').style.background="var(--white)";
    document.getElementById('imgans53').src="img/Q5ans3co.png";
    // document.getElementById('parans53').style.color="var(--venice-blue)";
    // document.getElementById('textans53').style.color="var(--venice-blue)";
}
function lightup54(x){
    
    
    document.getElementById('bacans54').style.background="var(--bgground)";
    document.getElementById('imgans54').src="img/otherans.png";
    // document.getElementById('parans54').style.color="var(--white)";
    // document.getElementById('textans54').style.color="var(--white)";
  }
  function lightdown54(x){
    document.getElementById('bacans54').style.background="var(--white)";
    document.getElementById('imgans54').src="img/otheransco.png";
    // document.getElementById('parans54').style.color="var(--venice-blue)";
    // document.getElementById('textans54').style.color="var(--venice-blue)";
}
function lightup61(x){
    
    
    document.getElementById('bacans61').style.background="var(--bgground)";
    document.getElementById('imgans61').src="img/Q6ans1.png";
    // document.getElementById('parans61').style.color="var(--white)";
    document.getElementById('textans61').style.color="var(--white)";
  }
  function lightdown61(x){
    document.getElementById('bacans61').style.background="var(--white)";
    document.getElementById('imgans61').src="img/Q6ans1co.png";
    // document.getElementById('parans61').style.color="var(--venice-blue)";
    document.getElementById('textans61').style.color="var(--venice-blue)";
}
function lightup62(x){
    
    
    document.getElementById('bacans62').style.background="var(--bgground)";
    document.getElementById('imgans62').src="img/truckans.png";
    // document.getElementById('parans62').style.color="var(--white)";
    document.getElementById('textans62').style.color="var(--white)";
  }
  function lightdown62(x){
    document.getElementById('bacans62').style.background="var(--white)";
    document.getElementById('imgans62').src="img/truckansco.png";
    // document.getElementById('parans62').style.color="var(--venice-blue)";
    document.getElementById('textans62').style.color="var(--venice-blue)";
}
function lightup63(x){
    
    
    document.getElementById('bacans63').style.background="var(--bgground)";
    document.getElementById('imgans63').src="img/Q6ans3.png";
    // document.getElementById('parans63').style.color="var(--white)";
    document.getElementById('textans63').style.color="var(--white)";
  }
  function lightdown63(x){
    document.getElementById('bacans63').style.background="var(--white)";
    document.getElementById('imgans63').src="img/Q6ans3co.png";
    // document.getElementById('parans63').style.color="var(--venice-blue)";
    document.getElementById('textans63').style.color="var(--venice-blue)";
}
function lightup64(x){
    
    
    document.getElementById('bacans64').style.background="var(--bgground)";
    document.getElementById('imgans64').src="img/otherans.png";
    // document.getElementById('parans64').style.color="var(--white)";
    // document.getElementById('textans64').style.color="var(--white)";
  }
  function lightdown64(x){
    document.getElementById('bacans64').style.background="var(--white)";
    document.getElementById('imgans64').src="img/otheransco.png";
    // document.getElementById('parans64').style.color="var(--venice-blue)";
    // document.getElementById('textans64').style.color="var(--venice-blue)";
}
function lightup71(x){
    
    
    document.getElementById('bacans71').style.background="var(--bgground)";
    document.getElementById('imgans71').src="img/Q7ans1.png";
    // document.getElementById('parans71').style.color="var(--white)";
    document.getElementById('textans71').style.color="var(--white)";
  }
  function lightdown71(x){
    document.getElementById('bacans71').style.background="var(--white)";
    document.getElementById('imgans71').src="img/Q7ans1co.png";
    // document.getElementById('parans71').style.color="var(--venice-blue)";
    document.getElementById('textans71').style.color="var(--venice-blue)";
}
function lightup72(x){
    
    
    document.getElementById('bacans72').style.background="var(--bgground)";
    document.getElementById('imgans72').src="img/truckans.png";
    // document.getElementById('parans72').style.color="var(--white)";
    document.getElementById('textans72').style.color="var(--white)";
  }
  function lightdown72(x){
    document.getElementById('bacans72').style.background="var(--white)";
    document.getElementById('imgans72').src="img/truckansco.png";
    // document.getElementById('parans72').style.color="var(--venice-blue)";
    document.getElementById('textans72').style.color="var(--venice-blue)";
}
function lightup73(x){
    
    
    document.getElementById('bacans73').style.background="var(--bgground)";
    document.getElementById('imgans73').src="img/otherans.png";
    // document.getElementById('parans73').style.color="var(--white)";
    // document.getElementById('textans73').style.color="var(--white)";
  }
  function lightdown73(x){
    document.getElementById('bacans73').style.background="var(--white)";
    document.getElementById('imgans73').src="img/otheransco.png";
    // document.getElementById('parans73').style.color="var(--venice-blue)";
    // document.getElementById('textans73').style.color="var(--venice-blue)";
}
function lightup81(x){


    document.getElementById('bacans81').style.background="var(--bgground)";
    document.getElementById('imgans81').src="img/yesans.png";
    // document.getElementById('parans81').style.color="var(--white)";
    // document.getElementById('textans81').style.color="var(--white)";
  }
  function lightdown81(x){
    document.getElementById('bacans81').style.background="var(--white)";
    document.getElementById('imgans81').src="img/yesansco.png";
    // document.getElementById('parans81').style.color="var(--venice-blue)";
    // document.getElementById('textans81').style.color="var(--venice-blue)";
}
function lightup82(x){


    document.getElementById('bacans82').style.background="var(--bgground)";
    document.getElementById('imgans82').src="img/noans.png";
    // document.getElementById('parans82').style.color="var(--white)";
    // document.getElementById('textans82').style.color="var(--white)";
  }
  function lightdown82(x){
    document.getElementById('bacans82').style.background="var(--white)";
    document.getElementById('imgans82').src="img/noansco.png";
    // document.getElementById('parans82').style.color="var(--venice-blue)";
    // document.getElementById('textans82').style.color="var(--venice-blue)";
}
function lightup91(x){


    document.getElementById('bacans91').style.background="var(--bgground)";
    document.getElementById('imgans91').src="img/yesans.png";
    // document.getElementById('parans91').style.color="var(--white)";
    // document.getElementById('textans91').style.color="var(--white)";
  }
  function lightdown91(x){
    document.getElementById('bacans91').style.background="var(--white)";
    document.getElementById('imgans91').src="img/yesansco.png";
    // document.getElementById('parans91').style.color="var(--venice-blue)";
    // document.getElementById('textans91').style.color="var(--venice-blue)";
}
function lightup92(x){


    document.getElementById('bacans92').style.background="var(--bgground)";
    document.getElementById('imgans92').src="img/noans.png";
    // document.getElementById('parans92').style.color="var(--white)";
    // document.getElementById('textans92').style.color="var(--white)";
  }
  function lightdown92(x){
    document.getElementById('bacans92').style.background="var(--white)";
    document.getElementById('imgans92').src="img/noansco.png";
    // document.getElementById('parans92').style.color="var(--venice-blue)";
    // document.getElementById('textans92').style.color="var(--venice-blue)";
}
function lightup101(x){


    document.getElementById('bacans101').style.background="var(--bgground)";
    document.getElementById('imgans101').src="img/Q10ans1.png";
    // document.getElementById('parans101').style.color="var(--white)";
    // document.getElementById('textans101').style.color="var(--white)";
  }
  function lightdown101(x){
    document.getElementById('bacans101').style.background="var(--white)";
    document.getElementById('imgans101').src="img/Q10ans1co.png";
    // document.getElementById('parans101').style.color="var(--venice-blue)";
    // document.getElementById('textans101').style.color="var(--venice-blue)";
}
function lightup102(x){


    document.getElementById('bacans102').style.background="var(--bgground)";
    document.getElementById('imgans102').src="img/Q10ans2.png";
    // document.getElementById('parans102').style.color="var(--white)";
    // document.getElementById('textans102').style.color="var(--white)";
  }
  function lightdown102(x){
    document.getElementById('bacans102').style.background="var(--white)";
    document.getElementById('imgans102').src="img/Q10ans2co.png";
    // document.getElementById('parans102').style.color="var(--venice-blue)";
    // document.getElementById('textans102').style.color="var(--venice-blue)";
}
function lightup103(x){


    document.getElementById('bacans103').style.background="var(--bgground)";
    document.getElementById('imgans103').src="img/Q10ans3.png";
    // document.getElementById('parans103').style.color="var(--white)";
    // document.getElementById('textans103').style.color="var(--white)";
  }
  function lightdown103(x){
    document.getElementById('bacans103').style.background="var(--white)";
    document.getElementById('imgans103').src="img/Q10ans3co.png";
    // document.getElementById('parans103').style.color="var(--venice-blue)";
    // document.getElementById('textans103').style.color="var(--venice-blue)";
}
function lightupphone(){
    document.getElementById('phonelop').src="img/untitled-1-1@1x.png";
}
function lightdownphone(){
    document.getElementById('phonelop').src="img/Blue.png";
}

function myFunction (){
    var reloading = sessionStorage.getItem("reloading");
    if(reloading){

        alert("warining you lost your answers!!");
        sessionStorage.removeItem("reloading");
    }
    
    
    }

        window.onload = myFunction;
        
   