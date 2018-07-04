export const binary = (arr, lookup) => {
  const tracker = {
    steps: 0,
    lookup
  };

  const oldArray = [...arr];

  const sorted = oldArray.sort((a, b) => a - b);

  _binary(sorted, tracker);
  return tracker.steps;
};

const _binary = (arr, tracker, start, end) => {
  start = !start ? 0 : start;
  end = !end ? arr.length - 1 : end;

  let midIndex = Math.floor((start + end) / 2);
  tracker.steps++;

  if (arr[midIndex] === tracker.lookup) {
    const final = tracker.steps;
    return final;
  } else if (arr[midIndex] < tracker.lookup) {
    _binary(arr, tracker, midIndex + 1, end);
  } else if (arr[midIndex] > tracker.lookup) {
    _binary(arr, tracker, start, midIndex - 1);
  }
};

export default binary;
