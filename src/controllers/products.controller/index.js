const client = require("../../utils/qumraClient");

module.exports = async (req, res, next) => {
    // const {slug} = req.params
    const product = (await client.getProduct()).data;
    console.log("🚀 ~ module.exports= ~ products:", product)
    res.render("products.njk")
  }