document.getElementById('redirectBtn').addEventListener('click', function() {
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const url = tabs[0].url;
        if (url.includes('music.yandex.ru')) {
        const newUrl = 'yandexmusic://' + url.split('music.yandex.ru')[1];
        chrome.tabs.update(tabs[0].id, { url: newUrl });
        } else {
        alert('This is not a valid Yandex Music URL');
        }
    });
});

// Buttons
const buttonActions = {
    women: () => {
        const nya = new Audio('./assets/nya.mp3');
        nya.play();
    },
};

Object.entries(buttonActions).forEach(([id, action]) => {
    document.getElementById(id).addEventListener("click", action);
});