function changeBckg() {
    const images = [
        'url(/Images/Bckg1.jpg)',
        'url(/Images/Bckg2.jpg)',
        'url(/Images/Bckg3.jpg)',
        'url(/Images/Bckg4.jpg)',
        'url(/Images/Bckg5.jpg)',
        'url(/Images/Bckg6.jpg)',
    ]

    const div = document.querySelector('.Section_top');
    const bckg = images[Math.floor(Math.random() * images.length)];
    div.style.backgroundImage = bckg;
}

setInterval(changeBckg, 5000)