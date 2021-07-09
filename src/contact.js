const loadContact = (content) => {
    document.querySelector('[data-contact]').style.cssText = "text-decoration: 1px underline; text-underline-offset: 4px; color:white;"

    document.querySelector('footer').style.setProperty('position', 'fixed');

    content.innerHTML = `
        <div class="container contact-content p-4 rounded" style="width:100%; height:auto; background-color: rgba(0, 0, 0, 0.5);">
            <div class="container info">
                <div class="fs-5">
                    <p><i class="fas fa-map-marker-alt"></i> 324 Saint Martin 75003 Paris</p>
                </div>
                <div class="fs-5">
                    <p><i class="fas fa-clock"></i> Monday-Saturday: 11am-15pm</p>
                </div>
                <div class="fs-5">
                    <p><i class="fas fa-phone-alt"></i> 01 44 61 69 40</p>
                </div>
                <div class="fs-5">
                    <p><i class="fas fa-envelope"></i> Message Us</p>
                </div>
                <form class="text-dark">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="name" placeholder="Full Name">
                        <label for="name">Full Name</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="email" placeholder="Email">
                        <label for="email">Email</label>
                    </div>
                    <div class="form-floating">
                        <textarea id="comment" class="form-control" placeholder="Comment" style="height: 100px"></textarea>
                        <label for="comment">Leave a comment here</label>
                    </div>
                </form>
            </div>
            <div class="container google-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.4739460350065!2d2.353287815425616!3d48.86824090796753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e103687d051%3A0xfc6c9fdec2614d4d!2s324%20Rue%20Saint-Martin%2C%2075003%20Paris!5e0!3m2!1sfr!2sfr!4v1624783830347!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></>"
                    width="100%" height="100%" loading="lazy"></iframe>
            </div>
        </div>
    `
}

export { loadContact }