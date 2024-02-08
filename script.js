$(document).ready(function() {
    getNewQuote();
});

function getRandomColor() {
    const letters = '89ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 8)];
    }
    return color;
}

function changeBackgroundColor() {
    let randomColor = getRandomColor();
    $('body').css('background-color', randomColor);
    $('button').css('background-color', randomColor);
    $('.buttons a').css('background-color', randomColor);
}

function getNewQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            // Update the text span with the quote
            document.getElementById('text').textContent = data.content;
            
            // Update the author span with the author
            document.getElementById('author').textContent = data.author;
            
            // Optionally, you can also update the background color
            changeBackgroundColor();
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
        });
    changeBackgroundColor();
}

$('#new-quote').on('click', function() {
    getNewQuote();
});