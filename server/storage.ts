import { InsertUser, User } from '../shared/schema';

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private userIdCounter: number;

  constructor() {
    this.users = new Map();
    this.userIdCounter = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const newUser: User = { ...insertUser, id, joinDate: new Date().toISOString() };
    this.users.set(id, newUser);
    return newUser;
  }
}

export const storage = new MemStorage();
