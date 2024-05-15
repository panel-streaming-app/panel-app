import {
  boolean,
  index,
  pgTableCreator,
  serial,
  // timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `streaming-app_${name}`);

export const media = createTable(
  "media",
  {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 256 }).notNull(),
    thumbnail: varchar("thumbnail", { length: 2000 }).notNull(),
    bookmarked: boolean("bookmarked").notNull(),
    type: varchar("type", { length: 20 }).notNull(),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.title),
    typeIndex: index("type_idx").on(example.type),
  }),
);
