//variables 
var navContainer = document.querySelector(".navContainer")
var openNavContainer = document.querySelector(".openNavContainer");
var hintAllName = document.querySelector(".hintAllName")
var logoNameHolder = document.querySelector(".logoNameHolder")

//eventListeners
openNavContainer.addEventListener("click",openNavigation);

//functions

function openNavigation() {
  var navContainerWidth = navContainer.getBoundingClientRect().width;
  if (navContainerWidth == 70) {
    navContainer.classList.add('newNavWidth')
    openNavContainer.innerHTML =`<i class="fa-solid fa-xmark"></i>`
    hintAllName.classList.remove('fadeOutText')
    hintAllName.classList.add('hintAllNameDesign')
    logoNameHolder.classList.add('logoNameHolderFlex')
  } else {
    navContainer.classList.remove('newNavWidth')
    openNavContainer.innerHTML =`<i class="fa-solid fa-bars"></i>`
    hintAllName.classList.add('fadeOutText')
    hintAllName.classList.remove('hintAllNameDesign')
  }
}
function 
designHintAllLogoNameAndNavigations(){
  
}