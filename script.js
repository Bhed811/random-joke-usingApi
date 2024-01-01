const btn = document.getElementById('joke-btn');


function showJoke() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const data=JSON.parse(this.responseText).value;
            const div = document.getElementById('joke');
            div.innerHTML = `<strong>${data}</strong>`;              
        }
    }
    xhr.send();
}


//event listener
btn.addEventListener('click', showJoke);

