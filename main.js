//galleryのスライドショー
const galleryScreen = document.getElementById("gallery_slide");
const galleryArrowRight = document.getElementById("gallery-slide-arrow-right");
const galleryArrowLeft = document.getElementById("gallery-slide-arrow-left")

//写真の情報
let slideInfo = [
    {image: "IMG_3473_day.jpg"}
    {image: "IMG_3500_night.jpg"}
];

let i= 0;
galleryScreen.src = `./images/${slideInfo[0].image}`

//次の写真に変える関数
const changeImage = function () {
    if (i === Number(slideInfo.length) -1) {
        i = 0;
    } else {
        i++;
    }
    galleryScreen.src = `./images/${slideInfo[i].image}`
};

//right
galleryArrowRight.onclick = function() {
    changeImage();
};

//left
galleryArrowLeft.onclick = function () {
    if( i === 0) {
        i = Number(slideinfo.length) -1;
    } else {
        i -= 1;
    }

galleryScreen.src = `./images/${slideinfo[i].image}`;
};