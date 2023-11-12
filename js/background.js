const chosenImage = Math.ceil(Math.random()*3); //3는 directory안에 있는 파일 개수를 자의로 입력한 것

url = `img/bgimg${chosenImage}.jpg`; //img url

const bgUrl = `"${url}"`
const bgStyle = document.querySelector(".bgimg");

document.body.style.backgroundImage = `url(${bgUrl})`;