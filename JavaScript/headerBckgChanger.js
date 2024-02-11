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

    const linearGradient = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))';
    div.style.backgroundImage = `${linearGradient}, ${bckg}`;
}

setInterval(changeBckg, 10000)