import {
  boolean,
  index,
  pgTableCreator,
  serial,
  varchar,
  integer,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `streaming-app_${name}`);

export const media = createTable(
  "media",
  {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 256 }).notNull(),
    isBookmarked: boolean("isBookmarked").notNull(),
    category: varchar("category", { length: 20 }).notNull(),
    rating: varchar("rating", { length: 20 }).notNull(),
    year: integer("year").notNull(),
    isTrending: boolean("isTrending").notNull(),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.title),
    isFilmIndex: index("isFilm_idx").on(example.category),
  }),
);
