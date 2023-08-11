/** 로딩페이지 */
window.addEventListener("DOMContentLoaded", function(){
  const loading = document.getElementById("loading");

  setTimeout(function(){
    loading.classList.add("off");
  }, 4000);
})

/** 새로고침하면 맨 위로 */
window.onload = function(){
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
}

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

/** 이미지 프리로드 */
function preloading(imageArray){
  for(let i=0; i <imageArray.length; i++){
    let img = new Image();
    img.src = imageArray[i];
  }
}
preloading([
  'images/cloud_panorama1-min.png',
  'images/main_bg-min.png',
  'images/main_bg2-min.png',
  'images/cloud.png',
  'images/mountain-min.png',
  'images/mountain2-min.png',
  'images/noise-min.png',
  'images/star.jpg',
  'images/Mockup_dang-min.png',
  'images/Mockup_bing-min.png',
  'images/Mockup_oth-min.png'
])


// ❗❗ 메인

const main = document.querySelector("section.main");
const mainText = document.querySelector(".mainText");
/** De: 뒤에 붙는 텍스트 */
const $text = document.querySelector(".others");
const subTexts = document.querySelector("div.subText");
/** 괄호 속 서브텍스트 */
const subTextsElements = document.querySelector("div.subText > div");

const body = document.querySelector("body");
const navIcon = document.getElementById("navIcon");

let reload = setTimeout(()=>{
  main.children[0].classList.add("on");
  const text = setTimeout(()=>{
    main.children[1].classList.add("on");
  },1000);

}, 5000);

let reload2 = setTimeout(()=>{
  mainText.classList.add("on");
  /** De:corative, De:signer 텍스트 뜨기 */
  setTimeout(function(){
    typo(letters);
  },500)

  /** "감각있는 디자이너 텍스트" */
  setTimeout(function(){
    subTexts.classList.add("on");
    subTextsElements.children[0].classList.add("on");
  }, 7000);

  /** Developer 컨셉 변경 */
  let typingText2 = setTimeout(()=>{

    subTexts.classList.remove("on");
    subTextsElements.children[0].classList.remove("on");
    // 밤하늘 이미지 시작
    main.classList.add("on");
    /** Designer 텍스트 지우기 */
    setTimeout(function(){
      for(i=0; i<letters.length; i++){
  
        const letter = letters[i].split("");
      
        while (letter.length) {
          
          letter.pop();
          $text.innerHTML = letter.join(""); 
        }
      }
    }, 400);

    let text2 = setTimeout(()=>{
      typo(letters2);
    }, 2000);

    let sub = setTimeout(()=>{
      subTexts.classList.add("on");
      subTextsElements.children[1].classList.add("on");
    }, 7000);

    let scrollTo = setTimeout(()=>{
      main.children[7].classList.add("on");
      // fixed 해제
      body.classList.remove("load");
      // show nav
      navIcon.classList.remove("load");
    }, 8000);
  }, 9000);
  

}, 7500); // De: 전 텍스트들 뜰 때까지 딜레이


  /** Decorative, Designer 배열 */
  const letters = [
    "corative",
    "signer",
  ];
  /** Deep, Developer 배열 */
  const letters2 = [
    "ep",
    "veloper"
  ];


function typo(words){

  /** 글자 입력 속도 */
  const speed = 100;
  let i = 0;
  
  /** 타이핑 효과 (wait 기능을 위한 async, await) */
  const typing = async () => {
    const letter = words[i].split("");
  
    while(letter.length){
      // 글자 작성 속도 조절
      await wait(speed);
      $text.innerHTML += letter.shift();
    }
  
    // 잠시 대기
    await wait(2000);
  
    // 다음에 작성될 글자가 있을 시 지우는 효과 실행
    if (words[i + 1]) remove();
    
  }
  
  /** 글자 지우는 효과 */
  const remove = async ()=> {
    const letter = words[i].split("");
  
    while (letter.length){
      await wait(speed);
  
      letter.pop();
      $text.innerHTML = letter.join("");
    }
  
    // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
    i = !words[i+1] ? 0 : i+1;
    typing();
  }
  
  /** 딜레이 기능(마이크로초) */
  function wait(ms) {
    return new Promise(res => setTimeout(res, ms))
  }
  
  // 초기 실행
  setTimeout(typing, 1000);
}

