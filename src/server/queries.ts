"use server";
import "server-only";
import { db } from "./db";
import { media } from "./db/schema";
import type { Film } from "types";
import { eq, ilike, and } from "drizzle-orm";

export const getEvery = async (category?: string): Promise<Film[]> => {
  if (category) {
    const result: Film[] = await db
      .select()
      .from(media)
      .where(eq(media.category, category));
    return result;
  }

  const result: Film[] = await db.query.media.findMany();
  return result;
};

export const getBySearch = async (search: string, category?: string) => {
  if (category) {
    const result: Film[] = await db
      .select()
      .from(media)
      .where(
        and(ilike(media.title, `%${search}%`), eq(media.category, category)),
      );
    return result;
  } else {
    const result: Film[] = await db
      .select()
      .from(media)
      .where(ilike(media.title, `%${search}%`));
    return result;
  }
};

export const getAllBookmarks = async () => {
  const result: Film[] = await db
    .select()
    .from(media)
    .where(eq(media.isBookmarked, true));
  return result;
};

export const getBookmarkBySearch = async (search: string) => {
  const result: Film[] = await db
    .select()
    .from(media)
    .where(
      and(ilike(media.title, `%${search}%`), eq(media.isBookmarked, true)),
    );
  return result;
};

export const seedDB = async (data: Film[]) => {
  await db.insert(media).values(data).returning({ title: media.title });
};
