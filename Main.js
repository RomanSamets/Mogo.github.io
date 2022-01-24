// __________                  .__  __
// \______   \  ____    _____  |__||  | __
//  |       _/ /  _ \  /     \ |  ||  |/ /
//  |    |   \(  <_> )|  Y Y  \|  ||    <
//  |____|_  / \____/ |__|_|  /|__||__|_ \
//         \/               \/          \/


var OB          = $('#OB'),
 LOne        = $('#LineOne'),
 LTwo        = $('#LineTwo'),
 LThird      = $('#LineThird'),
 isClicked   = false,
 timing      = 'cubic-bezier(.21,.07,.19,.89)',
 dur         = 0.6,
 hov         = false,
 a           = $("#comments"),
 b           = $("#commentsTwo"),
 ClassA      = $(".A"),
 ClassB      = $(".B"),
 ClassC      = $(".C"),
 head        = $('header'),
 nav         = $('.nav-item'),
 windowWidth,
 minWidth    = 1150;

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


var AboutVisible = function (AoutEl) {
    
    var targetPosition = {
            top: window.pageYOffset + AoutEl.getBoundingClientRect().top,
            left: window.pageXOffset + AoutEl.getBoundingClientRect().left,
            right: window.pageXOffset + AoutEl.getBoundingClientRect().right,
            bottom: window.pageYOffset + AoutEl.getBoundingClientRect().bottom
        },

        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };

    if (targetPosition.bottom > windowPosition.top && 
        targetPosition.top < windowPosition.bottom && 
        targetPosition.right > windowPosition.left && 
        targetPosition.left < windowPosition.right) { 

        AboutLi.addClass('Active');
        ServiceLi.removeClass('Active');
        WorkLi.removeClass('Active');
        BlogLi.removeClass('Active');
        ContactLi.removeClass('Active');

    } else {
        
    };
};

AboutVisible (AboutVis);


var ServicesVisible = function (ServiceEl) {
    var targetPosition = {
            top: window.pageYOffset + ServiceEl.getBoundingClientRect().top,
            left: window.pageXOffset + ServiceEl.getBoundingClientRect().left,
            right: window.pageXOffset + ServiceEl.getBoundingClientRect().right,
            bottom: window.pageYOffset + ServiceEl.getBoundingClientRect().bottom
        },

        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };

    if (targetPosition.bottom > windowPosition.top && 
        targetPosition.top < windowPosition.bottom && 
        targetPosition.right > windowPosition.left &&
        targetPosition.left < windowPosition.right) { 
    
        AboutLi.removeClass('Active');
        ServiceLi.addClass('Active');
        WorkLi.removeClass('Active');
        BlogLi.removeClass('Active');
        ContactLi.removeClass('Active');

    } else {

    };
};

ServicesVisible (serviceVis);


var WorkVisible = function (WorkEl) {

    var targetPosition = {
            top: window.pageYOffset + WorkEl.getBoundingClientRect().top,
            left: window.pageXOffset + WorkEl.getBoundingClientRect().left,
            right: window.pageXOffset + WorkEl.getBoundingClientRect().right,
            bottom: window.pageYOffset + WorkEl.getBoundingClientRect().bottom
        },

        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };

    if (targetPosition.bottom > windowPosition.top && 
        targetPosition.top < windowPosition.bottom && 
        targetPosition.right > windowPosition.left && 
        targetPosition.left < windowPosition.right) { 
        
        AboutLi.removeClass('Active');
        ServiceLi.removeClass('Active');
        WorkLi.addClass('Active');
        BlogLi.removeClass('Active');
        ContactLi.removeClass('Active');


    } else {
        
    };
};

WorkVisible (WorkVis);


var BlogVisible = function (BlogEl) {

    var targetPosition = {
            top: window.pageYOffset + BlogEl.getBoundingClientRect().top,
            left: window.pageXOffset + BlogEl.getBoundingClientRect().left,
            right: window.pageXOffset + BlogEl.getBoundingClientRect().right,
            bottom: window.pageYOffset + BlogEl.getBoundingClientRect().bottom
        },

        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };

    if (targetPosition.bottom > windowPosition.top &&
        targetPosition.top < windowPosition.bottom && 
        targetPosition.right > windowPosition.left && 
        targetPosition.left < windowPosition.right) { 
        
        AboutLi.removeClass('Active');
        ServiceLi.removeClass('Active');
        WorkLi.removeClass('Active');
        BlogLi.addClass('Active');
        ContactLi.removeClass('Active');
    } else {
       
    };
};

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


var Visible = function (target) {
    var targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top,
            left: window.pageXOffset + target.getBoundingClientRect().left,
            right: window.pageXOffset + target.getBoundingClientRect().right,
            bottom: window.pageYOffset + target.getBoundingClientRect().bottom
        },
        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };

    if (targetPosition.bottom > windowPosition.top && 
        targetPosition.top < windowPosition.bottom && 
        targetPosition.right > windowPosition.left &&
        targetPosition.left < windowPosition.right) {
        
        Scroll();
    } else {
        
    };
};

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
