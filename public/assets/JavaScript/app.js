(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    {
      name:"Icosahedron",
      price: 1.50,
      description: "A polyhedron with twenty flat faces.",

      // canPurchase: true
      images: [
        {
          full: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Icosahedron.gif",
          thumb: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Icosahedron.gif"
        },
        {
          full: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Icosahedron.gif",
          thumb: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Icosahedron.gif"
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
    },
    {
      name: 'Tetrahedron',
      price: 2.25,
      description: 'A polyhedron with four flat faces.',
      // canPurchase: false
      images: [
        {
          full: 'http://i.giphy.com/HTWjbyY5prTW.gif',
          thumb: 'http://i.giphy.com/HTWjbyY5prTW.gif'
        },
        {
          full: 'http://i.giphy.com/HTWjbyY5prTW.gif',
          thumb: 'http://i.giphy.com/HTWjbyY5prTW.gif',
        }
      ]
    }
  ];


})();
