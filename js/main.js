// document.addEventListener("click", e=>{
//   e.preventDefault();
// })


// const contents = document.querySelectorAll("#wrap > div");
// const sections = document.querySelectorAll("#wrap > div > section");

// let devHeight = window.innerHeight;

// window.addEventListener("resize", () => {
//   devHeight = window.innerHeight;

//   contents.forEach(item => {
//     item.style.height = `${devHeight}px`;
//   })
// })

// for(let i=0; i<contents.length; i++){
//   contents[i].addEventListener("wheel", e => {
//     if(e.deltaY < 0){
//       let prev = e.currentTarget.previousElementSibling.offsetTop;
//       wheel(prev);
//     } else if(e.deltaY > 0){
//       let next = e.currentTarget.nextElementSibling.offsetTop;
//       wheel(next);
//     }
//   })
// }

// function wheel(scrTop){
//   window.scroll({
//     top: scrTop,
//     left: 0,
//     behavior: "smooth"
//   })
// }

// 메인

const main = document.querySelector(".main");
const mainText = document.querySelector(".mainText");

const $text = document.querySelector(".others");

const subTexts = document.querySelector("div.subText");
const des = document.querySelector("p.des");
const dev = document.querySelector("p.dev");

let reload = setTimeout(()=>{
  main.children[0].classList.add("on");
  const text = setTimeout(()=>{
    main.children[1].classList.add("on");
  },200);
  const mountain = setTimeout(()=>{
    main.children[2].classList.remove("off");
  },800);
}, 600);

let reload2 = setTimeout(()=>{
  mainText.classList.add("on"); // 타이포할 텍스트 opacity 1;

  let typingText1 = setTimeout(()=>{
    typo(letters); //decorative, designer 텍스트 뜨고
    subText(des, dev); // "감각있는 디자이너 텍스트"
  }, 300);

  let typingText2 = setTimeout(()=>{
    // designer 지우고나서
    for(i=0; i<letters.length; i++){

      const letter = letters[i].split("");
    
      while (letter.length) {
        
        letter.pop();
        $text.innerHTML = letter.join(""); 
      }
    }

    subTexts.classList.remove("on");
    main.classList.add("on");
    typo(letters2);
    subText(dev, des);

    let scrollTo = setTimeout(()=>{
      main.children[7].classList.add("on");
    }, 9000);
  }, 8000);
  

}, 3000); // 상단 텍스트 뜰 때까지 3초 딜레이



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


function subText(add, remove){
  let sub = setTimeout(()=>{
    subTexts.classList.add("on");
    remove.classList.remove("on");
    add.classList.add("on");
  }, 6000)
}



// 햄버거

const navIcon = document.getElementById("navIcon");
const body = document.querySelector("body");
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

// function checkVisible(element, check = 'above'){
//   const viewportHeight = $(window).height(); //Viewport Height
//   const scrollTop = $(window).scrollTop(); //scroll Top
//   const y = $(element).offset().top;
//   const elementHeight = $(element).height();

//   //반드시 요소가 화면에 보여야 할 경우
//   if (check == "visible")
//     return ((y < (viewportHeight + scrollTop)) && (y > (scrollTop - elementHeight)));

//   //화면에 안보여도 요소가 위에만 있으면 (페이지를 로드할 때 스크롤이 밑으로 내려가 요소를 지나쳐 버릴 경우) 
//   if (check == "above")
//     return ((y < (viewportHeight + scrollTop)));
// }

// // 리소스가 로드 되면 함수 실행을 멈출지 말지 정하는 변수
// let isVisible = false;

// //이벤트에 등록할 함수
// const func = function () {
//   if(!isVisible && checkVisible('.web > article')){
//     $('.web > article').addClass("on");
//   }
// }

// // 만일 리소스가 로드가 되면 더이상 이벤트 스크립트가 있을 필요가 없으니 삭제
//   isVisible && window.removeEventListener("scroll", func);

//   //스크롤 이벤트 등록
//   window.addEventListener("scroll", func);

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