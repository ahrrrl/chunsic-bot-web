import { useInfiniteQuery } from '@tanstack/react-query';
import { ITEMS_PER_PAGE } from '@/app/constants';
import { IGuild } from '@/app/lib/mongodb/types';

interface FetchGuildsResponse {
  data: IGuild[];
  hasMore: boolean;
}

const fetchGuilds = async ({ pageParam = 1 }): Promise<FetchGuildsResponse> => {
  const response = await fetch(
    `/api/getGuilds?page=${pageParam}&limit=${ITEMS_PER_PAGE}`
  );
  return response.json();
};

export const useGuildStore = () => {
  return useInfiniteQuery({
    queryKey: ['guilds'],
    queryFn: fetchGuilds,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasMore ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
  });
};
