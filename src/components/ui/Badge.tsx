type Props = {
  id: string;
  value: string | number;
  position: "top-right";
};

/**
 * 注意: このコンポーネントを利用する場合は親要素に `relative` 属性を指定すること
 */
export const Badge: React.FC<Props> = (ctx) => {
  let position = "";
  switch (ctx.position) {
    case "top-right":
    default:
      position = "-top-3 -right-3";
      break;
  }

  return (
    <div
      id={`${ctx.id}`}
      data-testid={`${ctx.id}`}
      className={`absolute
                  h-7 w-7
                  ${position}
                  text-center text-white 
                  border
                  bg-red-500
                  rounded-full
                `}
    >
      {ctx.value}
    </div>
  );
};
