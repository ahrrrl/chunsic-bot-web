import { TocItem } from '@/types/common';

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
    description: '춘식봇을 사용하기 위한 기본적인 설정 방법을 설명합니다.',
    level: 1,
    children: [],
  },
  {
    url: '/docs/schedule-management',
    text: '일정관리',
    description:
      '춘식봇의 일정관리는 일정설정과 알람규칙 간의 상호작용으로 이루어집니다.',
    level: 1,
    children: [
      {
        url: 'set-alarm',
        text: '알람규칙 설정',
        description:
          '서버 내의 일정과 관련해서 일괄적으로 적용되는 알람규칙을 설정할 수 있습니다.',
        level: 2,
      },
      {
        url: 'set-schedule',
        text: '일정 설정',
        description: '서버 내의 일정을 설정할 수 있습니다.',
        level: 2,
      },
    ],
  },
  {
    url: '/docs/information-retrieval',
    text: '정보조회',
    description: '춘식봇을 통해 서버와 사용자의 정보를 조회할 수 있습니다.',
    level: 1,
    children: [
      {
        url: 'server-info',
        text: '서버 정보',
        description: '서버의 정보를 조회할 수 있습니다.',
        level: 2,
      },
      {
        url: 'user-info',
        text: '사용자 정보',
        description: '사용자의 정보를 조회할 수 있습니다.',
        level: 2,
      },
    ],
  },
  {
    url: '/docs/miscellaneous',
    text: '기타',
    description: '춘식봇의 기타 기능들을 설명합니다.',
    level: 1,
    children: [
      {
        url: 'indroduce',
        text: '춘식봇 소개',
        description: '춘식봇이 자신을 소개합니다.',
        level: 2,
      },
      {
        url: 'dice',
        text: '주사위',
        description: '주사위를 굴려 결과를 확인할 수 있습니다.',
        level: 2,
      },
      {
        url: 'voting',
        text: '투표하기',
        description: '투표를 생성하고 참여할 수 있습니다.',
        level: 2,
      },
    ],
  },
]);
