'use strict';

// render projects
function renderProjects() {
    $('div.projectsFlexContainer').css('display', 'flex');
    $('.project').css('display', 'flex');
    console.log('renderProjects ran');
}

// render contact

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
    });
}

// projects click handler
function handleProjectsClick() {
    $('nav').on('click', '.js-projectsClick', function (e) {
        renderProjects();
        hideAboutMe();
    });
}

// contact click handler

// function handler
function portfolioLanding() {
    handleProjectsClick();
    handleLogoClick();
}

// event listener for page load
$(portfolioLanding);

// (progressive enhancement coming soon)
// scroll through multiple pictures for each project

// data store (pictures)

// render project photos

// handle next button press

// handle prev button press