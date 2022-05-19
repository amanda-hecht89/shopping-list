export function renderItem(item) {
    const div = document.createElement('div');

    div.textContent = `${item.name} ${item.quantity}`;
   // if (item.purchased) {
     //   div.classList.add('complete');
   // }
 
    return div;

}