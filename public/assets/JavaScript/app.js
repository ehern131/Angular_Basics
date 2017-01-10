(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    {
      name:"Emerald Gem",
      price: 1.50,
      description: "Colored green by trace amounts of chromium and sometimes vanadium.",
      // canPurchase: true
      images: [
        {
          full: "http://www.gifmania.us/Objects/Jewelry/Gemstones/Emeralds/Emerald-88746.gif",
          thumb: "http://www.gifmania.us/Objects/Jewelry/Gemstones/Emeralds/Emerald-88746.gif"
        },
        {
          full: "http://www.gifmania.us/Objects/Jewelry/Gemstones/Emeralds/Emerald-88746.gif",
          thumb: "http://www.gifmania.us/Objects/Jewelry/Gemstones/Emeralds/Emerald-88746.gif"
        }
      ]
    },
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'A polyhedron with twelve flat faces.',
      // canPurchase: false
      images: [
        {
          full: 'http://math.ucr.edu/home/baez/dodecahedron/Dodecahedron.gif',
          thumb: 'http://math.ucr.edu/home/baez/dodecahedron/Dodecahedron.gif'
        },
        {
          full: 'https://thesithlibrary.files.wordpress.com/2008/03/rotating_dodecahedron.gif',
          thumb: 'https://thesithlibrary.files.wordpress.com/2008/03/rotating_dodecahedron.gif',
        }
      ]
    }
  ];


})();
