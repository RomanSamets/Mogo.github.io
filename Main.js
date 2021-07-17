// __________                  .__  __
// \______   \  ____    _____  |__||  | __
//  |       _/ /  _ \  /     \ |  ||  |/ /
//  |    |   \(  <_> )|  Y Y  \|  ||    <
//  |____|_  / \____/ |__|_|  /|__||__|_ \
//         \/               \/          \/



var OB          = $('#OB');
var LOne        = $('#LineOne');
var LTwo        = $('#LineTwo');
var LThird      = $('#LineThird');
var isClicked   = false;
var timing      = 'cubic-bezier(.21,.07,.19,.89)';
var dur         = 0.6;
var hov         = false;
var a           = $("#comments");
var b           = $("#commentsTwo");
var ClassA      = $(".A");
var ClassB      = $(".B");
var ClassC      = $(".C");
var head        = $('header');
var nav         = $('.nav-item');
var windowWidth;
var minWidth    = 1150;
const counters = document.querySelectorAll('.NUM');
const speed = 800000000;
var ShopSvg = $('#ShopSVG');
var SearchSvg = $('#SearchSVG');

let delayTime = 2000;

var scrollIc = document.querySelector(".scroll_icon");

var AboutLi      =  $('#NavAbout');
var ServiceLi    =  $('#NavServices');
var WorkLi       =  $('#NavWork');
var BlogLi       =  $('#NavBlog');
var ContactLi    =  $('#NavContact');

var element = document.querySelector('#Els');


var AboutVis = document.querySelector('#AboutVis');


var serviceVis = document.querySelector('#servicesOffset');
var ServicesOffset;


var WorkVis = document.querySelector('#WorkOffset');
var WorkOffset;

var BlogVis = document.querySelector('#BlogOffset');
var BlogOffset;


var TopOffset;



// Получаем нужный элемент


var AboutVisible = function (AoutEl) {
    // Все позиции элемента
    var targetPosition = {
            top: window.pageYOffset + AoutEl.getBoundingClientRect().top,
            left: window.pageXOffset + AoutEl.getBoundingClientRect().left,
            right: window.pageXOffset + AoutEl.getBoundingClientRect().right,
            bottom: window.pageYOffset + AoutEl.getBoundingClientRect().bottom
        },
        // Получаем позиции окна
        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };

    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
        targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
        // Если элемент полностью видно, то запускаем следующий код


        AboutLi.addClass('Active');
        ServiceLi.removeClass('Active');
        WorkLi.removeClass('Active');
        BlogLi.removeClass('Active');
        ContactLi.removeClass('Active');

    } else {
        // Если элемент не видно, то запускаем этот код
    };
};

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
AboutVisible (AboutVis);




// Получаем нужный элемент


var ServicesVisible = function (ServiceEl) {
    // Все позиции элемента
    var targetPosition = {
            top: window.pageYOffset + ServiceEl.getBoundingClientRect().top,
            left: window.pageXOffset + ServiceEl.getBoundingClientRect().left,
            right: window.pageXOffset + ServiceEl.getBoundingClientRect().right,
            bottom: window.pageYOffset + ServiceEl.getBoundingClientRect().bottom
        },
        // Получаем позиции окна
        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };

    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
        targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
        // Если элемент полностью видно, то запускаем следующий код

        AboutLi.removeClass('Active');
        ServiceLi.addClass('Active');
        WorkLi.removeClass('Active');
        BlogLi.removeClass('Active');
        ContactLi.removeClass('Active');

    } else {
        // Если элемент не видно, то запускаем этот код
    };
};

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
ServicesVisible (serviceVis);




// Получаем нужный элемент


var WorkVisible = function (WorkEl) {
    // Все позиции элемента
    var targetPosition = {
            top: window.pageYOffset + WorkEl.getBoundingClientRect().top,
            left: window.pageXOffset + WorkEl.getBoundingClientRect().left,
            right: window.pageXOffset + WorkEl.getBoundingClientRect().right,
            bottom: window.pageYOffset + WorkEl.getBoundingClientRect().bottom
        },
        // Получаем позиции окна
        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };

    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
        targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
        // Если элемент полностью видно, то запускаем следующий код
        AboutLi.removeClass('Active');
        ServiceLi.removeClass('Active');
        WorkLi.addClass('Active');
        BlogLi.removeClass('Active');
        ContactLi.removeClass('Active');


    } else {
        // Если элемент не видно, то запускаем этот код
    };
};

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
WorkVisible (WorkVis);






// Получаем нужный элемент


