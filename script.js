function postData(name, age) {
    fetch('https://simple-api-w90u.onrender.com/api/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, age })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        displayMessage(data.message);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

function displayMessage(message) {
    const dataContainer = document.getElementById('data');
    const messageElement = document.createElement('div');
    messageElement.className = 'item';
    messageElement.textContent = message;
    dataContainer.appendChild(messageElement);
}

function fetchRootMessage() {
    fetch('https://simple-api-w90u.onrender.com/')
        .then(response => response.text())
        .then(message => {
            displayMessage(`Root message: ${message}`);
        })
        .catch(error => {
            console.error('Error fetching root message:', error);
        });
}

function fetchData() {
    fetch('https://simple-api-w90u.onrender.com/api/data')
        .then(response => response.json())
        .then(data => {
            displayMessage(`API Data Message: ${data.message}`);
            displayItems(data.items);
        })
        .catch(error => {
            console.error('Error fetching API data:', error);
        });
}

function displayItems(items) {
    const dataContainer = document.getElementById('data');
    const itemsList = document.createElement('ul');

    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `Item: ${item}`;
        itemsList.appendChild(listItem);
    });

    dataContainer.appendChild(itemsList);
}

document.getElementById('apiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    postData(name, age);
});

fetchRootMessage();
fetchData();
