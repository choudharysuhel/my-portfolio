// var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
// // console.log(navMenuAnchorTags)

// for (var i = 0; i<navMenuAnchorTags.length; i++){
//     navMenuAnchorTags[i].addEventListener('click',function (event) {
//         event.preventDefault();
        
//         var targetSectionID = this.textContent.trim().toLowerCase();
//         var targetSection = document.getElementById(targetSectionID);
//         console.log(targetSection);
//         var interval = setInterval(function(){
//             var targetSectionCordinates = targetSection.getBoundingClientRect
//             if (targetSectionCordinates.top <= 0){
//                 clearInterval(interval);
//                 return;
//             }
//             window.scrollBy(0, 50);
//         }, 30);
//     });
// }

var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
// console.log(navMenuAnchorTags)
var interval;
for (var i = 0; i < navMenuAnchorTags.length; i++){
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();     
        var targetSectionID = this.textContent.trim().toLowerCase();
        console.log(this.textContent);
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);
        // var interval = setInterval(scrollVertically, 30, targetSection);
        interval = setInterval(function () {
            scrollVertically(targetSection);
        }, 20);
    });
}

function scrollVertically(targetSection){
    var targetSectionCordinates = targetSection.getBoundingClientRect();
    if (targetSectionCordinates.top <= 0){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}




var progressBar = document.querySelectorAll('.skill-progress > div');
var skillContainer = document.getElementById('skill-container')
window.addEventListener('scroll', checkScroll)
var animationDone = false;

function initialiseBars(){
    for(let bar of progressBar){
        bar.style.width = 0 + '%';
    }
}

initialiseBars();

function fillBars(){
    for(let bar of progressBar){
    let targetWidth = bar.getAttribute('data-bar-width');
    let currWidth = 0;
    let interval = setInterval(function(){
        if (currWidth > targetWidth){
            clearInterval(interval);
            return;
        }
        currWidth++;
        bar.style.width = currWidth + '%';
    }, 15);
}
}


function checkScroll(){
    // you have to check whether skill section is visible or not
    var cordinates = skillContainer.getBoundingClientRect();
    if (!animationDone && cordinates.top < window.innerHeight){
        animationDone = true;
        console.log("skill section is here")
        fillBars();
    } else if (cordinates.top > window.innerHeight) {
        animationDone = false;
        initialiseBars();
    }
}