import { checkAuth, logout, createListItem } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const form = document.querySelector('.weNeed');
const error = document.getElementById('error');

logoutButton.addEventListener('click', () => {
    logout();
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const itemData = new FormData(form);
    const data = await createListItem(itemData.get('name'), itemData.get('qty'));
    if (data) {
        window.location.href = '/';
    } else {
        error.textContent = 'try again!';
    }
});

