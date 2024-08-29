import { GuildList } from './components/guildList';
import styles from './page.module.scss';

export default function Page() {
  return (
    <div className={styles.container}>
      <h1>참여하고 있는 서버</h1>
      <GuildList />
    </div>
  );
}
