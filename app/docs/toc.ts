// app/docs/toc.ts
export interface TocItem {
  url: string;
  text: string;
  level: number;
  children?: TocItem[];
}

const appendParentUrl = (
  items: TocItem[],
  parentUrl: string = ''
): TocItem[] => {
  return items.map((item) => {
    const fullUrl = parentUrl ? `${parentUrl}/${item.url}` : item.url;
    return {
      ...item,
      url: fullUrl,
      children: item.children ? appendParentUrl(item.children, fullUrl) : [],
    };
  });
};

export const toc = appendParentUrl([
  {
    url: '/docs/getting-started',
    text: '시작하기',
    level: 1,
    children: [],
  },
  {
    url: '/docs/commands',
    text: '커멘드',
    level: 1,
    children: [
      {
        url: 'set-alarm',
        text: '알람 설정',
        level: 2,
      },
      {
        url: 'set-schedule',
        text: '일정 설정',
        level: 2,
      },
    ],
  },
]);
