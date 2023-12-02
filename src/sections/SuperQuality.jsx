import { setofperfume } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          We Provide You
          <span style={{ color: "#D9BB66" }}> Super </span>
          <span style={{ color: "#D9BB66" }}>Quality </span> Perfumes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Perfumes are a delightful fusion of art and science, designed to
          captivate our senses and evoke a range of emotions. These scented
          elixirs have a rich history dating back thousands of years, with their
          origins tracing to ancient civilizations.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          The process of creating a perfume is a meticulous craft.
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={setofperfume}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
