let toggle = document.querySelector('.toggle')
let body = document.querySelector('body')
let content = document.querySelector('.content')

toggle.addEventListener('click', function(){
    body.classList.toggle('open');
    content.classList.toggle('open');
}
)