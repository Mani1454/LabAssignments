class ShoppingListView {
    constructor() {
        this.itemsContainer = document.getElementById('items-container');
    }

    addItem(item, index, toggleItemCompletion) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = item.completed;
        checkbox.addEventListener('change', () => {
            toggleItemCompletion(index);
        });

        const label = document.createElement('label');
        label.textContent = item.name;
        label.classList.toggle('completed', item.completed);

        const img = document.createElement('img');
        img.src = item.imageUrl;
        img.onerror = function() {
            img.src = 'placeholder.jpg'; // Placeholder image if provided image URL fails to load
        };

        itemDiv.appendChild(checkbox);
        itemDiv.appendChild(label);
        itemDiv.appendChild(img);
        this.itemsContainer.appendChild(itemDiv);
    }
}
