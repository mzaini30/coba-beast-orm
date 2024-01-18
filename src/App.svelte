<script>
  import { User } from "./database";
  import { models } from "beast-orm";
  models.register({
    databaseName: "latihan",
    version: 1,
    models: [User],
    type: "indexedDB",
  });
  async function mainAsync() {
    const user = await User.create([
      {
        nama: "Beast",
        jenisKelamin: "Laki-laki",
      },
      {
        nama: "Zen",
        jenisKelamin: "Laki-laki",
      },
    ]);
    console.log(user);
  }
  mainAsync();
</script>
