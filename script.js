let btns = document.getElementsByClassName('faq-question')
let contentDiv = document.getElementsByClassName('content')

let icons = document.getElementsByClassName('icon')

for(let i=0;i<btns.length;i++){
    btns[i].addEventListener('click',()=>{
        if(parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight){
            contentDiv[i].style.height = contentDiv[i].scrollHeight + 'px'
            btns[i].classList.add('active')
            btns[i].setAttribute('aria-expanded',false)
        }
        else{
            contentDiv[i].style.height =  '0px'
            btns[i].classList.remove('active')
            btns[i].setAttribute('aria-expanded',true)
        }
        for (let j = 0; j < contentDiv.length; j++) {
			if (j != i) {
                contentDiv[j].style.height =  '0px'
                btns[j].classList.remove('active')
                btns[j].setAttribute('aria-expanded',true)
			}
		}
    })
}