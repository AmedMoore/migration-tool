import Listr from "listr";

import { migrateSchema } from "./tasks/schema.js";
import { migrateFiles } from "./tasks/files.js";
import { migrateUsers } from "./tasks/users.js";
import { migrateData } from "./tasks/data.js";

const tasks = new Listr([
  {
    title: "Migrating Schema",
    task: migrateSchema,
  },
  {
    title: "Migration Files",
    task: migrateFiles,
  },
  {
    title: "Migrating Users",
    task: migrateUsers,
  },
  {
    title: "Migrating Data",
    task: migrateData,
  },
]);

console.log(
  `✨ Migrating ${process.env.V8_URL} (v8) to ${process.env.V9_URL} (v9)...`
);

tasks
  .run()
  .then(() => {
    console.log("✨ All set! Migration successful.");
  })
  .catch((err) => {
    console.error(err);
  });
