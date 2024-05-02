class ShoppingListModel {
  constructor() {
      this.items = [];
  }

  addItem(itemName, imageUrl) {
      this.items.push({
          name: itemName,
          imageUrl: imageUrl,
          completed: false
      });
  }

  toggleItemCompletion(index) {
      this.items[index].completed = !this.items[index].completed;
  }
}
