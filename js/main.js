 elForm = document.querySelector('.form')
 elInp1 = document.querySelector('.inp1')
 elBtn = document.querySelector('btn')

var arr = ['webhacker','hacker','programist','programmer','dasturchi']


elForm.addEventListener('click', function(){
    for(var i=0; i< arr.length; i++){
        if(elInp1.value == arr[i]){
            elInp1.classList.add('green')
        }
    }
})


