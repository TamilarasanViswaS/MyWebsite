var con1=document.querySelector(".con1");
var college=document.querySelector(".college");
var hrsec=document.querySelector(".hrsec");
var con2=document.querySelector(".con2");
var sec=document.querySelector(".sec");
var con3=document.querySelector(".con3");
var con4=document.querySelector(".con4");
var con5=document.querySelector(".con5");
var pers=document.querySelector(".pers");
var hobs=document.querySelector(".hobs");
var load=document.querySelector(".load");
var skil=document.querySelector("#skil");

function collage(){
    con1.style.display="block";
    con2.style.display="none";
    con3.style.display="none";
    con4.style.display="none";
    con5.style.display="none";
    college.style.color="blue";
    sec.style.color="#999";
    hrsec.style.color="#999";
    pers.style.color="#999";
    hobs.style.color="#999";
    college.style.border ="blue 2px solid";
    sec.style.border ="#999 2px solid";
    hrsec.style.border ="#999 2px solid";
    pers.style.border ="#999 2px solid";
    hobs.style.border ="#999 2px solid";

}
function hrsecc(){
    con1.style.display="none";
    con2.style.display="block";
    con3.style.display="none";
    con4.style.display="none";
    con5.style.display="none";
    hrsec.style.color="blue";
    college.style.color="#999";
    pers.style.color="#999";
    hobs.style.color="#999";
    sec.style.color="#999";
    hrsec.style.border ="blue 2px solid";
    college.style.border ="#999 2px solid";
    sec.style.border ="#999 2px solid";
    pers.style.border ="#999 2px solid";
    hobs.style.border ="#999 2px solid";
    
}
function secc(){
    con1.style.display="none";
    con2.style.display="none";
    con3.style.display="block";
    con4.style.display="none";
    con5.style.display="none";
    sec.style.color="blue";
    college.style.color="#999";
    hrsec.style.color="#999";
    pers.style.color="#999";
    hobs.style.color="#999";
    sec.style.border ="blue 2px solid";
    college.style.border ="#999 2px solid";
    hrsec.style.border ="#999 2px solid"; 
    pers.style.border ="#999 2px solid";
    hobs.style.border ="#999 2px solid";
}
function per(){
    con1.style.display="none";
    con2.style.display="none";
    con3.style.display="none";
    con5.style.display="none";
    con4.style.display="block";
    pers.style.color="blue";
    college.style.color="#999";
    hrsec.style.color="#999";
    hobs.style.color="#999";
    sec.style.color="#999";
    pers.style.border ="blue 2px solid";
    college.style.border ="#999 2px solid";
    hrsec.style.border ="#999 2px solid";
    sec.style.border ="#999 2px solid"; 
    hobs.style.border ="#999 2px solid";
}
function hob(){
    con1.style.display="none";
    con2.style.display="none";
    con5.style.display="block";
    con3.style.display="none";
    con4.style.display="none";
    hobs.style.color="blue";
    sec.style.color="#999";
    college.style.color="#999";
    hrsec.style.color="#999";
    pers.style.color="#999";
    hobs.style.border ="blue 2px solid";
    sec.style.border ="#999 2px solid";
    college.style.border ="#999 2px solid";
    hrsec.style.border ="#999 2px solid"; 
    pers.style.border ="#999 2px solid"; 
}

var num=document.getElementById("num");
var count1=0;
setInterval(()=>{
    if(count1==95){
        clearInterval();
    }else{
        count1+=1;
        num.innerHTML=count1+"%";
    }
    
},20)

var num2=document.getElementById("num2");
var count2=0;
setInterval(()=>{
    if(count2==85){
        clearInterval();
    }else{
        count2+=1;
        num2.innerHTML=count2+"%";
    }
    
},20)
var num3=document.getElementById("num3");
var count3=0;
setInterval(()=>{
    if(count3==85){
        clearInterval();
    }else{
        count3+=1;
        num3.innerHTML=count3+"%";
    }
    
},20)
var num4=document.getElementById("num4");
var count4=0;
setInterval(()=>{
    if(count4==80){
        clearInterval();
    }else{
        count4+=1;
        num4.innerHTML=count4+"%";
    }
    
},20)
var num5=document.getElementById("num5");
var count5=0;
setInterval(()=>{
    if(count5==90){
        clearInterval();
    }else{
        count5+=1;
        num5.innerHTML=count5+"%";
    }
    
},20)
var num6=document.getElementById("num6");
var count6=0;
setInterval(()=>{
    if(count6==80){
        clearInterval();
    }else{
        count6+=1;
        num6.innerHTML=count6+"%";
    }
    
},20)



