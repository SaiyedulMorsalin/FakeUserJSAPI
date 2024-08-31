document.getElementById('userForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const userData = {
        name: {
            firstname: document.getElementById('firstname').value,
            lastname: document.getElementById('lastname').value
        },
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        address: {
            city: document.getElementById('city').value,
            street: document.getElementById('street').value,
            number: "null",
            zipcode: document.getElementById('zipcode').value,
            geolocation: {
                lat: '0.0',  // Placeholder for latitude, can replace with actual value
                long: '0.0'  // Placeholder for longitude, can replace with actual value
            }
        },
        phone: document.getElementById('phone').value
    };

    // Send POST request with form data
    try {
        const response = await fetch('https://fakestoreapi.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const user = await response.json();
        console.log('User created successfully:', user);

        // Optionally, clear the form or display a success message
        document.getElementById('userForm').reset();
        alert('User created successfully!');
        window.location.href = '../index.html';
    } catch (error) {
        console.error('Error creating user:', error);
        alert('Failed to create user. Please try again.');
    }
});
