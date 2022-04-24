import { Button } from "../../ui/Button";
import { Badge } from "../../ui/Badge";
import { useCheckoutState } from "./useCheckoutState";

type Props = {
  id: string;
  text: string;
  price: number;
  currencyType: string;
};

export const PurchaseButton: React.FC<Props> = (ctx) => {
  const [counter, updateCheckout] = useCheckoutState(ctx.id, ctx.price);

  return (
    <div className="relative">
      <Button
        id={ctx.id}
        onClick={() => updateCheckout()}
        title={ctx.text}
        text={`${ctx.price} ${ctx.currencyType}`}
      />
      <Badge id={`${ctx.id}-count`} value={counter} position="top-right" />
    </div>
  );
};
