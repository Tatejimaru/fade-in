'use strict';

const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (isDark)
{
    const body = document.querySelector('body');
    const fadeInLayer = document.createElement('div');

    fadeInLayer.id = 'fade-in-layer';

    fadeInLayer.dataset.fadein = 'false';
    body.appendChild(fadeInLayer);
    setTimeout(() =>
    {
        fadeInLayer.dataset.fadein = 'true';
    }, 500);

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
        }, 500);
        return true;
    });
}

