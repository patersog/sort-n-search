export const linear = (arr, lookup) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === lookup) {
      return i + 1;
    }
  }
  return null;
};

export default linear;
