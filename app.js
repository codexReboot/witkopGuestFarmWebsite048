/////////////////////////    Navbar & Menu Logic    ///////////////////////////////
const hamburgerBtn = document.querySelector('.hamburgerBtn');

const hamburgerTopBar = document.querySelector(".hamburgerBtn__hamburgerBar--top");
const hamburgerMiddleBar = document.querySelector(".hamburgerBtn__hamburgerBar--middle");
const hamburgerBottomBar = document.querySelector(".hamburgerBtn__hamburgerBar--bottom");

const hamburgerMenu = document.querySelector('.navList');

const navItems = document.querySelectorAll('.navItem');

const navItem1 = document.querySelector('.navItem1');
const navItem2 = document.querySelector('.navItem2');
const navItem3 = document.querySelector('.navItem3');
const navItem4 = document.querySelector('.navItem4');
const navItem5 = document.querySelector('.navItem5');
const navItem6 = document.querySelector('.navItem6');
const navItem7 = document.querySelector('.navItem7');
const navItem8 = document.querySelector('.navItem8');
const navItem9 = document.querySelector('.navItem9');

const profilePhoto = document.querySelector('.profilePhoto');
const logo = document.querySelector('.logo');
const navbar = document.querySelector('.navbarSection');
const navFrame = document.querySelector('.navFrame');

const footer = document.querySelector('.footer');

const hero = document.querySelector('.heroSection');

let footerHeight = footer.offsetHeight;
console.log(`${window.innerHeight - footerHeight}px`);

let height = navbar.offsetHeight;
navFrame.style.height = `${height}px`;

visualViewport.addEventListener("resize", () => {
  height = navbar.offsetHeight;
  navFrame.style.height = `${height}px`;

  console.log(`navbar height = ${navbar.offsetHeight}`);
  console.log(`navFrame height = ${navFrame.offsetHeight}`);
});


window.addEventListener('resize', function(){
  footerHeight = footer.offsetHeight;
});

hamburgerBtn.addEventListener('click', () => {
  
  console.log(`navbar offsetHeight = ${navbar.offsetHeight}`);
  navFrame.style.height = `${height}px`;
  console.log(`navFrame offsetHeight = ${navFrame.offsetHeight}`);
  
  if (!hamburgerTopBar.classList.contains('hamburgerBtn__hamburgerBar--right')) {
    setTimeout(() => {
      hamburgerTopBar.classList.toggle('hamburgerBtn__hamburgerBar--right');
      hamburgerMiddleBar.classList.toggle('hamburgerBtn__hamburgerBar--transparent');
      hamburgerBottomBar.classList.toggle('hamburgerBtn__hamburgerBar--left');
    }, 200);
  } else {
    setTimeout(() => {
      hamburgerTopBar.classList.toggle('hamburgerBtn__hamburgerBar--right');
      hamburgerMiddleBar.classList.toggle('hamburgerBtn__hamburgerBar--transparent');
      hamburgerBottomBar.classList.toggle('hamburgerBtn__hamburgerBar--left');
    }, 500);
    
    if(window.scrollY < 200 && !hamburgerMenu.classList.contains('navList--displayNone')){
      navbar.style.visibility = "hidden";
      navbar.style.opacity = "0";
      navbar.classList.remove('navbar--background');
    }
  }
  
  if(hamburgerMenu.classList.contains('navList--displayNone')) {
    hamburgerMenu.classList.remove('navList--displayNone');
    hamburgerMenu.classList.add('navList--display');
    for(let item of navItems) {
      item.style.opacity = "0";
    }
    setTimeout(() => {
      hamburgerMenu.classList.remove('navList--navListMoveOut');
      hamburgerMenu.classList.add('navList--navListMoveIn');
      for(let item of navItems) {
        item.classList.remove('navItem--moveOut');
        item.classList.add('navItem--moveIn');
      }
      navItem1.style.animationDelay = '.70s';
      navItem2.style.animationDelay = '.80s';
      navItem3.style.animationDelay = '.90s';
      navItem4.style.animationDelay = '1.00s';
      navItem5.style.animationDelay = '1.10s';
      navItem6.style.animationDelay = '1.20s';
      navItem7.style.animationDelay = '1.30s';
      navItem8.style.animationDelay = '1.40s';
      // navItem9.style.animationDelay = '1.50s';
    }, 20);
  } else {
    hamburgerMenu.classList.remove('navList--navListMoveIn')
    hamburgerMenu.classList.add('navList--navListMoveOut')
    for(let item of navItems) {
      item.style.opacity = "1";
      item.classList.remove('navItem--moveIn');
      item.classList.add('navItem--moveOut');
    }
    navItem1.style.animationDelay = '.10s';
    navItem2.style.animationDelay = '.15s';
    navItem3.style.animationDelay = '.20s';
    navItem4.style.animationDelay = '.25s';
    navItem5.style.animationDelay = '.30s';
    navItem6.style.animationDelay = '.35s';
    navItem7.style.animationDelay = '.40s';
    navItem8.style.animationDelay = '.45s';
    // navItem9.style.animationDelay = '.50s';
    setTimeout(() => {
      hamburgerMenu.classList.remove('navList--display');
      hamburgerMenu.classList.add('navList--displayNone');
    }, 2000);
  }  
});

