export const redisGet = (client) => async (req, res, next) => {
  try {
    const { postCode, houseNumber } = req.params;
    const addressObj = { postCode, houseNumber };
    const addressGetParams = JSON.stringify(addressObj);

    client.get(addressGetParams, (err, data) => {
      if (data) {
        return res.status(200).send({
          error: false,
          message: `Addresses found.`,
          data: JSON.parse(data),
        });
      }

      if (err) {
        return res.status(400).send({
          error: err,
          message: `Bad request`,
        });
      }

      next();
    });
  } catch (e) {
    throw Error(e);
  }
};
