import { createInitialDate } from '../shared/util/createInitialDate';

describe('\n_____UTILS_____\n', () => {
  describe('crate initial date (@/shared/util/createInitialDate)', () => {
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
