import { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new Schema();

UserSchema.pre('save', userPreSaveHook);

export async function userPreSaveHook(next) {
  // Only run this function if password was modified
  if (!this.isModified('password')) return next();

  // Hash the password
  this.password = await bcrypt.hash(this.password, 12);

  // Remove passwordConfirm field
  this.passwordConfirm = undefined;

  next();
}
