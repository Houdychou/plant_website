const catalogueWrapper = document.querySelector('.catalogue-grid');
const body = document.querySelector('body');
const darkModeIcon = document.querySelector('.moon-icon');

const ul = document.querySelector('ul');
const links = document.querySelectorAll('li a');
const li = document.querySelectorAll('header li');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');

const h3 = document.querySelectorAll('h3');
const h4 = document.querySelectorAll('h4');

const plantText = document.querySelector('.plantP');
const textMain = document.querySelectorAll('main p');

const stepsSection = document.querySelector('.steps-section');
const stepTxt = document.querySelectorAll('.steps-txt');

const frequentlyAskedWrapper = document.querySelector('.frequently-asked-questions');

const questions = document.querySelectorAll('.questions');
const questionsText = document.querySelectorAll('.questions p');

const footer = document.querySelector('footer');
const secondFormInput = document.querySelector('.secondForm input');

const copyrightText = document.querySelector('.copyright');
const burgerMenuIcon = document.querySelector('.burger-menu-icon');

const form = document.querySelector('.firstForm');

const emailForm = document.querySelector('#email');
const objetForm = document.querySelector('#objet');
const messageForm = document.querySelector('#message');

const textError = document.querySelectorAll('.error');

const catalogueProductsInfos = [
    {
        name: "Cactii",
        price: "19,99€",
        img: "assets/img/product1.png",
    },
    {
        name: "Cactus",
        price: "11,99€",
        img: "assets/img/product2.png"
    },
    {
        name: "Aloe Vera",
        price: "7,99€",
        img: "assets/img/product3.png"
    },
    {
        name: "Succulente",
        price: "5,99€",
        img: "assets/img/product4.png"
    },
    {
        name: "Succulente",
        price: "10,99€",
        img: "assets/img/product5.png"
    },
    {
        name: "Plante Verte",
        price: "8,99€",
        img: "assets/img/product6.png"
    }
]

for (let i = 0; i < catalogueProductsInfos.length; i++) {
    const catalogueProducts = document.createElement('div');
    catalogueProducts.classList.add('catalogue-products');
    catalogueWrapper.appendChild(catalogueProducts);

    const catalogueCircle = document.createElement('div');
    catalogueCircle.classList.add('circle');
    catalogueProducts.appendChild(catalogueCircle);

    const catalogueImg = document.createElement('img');
    catalogueImg.src = catalogueProductsInfos[i].img;
    catalogueProducts.appendChild(catalogueImg);

    const span = document.createElement('span');
    span.textContent = catalogueProductsInfos[i].name;
    catalogueProducts.appendChild(span);

    span.classList.add('plantName');

    const priceDiv = document.createElement('div');
    priceDiv.classList.add('price-wrapper');
    catalogueProducts.appendChild(priceDiv);

    const priceText = document.createElement('span');
    priceDiv.appendChild(priceText);
    priceText.textContent = catalogueProductsInfos[i].price;

    const shopIcon = document.createElement('i');
    priceDiv.appendChild(shopIcon);
    shopIcon.classList.add('ri-git-repository-private-line', 'shop-icon');
}

const catalogueProducts = document.querySelectorAll('.catalogue-products');
const catalogueCircle = document.querySelectorAll('.circle');

darkModeIcon.addEventListener('click', function () {
    body.classList.toggle('body-darkmode');

    h1.classList.toggle('title-darkmode');
    h2.classList.toggle('title-darkmode');

    darkModeIcon.classList.toggle('title-darkmode');
    darkModeIcon.classList.toggle('ri-sun-line');

    stepsSection.classList.toggle('color-darkmode');

    plantText.classList.toggle('text-darkmode');

    frequentlyAskedWrapper.classList.toggle('color-darkmode');

    secondFormInput.classList.toggle('container-darkmode');

    burgerMenuIcon.classList.toggle('text-darkmode');

    footer.classList.toggle('txt-white');
    copyrightText.classList.toggle('text-darkmode');

    emailForm.classList.toggle('text-darkmode');
    messageForm.classList.toggle('text-darkmode');
    objetForm.classList.toggle('text-darkmode');

    links.forEach(item => {
        item.classList.toggle('title-darkmode');
    });

    textMain.forEach(item => {
        item.classList.toggle('text-darkmode');
    });

    h3.forEach(item => {
        item.classList.toggle('title-darkmode');
    });

    h4.forEach(item => {
        item.classList.toggle('title-darkmode');
    });

    stepTxt.forEach(item => {
        item.classList.toggle('container-darkmode');
    });

    catalogueProducts.forEach(item => {
        item.classList.toggle('txt-white');
    });

    catalogueCircle.forEach(item => {
        item.classList.toggle('container-darkmode');
    })

    questions.forEach(item => {
        item.classList.toggle('container-darkmode');
        item.classList.toggle('txt-white');
    });

    questionsText.forEach(item => {
        item.classList.toggle('txt-white');
    });
});

burgerMenuIcon.addEventListener('click', () => {
    ul.classList.remove('hidden');
    ul.classList.add('ul-mobile');
    li.forEach(item => {
        item.classList.add('li-mobile');
    });
    
    links.forEach(item => {
        item.classList.add('ul-li-mobile');
    });
});

li.forEach(item => {
    item.addEventListener('click', () => {
        ul.classList.add('hidden');
        ul.classList.remove('ul-mobile');
        li.forEach(item => {
            item.classList.add('li-mobile');
        });
        
        links.forEach(item => {
            item.classList.remove('ul-li-mobile');
        });
    });
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(!validateEmail(emailForm.value)) {
        textError[0].classList.remove('hidden');
    } else {
        textError[0].classList.add('hidden');
    }

    if(objetForm.value == "") {
        textError[1].classList.remove('hidden');
    } else {
        textError[1].classList.add('hidden');
    }
});
