var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    description: "A pair of warm, fuzzy socks",
    image: "./image/vmSocks-green-onWhite.jpg",
    myurl: "https://github.com",
    inventory: 100,
    inStock: false,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantID: 2234,
        variantColor: "green",
        variantImage: "./image/vmSocks-green-onWhite.jpg"
      },
      {
        variantID: 2235,
        variantColor: "blue",
        variantImage: "./image/vmSocks-blue-onWhite.jpg"
      }
    ],
    cart: 0,
    sizeAvail: ["37-39", "40-42", "43-45"]
  },
  methods: {
    addToCart: function() {
      this.cart += 1;
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    },
    removeFromCart: function() {
      if (this.cart > 0) {
        this.cart -= 1;
      }
    }
  }
});
