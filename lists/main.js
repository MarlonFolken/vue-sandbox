var shoppingList = new Vue({
  el: '#shopping-list',
  data: {
    state: 'default',
    header: 'App listado de compras',
    newItem: '',
    items: [
        'Garrafón agua',
        'Huevo',
        'Manzanas',
    ]
  },
  methods: {
    addItem: function() {
      this.items.push(this.newItem);
      this.newItem = '';
    },
    changeState: function(newState) {
      this.state = newState;
      this.newItem = '';
    }
  }
})