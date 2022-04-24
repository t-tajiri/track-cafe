import { useState } from "react";
import { Button } from "../../ui/Button";
import { Badge } from "../../ui/Badge";
import { useSetRecoilState } from "recoil";
import { countState, priceState } from "../checkout/state";

type Props = {
  id: string;
  text: string;
  price: number;
  currencyType: string;
};

export const PurchaseButton: React.FC<Props> = (ctx) => {
  const [counter, setCounter] = useState(0);
  const setGlobalCount = useSetRecoilState(countState);
  const setPrice = useSetRecoilState(priceState);

  return (
    <div className="relative">
      <Button
        id={ctx.id}
        onClick={() => {
          setCounter(counter + 1);
          setGlobalCount((countMap) => {
            // 再生成しないと再描画のトリガーに反映されない
            return new Map(countMap.set(ctx.id, counter + 1));
          });
          setPrice((priceMap) => {
            // 再生成しないと再描画のトリガーに反映されない
            return new Map(priceMap.set(ctx.id, ctx.price * (counter + 1)));
          });
        }}
        title={ctx.text}
        text={`${ctx.price} ${ctx.currencyType}`}
      />
      <Badge id={`${ctx.id}-count`} value={counter} position="top-right" />
    </div>
  );
};
