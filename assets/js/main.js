const bind1 = document.querySelector.bind(document)
const bind2 = document.querySelectorAll.bind(document)

const toggleNavMobile = () => {
    bind1('.soft-menu').classList.toggle('open')
    bind1('.soft-menu__list').classList.toggle('open')
}

bind2('.soft-menu__item').forEach((element) => {
  element.onclick = () => {
    toggleNavMobile()
  }
})

bind1('.scroll-to-top').onclick = () => {
    window.scrollTo({
        top: 0,
        left: 100,
        behavior: 'smooth'
    });
}

// handle animation number
function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, 17)

    function updateNumber() {
        if (currentNumber >= finalNumber) {
            clearInterval(interval)
        } else {
            let inc = Math.ceil(finalNumber / (duration / 17))
            if (currentNumber + inc > finalNumber) {
                currentNumber = finalNumber
                clearInterval(interval)
            } else {
                currentNumber += inc
            }
            callback(currentNumber)
        }
    }
}

// loading animation
window.addEventListener('load', (event) => {
  bind1('.loading').style.display = "none"

  // animateNumber(6186056420, 2000, 0, function(number) {
  //   const formattedNumber = number.toLocaleString()
  //   document.getElementById('total-staking').innerText = '$' + formattedNumber;
  // })

//   animateNumber(1374016, 1000, 0, function(number) {
//     // const formattedNumber = number.toLocaleString()
//     document.getElementById('stakers').innerText = number;
//   })

  // animateNumber(6186056420, 2000, 0, function(number) {
  //   const formattedNumber = number.toLocaleString()
  //   document.getElementById('total-rewards').innerText = '$' + formattedNumber;
  // })
});

// handle animation on scroll
let animationWorkFlow = false;

document.addEventListener('scroll', function() {

  if(bind1("#about").getBoundingClientRect().top < 200 && !animationWorkFlow){
    bind1('#workflow-img').classList.add('active')
    animationWorkFlow = true
  }
})

// SLIDER
var swiper4 = new Swiper(".swiper-product-1", {
    slidesPerView: 3,
    spaceBetween: 10,
    // auto
    autoplay: {
        delay: 500,
        disableOnInteraction: false,
    },
    loop:true,
    loopedSlides: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    speed: 4000,
    breakpoints: {
        // when window width is >= 480px
        120: {
        slidesPerView: 2,
        spaceBetween: 2
        },
        // when window width is >= 640px
       // when window width is >= 640px
        740: {
        slidesPerView: 2,
        spaceBetween: 10
        },
        1023: {
        slidesPerView: 6,
        spaceBetween: 20
        }
    },
});

var swiper5 = new Swiper(".swiper-product-2", {
    slidesPerView: 3,
      spaceBetween: 10,
    // auto
    autoplay: {
        delay: 500,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 4000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 480px
        120: {
        slidesPerView: 2,
        spaceBetween: 2
        },
        // when window width is >= 640px
       // when window width is >= 640px
        740: {
        slidesPerView: 2,
        spaceBetween: 10
        },
        1023: {
        slidesPerView: 6,
        spaceBetween: 20
        }
    },
});

var swiperNft = new Swiper(".swiper-nft", {
  slidesPerView: 2,
    spaceBetween: 10,
  // auto
  autoplay: {
      delay: 500,
      disableOnInteraction: false,
  },
  loop: true,
  speed: 4000,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  breakpoints: {
      // when window width is >= 480px
      120: {
      slidesPerView: 2,
      spaceBetween: 2
      },
      // when window width is >= 640px
     // when window width is >= 640px
      740: {
      slidesPerView: 2,
      spaceBetween: 10
      },
      1023: {
      slidesPerView: 2,
      spaceBetween: 20
      }
  },
});