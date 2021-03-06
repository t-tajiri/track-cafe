import { atom, selector } from "recoil";

export const countState = atom<Map<string, number>>({
  key: "countState",
  default: new Map(),
});

export const totalCountSelector = selector<number>({
  key: "counterSelector",
  get: ({ get }) => {
    const c = get(countState);
    return Array.from(c.entries()).reduce((acc, [, value]) => acc + value, 0);
  },
});

export const priceState = atom<Map<string, number>>({
  key: "price",
  default: new Map(),
});

export const totalPriceSelector = selector<number>({
  key: "priceSelector",
  get: ({ get }) => {
    const p = get(priceState);
    return Array.from(p.entries()).reduce((acc, [, value]) => acc + value, 0);
  },
});
