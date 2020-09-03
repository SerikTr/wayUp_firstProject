// задаем значение переменной, чтобы она реагировала по ID в HTML
let btn = document.getElementById('btn');
// задаем анонимную функцию для метода onclick , при нажатии на кнопку 
 btn.onclick = function(){

    // querySelector() - поиск необходимого класса по записи class="intro"
     document.querySelector('p.intro').classList.add('color');
}; 

// Jquery biblary

$(window).scroll(function(){
    $('#learn .section_title, .scills').each(function(){
        let imagePos = $(this).offset().top;

        let topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass('fadeIn');
        }
    });
});
$(window).scroll(function(){
    $('.mail').each(function(){
        let imagePos = $(this).offset().top;

        let topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass('fadeInUp');
        }
    });
});