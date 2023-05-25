const swiper = new Swiper('.swiper', {
    speed: 1000,
    navigation: {
      nextEl: '.swiper-button-next ',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    
    pagination : {
      el: '.swiper-pagination',
      type: 'fraction'
    },

    // effect: "cube",

    // cubeEffect: {
    //   slideShadow: true,
    //   limitRotate: true,
    //   shadowScale: 1,

    // }
})

const read = document.querySelector('.read')
const parent = document.querySelector('.parent')
const slider = document.querySelector('.testimonials-container')
const body = document.querySelector('.body')



read.addEventListener('click', () =>{
     parent.classList.add('disactive')
     parent.classList.remove('active')
     body.classList.remove('body')


     slider.classList.add('active')
     slider.classList.remove('disactive')
})