var BlogVisible = function (BlogEl) {
    // Все позиции элемента
    var targetPosition = {
            top: window.pageYOffset + BlogEl.getBoundingClientRect().top,
            left: window.pageXOffset + BlogEl.getBoundingClientRect().left,
            right: window.pageXOffset + BlogEl.getBoundingClientRect().right,
            bottom: window.pageYOffset + BlogEl.getBoundingClientRect().bottom
        },
        // Получаем позиции окна
        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };

    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
        targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
        // Если элемент полностью видно, то запускаем следующий код
        AboutLi.removeClass('Active');
        ServiceLi.removeClass('Active');
        WorkLi.removeClass('Active');
        BlogLi.addClass('Active');
        ContactLi.removeClass('Active');
    } else {
        // Если элемент не видно, то запускаем этот код
    };
};

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
BlogVisible (BlogVis);










window.addEventListener("scroll", function () {
    Visible (element);
    AboutVisible (AboutVis);
    ServicesVisible (serviceVis);
    WorkVisible (WorkVis);
    BlogVisible (BlogVis);
    windResize();
    Start();
});

function Start() {
    TopOffset = window.pageYOffset;
    ServicesOffset = serviceVis.offsetTop;
    WorkOffset = WorkVis.offsetTop;
    BlogOffset = BlogVis.offsetTop;
}


Start();


function AboutFunc(){
    window.scroll(0, 0);
    AboutLi.addClass('Active');
    ServiceLi.removeClass('Active');
    WorkLi.removeClass('Active');
    BlogLi.removeClass('Active');
    ContactLi.removeClass('Active');
}
function ServiceFunc(){
    window.scroll(0, ServicesOffset - 100);
    AboutLi.removeClass('Active');
    ServiceLi.addClass('Active');
    WorkLi.removeClass('Active');
    BlogLi.removeClass('Active');
    ContactLi.removeClass('Active');
}
function WorkFunc(){
    window.scroll(0, WorkOffset);
    AboutLi.removeClass('Active');
    ServiceLi.removeClass('Active');
    WorkLi.addClass('Active');
    BlogLi.removeClass('Active');
    ContactLi.removeClass('Active');
}
function BlogFunc(){
    window.scroll(0, BlogOffset - 300);
    AboutLi.removeClass('Active');
    ServiceLi.removeClass('Active');
    WorkLi.removeClass('Active');
    BlogLi.addClass('Active');
    ContactLi.removeClass('Active');
}


function ContactFunc(){
    AboutLi.removeClass('Active');
    ServiceLi.removeClass('Active');
    WorkLi.removeClass('Active');
    BlogLi.removeClass('Active');
    ContactLi.addClass('Active');
}
function ShopFunc(){

}
function SearchFunc(){

}





function Scroll() {

    setTimeout(UU, 1000);

    function UU(){
        counters.forEach(counter =>{
            const updateCount = () => {
                const target = counter.getAttribute('data-target');
                const  count = +counter.innerText;

                const inc = target / speed / 500;

                if(count < target){
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 50);
                } else {
                    count.innerText = target;
                }
            }

            updateCount();
        });
    }


}



window.addEventListener("resize", function () {
    windResize();
});


function windResize() {
    windowWidth = window.innerWidth;

    if(windowWidth > minWidth){
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                head.css( "backgroundColor", '#ffffff' );
                head.css("color", '#f38181');
                nav.addClass('scNav');
                ShopSvg.css("fill", '#f38181');
                SearchSvg.css("fill", '#f38181');
            } else if(document.body.scrollTop === 0 || document.documentElement.scrollTop === 0) {
                head.css( "backgroundColor", 'transparent');
                head.css("color", '#ffffff');
                nav.removeClass('scNav');
                ShopSvg.css("fill", '#ffffff');
                SearchSvg.css("fill", '#ffffff');
            }
    } else {
        head.css( "backgroundColor", '#ffffff' );
        head.css("color", '#000');
        nav.removeClass('scNav');
        ShopSvg.css("fill", '#000');
        SearchSvg.css("fill", '#000');
    }

}




