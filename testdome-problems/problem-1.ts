// Agrupa los elementos por el valor que devuelve keyFn.
// Debe conservar el orden original dentro de cada grupo.
function groupBy<T, K extends string | number>(
  items: T[],
  keyFn: (item: T) => K
): Record<K, T[]> {
  const res = Object.create(null) as Record<K, T[]>;

  for (const item of items) {
    const key = keyFn(item);
    (res[key] ??= []).push(item);
  }

  return res;
}

// Ejemplos
const call1 = groupBy([1, 2, 3, 4, 5], n => (n % 2 === 0 ? "even" : "odd"));
console.log("call1", call1)
// { odd: [1, 3, 5], even: [2, 4] }

const call2 = groupBy(["apple", "avocado", "banana"], s => s[0]!);
console.log("call2", call2)
// { a: ["apple", "avocado"], b: ["banana"] }

const call3 = groupBy([], x => x); // {}
console.log("call3", call3)