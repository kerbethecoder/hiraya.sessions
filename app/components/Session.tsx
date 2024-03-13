import { styles } from '@/ui/styles';

export default function Session() {
  return (
    <div className={`${styles.sessionBox} p-6 flex flex-col justify-between`}>
      <div className={`${styles.flexBetween}`}>
        <p className="font-bold text-lg">Session #1</p>
        <p className="font-bold text-lg">00:23</p>
      </div>
      <div className={`${styles.flexBetween}`}>
        <div className="flex gap-2">
          <div className="text-right">
            <p className="text-sm font-bold">Start time:</p>
            <p className="text-sm font-bold">End time:</p>
            <p className="text-sm font-bold">Service:</p>
            <p className="text-sm font-bold">Price:</p>
          </div>
          <div>
            <p className="text-sm">1:00 PM</p>
            <p className="text-sm">2:00 PM</p>
            <p className="text-sm">1 Hour</p>
            <p className="text-sm">P59</p>
          </div>
        </div>
        <button className={`${styles.newBtn}`}>Extend</button>
      </div>
    </div>
  );
}