$('document').ready(function () {
    LOne.addClass('E');
    LTwo.addClass('E');
    LThird.addClass('E');
    windResize();
    Moveit.put(LineOne, {
        start: '0%',
        end: '35%'
    });

    Moveit.put(LineTwo, {
        start: '1%',
        end: '50%'
    });

    Moveit.put(LineThird, {
        start: '0%',
        end: '35%'
    });

    $('#buttonBurger').click(function () {
        head.css("color", '#000');
        OB.css('opacity', "0");
        LOne.toggleClass('O');
        LTwo.toggleClass('O');
        LThird.toggleClass('O');
        head.toggleClass('C');
        LOne.removeClass('E');
        LTwo.removeClass('E');
        LThird.removeClass('E');
        if (!isClicked) {
            Moveit.animate(LineOne, {
                start: '62%',
                end: '90%',
                duration: dur,
                timing: timing
            });
            Moveit.animate(LineTwo, {
                start: '50%',
                end: '50%',
                duration: dur,
                timing: timing
            });
            Moveit.animate(LineThird, {
                start: '62%',
                end: '90%',
                duration: dur,
                timing: timing
            });
        } else {
            OB.css('opacity', "1");
            LOne.addClass('E');
            LTwo.addClass('E');
            LThird.addClass('E');
            Moveit.animate(LineOne, {
                start: '0%',
                end: '35%',
                duration: dur,
                timing: timing
            });
            Moveit.animate(LineTwo, {
                start: '0%',
                end: '100%',
                duration: dur,
                timing: timing
            });
            Moveit.animate(LineThird, {
                start: '0%',
                end: '35%',
                duration: dur,
                timing: timing
            });
        }

        isClicked = !isClicked;

    })

    $('#buttonBurger').mouseenter(function () {
        if(isClicked === false){
            Moveit.animate(LineTwo, {
                start: '1%',
                end: '99%',
                duration: dur,
                timing: timing
            });
        } else{

            Moveit.animate(LineOne, {
                start: '62%',
                end: '90%',
                duration: dur,
                timing: timing
            });
            Moveit.animate(LineThird, {
                start: '62%',
                end: '90%',
                duration: dur,
                timing: timing
            });
        }
    })

    $('#buttonBurger').mouseleave(function (){
        if(isClicked === true){
            Moveit.animate(LineOne, {
                start: '62%',
                end: '100%',
                duration: dur,
                timing: timing
            });
            Moveit.animate(LineThird, {
                start: '62%',
                end: '100%',
                duration: dur,
                timing: timing
            });
        } else {
            Moveit.animate(LineTwo, {
                start: '1%',
                end: '49%',
                duration: dur,
                timing: timing
            });
        }
    });
});










function R(){
    a.addClass("svipeR");
    a.removeClass("svipeL");
}

function L(){
    a.addClass("svipeL");
    a.removeClass("svipeR");
}

function RightNavArrTwo(){
    b.addClass("svipeRTwo");
    b.removeClass("svipeLTwo");
}

function LeftNavArrTwo(){
    b.addClass("svipeLTwo");
    b.removeClass("svipeRTwo");
}

function A (){
    ClassA.toggleClass("ArAc");
    ClassB.removeClass("ArAc");
    ClassC.removeClass("ArAc");
    $(".photography").toggleClass("active");
    $(".webdesign").removeClass("active");
    $(".creativity").removeClass("active");
}

function B (){
    ClassB.toggleClass("ArAc");
    ClassA.removeClass("ArAc");
    ClassC.removeClass("ArAc");
    $(".creativity").toggleClass("active");
    $(".webdesign").removeClass("active");
    $(".photography").removeClass("active");
}

function C (){
    ClassC.toggleClass("ArAc");
    ClassA.removeClass("ArAc");
    ClassB.removeClass("ArAc");
    $(".webdesign").toggleClass("active");
    $(".creativity").removeClass("active");
    $(".photography").removeClass("active");
}










// Получаем нужный элемент


var Visible = function (target) {
    // Все позиции элемента
    var targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top,
            left: window.pageXOffset + target.getBoundingClientRect().left,
            right: window.pageXOffset + target.getBoundingClientRect().right,
            bottom: window.pageYOffset + target.getBoundingClientRect().bottom
        },
        // Получаем позиции окна
        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };

    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
        targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
        // Если элемент полностью видно, то запускаем следующий код
        Scroll();
    } else {
        // Если элемент не видно, то запускаем этот код
    };
};

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
Visible (element);



$(window).on('load', function () {
    var $preloader = $('#preLoader');
    $('body').addClass('HIDSCR');
    $preloader.delay(delayTime).fadeOut(800);
    toggleOverlay();
});

function toggleOverlay () {
    var overlay = document.querySelector("body");
    overlay.classList.remove('BodyScLock');
}

document.addEventListener("scroll", function() {
  if(window.scrollY > 0) {
    scrollIc.style.opacity = 0;} 
  else {scrollIc.style.opacity = 1;} 
});
