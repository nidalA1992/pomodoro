import { createInitialDate } from '../shared/util/createInitialDate';

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
