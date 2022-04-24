import { MouseEventHandler } from "react";

type Props = {
  id: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  title: string;
  text?: string;
};

export const Button: React.FC<Props> = (ctx) => {
  return (
    <button
      id={ctx.id}
      className="bg-white hover:bg-gray-100
                 border border-black
                 py-2 px-4
                 rounded
                 shadow
                "
      onClick={ctx.onClick}
    >
      <div className="w-32 flex justify-between">
        <span>{ctx.title}</span>
        <span>{ctx.text}</span>
      </div>
    </button>
  );
};
