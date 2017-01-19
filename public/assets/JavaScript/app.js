(function(){
  var app = angular.module('store', []);


  app.controller('StoreController', function(){
    this.products = gems;
  });


  app.controller('PanelController', function(){
    this.tab = 1;

    this.selectTab = function(setTab){
      this.tab = setTab;
    };
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });


  app.controller('ReviewController', function(){
    this.review= {};

    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  var gems = [
    {
      name:"Icosahedron",
      price: 3.25,
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
      ],
      reviews: [
        {
          stars: 5,
          body: "I love this product!",
          author: "joe@thomas.com"
        },
        {
          stars: 4,
          body: "Dude, this is the best!",
          author: "erickh@blah.co"
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
      ],
      reviews: [
        {
          stars: 5,
          body: "I love this product!",
          author: "joe@thomas.com"
        },
        {
          stars: 4,
          body: "Dude, this is the best!",
          author: "erickh@blah.co"
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
      ],
      reviews: [
        {
          stars: 5,
          body: "I love this product!",
          author: "joe@thomas.com"
        },
        {
          stars: 4,
          body: "Dude, this is the best!",
          author: "erickh@blah.co"
        }
      ]
    }
  ];


})();
