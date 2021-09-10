import Button from "../Button";

export const SignInCard = () => {
  return (
    <div>
      <p className="font-mono text-center text-gray-500">
        Or sign up to have a custom profile!
      </p>
      <section className="flex flex-col p-9 h-56 border w-96 mt-4 rounded-lg hover:shadow-lg">
        <h1 className="font-bold font-sans">Sign Up!</h1>
        <input
          type="email"
          placeholder="Enter your email"
          className="border-b-2 border-gray focus:outline-none focus:border-b-2 focus:border-black"
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="border-b-2 border-gray mt-2 focus:outline-none focus:border-b-2 focus:border-black"
        />
        <Button>Send</Button>
      </section>
    </div>
  );
};
