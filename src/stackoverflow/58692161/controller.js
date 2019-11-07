const apiModel = require('./api');

module.exports.updateProductStatus = async (req, res, next) => {
  let result = await apiModel.updateProductStatus(req.body);
  if (result.affectedRows > 0) {
    res.send({
      status: 'success',
      message: 'product status updated.'
    });
  } else {
    res.send({
      status: 'error',
      message: 'failed to update product status.'
    });
  }
};
