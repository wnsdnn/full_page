const pageHeight = window.innerHeight;
const container = document.querySelector(".container");
const btns = document.querySelectorAll(".container .btns input");
const pages = document.querySelectorAll(".container .box");

let scroll = 0
let page = 0;

const slidePage = (num) => {
    pages[0].style.marginTop = `-${num*pageHeight}px`;
    btns[num].checked = true;
};

const setIntervalFun = () => {
    page++;
    if(page > 4) page = 0;
    
    slidePage(page);
}

let setIntEvt = setInterval(setIntervalFun, 3000)

// wheel: 마우스의 휠을 돌렸을때 이밴트 발생
container.addEventListener("wheel", (e) => {
    clearInterval(setIntEvt)
    // deltaY: 스크롤한 크기
    const {deltaY} = e;
    if(deltaY > 0) page++;
    else page--;
    
    if(page < 0) page = 0;
    else if(page > 4) page = 4;

    slidePage(page);
    setIntEvt = setInterval(setIntervalFun, 3000)
    
});

btns.forEach(ele => {
    ele.addEventListener("click", () => {
        page = ele.dataset.id;
        slidePage(page);
    })
});

