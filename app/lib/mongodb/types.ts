import { Document } from 'mongoose';

export interface IGuild extends Document {
  _id: string;
  guildId: string;
  name: string;
  icon?: string;
}
