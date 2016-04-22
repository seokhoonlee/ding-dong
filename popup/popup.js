document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('track-button');
    var urlInput = document.getElementById('url-input');
    var keywordInput = document.getElementById('keyword-input');
    
    button.addEventListener('click', function(event) {
        var url = urlInput.value;
        var keyword = keywordInput.value;

        // chrome.runtime.sendMessage({execute: 'addTrack', });
        return;
    });
});