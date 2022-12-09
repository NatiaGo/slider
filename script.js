let data = [
  {
    id: 1,
    imageUrl: "https://love-shayari.co/wp-content/uploads/2021/10/sun-rise.jpg",
    title: "slider title 1",
  },
  {
    id: 2,
    imageUrl: "https://www.w3schools.com/w3css/img_lights.jpg",
    title: "slider title 2",
  },
  {
    id: 3,
    imageUrl:
      "https://nystudio107-ems2qegf7x6qiqq.netdna-ssl.com/img/blog/_1200x675_crop_center-center_82_line/image_optimzation.jpg",
    title: "slider title 3",
  },
];

const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
const sliderContent = document.getElementById("slider-content");
let sliderIndex = 0;
let dotItem = document.getElementsByClassName('dot');


//დივის შექმნა
function createDivTag() {
  const divTag = document.createElement("div");
  divTag.classList.add("slide");

  return divTag;
}
// ფოტოს შექმნა
// function createImgTag (item){
//     const imgTag = document.createElement('img');
//     imgTag.setAttribute('src', item.imageUrl);
//     imgTag.setAttribute('alt', item.title );

//     return imgTag;
// }
// background ის შექმნა
function createImgTag(item) {
  const imgTag = document.createElement("div");
  imgTag.style.background = `url(${item.imageUrl})`;
  imgTag.classList.add('bg-image');

  return imgTag;
}
// სათაურის შექმნა
function createTitleTag(item) {
  const titleTag = document.createElement("h3");
  titleTag.innerText = item.title;
  return titleTag;
}
// დოტსის ლოგიკა
function createDots() {
  const dotsParent = document.createElement("div");
  dotsParent.classList.add("dotParent");


  data.forEach((Element) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.setAttribute('data-id', Element.id - 1)
    dotsParent.appendChild(dot);
    dot.addEventListener('click', function(event){
      let id = event.target.getAttribute('data-id');
      sliderIndex = id;
      slide();
    })
  });
  

  return dotsParent;
}


function slide() {
  sliderContent.innerHTML = " ";
  const slideItem = createDivTag(data[sliderIndex]);
  const imgTag = createImgTag(data[sliderIndex]);
  const titleTag = createTitleTag(data[sliderIndex]);
  const dotsElement = createDots();

  slideItem.appendChild(imgTag);
  slideItem.appendChild(titleTag);
  sliderContent.appendChild(slideItem);
  sliderContent.appendChild(dotsElement);
  dotItem[sliderIndex].classList.add('activeDot');

}

function arrowLeftClick() {
  if (sliderIndex == 0) {
    sliderIndex = data.length - 1;
    slide();
    return;
  }
  sliderIndex--;
  slide();
}

function arrowRightClick() {
  if (sliderIndex == data.length - 1) {
    sliderIndex = 0;
    slide();
    return;
  }
  sliderIndex++;
  slide();
}

arrowLeft.addEventListener("click", arrowLeftClick);
arrowRight.addEventListener("click", arrowRightClick);

setInterval ( ()=> {
    arrowRightClick();
}, 3000 );

slide();


// სარეგისტრაციო ფორმა
// let registrationForm = document.getElementById('registrationForm');
// registrationForm.addEventListener('submit', function(event){
//     event.preventDefault();
//     let errors = ();

// })