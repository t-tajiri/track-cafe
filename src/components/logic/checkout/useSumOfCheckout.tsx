import { useRecoilValue } from "recoil";
import { totalCountSelector, totalPriceSelector } from "./state";

type UseSumOfCheckout = () => [number, number];

export const useSumOfCheckout: UseSumOfCheckout = () => {
  const count = useRecoilValue(totalCountSelector);
  const price = useRecoilValue(totalPriceSelector);

  return [count, price];
};
