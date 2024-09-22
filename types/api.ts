import { IGuild } from '@/app/lib/mongodb/types';

export interface GuildsListResponseData {
  success: boolean;
  data?: IGuild[];
  message?: string;
  hasMore: boolean;
}
