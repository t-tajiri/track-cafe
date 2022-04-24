import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { countState, priceState } from "../checkout/state";

type UseCheckoutState = (id: string, price: number) => [number, () => void];

export const useCheckoutState: UseCheckoutState = (
  id: string,
  price: number
) => {
  const [counter, setCounter] = useState(0);
  const setStateCount = useSetRecoilState(countState);
  const setStatePrice = useSetRecoilState(priceState);

  const updateCheckout = () => {
    const latestValue = counter + 1;
    setCounter(latestValue);

    setStateCount((countMap) => {
      // 再生成しないと再描画のトリガーに反映されない
      return new Map(countMap.set(id, latestValue));
    });

    setStatePrice((priceMap) => {
      // 再生成しないと再描画のトリガーに反映されない
      return new Map(priceMap.set(id, price * latestValue));
    });
  };

  return [counter, updateCheckout];
};
