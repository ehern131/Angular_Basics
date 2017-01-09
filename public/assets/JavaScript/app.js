(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    {
      name:"Pentagonal Gem",
      price: 5.95,
      description: "bruh",
      canPurchase: true,
    },
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: '......',
      canPurchase: false,
    }
  ];
})();
