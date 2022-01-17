//Eventos target item de navegacion

notes.addEventListener('click', e =>{
    e.preventDefault()
 
   let notes = document.getElementById('notes')
   let learning = document.getElementById('learning')
   let begin = document.getElementById('begin')
  // let second_section = document.getElementById('second_section')
   //window.location.href=("second_section")

   window.location.replace("file:///home/mint/Documentos/Primer_proyecto/FIrst_proyect.html#second_section")
   notes.setAttribute('class','new_menu')
   learning.setAttribute('class','menu')
   begin.setAttribute('class','menu')
})

begin.addEventListener('click', e =>{
    e.preventDefault()
 
   let begin = document.getElementById('begin')
   let learning = document.getElementById('learning')
  
   window.location.replace("file:///home/mint/Documentos/Primer_proyecto/FIrst_proyect.html#main_section")
   begin.setAttribute('class','new_menu')
   notes.setAttribute('class','menu')
   learning.setAttribute('class','menu')
})

learning.addEventListener('click', e =>{
    e.preventDefault()
 
   let learning = document.getElementById('learning')
   let begin = document.getElementById('begin')

   window.location.replace("file:///home/mint/Documentos/Primer_proyecto/FIrst_proyect.html#third_section")
   learning.setAttribute('class','new_menu')
   begin.setAttribute('class','menu')
   notes.setAttribute('class','menu')

})


