import { useState } from "react";
import { Button } from "../../ui/Button";
import { Badge } from "../../ui/Badge";

type Props = {
  id: string;
  text: string;
  price: number;
  currencyType: string;
};

export const PurchaseButton: React.FC<Props> = (ctx) => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="relative">
      <Button
        id={ctx.id}
        onClick={() => setCounter(counter + 1)}
        title={ctx.text}
        text={`${ctx.price} ${ctx.currencyType}`}
      />
      <Badge id={`${ctx.id}-count`} value={counter} position="top-right" />
    </div>
  );
};
