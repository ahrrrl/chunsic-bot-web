import mongoose, { Model } from 'mongoose';
import { IGuild } from '../types';

const GuildSchema = new mongoose.Schema<IGuild>({
  _id: mongoose.Schema.Types.ObjectId,
  guildId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  icon: { type: String },
});

const Guild: Model<IGuild> =
  mongoose.models.Guild || mongoose.model<IGuild>('Guild', GuildSchema);

export default Guild;
