import { swap } from "./sort-utils";
let stepNum = 0;
const bubble = (list, steps) => {
  for (let i = list.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      stepNum++;
      steps.enqueue({
        action: "compare",
        _i: j,
        _j: j + 1,
        num: stepNum
      });
      if (list[j + 1] < list[j]) {
        stepNum++;
        steps.enqueue({
          action: "swap",
          _i: j,
          _j: j + 1,
          num: stepNum
        });
        swap(list, j, j + 1);
      }
    }
  }
};

export { bubble };
