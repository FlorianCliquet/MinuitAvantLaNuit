function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' , block:'center'});
}
/* Fait pour remplacer l'ancrage de manière fluide*/