import { Stack } from "../interfaces/StackInterface";

interface Props {
  technology: Stack;
}
const StackCard = ({ technology }: Props) => {
  return (
    <article className="shadow bg-white p-4 rounded grid grid-rows-my-rows gap-2 justify-items-center">
      <span>{technology.icon}</span>
      <h3 className="font-bold capitalize text-sky-700 text-lg tracking-wider">
        {technology.title}
      </h3>
      <p className="leading-loose text-sky-800">{technology.text}</p>
    </article>
  );
};
export default StackCard;
