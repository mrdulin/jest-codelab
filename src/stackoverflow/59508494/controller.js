import { calcu } from './service';

export const getProduct = (req, res, next) => {
  try {
    const { type } = req.params;
    const { id, productCode } = req.body;

    if (!id || !productCode) {
      res.status(400).json({ error: { message: 'Id or productCode is required' } });
    } else {
      switch (type.toUpperCase()) {
        case 'X':
          try {
            const result = calcu(id, productCode);
            res.status(200).json(result);
          } catch (err) {
            res.status(400).json({ error: { message: err.message } });
          }
          break;
        default:
          res.status(400).json({ error: { message: `type ${type} is not support` } });
      }
    }
  } catch (err) {
    next(err);
  }
};
