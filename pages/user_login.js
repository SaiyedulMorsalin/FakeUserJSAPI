document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const loginData = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };


    try {
        const response = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Login successful:', data);
        alert('Login successful!');
        window.location.href = '../index.html';

    } catch (error) {
        console.error('Error during login:', error);
        alert('Login failed. Please check your username and password and try again.');
    }
});
