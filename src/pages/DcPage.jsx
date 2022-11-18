import { HeroList } from "../components";

export const DcPage = () => {
  return (
    <div className="bg-black px-6 py-4 min-h-[calc(100vh-3rem)]">
      <h2 className="text-3xl font-bold text-white">Dc Comics</h2>
      <HeroList publisher={"DC Comics"} />
    </div>
  );
};
