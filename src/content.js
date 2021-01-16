'use strict';

const html = document.querySelector('html');
const body = document.querySelector('body');

html.dataset.fadein = 'true';
body.dataset.fadein = 'true';

const fadeInLayer = document.createElement('div');
fadeInLayer.id = 'fade-in-layer';
fadeInLayer.dataset.fadein = 'false';
body.appendChild(fadeInLayer);

setTimeout(() =>
{
    fadeInLayer.dataset.fadein = 'true';
}, 50);
