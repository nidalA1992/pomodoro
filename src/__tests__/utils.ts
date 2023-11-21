import { createInitialDate } from '../shared/util/createInitialDate';
import { randomBetween } from '../shared/util/randomBetween';
import { setDate } from '../shared/util/setDate';

type DatesArray = ('Minutes' | 'Seconds' | 'Hours' | 'Date')[];

describe('\n_____UTILS_____\n', () => {
  describe('crate initial date', () => {
    const initialDate = createInitialDate();

    test('exist createdAt and updatedAt properties', () => {
      expect(initialDate).toHaveProperty('createdAt');
      expect(initialDate).toHaveProperty('updatedAt');
    });

    test('createdAt and updatedAt properties have necessary format', () => {
      expect(new Date(initialDate.createdAt).toISOString()).toEqual(
        initialDate.createdAt
      );
      expect(new Date(initialDate.updatedAt).toISOString()).toEqual(
        initialDate.updatedAt
      );
    });

    test('property createdAt and updatedAt are equal', () => {
      expect(initialDate.createdAt).toEqual(initialDate.updatedAt);
    });
  });

  describe('randomBetween', () => {
    test('random included passes values', () => {
      const random = randomBetween(2, 1);
      const random2 = randomBetween(6, 5);
      const random3 = randomBetween(10, 11);
      expect(random === 1 || random === 2).toBeTruthy();
      expect(random === 1 || random === 2).toBeTruthy();
      expect(random === 1 || random === 2).toBeTruthy();
      expect(random2 === 6 || random2 === 5).toBeTruthy();
      expect(random2 === 6 || random2 === 5).toBeTruthy();
      expect(random2 === 6 || random2 === 5).toBeTruthy();
      expect(random3 === 10 || random3 === 11).toBeTruthy();
      expect(random3 === 10 || random3 === 11).toBeTruthy();
      expect(random3 === 10 || random3 === 11).toBeTruthy();
    });
    test('if boundary values are equal', () => {
      expect(randomBetween(1, 1)).toEqual(1);
      expect(randomBetween(2, 2)).toEqual(2);
      expect(randomBetween(3, 3)).toEqual(3);
    });
    test('the order of the arguments is not important', () => {
      const val1 = randomBetween(2, 1);
      expect(val1 >= 1 && val1 <= 2).toBeTruthy();
      const val2 = randomBetween(1, 10);
      expect(val2 >= 1 && val2 <= 10).toBeTruthy();
      const val3 = randomBetween(100, 1000);
      expect(val3 >= 100 && val3 <= 1000).toBeTruthy();
    });
  });

  describe('setDate', () => {
    const units: DatesArray = ['Seconds', 'Minutes', 'Hours', 'Date'];

    units.forEach(unit => {
      const date = new Date(new Date().setDate(new Date().getDate() - 1));
      const timeUnitToMilliseconds = {
        Seconds() {
          return 1000;
        },
        Minutes() {
          return this.Seconds() * 60;
        },
        Hours() {
          return this.Minutes() * 60;
        },
        Date() {
          return this.Hours() * 24;
        },
      };

      const checkData = timeUnitToMilliseconds[unit]();

      test(`set ${unit} forward`, () => {
        expect(Math.round(+setDate(unit, 10) - +new Date())).toEqual(
          10 * checkData
        );
        expect(Math.round(+setDate(unit, 30) - +new Date())).toEqual(
          30 * checkData
        );
        expect(Math.round(+setDate(unit, 55) - +new Date())).toEqual(
          55 * checkData
        );
      });
      test(`set ${unit} back`, () => {
        expect(Math.round(+new Date() - +setDate(unit, -10))).toEqual(
          10 * checkData
        );
        expect(Math.round(+new Date() - +setDate(unit, -30))).toEqual(
          30 * checkData
        );
        expect(Math.round(+new Date() - +setDate(unit, -55))).toEqual(
          55 * checkData
        );
      });
      test(`set ${unit} with passed option "date" param`, () => {
        expect(Math.round(+setDate(unit, 10, date) - +date)).toEqual(
          10 * checkData
        );
        expect(Math.round(+setDate(unit, 30, date) - +date)).toEqual(
          30 * checkData
        );
        expect(Math.round(+setDate(unit, 55, date) - +date)).toEqual(
          55 * checkData
        );
      });
      test(`set ${unit} to back with passed option "date" param`, () => {
        expect(Math.round(+setDate(unit, 10, date) - +date)).toEqual(
          10 * checkData
        );
        expect(Math.round(+setDate(unit, 30, date) - +date)).toEqual(
          30 * checkData
        );
        expect(Math.round(+setDate(unit, 55, date) - +date)).toEqual(
          55 * checkData
        );
      });
    });
  });
});

export function checkMissingArguments(cb: Function) {
  test('throw an error if arguments not passed', () => {
    // @ts-ignore
    expect(() => cb()).toThrow(new Error('Missing arguments'));
  });
}

export function checkInitialDates(createdAt: string, updatedAt: string) {
  function isDateTimeString(date: string): boolean {
    return new Date(date).toISOString() === date;
  }

  test('initial date is ok', () => {
    expect(isDateTimeString(createdAt)).toBeTruthy();
    expect(createdAt === updatedAt).toEqual(true);
  });
}
