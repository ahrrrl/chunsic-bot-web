import { IMAGES } from '@/app/constants';
import { IGuild } from '@/app/lib/mongodb/types';
import Image from 'next/image';
import styles from './guildCard.module.scss';

export default function GuildCard({ guild }: { guild: IGuild }) {
  return (
    <div className={styles.card}>
      <Image
        className={styles.image}
        src={guild.icon || IMAGES.DISCORD_ICON}
        alt={`${guild.name} 이미지`}
        width={100}
        height={100}
        priority
      />
      <h2>{guild.name}</h2>
    </div>
  );
}
