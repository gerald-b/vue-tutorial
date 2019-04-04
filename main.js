var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        description: "A pair of warm, fuzzy socks",
        image: "./image/vmSocks-green-onWhite.jpg",
        myurl: "https://github.com",
        inventory: 100,
        inStock: false,
        onSale: true,
        details: ["80% cotton","20% polyester", "Gender-neutral"],
        variants: [
            {
                variantID: 2234,
                variantColor: "green"
            },
            {
                variantID: 2235,
                variantColor: "blue"
            }
        ],
        sizeAvail: ["37-39", "40-42", "43-45"]        
    }
})