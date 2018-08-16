import { swap } from "./sort-utils";
let step = 0;
const bubble = (list, q) => {
  for (let i = list.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      step++;
      q.enqueue({
        action: "compare",
        _i: j,
        _j: j + 1,
        num: step
      });
      if (list[j + 1] < list[j]) {
        step++;
        q.enqueue({
          action: "swap",
          _i: j,
          _j: j + 1,
          num: step
        });
        swap(list, j, j + 1);
      }
    }
  }
};

export { bubble };
