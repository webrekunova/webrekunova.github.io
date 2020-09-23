import './styles/style.css';
import renderSlider from './scripts/slider';
import renderCalc from './scripts/calc';
import createModal from './scripts/modal';
import validateForm from './scripts/validation';


renderCalc();
renderSlider();

const tabLinks = document.querySelectorAll(".tabs a");
const tabPanels = document.querySelectorAll(".tabs-panel");

for (let el of tabLinks) {
    el.addEventListener("click", e => {
        e.preventDefault();

        document.querySelector(".tabs li.active").classList.remove("active");
        document.querySelector(".tabs-panel.active").classList.remove("active");

        const parentListItem = el.parentElement;
        parentListItem.classList.add("active");
        const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

        const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
        panel[0].classList.add("active");
    });
}

var tableTexts = document.getElementsByClassName('table-text');

for (let i = 0; i < tableTexts.length; i++) {
    if (tableTexts[i].parentElement.className === 'table-item' && tableTexts[i].innerHTML === '') {
        tableTexts[i].parentElement.style.listStyle = 'none'
    }
}

let menuButton = document.getElementById('burger-icon')
menuButton.style.cursor = 'pointer';
menuButton.onclick = function () {
    if(document.getElementById('modal-menu').style.display === 'none'){
        document.getElementById('modal-menu').style.display = 'block';
        menuButton.classList.add('close-button')
    }
    else{
        document.getElementById('modal-menu').style.display = 'none';
        menuButton.classList.remove('close-button')
    }
}

const getPDFButton = document.querySelector('.report-pdf-btn');
const pdfInnerModal = document.querySelector('.report-modal');

getPDFButton.addEventListener('click', () => createModal(pdfInnerModal));

const submitBtns = document.querySelectorAll('.modal-submit');
const successModal = document.querySelector('.success-modal');


submitBtns.forEach(submitBtn => {
    submitBtn.addEventListener('click', (e) => {
        const isValid = validateForm(e);
        if(isValid){
            createModal(successModal)
        }
    });
});

const inputs = document.querySelectorAll('input')
inputs.forEach(input => {
    input.addEventListener('keypress', (e) => 
    {
        e.target.classList.remove('input-error');
        const type = input.getAttribute('type');
        const isEmail = type === "email" ? true : false;
        if(isEmail){
            const errors = document.querySelectorAll('.email-error')
            errors.forEach(el => { 
                el.remove();
            });
        }
    })
});



const researchModal = document.querySelector('.research-modal')
  
setTimeout(
    () => createModal(researchModal),
 30000)