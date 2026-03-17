"use-strict";

console.log("sdsdsdsd")

let navLinks = document.querySelectorAll('.nav-link')

navLinks.forEach((v, i ,ar) => {
         v.classList.remove('active')

         v.addEventListener( 'click', () =>{
            navLinks.forEach(x => x.classList.remove('active'))
           v.classList.add('active')
        });
    
});   


// let wow = (content) =>{
//    return content + "wow"
// }
// alert(wow("sdasdasd"))

let sw = document.querySelector('.switch') 
let sb = document.querySelector('.switch-btn-light')
sw.addEventListener('click', () => {
       sb.classList.toggle('switch-btn-light');
       sb.classList.toggle('switch-btn-dark');
       
})


let pc = document.querySelectorAll('.project-card');

pc.forEach(card => {
  card.addEventListener('mouseenter', () => {
    const title = card.querySelector('.project-title-green');
    const type = card.querySelector('.project-type-default');

    title.classList.replace('project-title-green', 'project-title-default');
    type.classList.replace('project-type-default', 'project-type-green');
  });

   card.addEventListener('mouseleave', () => {
    const title = card.querySelector('.project-title-default');
    const type = card.querySelector('.project-type-green');

    title.classList.replace('project-title-default', 'project-title-green');
    type.classList.replace('project-type-green', 'project-type-default');

   });



});


