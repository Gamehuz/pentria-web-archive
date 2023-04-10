export const calcAvgRating = (reviews) => {
  if (!reviews.length) return 0;
  const total = reviews.reduce((acc, curr) => acc + curr.rating, 0);
  return total / reviews.length;
};
