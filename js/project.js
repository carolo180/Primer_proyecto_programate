//Eventos target item de navegacion

let learning = document.getElementById('learning')
let begin = document.getElementById('begin')
let notes = document.getElementById('notes')

notes.addEventListener('click', e =>{
    e.preventDefault()
   
   window.location.replace("#second_section")
   notes.setAttribute('class','new_menu')
   learning.setAttribute('class','menu')
   begin.setAttribute('class','menu')
})

begin.addEventListener('click', e =>{
    e.preventDefault()
   
   window.location.replace("#main_section")
   begin.setAttribute('class','new_menu')
   notes.setAttribute('class','menu')
   learning.setAttribute('class','menu')
})

learning.addEventListener('click', e =>{
    e.preventDefault()
 
   window.location.replace("#third_section")
   learning.setAttribute('class','new_menu')
   begin.setAttribute('class','menu')
   notes.setAttribute('class','menu')

})


