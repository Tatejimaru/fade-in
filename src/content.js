'use strict';

const html = document.querySelector('html');
const body = document.querySelector('body');
const fadeInLayer = document.createElement('div');

fadeInLayer.id = 'fade-in-layer';
body.style.opacity = '100%';
html.style.backgroundColor = 'transparent';

fadeInLayer.dataset.fadein = 'false';
body.appendChild(fadeInLayer);

setTimeout(() =>
{
    fadeInLayer.dataset.fadein = 'true';
}, 100);


chrome.runtime.onMessage.addListener((message) =>
{
    if (message.message !== 'activated')
    {
        return true;
    }

    if (body.contains(fadeInLayer))
    {
        body.removeChild(fadeInLayer);
    }

    fadeInLayer.dataset.fadein = 'false';
    body.appendChild(fadeInLayer);
    setTimeout(() =>
    {
        fadeInLayer.dataset.fadein = 'true';
    }, 100);
});
