window.onscroll = function() {scroll_function()};

function scroll_function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("but_up").style.display = "block";
    } else {
        document.getElementById("but_up").style.display = "none";
    }
}

function top_function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
/*let mask = document.querySelector('.mask');
window.addEventListener('load', () => {
    mask.classList.add('hide');
    setTimeout(() => {
        mask.remove();
    }, 600);
});*/