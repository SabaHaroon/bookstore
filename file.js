searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
};
let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
};
document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('active');

};
window.onscroll = () => {
    searchForm.classList.remove('active');
    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
};
window.onload = () => {
    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
};


var swiper = new Swiper(".books-slider", {

    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidePerView: 1
        },
        768: {
            slidePerView: 2,
        },

        1024: {
            slidePerView: 3,
        },
    },

});

var swiper = new swiper(".featured-slider",
    {
        spaceBetween: 10,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 9500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: "swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidePerView: 1,
            },
            450: {
                slidePerView: 2,
            },
            768: {
                slidePerView: 3,
            },

            1024: {
                slidePerView: 4,
            },
        },

    });




var swiper = new swiper(".arrivals-slider",
    {
spaceBetween: 10,
loop: true,
centeredSlides: true,
autoplay: {
    delay: 9500,
    disableOnInteraction: false,
},
breakpoints: {
    0: {
        slidePerView: 1
    },
    768: {
        slidePerView: 2
    },

    1024: {
        slidePerView: 3
    },
        },

    });
var swiper = new swiper(".reviews-slider",
    {
        spaceBetween: 10,
        loop: true,
        centeredSlides: true,
        autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidePerView: 1
        },
        768: {
            slidePerView: 2
        },

        1024: {
            slidePerView: 3
        },
    },

});
var swiper = new swiper(".blogs-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    const searchResultsContainer = document.getElementById('searchResults');

    searchInput.addEventListener('input', performSearch);
    function performSearch(){
    const searchTerm = searchInput.value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.ISBN.includes(searchTerm));
    displaySearchResults(filteredBooks);
},
  function displaySearchResults(results) {
        searchResultsContainer.innerHTML = '';

        results.forEach(book => {
            const bookDiv = document.createElement('div');
            bookDiv.classList
        })
    }