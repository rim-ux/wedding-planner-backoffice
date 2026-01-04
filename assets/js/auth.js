 // Auth Golden Promise
function checkAuth() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

function login(email, password) {
    // Demo accounts
    if ((email === 'sarah@email.com' || email === 'admin@goldenpromise.com') && password === '123456') {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        return true;
    }
    return false;
}

function logout() {
    localStorage.clear();
    window.location.href = 'index.html';
}

