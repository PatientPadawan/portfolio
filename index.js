'use strict';

// render projects
function renderProjects() {
    $('div.projectsFlexContainer').css('display', 'flex');
    $('.project').css('display', 'flex');

    console.log('renderProjects ran');
}

// render contact
function renderContact() {
    $('.contact').css('display', 'block');

    console.log('renderContact ran');
}

// render about me
function renderAboutMe() {
    $('header').css('display', 'block');

    console.log('renderAboutMe ran');
}

// hide projects
function hideProjects() {
    $('.projectsFlexContainer').css('display', 'none');

    console.log('hideProjects ran');
}

// hide contact
function hideContact() {
    $('.contact').css('display', 'none');

    console.log('hideContact ran');
}

// hide about me
function hideAboutMe() {
    $('header').css('display', 'none');

    console.log('hideAboutMe ran');
}

// logo click handler
function handleLogoClick() {
    $('nav').on('click', '.js-logoClick', function (e) {
        renderAboutMe();
        hideProjects();
        hideContact();

        console.log('handleLogoClick ran');
    });
}

// projects click handler
function handleProjectsClick() {
    $('nav').on('click', '.js-projectsClick', function (e) {
        renderProjects();
        hideAboutMe();
        hideContact();

        console.log('handleProjectsClick ran');
    });
}

// contact click handler
function handleContactClick() {
    $('nav').on('click', '.js-contactClick', function (e) {
        renderContact();
        hideAboutMe();
        hideProjects();

        console.log('handleContactClick ran');
    });
}

// function handler
function portfolioLanding() {
    handleProjectsClick();
    handleLogoClick();
    handleContactClick();
}

// event listener for page load
$(portfolioLanding);

// (progressive enhancement coming soon)
// scroll through multiple pictures for each project

// data store (pictures)

// render project photos

// handle next button press

// handle prev button press