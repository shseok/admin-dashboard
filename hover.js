let list = document.querySelectorAll('.navigation li');

function activelink() {
    list.forEach((item) => item.classList.remove('hovered'));
    this.classList.add('hovered');
};

list.forEach((item) => item.addEventListener('mouseover', activelink));
