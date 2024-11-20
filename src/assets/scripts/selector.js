document.addEventListener('DOMContentLoaded', () => {

    const speakerSelector = document.querySelector('#speakers__selector');
    const blogSelector = document.querySelector('#blog__selector');
    const contactSelector = document.querySelector('#contact__selector');
    const speakerSelectorFooter = document.querySelector('#footer__speakers__selector');
    const blogSelectorFooter = document.querySelector('#footer__blog__selector');
    const contactSelectorFooter = document.querySelector('#footer__contact__selector');

    const currentPath = window.location.pathname; // Obtiene la ruta actual, por ejemplo "/speaker"
    // Comparar con las rutas correctas según la URL actual
    if (currentPath === '/speakers.html' || currentPath === '/speaker') {
        speakerSelector.classList.add('active');
        speakerSelectorFooter.classList.add('active');
        console.log("Estás en la sección Speakers");
    } else if (currentPath === '/blog.html' || currentPath === '/blog') {
        blogSelector.classList.add('active');
        blogSelectorFooter.classList.add('active');
        console.log("Estás en la sección Blog");
    } else if (currentPath === '/contact.html' || currentPath === '/contact') {
        contactSelector.classList.add('active');
        contactSelectorFooter.classList.add('active');
        console.log("Estás en la sección Contact");
    } else {
        console.log("Sección desconocida:", currentPath);
    }
});