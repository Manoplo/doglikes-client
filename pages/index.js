import Head from "next/head";
import DogLike from "../components/DogLike";
import { useEffect, useState } from "react";
import { HomeHeader } from "../components/HomeHeader";
import { SignInCard } from "../components/SignInCard/SignInCard";
import { UploadCard } from "../components/UploadCard/UploadCard";
import DogLikeForm from "../components/DogLikeForm";

export default function Home() {
  const [timeLine, setTimeline] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/doglikes")
      .then((res) => res.json())
      .then((data) => setTimeline(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(timeLine);
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>dogLikes🐶</title>
        </Head>

        <main className="container mx-auto flex flex-col items-start justify-start mt-12 w-full flex-1 text-center">
          <HomeHeader />

          <section className="sign_section w-full">
            <div className="flex flex-col gap-5 items-start justify-center mt-10 sm:flex-row">
              <DogLikeForm />
            </div>
          </section>
        </main>
        <section className="container mx-auto">
          <h2 className="text-5xl font-mono font-bold mt-14">latest dogs🐕</h2>
          <hr className="separator" />
          <div className="mt-9 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
            {timeLine.map(
              ({
                avatar,
                createdAt,
                dog_url,
                dogname,
                location,
                quote,
                username,
                id,
              }) => {
                return (
                  <div key={id}>
                    <DogLike
                      avatarURL={avatar}
                      userName={username}
                      createdAt={createdAt}
                      imageURL={dog_url}
                      dogName={dogname}
                      quote={quote}
                      location={location}
                    />
                  </div>
                );
              }
            )}
          </div>
        </section>
      </div>

      <style jsx>{`
        .separator {
          width: 10%;
          margin-top: 20px;
          border: 5px solid black;
        }

        .sign_section {
          margin-top: 40px;
        }
      `}</style>
    </>
  );
}
