import { HeroList } from "../components";

export const MarvelPage = () => {

  return (
  <div className="bg-black px-6 py-4 min-h-[calc(100vh-3rem)]">
    <h2 className="text-3xl font-bold text-white">Marvel Comics</h2>
    <HeroList publisher={"Marvel Comics"} />
  </div>
    );
};
