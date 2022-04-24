import { PurchaseButton } from "./components/PurchaseButton";

export const CURRENCY_TYPE = "円";

export const App: React.FC = () => {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <div className="flex flex-col gap-5">
          <PurchaseButton
            id={"coffee"}
            text={"コーヒー"}
            price={480}
            currencyType={CURRENCY_TYPE}
          />
          <PurchaseButton
            id={"tea"}
            text={"紅茶"}
            price={280}
            currencyType={CURRENCY_TYPE}
          />
          <PurchaseButton
            id={"milk"}
            text={"ミルク"}
            price={180}
            currencyType={CURRENCY_TYPE}
          />
          <PurchaseButton
            id={"coke"}
            text={"コーラ"}
            price={190}
            currencyType={CURRENCY_TYPE}
          />
          <PurchaseButton
            id={"beer"}
            text={"ビール"}
            price={580}
            currencyType={CURRENCY_TYPE}
          />
        </div>
      </div>
    </div>
  );
};
