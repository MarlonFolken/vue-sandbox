var shoppingList = new Vue({
  el: '#shopping-list',
  data: {
    state: 'default',
    header: 'App listado de compras',
    newItem: '',
    searchShop: 'https://www.google.com/search?q=compra+despensa+en+linea&oq=compra+despensa+en+linea',
    items: [
      {
        label: "Garrafón agua",
        purchased: false,
        highPriority: true
      },
      {
        label: "Huevo",
        purchased: false,
        highPriority: false
      },
      {
        label: "Manzanas",
        purchased: true,
        highPriority: false
      },
      {
        label: "Espinaca",
        purchased: true,
        highPriority: true
      }
    ]
  },
  methods: {
    addItem: function() {
      this.items.push({
        label: this.newItem,
        purchased: false,
        highPriority: false
      });
      this.newItem = '';
    },
    changeState: function(newState) {
      this.state = newState;
      this.newItem = '';
    },
    togglePurchased: function(item) {
      item.purchased =  !item.purchased;
    }
  },
  /* -computed- changes how info is shown,
   * without changing source info itself.
   */
  computed: {
    typedCount() {
      if(!this.newItem.length){
        return 0
      }
      return this.newItem.length;
    },
    lastToTopList() {
      return this.items.slice(0).reverse()
    }
  }
})