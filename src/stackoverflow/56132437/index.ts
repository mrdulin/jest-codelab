import mongoose, { Mongoose } from 'mongoose';
import { MongoError } from 'mongodb';

function callback(err?: MongoError) {
  if (err) {
    console.log(err.message);
  } else {
    console.log('Succesfully Connected!');
  }
}

function connectDatabase(): Promise<Mongoose> {
  const mongoUrl = 'localhost';

  return mongoose.connect(mongoUrl, { useCreateIndex: true, useNewUrlParser: true }, exports.callback);
}

exports.callback = callback;
exports.connectDatabase = connectDatabase;
