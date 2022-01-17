let headerNav = document.querySelector('.info-header');
let tabcontent = document.querySelectorAll('.info-tabcontent');
let tab = document.querySelectorAll('.info-header-tab');

function hidetabcontent(x) {
    for(let i = x; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove('show')
        tabcontent[i].classList.add('hide')
    }
};

hidetabcontent(1, tabcontent);


function showtabcontent(y){
    if (tabcontent[y].classList.contains('hide')) {
        tabcontent[y].classList.remove('hide')
        tabcontent[y].classList.add('show')
    }
};

headerNav.addEventListener('click', (evt) =>{
    let target = evt.target;
    
    for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]){
            hidetabcontent(0, tabcontent)
            showtabcontent(i, tabcontent)
            break;
        }
    }
})




var year = new Date().getFullYear()+1;

var count = new Date(`jan 01, ${year}, 00:00:00`).getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var d = count - now;
    

    var hours = Math.floor((d%(1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor((d%(1000*60*60)) / (1000*60));
    var seconds = Math.floor((d%(1000*60)) / 1000);


    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}, 1000)