window.onscroll = () => {
  setTimeout(() => {
    if(window.scrollY > 200) 
    {  
      navbar.style.visibility = "visible";
      navbar.style.opacity = "1";
      navbar.classList.add('navbar--background');
    }

    else if(window.scrollY < 200 && hamburgerMenu.classList.contains('navList--displayNone'))
    {
      navbar.style.visibility = "hidden";
      navbar.style.opacity = "0";
      navbar.classList.remove('navbar--background');
      termsAndConditions.classList.add('termsAndConditions-displayNone');
      legalOpenIcon.classList.remove('openAndCloseIcons__icon--displayNone');
      legalCloseIcon.classList.remove('openAndCloseIcons__icon--displayNone');
      legalCloseIcon.classList.add('openAndCloseIcons__icon--displayNone');
      
    }
  }, 500);
   
}

for(let item of navItems) {
  item.addEventListener('click', () => {
    hamburgerMenu.classList.remove('navList--navListMoveIn')
    hamburgerMenu.classList.add('navList--navListMoveOut')
    for(let item of navItems) {
      item.style.opacity = "1";
      item.classList.remove('navItem--moveIn');
      item.classList.add('navItem--moveOut');
    }
    navItem1.style.animationDelay = '.10s';
    navItem2.style.animationDelay = '.15s';
    navItem3.style.animationDelay = '.20s';
    navItem4.style.animationDelay = '.25s';
    navItem5.style.animationDelay = '.30s';
    navItem6.style.animationDelay = '.35s';
    navItem7.style.animationDelay = '.40s';
    navItem8.style.animationDelay = '.45s';
    // navItem9.style.animationDelay = '.50s';
    setTimeout(() => {
      hamburgerMenu.classList.remove('navList--display');
      hamburgerMenu.classList.add('navList--displayNone');
    }, 1200);

    setTimeout(() => {
      hamburgerTopBar.classList.toggle('hamburgerBtn__hamburgerBar--right');
      hamburgerMiddleBar.classList.toggle('hamburgerBtn__hamburgerBar--transparent');
      hamburgerBottomBar.classList.toggle('hamburgerBtn__hamburgerBar--left');
    }, 500);

    setTimeout(() => {
      if(window.scrollY < 200 ){
        navbar.style.visibility = "hidden";
        navbar.style.opacity = "0";
        navbar.classList.remove('navbar--background');
      }
    }, 800);
  });
}

