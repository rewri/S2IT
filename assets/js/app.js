var app = new Vue({
  el: '#app',

  data: {
    userName: 'Rérisson',
    amount: [
      {"type": "Depósito", "value": "100.00"},
      {"type": "Depósito", "value": "50.50"},
      {"type": "Saque", "value": "-50.00"},
      {"type": "Saque", "value": "-10.50"},
      {"type": "Depósito", "value": "80.00"}
    ],    
    actionLabel: 'Sacar',
    total: 0,
    input: '',
    action: 'out',
  },

  methods: {

    fetchTotal: function() {
      var values = this.amount.map((elem) => elem.value); 
      this.total = values.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);      
    },

    sanitizeValue: function(value) {
      return parseFloat(value.replace(/,/g, '.'));
    },

    addAmount: function() {
      var value = this.sanitizeValue(this.input.trim());
      var action = this.action;
      if (value && action) {
        if (action === 'out') {
          if (parseFloat(this.total.toFixed(2)) >= parseFloat(value.toFixed(2))) {
            this.makeOutValue(value);
          } else {
            alert('Você não tem saldo suficiente!');
          }
        } else if (action == 'in') {
          this.makeInValue(value);
        }
      }
    },

    makeOutValue: function(value) {
      var newAmount = {"type": "Saque", "value": "-" + value.toFixed(2)};
      this.amount.push(newAmount);
      this.fetchTotal();
      this.input = '';
    },
    
    makeInValue: function(value) {
      var newAmount = {"type": "Depósito", "value": value.toFixed(2)};
      this.amount.push(newAmount);
      this.fetchTotal();
      this.input = '';
    },

    removeItem: function(index) {
      var value = parseFloat(this.amount[index].value);
      if (parseFloat(this.total.toFixed(2)) >= value.toFixed(2)) {
        this.amount.splice(index, 1);
        this.fetchTotal();
      } else {
        alert('Não é possível excluir depósito maior que seu saldo.');
      }
    },

  },

  filters: {
    currency: function(value) {
      return value.replace('.', ',');
    }   
  },

  mounted: function() {
    this.fetchTotal();
  }

})
