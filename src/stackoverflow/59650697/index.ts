import { Sequelize, Model, DataTypes, BelongsToSetAssociationMixin } from 'sequelize';

const sequelize = new Sequelize('postgres://testuser:testpass@localhost:5430/jestjs-codelab');

export class User extends Model {
  public id!: number;
  public userRoleId!: number;
  public email!: string;
  public password!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public setUserRole!: BelongsToSetAssociationMixin<UserRole, number>;
}

class UserRole extends Model {
  public id!: number;
  public role!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'users',
  },
);

UserRole.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, tableName: 'user_roles', timestamps: false },
);

User.belongsTo(UserRole, { foreignKey: 'user_role_id' });

// sequelize.sync({ force: true }).then(async () => {
//   await UserRole.create({ id: '1', role: 'admin' });
//   const user: any = await User.create({ email: 'example@gmail.com', password: '123', user_role_id: '1' });
//   const userRole = await user.getUserRole();
//   // console.log(userRole.id);
//   console.log('user.user_role_id: ', user.user_role_id);
// });

export const models = { User, UserRole };

export async function createUser(email: string, encryptedPassword: string) {
  const user = await models.User.create({
    email,
    password: encryptedPassword,
  });
  const role = await models.UserRole.create({ role: 'admin' });
  await user.setUserRole(role);
}
