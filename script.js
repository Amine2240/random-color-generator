
let container = document.querySelector('.container')
let body = document.querySelector('.body')


for (let i = 0; i < 30; i++) {
    let div = document.createElement('div');
    div.classList.add('color');
    container.appendChild(div);
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    div.style.backgroundColor = '#'+ randomColor;
    div.innerHTML = `#${randomColor}`;
    div.onmouseover = function(){
        body.style.backgroundColor = '#'+ randomColor;
    };
}












    


