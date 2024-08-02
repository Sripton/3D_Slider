
const box = document.querySelectorAll('.box');
box.forEach((elemBox) => {
    elemBox.addEventListener('click', () => {
    elemBox.remove();
    const container = document.querySelector('.container');
    container.appendChild(elemBox);
    })
})

