import { inter } from '@/ui/fonts';
import { styles } from '@/ui/styles';
import { Session } from '@/components/index';

const currentDate = new Date();

const formattedDate = currentDate.toLocaleDateString('en-us', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

export default function Home() {
  return (
    <main>
      <div className={`${styles.flexBetween} ${inter.className}`}>
        <p>
          <span className="font-bold">Active Sessions&nbsp;</span> &mdash;{' '}
          {formattedDate}
        </p>
        <button className={`${styles.newBtn}`}>New +</button>
      </div>
      <div className="flex flex-wrap gap-10 justify-center py-5">
        <Session />
        <Session />
        <Session />
        <Session />
        <Session />
        <Session />
      </div>
    </main>
  );
}
