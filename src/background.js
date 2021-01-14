'use strict';

chrome.tabs.onActivated.addListener((activeInfo) =>
{
    chrome.tabs.sendMessage(activeInfo.tabId, {
        'message': 'activated'
    });
});
