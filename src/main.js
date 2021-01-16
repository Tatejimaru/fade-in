'use strict';

const fadeTimeForm = document.querySelector('#fade-time-form');

chrome.storage.local.get({
    'fadeTime': 1
}, (result) =>
{
    fadeTimeForm.fadeTime[result.fadeTime].checked = true;
});

fadeTimeForm.addEventListener('change', () =>
{
    chrome.storage.local.set({
        'fadeTime': fadeTimeForm.fadeTime.value
    }, () =>
    {});
});

document.querySelector('#done').addEventListener('click', () =>
{
    window.close();
});
