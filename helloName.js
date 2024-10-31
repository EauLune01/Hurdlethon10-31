function helloWorld(name){
    alert(`Hello,${name}!`);
}
helloWorld("GDG on Campus Sogang");

//button과 input을 얻어옴
const helloBtn=document.getElementById("helloBtn");
const userName=document.getElementById("helloName");

helloBtn.addEventListener("click",()=>{
    helloWorld(userName.value);
});