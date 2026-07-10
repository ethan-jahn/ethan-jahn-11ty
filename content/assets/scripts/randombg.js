document.addEventListener("DOMContentLoaded", function() {
    const images = [
        '/assets/images/backgrounds/017C.png',
        '/assets/images/backgrounds/023C.png',
        '/assets/images/backgrounds/024C.png',
        '/assets/images/backgrounds/025C.png',
        '/assets/images/backgrounds/GALAXY3.JPG',
        '/assets/images/backgrounds/ahm60025.jpg',
        '/assets/images/backgrounds/ahm60058.jpg',
        '/assets/images/backgrounds/ahm60083.jpg',
        '/assets/images/backgrounds/cc200371.jpg',
        '/assets/images/backgrounds/cc200372.jpg',
        '/assets/images/backgrounds/cc330139.jpg',
        '/assets/images/backgrounds/cc440038-moldy.jpg',
        '/assets/images/backgrounds/cio60809.jpg',
        '/assets/images/backgrounds/cio60825.jpg',
        '/assets/images/backgrounds/ciq60201.jpg',
        '/assets/images/backgrounds/ciq60593.jpg',
        '/assets/images/backgrounds/comp016.gif',
        '/assets/images/backgrounds/galaxy_b.jpg',
        '/assets/images/backgrounds/galaxy_c.jpg',
        '/assets/images/backgrounds/galaxy_d.jpg',
        '/assets/images/backgrounds/galaxy_e.jpg',
        '/assets/images/backgrounds/qaj50012.jpg',
        '/assets/images/backgrounds/stars.gif',
        '/assets/images/backgrounds/strawbrinv.jpg'
    ];

    function getRandomImage(images) {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }

    const solidMode = localStorage.getItem("bgSolidMode") === "true";

    if (solidMode) {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#ffffff";
    } else {
        const randomImage = getRandomImage(images);
        document.body.style.backgroundImage = `url(${randomImage})`;
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundPosition = "center";
    }
});