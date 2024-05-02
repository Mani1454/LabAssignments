class ShoppingListController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.addItem = this.view.addItem.bind(this.view);
        this.model.toggleItemCompletion = this.model.toggleItemCompletion.bind(this.model);

        this.init();
    }

    init() {
        document.getElementById('add-item-form').addEventListener('submit', (event) => {
            event.preventDefault();
            const newItemInput = document.getElementById('new-item');
            const newItemValue = newItemInput.value.trim();
            const itemImageUrlInput = document.getElementById('item-image-url');
            const itemImageUrl = itemImageUrlInput.value.trim();
            if (newItemValue !== '') {
                this.model.addItem(newItemValue, itemImageUrl);
                newItemInput.value = '';
                itemImageUrlInput.value = '';
                this.updateView();
            }
        });

        this.updateView();
    }

    updateView() {
        this.view.itemsContainer.innerHTML = '';
        this.model.items.forEach((item, index) => {
            this.view.addItem(item, index, this.model.toggleItemCompletion);
        });
    }
}
