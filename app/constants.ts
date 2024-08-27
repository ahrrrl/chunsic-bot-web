import moonIcon from '@/public/img/icon/moon.svg';
import sunIcon from '@/public/img/icon/sun.svg';
import chunsicMain from '@/public/img/main/춘식봇메인.png';
import chunsicLogo from '@/public/img/logo/chunsic-logo.png';
import docStartServer from '@/public/img/doc/서버추가사진.png';
import docCheckChunsic from '@/public/img/doc/서버추가확인사진.png';
import docCommands from '@/public/img/doc/커멘드목록사진.png';
import docAlarmSetting from '@/public/img/doc/알람설정보기사진.png';
import docSchuduleList from '@/public/img/doc/일정보기사진.png';
import discordIcon from '@/public/img/icon/discord.svg';

// Image Paths
export const IMAGES = {
  CHUNSIC_MAIN: chunsicMain,
  CHUNSIC_LOGO: chunsicLogo,
  MOON_ICON: moonIcon,
  SUN_ICON: sunIcon,
  DOC_START_SERVER: docStartServer,
  DOC_CHECK_CHUNSIC: docCheckChunsic,
  DOC_COMMANDS: docCommands,
  DOC_ALARM_SETTING: docAlarmSetting,
  DOC_SCHUDULE_LIST: docSchuduleList,
  DISCORD_ICON: discordIcon,
};

export const CHUNSIC_BOT_URL =
  'https://discord.com/oauth2/authorize?client_id=1271278938911408228&permissions=0&integration_type=0&scope=bot+applications.commands';

export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const ITEMS_PER_PAGE = 16;
