
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  const result = [];
  matrix.forEach((it, index) => {
    if ((index + 1) % 2 === 0) {
      result.push(...it.reverse());
    } else {
      result.push(...it);
    }
  });
  return result;
}
