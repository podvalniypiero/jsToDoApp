gsap .to("h1",{
    text: "PLAN FÜR DEN TAG :  ",
    duration: 3,
    ease: "power1.in",
    delay:1

})
gsap.from ("input",{ opacity:0, y: 100, ease:"bounce", duration:2, delay:5})
gsap.from ("button",{ opacity:0, y: -100, ease:"bounce", duration:2, delay:7})


const inputField = document.querySelector('.inputField');
const btn = document.querySelector('.btn');
const toDoContainer=document.querySelector('.toDoContainer');

btn.addEventListener(`click`,( )=>{
    // стрелочная функция
    console.log(btn);
    const task = document.createElement('li');
    
    task.innerText=inputField.value ;
    task.classList.add('addTask');

    toDoContainer.appendChild(task);
    console.log(task);
    inputField.value=' ';

    // прослушка на одно нажатие дела
    task.addEventListener(`click`, ( )=>{
        task.classList.add('doneTask');
    })
    // прослушка на два нажатия дела
    task.addEventListener(`dblclick`, ( )=>{
        toDoContainer.removeChild(task);
        })
    

})

