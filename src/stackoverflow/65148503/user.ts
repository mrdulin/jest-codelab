import mongoose from 'mongoose';
const { Schema } = mongoose;

export interface IUser extends mongoose.Document {
  id_test: string;
  password: string;
}

const UserSchema = new Schema({
  id_test: String,
  password: String,
});

const User = mongoose.model<IUser>('User', UserSchema);

export { User };
