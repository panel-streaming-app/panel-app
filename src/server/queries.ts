"use server";
import "server-only";
import { db } from "./db";
import { media } from "./db/schema";
import type { Film } from "types";

export const getAll = async (): Promise<Film[]> => {
  const result: Film[] = await db.query.media.findMany();
  console.log("RES: ", result[0]);
  return result;
};

export const seedDB = async (data: Film[]) => {
  await db.insert(media).values(data).returning({ title: media.title });
};
