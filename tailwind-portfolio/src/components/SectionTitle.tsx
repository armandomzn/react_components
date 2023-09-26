interface Props {
  text: string;
}
const SectionTitle = ({ text }: Props) => {
  return (
    <>
      <h2 className="capitalize tracking-wider text-sky-700 font-bold text-3xl text-center mb-1">
        {text}
      </h2>
      <div className="mx-auto bg-sky-900 w-20 h-1 rounded mb-6"></div>
    </>
  );
};
export default SectionTitle;
