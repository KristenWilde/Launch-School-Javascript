var inventory;

(function() {
  inventory = {
    last_id: 0,
    collection: [],
    setDate: function() {
      $('#order_date').text((new Date).toUTCString());
    },
    cacheTemplate: function() {
      var $inv_template = $('#inventory_item').remove();
      this.template = $inv_template.html();
    },
    bindEvents: function() {
      $('#add_item').on('click', this.newItem.bind(this));
      $('#inventory').on('click', '.delete', this.deleteItem.bind(this));
      $('#inventory').on('blur', ':input', this.updateItem.bind(this));
    },
    add: function() {
      this.last_id++;
      var item = {
        id: this.last_id,
        name: '',
        stock_number: '',
        quantity: 1
      }
      this.collection.push(item);
      return item;
    },
    newItem: function(e) {
      e.preventDefault();
      var item = this.add();
      var $item = $(this.template.replace(/ID/g, item.id));
      $('#inventory').append($item);
    },
    deleteItem: function(e) {
      e.preventDefault();
      var $tr = $(e.currentTarget).closest('tr').remove();
      var id = $tr.find('input[type=hidden]').val();
      console.log(id)
      this.removeFromCollection(id);
    },
    removeFromCollection: function(id) {
      this.collection = this.collection.filter(function($item) {
        return $item.id != id;
      });
    },
    updateItem: function(e) {
      var fieldName = $(e.currentTarget).attr('name');
      var id = Number(fieldName.match(/_([1-9]+)/)[1]);
      var property = fieldName.match(/item_([a-z_']+)_[1-9]+/)[1];
      var value = $(e.currentTarget).val();
      var item = this.getItem(id);
      item[property] = value;
      console.log(item);
    },
    getItem: function(idNum) {
      return this.collection.filter(function(item) {
        return item.id === idNum;
      })[0];
    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    },
  };
})();

inventory.init = inventory.init.bind(inventory);

$(inventory.init);

// $(function() {

// });