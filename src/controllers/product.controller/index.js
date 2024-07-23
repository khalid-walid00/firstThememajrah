const client = require("../../utils/qumraClient");

module.exports = async (req, res, next) => {
    const {slug} = req.params
    const product = (await client.getProduct({ slug })).data;
    const products = (await client.getProducts({ limit: 10, page: 1 }))?.data;
    res.render("product", {product,products})
  }