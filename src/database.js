import { models } from "beast-orm";
class User extends models.Model {
  id = models.AutoField({
    primaryKey: true,
  });
  nama = models.CharField();
  jenisKelamin = models.CharField();
}

export { User };
