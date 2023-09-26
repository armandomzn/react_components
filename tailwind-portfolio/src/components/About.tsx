import aboutImg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="py-16 bg-sky-200" id="about">
      <div className="mx-auto w-11/12 max-w-6xl grid md:grid-cols-2 gap-8">
        <article className="row-start-2 row-end-3 md:row-auto justify-self-center">
          <img
            src={aboutImg}
            alt="about"
            className="w-full h-64 object-cover"
          />
        </article>
        <article className="row-start-1 row-end-2 md:row-auto">
          <SectionTitle text="about" />
          <p className="leading-loose text-sky-800">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae,
            nostrum excepturi dolore nihil, alias dignissimos pariatur impedit
            fugit iusto est at ex itaque obcaecati praesentium illum rem, ab
            placeat voluptatibus.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
