import { z } from 'zod';
import { pgTable, text, integer, timestamp, boolean, serial, json } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';

export const users = pgTable("users", {
  id: serial('id').primaryKey(),
  username: text('username').notNull().unique(),
  fullName: text('full_name').notNull(),
  email: text('email').notNull(),
  profileImage: text('profile_image'),
  fitnessLevel: text('fitness_level').notNull().default('beginner'),
  joinDate: timestamp('join_date').notNull().defaultNow()
});

export const insertUserSchema = createInsertSchema(users).omit({ id: true, joinDate: true });

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
