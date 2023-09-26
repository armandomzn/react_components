import { stack } from "../data";
import SectionTitle from "./SectionTitle";
import StackCard from "./StackCard";

const Stack = () => {
  return (
    <section className="py-16 bg-sky-50" id="skills">
      <div className="mx-auto w-11/12 max-w-6xl">
        <SectionTitle text="stack" />
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {stack.map((technology) => {
            return <StackCard key={technology.id} technology={technology} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Stack;
