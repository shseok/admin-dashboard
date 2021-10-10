import { CountUp } from './countUp.min.js';

// hover된 list item에 클래스 hovered 추가 -> hover 고정

const list = document.querySelectorAll('.navigation li');

function activelink() {
    list.forEach((item) => item.classList.remove('hovered'));
    // this = 함수 호출 item
    this.classList.add('hovered');
};

list.forEach((item) => item.addEventListener('mouseover', activelink));

// 메뉴 토글

const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
const main = document.querySelector('.main');

toggle.onclick = function () {
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

// Add countUp in card 

const counts = document.querySelectorAll('.counter');
const card = document.querySelectorAll('.card');
const countUpObjs = [];

counts.forEach((eachCount, idx) => {
    const startNum = +(eachCount.innerHTML);
    const endNum = +(card[idx].querySelector('.numbers').getAttribute('data-target'));
    //위와 같은 표현👇
    //const endNum = card[idx].querySelector('.numbers').dataset.target;
    const options = {
        startVal: startNum,
        duration: 3,
    };

    countUpObjs.push(new CountUp(eachCount, endNum, options));
});

window.onload = function () {

    countUpObjs.forEach(countUpObj => {

        if (!countUpObj.error) {
            countUpObj.start();
        } else {
            console.error(countUpObj.error);
        }

    })
}