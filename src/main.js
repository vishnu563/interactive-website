function scrolltoOffer(){
    const offerElement = document.getElementById('combo');
    if(offerElement){
        offerElement.scrollIntoView();
    }
}
function scrolltoHome(){
    const homeElement = document.getElementById('home');
    if(homeElement){
        homeElement.scrollIntoView();
    }
}
function scrolltoStory(){
    const storyElement = document.getElementById('philosophy')
    if(storyElement){
        storyElement.scrollIntoView();
    }
}
function scrolltoMenu(){
    const menuElement = document.getElementById('menu');
    if(menuElement){
        menuElement.scrollIntoView();
    }
}
function scrolltoFind(){
    const findElement = document.getElementById('find-us');
    if(findElement){
        findElement.scrollIntoView();
    }
}


const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;



function handleSubmit(event){
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedBack = document.getElementById('feedback').value;
    console.log("name: "+name,"email: "+email,"feedback: "+feedBack);
    document.getElementById('name').value="";
    document.getElementById('email').value="";
    document.getElementById('feedback').value="";
}

let navList = document.getElementById('nav-list');
navList.style.maxHeight = "0px";

function toggleMenu(){
    if(navList.style.maxHeight == "0px"){
        navList.style.maxHeight = "300px";
    }
    else{
        navList.style.maxHeight = "0px";
    }
}





const URL = 'https://jsonplaceholder.typicode.com/comments';

let nextPerson = document.getElementById('next-customer');
let getEmail = ()=>{
    fetch(URL)
        .then((data) => data.json())
        .then((emails) => {
            const randomUser = emails[Math.floor(Math.random()*emails.length)];
            const customerEmail = randomUser.email;
            const user = customerEmail.split('@')[0];
            document.getElementById('customer').innerText = user;
            document.getElementById('customer-email').innerText = customerEmail;
        })
        .catch((err)=> console.log(err))
}
window.addEventListener('load',getEmail)
nextPerson.addEventListener('click',getEmail)