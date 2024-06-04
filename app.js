document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    try {
        const response = await fetch('/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        document.getElementById('signupMessage').textContent = data.message || data.error;
    } catch (error) {
        document.getElementById('signupMessage').textContent = 'Error: ' + error.message;
    }
});

document.getElementById('signinForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('signinUsername').value;
    const password = document.getElementById('signinPassword').value;

    try {
        const response = await fetch('/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        if (data.message) {
            window.location.href = 'movies.html'; // Redirect to movies page on successful login
        } else {
            document.getElementById('signinMessage').textContent = data.error;
        }
    } catch (error) {
        document.getElementById('signinMessage').textContent = 'Error: ' + error.message;
    }
});
