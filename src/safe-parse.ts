import { BusinessUserSchema } from './model/BusinessUser';
import { User, UserSchema } from "./model/User";

const user = UserSchema.safeParse({
  birthdate: "1997-10-30T00:00:00Z",
  email: "anderson@gmail.com",
  name: "anderson",
  password: "qwe123",
  active: true,
});

const businessUser = BusinessUserSchema.safeParse({
  birthdate: "1997-10-30T00:00:00Z",
  email: "anderson@gmail.com",
  name: "anderson",
  password: "qwe12345",
  active: true,
  cnpj: '12.123.123/0001-21'
});

if (businessUser.success) {
  console.log(businessUser.data);
} else {
  console.log(businessUser.error);
}
