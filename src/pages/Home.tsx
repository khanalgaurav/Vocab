import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="m-3">
      <div className="mt-10 text-center">
        <h1 className="text-3xl">
          Welcome to <span className="font-bold text-blue-500">Vocab</span>
        </h1>
        <p className="text-xl mt-5">
          "Vocab" is a user-friendly app tailored for students preparing for
          standardized exams like IELTS, TOEFL, and GRE, providing a structured
          way to enhance vocabulary skills. It categorizes words into four
          distinct levels—Easy, Medium, Hard, and a dedicated list for
          High-frequency GRE words—enabling users to learn progressively and
          focus on exam-relevant terms.
        </p>
        <Link to={"/warmup"}>
          <button className="bg-blue-500 rounded-3xl px-10 py-3 text-xl mt-5 text-white font-bold">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
