'use strict';

const html = document.querySelector('html');
const body = document.querySelector('body');

html.dataset.fadein = 'true';
body.dataset.fadein = 'true';

const fadeInLayer = document.createElement('div');
fadeInLayer.id = 'fade-in-layer';
fadeInLayer.dataset.fadein = 'false';
body.appendChild(fadeInLayer);

chrome.storage.local.get({
    'fadeTime': 1
}, (result) =>
{
    const fadeTimeList = [300, 1200, 3000];
    fadeInLayer.style.transition = `opacity ${fadeTimeList[result.fadeTime]}ms cubic-bezier(0.11, 0, 0.5, 0)`;
});

setTimeout(() =>
{
    fadeInLayer.dataset.fadein = 'true';
}, 50);
