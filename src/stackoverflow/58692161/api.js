const moment = require('moment');
const db = require('./db');

module.exports.updateProductStatus = async data => {
  let updateData = {
    STATUS: data.status,
    UPDATED_TIMESTAMP: moment().unix()
  };
  let result = await db
    .query('UPDATE products SET ? WHERE PRODUCT_ID = ?', [updateData, data.product_id])
    .catch(handleError);
  return result[0];
};

function handleError(error) {
  console.error(error);
}