// ❗❗ 커서
var cursor = document.querySelector('.cursor');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  // var x = e.clientX;
  // var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('cursorinnerhover')
});
document.addEventListener('mousedown', function(){
  cursor.classList.add('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})



// ❗❗ 햄버거

const bg = document.querySelector("div.bg");

navIcon.addEventListener("click", e => {
  e.currentTarget.classList.toggle("open");

  if(navIcon.classList.contains("open")){
     body.classList.add("on");
     bg.classList.add("on");
  } else {
    body.classList.remove("on");
    bg.classList.remove("on");
  }
})

// 클릭시 이동
const menuA = document.querySelectorAll("div.navi a");

for(let i=0; i<menuA.length; i++){
  menuA[i].addEventListener("click", e=> {
    body.classList.remove("on");
    bg.classList.remove("on");
    navIcon.classList.remove("open");
  })
}







// ❗❗ DesignWorks Section
const designItem = document.querySelectorAll(".designWorks > ul.pcVer > li");

for(let i=0; i<designItem.length; i++){
  designItem[i].addEventListener("click", e=> {

    designItem[i].classList.remove("on");
    // 애니메이션 반복동작
    e.target.offsetWidth;
    designItem[i].classList.add("on");
  })
}

// ❗❗ 디자인 가로스크롤
let design = document.querySelector("section.designWorks");
let designTop = design.offsetTop;
let designBox = document.querySelector("section.designWorks > ul:first-of-type")

const style = window.getComputedStyle(designBox);
const matrix = style.transform || style.webkitTransform || style.mozTransform
// 2d matrix has 6 values || 3d matrix has 16 values
const matrixType = matrix.includes('3d') ? '3d' : '2d';
const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ');
if (matrixType === '2d'){
  // 왜 let은 안되지?
  var x = matrixValues[4];
}

window.addEventListener("scroll", e=> {
  let y = window.scrollY;

  window.addEventListener("resize", e => {
    designTop = design.offsetTop;
  })

  if(y > designTop){
    design.classList.add("on");
    designBox.style.transform = `translateX(${1.95*x - y/2.5}px)`
  } else {
    design.classList.remove("on");
  }
})



// ❗❗ 웹 프로젝트
let web = document.querySelector("section.web");
let webTop = web.offsetTop;
let webCircle = document.querySelector("section.web > div.webCircle")

window.addEventListener("scroll", e=> {
  let y = window.scrollY;

  window.addEventListener("resize", e => {
    webTop = web.offsetTop;
  })
  console.log(y, webTop, arts[0]);
  if(y >= webTop/1.2 && y < webTop){
    webCircle.style.transform = `scale(${0.5 + y/4000})`
  }  

})

const lis = document.querySelectorAll("section.web > ul > li");
const arts = document.querySelectorAll("section.web > article");
const bgColor = [
  'linear-gradient(180deg, #fff 20%, #E4F7FF 50%, rgb(185, 219, 234) 75%, #FFFfff70 90%)',
  'linear-gradient(180deg, #fff 20%, #FFE2CE 50%, #ffd3b5 75%, #FFFfff70 90%)',
  'linear-gradient(180deg, #fff 20%, #dae3ce 50%, #C0C9B5 75%, #FFFfff70 90%)',
  'linear-gradient(180deg, #fff 20%, #ffdcdc 70%, #FFF 95%)'
]

for(let i=0; i<lis.length; i++){

  lis[i].addEventListener("mouseover", e=> {
    lis.forEach(item => {
      item.classList.remove("on");
    })
    arts.forEach(item => {
      item.classList.remove("on");
    })
    lis[i].classList.add("on");

    if(lis[i].classList.contains("on")){
      arts[i].classList.add("on");
      webCircle.style.background = bgColor[i];
    }
  })
}

const modalBtn = document.querySelectorAll(".webLink > a:last-child");
const modal = document.querySelectorAll(".webCheck");
const closeModal = document.querySelectorAll(".webCheck svg");

for(let i=0; i<modalBtn.length; i++){
  modalBtn[i].addEventListener("click", e=> {
    e.preventDefault();
    modal[i].classList.add("on");
  })
  closeModal[i].addEventListener("click", e=> {
    modal[i].classList.remove("on");
  })
}






// 모바일 * 프로필탭
const profile = document.querySelector(".profile");
const moblis = document.querySelectorAll("ul.moblist > li > a");
const mobcont = document.querySelectorAll(".proBox > div");
const back = document.querySelector("p.btnBack");

for(let i=0; i<moblis.length; i++){
  moblis[i].addEventListener("click", e=>{
    e.preventDefault();

    profile.classList.add("off");
    mobcont[i].classList.add("on");
  })
}

back.addEventListener("click", e=> {
  for(let i=0; i<moblis.length; i++){
    profile.classList.remove("off");
    mobcont[i].classList.remove("on");
  }
})

let profileTop = profile.offsetTop;

window.addEventListener("scroll", ()=> {
  let y = window.scrollY;
  console.log(y)
  if(profileTop <= y+200){
    document.documentElement.style.setProperty('--underline', '1');
  } else {
    document.documentElement.style.setProperty('--underline', '0');
  }
})

let contact = document.querySelector(".contact");
let contactTop = contact.getBoundingClientRect().top;
console.log(contact, contactTop)
let delayTime = 150

window.addEventListener("scroll", ()=> {
  let y=window.scrollY;
  if(y+400 >= contactTop){
    contact.children[0].classList.add("on");

    setTimeout(function(){
      contact.children[3].classList.add("on");
    }, delayTime)

    setTimeout(function(){
      contact.children[4].classList.add("on");
    }, 3*delayTime)
  } 
  // else {
  //   contactRemove(0, 3, 4);
  // }
})

// function contactRemove(n, n2, n3){
//   contact.children[n].classList.remove("on");
//   contact.children[n2].classList.remove("on");
//   contact.children[n3].classList.remove("on");
// }