/////////////////////////    Accommodation Carousel Logic    ///////////////////////////////
// select dom elements
const leftArrowAccomm = document.querySelector('.carouselAccommLeftArrow');
const rightArrowAccomm = document.querySelector('.carouselAccommRightArrow');
const indexAccomm = document.querySelectorAll('.carouselAccommIndex');
const imageAccomm = document.querySelectorAll('.carouselAccommImage');
// initialise counter for index
let carouselIndexNumber = 0;
// create eventlistener for right arrow btn
rightArrowAccomm.addEventListener('click', function(){
  carouselIndexNumber++;
  if(carouselIndexNumber !== indexAccomm.length) {
    // change color of index
    indexAccomm[carouselIndexNumber].style.backgroundColor = '#8a6a42ff';
    indexAccomm[carouselIndexNumber - 1].style.backgroundColor = 'transparent';
    // hide prev image
    imageAccomm[carouselIndexNumber-1].style.opacity = '0';
    setTimeout(function() {
      imageAccomm[carouselIndexNumber-1].classList.toggle('carouselAccomm__displayNone');
    }, 1200)
    // show next image
    setTimeout(function() {
      imageAccomm[carouselIndexNumber].style.opacity = '0'
      imageAccomm[carouselIndexNumber].classList.toggle('carouselAccomm__displayNone');
      setTimeout(function() {
        imageAccomm[carouselIndexNumber].style.opacity = '1'
      }, 50)
    },1200);
  } else {
    // change color of index
    carouselIndexNumber = 0;
    indexAccomm[carouselIndexNumber].style.backgroundColor = '#8a6a42ff';
    indexAccomm[indexAccomm.length -1].style.backgroundColor = 'transparent';
    // hide prev image
    imageAccomm[indexAccomm.length -1].style.opacity = '0';
    setTimeout(function() {
      imageAccomm[indexAccomm.length -1].classList.toggle('carouselAccomm__displayNone');
    }, 1200)
    // show next image
    setTimeout(function() {
      imageAccomm[carouselIndexNumber].style.opacity = '0'
      imageAccomm[carouselIndexNumber].classList.toggle('carouselAccomm__displayNone');
      setTimeout(function() {
        imageAccomm[carouselIndexNumber].style.opacity = '1'
      }, 50)
    },1200);
  }
});
// create eventlistener for left arrow btn
leftArrowAccomm.addEventListener('click', function(){
  carouselIndexNumber--;
  if(carouselIndexNumber !== -1) {
    // change color of index
    indexAccomm[carouselIndexNumber].style.backgroundColor = '#8a6a42ff';
    indexAccomm[carouselIndexNumber + 1].style.backgroundColor = 'transparent';
    // hide prev image
    imageAccomm[carouselIndexNumber + 1].style.opacity = '0';
    setTimeout(function() {
      imageAccomm[carouselIndexNumber + 1].classList.toggle('carouselAccomm__displayNone');
    }, 1200)
    // show next image
    setTimeout(function() {
      imageAccomm[carouselIndexNumber].style.opacity = '0'
      imageAccomm[carouselIndexNumber].classList.toggle('carouselAccomm__displayNone');
      setTimeout(function() {
        imageAccomm[carouselIndexNumber].style.opacity = '1'
      }, 50)
    },1200);
  } else {
    // change color of index
    carouselIndexNumber = indexAccomm.length - 1;
    indexAccomm[carouselIndexNumber].style.backgroundColor = '#8a6a42ff';
    indexAccomm[0].style.backgroundColor = 'transparent';
    // hide prev image
    imageAccomm[0].style.opacity = '0';
    setTimeout(function() {
      imageAccomm[0].classList.toggle('carouselAccomm__displayNone');
    }, 1200)
    // show next image
    setTimeout(function() {
      imageAccomm[carouselIndexNumber].style.opacity = '0'
      imageAccomm[carouselIndexNumber].classList.toggle('carouselAccomm__displayNone');
      setTimeout(function() {
        imageAccomm[carouselIndexNumber].style.opacity = '1'
      }, 50)
    },1200);
  }
});
