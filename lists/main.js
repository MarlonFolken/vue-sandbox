var shoppingList = new Vue({
  el: '#shopping-list',
  data: {
    state: 'default',
    header: 'App listado de compras',
    newItem: '',
    items: [
      {
        label: "Garrafón agua",
        purchased: false
      },
      {
        label: "Huevo",
        purchased: false
      },
      {
        label: "Manzanas",
        purchased: true
      }
    ]
  },
  methods: {
    addItem: function() {
      this.items.push({
        label: this.newItem,
        purchased: false
      });
      this.newItem = '';
    },
    changeState: function(newState) {
      this.state = newState;
      this.newItem = '';
    }
  }
})