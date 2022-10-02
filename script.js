const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    let card = document.getElementById("product-card");
    // console.log(card.offsetWidth);
    nxtBtn[i].addEventListener('click', () => {
        // item.scrollLeft += containerWidth;
        item.scrollLeft += card.offsetWidth;
    })

    preBtn[i].addEventListener('click', () => {
        // item.scrollLeft -= containerWidth;
        item.scrollLeft -= card.offsetWidth;
    })
})


        var vid = document.getElementById("myVideo");
        var check = false;
        function playVid() {
            
            console.log(check);
            if(check===false){
                vid.play();
                document.getElementById("play_btn").style.display = "none";
                check = true;
            }
            else{
                vid.pause();
                document.getElementById("play_btn").style.display = "flex";
                check = false;
            }
        }




        // slider
         
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });
