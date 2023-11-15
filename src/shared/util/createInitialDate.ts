export function createInitialDate() {
  const date = new Date().toISOString();
  return {
    createdAt: date,
    updatedAt: date,
  };
}
