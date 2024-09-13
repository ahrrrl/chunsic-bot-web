import { CHUNSIC_BOT_URL } from '@/app/constants';
import Link from 'next/link';
import Button from '@/app/components/button';

export default function ServerLinkButton() {
  return (
    <Link href={CHUNSIC_BOT_URL} target='_blank'>
      <Button>춘식봇 초대하기</Button>
    </Link>
  );
}
