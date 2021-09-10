import Head from "next/head";
import DogLike from "../components/DogLike";
import { HomeHeader } from "../components/HomeHeader";
import { SignInCard } from "../components/SignInCard/SignInCard";
import { UploadCard } from "../components/UploadCard/UploadCard";
import SearchIcon from "../icons/Search";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>dogLikes🐶</title>
        </Head>

        <main className="container mx-auto flex flex-col items-start justify-start mt-12 w-full flex-1 text-center">
          <HomeHeader />

          <section className="sign_section">
            <div className="flex flex-col gap-5 items-start justify-center mt-10 sm:flex-row">
              <UploadCard />
              <SignInCard />
            </div>
          </section>
        </main>
        <section className="container mx-auto">
          <h2 className="text-5xl font-mono font-bold mt-14">latest dogs🐕</h2>
          <hr className="separator" />
          <div className="mt-9 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
            <DogLike
              avatarURL="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
              imageURL="https://www.happets.com/blog/wp-content/uploads/2019/09/al-agua-perros-guia-de-playas-dogfriendly-en-espana--1180x787.jpg"
              dogName="Sparky"
              quote="Here with may friench at the beeach!"
              location="Fv-Canary Islands"
            />
            <DogLike
              avatarURL="https://randomuser.me/api/portraits/men/32.jpg"
              imageURL="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/11/27135515/Grooming-tips-from-experts-hero.jpg"
              dogName="Donna"
              quote="Soy una perrrraaa!"
              location="Zimbabue"
            />
            <DogLike
              avatarURL="https://randomuser.me/api/portraits/men/35.jpg"
              imageURL="https://www.thesprucepets.com/thmb/3-ISVJpCrp9TUfeRdH1mfzJlHGg=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/golden-retriever-puppy-in-grass-923135452-5c887d4146e0fb00013365ba.jpg"
              dogName="Pituka"
              quote="Yoqsetio xdxd"
              location="Jerez de la Frontera, Andalucía"
            />
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
