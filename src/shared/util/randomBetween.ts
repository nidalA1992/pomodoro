export function randomBetween(a: number, b: number) {
  if (a === b) {
    return a;
  }

  const min = Math.min(a, b);
  const max = Math.max(a, b);

  return Math.floor(Math.random() * (max - min + 1) + min);
}
