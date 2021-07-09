import {loadHomeContent} from './home'
import {loadMenu} from './menu'
import {loadContact} from './contact'

const content = document.querySelector("#content")
const headerOptions = document.querySelectorAll(".header-option")

headerOptions.forEach(el => el.addEventListener ("click", () =>{
    headerOptions.forEach(el => {
        el.style.removeProperty('text-decoration');
        el.style.removeProperty('color');
    })
}))

window.addEventListener('DOMContentLoaded', () => {
    loadHomeContent(content)
});

document.querySelector('[data-logo]').addEventListener('click', (e) => {
    e.preventDefault();
    loadHomeContent(content)
});

document.querySelector('[data-home]').addEventListener('click', (e) => {
    e.preventDefault();
    loadHomeContent(content)
});

document.querySelector('[data-menu]').addEventListener('click', (e) => {
    e.preventDefault();
    loadMenu(content);
});

document.querySelector('[data-contact]').addEventListener('click', (e) => {
    e.preventDefault();
    loadContact(content);
});