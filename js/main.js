window.addEventListener("DOMContentLoaded", function(){
  const loading = document.getElementById("splash");

  setTimeout(function(){
    loading.classList.add("off");
  }, 3000);
})

// 이미지 프리로드
function preloading(imageArray){
  // let n = imageArray.length;
  for(let i=0; i <imageArray.length; i++){
    let img = new Image();
    img.src = imageArray[i];
  }
}

preloading([
  'images/cloud_panorama1.webp',
  'images/main_bg.webp',
  'images/main_bg2.webp',
  'images/cloud.png',
  'images/mountain1.webp',
  'images/mountain2.webp',
  'images/noise.png',
  'images/star.jpg',
  'images/Mockup_dang.png',
  'images/Mockup_bing.png',
  'images/Mockup_oth.png'
])

// 메인

const main = document.querySelector(".main");
const mainText = document.querySelector(".mainText");

const $text = document.querySelector(".others");

const subTexts = document.querySelector("div.subText");
const des = document.querySelector("p.des");
const dev = document.querySelector("p.dev");

const body = document.querySelector("body");
const navIcon = document.getElementById("navIcon");

let reload = setTimeout(()=>{
  main.children[0].classList.add("on");
  const text = setTimeout(()=>{
    main.children[1].classList.add("on");
  },300);
  const mountain = setTimeout(()=>{
    main.children[2].classList.remove("off");
  },600);
}, 3000);

let reload2 = setTimeout(()=>{
  mainText.classList.add("on"); // 타이포할 텍스트 opacity 1;

  typo(letters); //decorative, designer 텍스트 뜨고

  let sub = setTimeout(()=>{  // "감각있는 디자이너 텍스트"
    subTexts.classList.add("on");
    des.classList.add("on");
  }, 5000)



  let typingText2 = setTimeout(()=>{

    // designer 지우기
    for(i=0; i<letters.length; i++){

      const letter = letters[i].split("");
    
      while (letter.length) {
        
        letter.pop();
        $text.innerHTML = letter.join(""); 
      }
    }
    subTexts.classList.remove("on");
    des.classList.remove("on");
    // 밤하늘 이미지 시작
    main.classList.add("on");

    let text2 = setTimeout(()=>{
      typo(letters2);
    }, 1000);

    let sub = setTimeout(()=>{
      subTexts.classList.add("on");
      dev.classList.add("on");
    }, 6000);

    let scrollTo = setTimeout(()=>{
      main.children[7].classList.add("on");
      // fixed 해제
      body.classList.remove("load");
      // show nav
      navIcon.classList.remove("load");
    }, 8000);
  }, 8500);
  

}, 5000); // 상단 텍스트 뜰 때까지 3초 딜레이



  //글자 모음
  const letters = [
    "corative",
    "signer",
  ];

  const letters2 = [
    "ep",
    "veloper"
  ];


function typo(words){
  // const $text = document.querySelector(".others");

  // 글자 입력 속도
  const speed = 100;
  let i = 0;
  
  //타이핑 효과 (wait 기능을 위한 async, await)
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
  
  // 글자 지우는 효과
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
  
  // 딜레이 기능 (마이크로 초)
  function wait(ms) {
    return new Promise(res => setTimeout(res, ms))
  }
  
  // 초기 실행
  setTimeout(typing, 1000);
}




// 햄버거

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

// 디자인


// 웹 프로젝트
const lis = document.querySelectorAll("section.web > ul > li > a");
const arts = document.querySelectorAll("section.web > article");
console.log(lis, arts)


for(let i=0; i<lis.length; i++){

  lis[i].addEventListener("mouseover", e=> {
    arts.forEach(item => {
      e.currentTarget.classList.add("on");
      item.classList.remove("on");
    })
    arts[i].classList.add("on");

  })
  lis[i].addEventListener("mouseout", e=> {
    arts.forEach(item => {
      item.classList.remove("on");
    })
    lis.forEach(item => {
      item.parentElement.classList.add("on");
    })
  })
}

// 디자인 스크롤








// 모바일 * 프로필탭
const profile = document.querySelector(".profile");
const moblis = document.querySelectorAll("ul.moblist > li > a");
const mobcont = document.querySelectorAll(".proBox > div");
const back = document.querySelector("p.btnBack");
console.log(back);

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