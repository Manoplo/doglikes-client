import Button from "../Button";

import { useState } from "react";

export default function DogLikeForm() {
  const [data, setData] = useState({
    avatar: "https://uifaces.co/our-content/donated/2bvuFyb8.jpg",
    username: "username",
    dog_url:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/169A8/production/_120248529_gettyimages-157037529.jpg",
    dogname: "",
    quote: "",
    location: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/doglikes", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        ...data,
      }),
    })
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputChange = (e) => {
    setData({
      ...data,
      // Propiedad computada, toma la propiedad "name" de cada input sin tener que hacer varios handleInputChange.
      [e.target.name]: e.target.value,
    });
  };

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
              onChange={handleInputChange}
              placeholder="Dog´s name here!"
              name="dogname"
              required
              className="mt-4 border-b-2 border-gray focus:outline-none focus:border-b-2 focus:border-black font-mono"
            />
            <input
              type="text"
              onChange={handleInputChange}
              placeholder="What´s your dog thinking in this pic?"
              name="quote"
              className="mt-4 border-b-2 border-gray focus:outline-none focus:border-b-2 focus:border-black font-mono"
            />

            <input
              type="text"
              placeholder="Where are you from?"
              onChange={handleInputChange}
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
