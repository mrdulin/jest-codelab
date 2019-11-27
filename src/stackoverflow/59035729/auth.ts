import * as UserService from "./UserService";

export async function auth(userService: typeof UserService) {
  await userService.getById("1");
  await userService.create({ name: "jest" });
}
