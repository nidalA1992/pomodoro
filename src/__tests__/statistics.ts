import { stats, type IDayStatistics } from '../domain/statistics';
import { randomBetween } from '../shared/util/randomBetween';
import { setDate } from '../shared/util/setDate';

const statsArr: IDayStatistics[] = [];
const DAYS_MEMBERS = 21;

describe('_____STATISTICS_____', () => {
  test('1. time is recorded in the corresponding date', () => {
    for (let i = 0; i < DAYS_MEMBERS; i++) {
      const randomAmountDayMember = randomBetween(1, 10);

      for (let k = 0; k < randomAmountDayMember; k++) {
        const randomMinutes = randomBetween(25, 50);
        const startDateTime = setDate('Date', -i);
        const finishDateTime = setDate('Minutes', randomMinutes, startDateTime);

        stats.countDayWorkTime(statsArr, startDateTime)(finishDateTime);
      }
    }

    expect(statsArr.length).toEqual(DAYS_MEMBERS);

    statsArr.forEach((day, i) => {
      const currentDate = setDate('Date', -i);
      expect(day.date).toEqual(currentDate.toLocaleDateString());
    });
  });

  test('2. update tasks amount', () => {
    for (let i = 0; i < DAYS_MEMBERS; i++) {
      const randomAmountDayMember = randomBetween(3, 15);

      for (let k = 0; k < randomAmountDayMember; k++) {
        const date = setDate('Date', -i);
        stats.updateTasksAmount(statsArr, date)(date);
      }
    }

    statsArr.forEach((day, i) => {
      const currentDate = setDate('Date', -i);
      expect(day.date).toEqual(currentDate.toLocaleDateString());
    });
  });

  test('3. pause time is recorded in the corresponding date', () => {
    for (let i = 0; i < DAYS_MEMBERS; i++) {
      const randomAmountDayMember = randomBetween(1, 10);

      for (let k = 0; k < randomAmountDayMember; k++) {
        const randomMinutes = randomBetween(1, 10);
        const startDateTime = setDate('Date', -i);
        const finishDateTime = setDate('Minutes', randomMinutes, startDateTime);

        stats.updateDayPauseTime(statsArr, startDateTime)(finishDateTime);
      }
    }

    statsArr.forEach((day, i) => {
      const currentDate = setDate('Date', -i);
      expect(day.date).toEqual(currentDate.toLocaleDateString());
    });
  });

  test('4. update stops amount', () => {
    for (let i = 0; i < DAYS_MEMBERS; i++) {
      const randomAmountDayMember = randomBetween(1, 7);

      for (let k = 0; k < randomAmountDayMember; k++) {
        const date = setDate('Date', -i);
        stats.updateStopsAmount(statsArr, date)(date);
      }
    }

    statsArr.forEach((day, i) => {
      const currentDate = setDate('Date', -i);
      expect(day.date).toEqual(currentDate.toLocaleDateString());
    });
  });
});
