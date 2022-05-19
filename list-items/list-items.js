import { checkAuth, logout, createListItem, fetchListItems, togglePurchased } from '../fetch-utils.js';
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
    displayListItems();
    return data;
    
});

async function displayListItems() {
    shopListEl.textContent = ' ';
    const data = await fetchListItems();
    console.log(data);
    for (let item of data) {
        const listEl = renderItem(item);
        const upBtn = document.createElement('button');
        upBtn.textContent = 'update';
        upBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            listEl.classList.toggle('complete');
            await togglePurchased(item);
          //  displayListItems();
        });
        shopListEl.append(listEl, upBtn);
        
    }

}

displayListItems();