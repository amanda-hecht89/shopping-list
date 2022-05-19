import { checkAuth, logout, createListItem } from '../fetch-utils.js';
import { renderItem } from '../utlis.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const form = document.querySelector('.weNeed');
const shopListEl = document.getElementById('shopList');

logoutButton.addEventListener('click', () => {
    logout();
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const itemData = new FormData(form);
    const data = await createListItem(itemData.get('name'), itemData.get('quantity'));
});

async function displayListItems() {
    shopListEl.textContent = ' ';
    const data = wait fetchListItems();
    (data) {
        for (let item of data) {
            const listEl = renderItem(item);
            listEl.addEventListener('click', async (e) => {
                e.preventDefault()
                await togglePurchased(item);
                displayListItems();
            });
            shopListEl.append(listEl);
        }
    }

}

displayListItems();