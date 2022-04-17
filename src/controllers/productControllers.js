const productController ={
    getProducts: (req, res) => {
        res.render("product-detail", {
            title: "Product Detail"
        })
    },
    productDetail: (req, res) => {
        res.render("product-detail", {
            title: "Product Detail"
        })
    }
}

module.exports = productController;