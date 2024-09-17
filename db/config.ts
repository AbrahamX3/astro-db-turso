import { column, defineDb, defineTable } from "astro:db";

const Comments = defineTable({
  columns: {
    id: column.number({
      primaryKey: true,
    }),
    comment: column.text(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Comments },
});
