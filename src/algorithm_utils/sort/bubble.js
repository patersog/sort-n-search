import { swap } from "./sort-utils";
const bubble = (list, q) => {
  let swapped = true;
  let step = 0;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < list.length; i++) {
      step++;
      q.enqueue({
        action: "compare",
        _i: i,
        val_i: list[i],
        _j: i + 1,
        val_j: list[i + 1],
        num: step
      });
      if (
        list[i] !== undefined &&
        list[i + 1] !== undefined &&
        list[i] > list[i + 1]
      ) {
        step++;
        q.enqueue({
          action: "swap",
          _i: i,
          val_i: list[i],
          _j: i + 1,
          val_j: list[i + 1],
          num: step
        });
        swap(list, i, i + 1);
        swapped = true;
      }
    }
  }
};

export { bubble };
