const loadHomeContent = (content) => {
    document.querySelector('[data-home]').style.cssText = "text-decoration: 1px underline; text-underline-offset: 4px; color:white"

    document.querySelector('footer').style.setProperty('position', 'fixed');
    content.style.cssText = "height:85vh"

    // content.innerHTML = "";
    content.innerHTML = `
        <div class="d-flex flex-column text-center homepage justify-content-center">
            <h1>A Night In Paris</h1>
            <p class="caption">giving you the best of times</p>
        </div>`
}

export { loadHomeContent }