import Dog from "../../icons/Dog";
import ButtonRounded from "../ButtonRounded";

export const UploadCard = () => {
  return (
    <div>
      <p className="font-mono text-center text-gray-500">
        Just passing by? Send us a dog now!
      </p>
      <section className="flex flex-col p-9 border w-96 h-56 mt-4 rounded-lg items-center hover:shadow-lg">
        <h1 className="font-bold font-sans">Upload Dog!</h1>

        <ButtonRounded className="btn">
          <Dog height={50} />
          <span>+</span>
        </ButtonRounded>
      </section>
      <style jsx>{`
        .btn {
          transition: 0.3s;
        }

        span {
          opacity: 0;
        }
      `}</style>
    </div>
  );
};
