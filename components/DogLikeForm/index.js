import Button from "../Button";
import ButtonRounded from "../ButtonRounded";
import Dog from "../../icons/Dog";
import { useState } from "react";

export default function DogLikeForm() {
  const [data, setData] = useState({});

  const composition = {
    avatar:
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/127888424/original/808ab52e6e9d78214bda893ecf1d14353f426a4b/draw-pet-cartoon-portrait-avatar-social-media-pet-in-24-hrs.png",
    username: "pepitoperez",
    dog_url:
      "https://media.npr.org/assets/img/2021/08/06/dog-4415649-18eab39206426b985f7a5f69e3146a2cd1a56c0d-s800-c85.webp",
    dogname: "",
    quote: "",
    location: "",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleName = (e) => {
    composition.dogname = e.target.value;
  };
  const handleQuote = (e) => {
    composition.quote = e.target.value;
  };

  const handleLocation = (e) => {
    composition.location = e.target.value;
  };

  console.log(composition);

  return (
    <div>
      <section className="flex flex-col p-5 border w-screen sm:w-96 mt-4 rounded-lg hover:shadow-lg">
        <div className="flex items-center">
          <img className="rounded-full w-16 sm:w-12" src={data.avatar} />

          <p className="font-bold">nombrecitoRandom</p>
        </div>

        <div className="flex flex-col">
          <form onSubmit={handleSubmit} className="flex flex-col mt-4">
            <label className="custom_file_upload">
              <input type="file" />
              <div className="mt-20 font-mono font-bold">
                Upload dog! 📷 👋 🐩{" "}
              </div>
            </label>
            <input
              type="text"
              onChange={handleName}
              placeholder="Dog´s name here!"
              name="dogname"
              required
              className="mt-4 border-b-2 border-gray focus:outline-none focus:border-b-2 focus:border-black font-mono"
            />
            <input
              type="text"
              onChange={handleQuote}
              placeholder="What´s your dog thinking in this pic?"
              name="quote"
              className="mt-4 border-b-2 border-gray focus:outline-none focus:border-b-2 focus:border-black font-mono"
            />

            <input
              type="text"
              placeholder="Where are you from?"
              onChange={handleLocation}
              name="location"
              className="mt-4 border-b-2 border-gray focus:outline-none focus:border-b-2 focus:border-black font-mono"
            />
            <Button>Send</Button>
          </form>
        </div>
      </section>
      <style jsx>{`
        input[type="file"] {
          display: none;
        }

        .btn {
          margin-left: 10px;
        }

        .custom_file_upload {
          cursor: pointer;
          border: 2px solid #e5e5e5;
          border-radius: 10px;
          display: inline-block;
          height: 200px;
        }
      `}</style>
    </div>
  );
}
