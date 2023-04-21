let page = document.querySelector('.page');
let themeButton = document.querySelector('.btn-dark');

themeButton.addEventListener('click', function() {
    console.log(page.classList.contains('.dark-theme'));
    page.classList.toggle('dark-theme');
    addWhite.classList.toggle('addWhite');
    
} )
let myForm = document.forms.myForm;
myForm.addEventListener('submit', function() {
    event.preventDefault(); // отмена авто обновления страницы
    let title = document.querySelector('.form-control').value;
    document.querySelector('.tasks').innerHTML += `
    <li class="list-group-item"> <input class='done' type="checkbox" name="" id=""> ${title} <span class = 'delete'>&#10006;</span></li>
   `
    
    myForm.reset(); //    очищает поле ввода после добавления
    ;
})
document.querySelector('#clear').addEventListener('click', function () {
    console.log('da');
    document.querySelector('.tasks').innerHTML = '';
})
document.querySelector('.tasks').addEventListener('click', function() {
    if (event.target.tagName == 'SPAN') {
        event.target.parentElement.remove();
    } else if (event.target.className == '.done') {
        event.target.classList.add('lineThrough')
    }
})
