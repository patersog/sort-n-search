import { swap } from "./sort-utils";

const bubble = (list, steps) => {
  for (let i = list.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      steps.enqueue({
        action: "compare",
        _i: j,
        _j: j + 1
      });
      if (list[j + 1] < list[j]) {
        steps.enqueue({
          action: "swap",
          _i: j,
          _j: j + 1
        });
        swap(list, j, j + 1);
      }
    }
  }
};

export { bubble };
