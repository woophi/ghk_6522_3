export const isMissingAtLeast499 = (n: number): boolean => {
  const mod = n % 1000;
  return mod !== 0 && 1000 - mod >= 499;
};
