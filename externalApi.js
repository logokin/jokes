const button = document.querySelector('.get-jokes');

button.addEventListener('click', loadJokes);

function loadJokes(e) {
    // let num = document.querySelector('input[type="number"]');
    let num = document.querySelector('#number');
    let numVal = num.value;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${numVal}`, true)

    xhr.onload = function () {
        if (this.status === 200) {
            const changeData = this.responseText;
            const response = JSON.parse(changeData);
            console.log(response);

            let output = '';
            if (response.type === "success") {
                response.value.forEach(function (data) {
                    output += `<li>${data.joke}</li>`;
                })
            } else {
                output += "<li>something went wrong</>";
            }

            document.querySelector('.jokes').innerHTML = output;
        }
    }
    xhr.send();
    e.preventDefault();
}