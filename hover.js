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