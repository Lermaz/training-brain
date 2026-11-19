function solution(queries: string[][]): string[] {
  const sorted: number[] = [];
  const res: string[] = [];

  // first index where sorted[i] >= target
  const lowerBound = (target: number): number => {
    let lo = 0, hi = sorted.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (sorted[mid] < target) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  };

  // first index where sorted[i] > target
  const upperBound = (target: number): number => {
    let lo = 0, hi = sorted.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (sorted[mid] <= target) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  };

  for (const [op, arg] of queries) {
    const x = Number(arg);
    let out = "";

    switch (op) {
      case "ADD": {
        sorted.splice(lowerBound(x), 0, x); // keep duplicates
        break;
      }
      case "EXISTS": {
        out = sorted[lowerBound(x)] === x ? "true" : "false";
        break;
      }
      case "REMOVE": {
        const i = lowerBound(x);
        const found = sorted[i] === x;
        if (found) sorted.splice(i, 1); // removes one copy only
        out = found ? "true" : "false";
        break;
      }
      case "GET_NEXT": {
        const i = upperBound(x);
        out = i < sorted.length ? String(sorted[i]) : "";
        break;
      }
    }

    res.push(out);
  }

  return res;
}