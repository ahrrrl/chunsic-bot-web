'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // 여기에 기본 쿼리 옵션을 설정할 수 있습니다
            staleTime: 60 * 1000, // 예: 60초
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <div style={{ fontSize: '20px' }}>
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
    </QueryClientProvider>
  );
}
