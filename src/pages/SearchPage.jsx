import { useLocation, useNavigate } from "react-router-dom";
import queriString from "query-string";
import { HeroCard } from "../components";
import { useForm } from "../hooks/useForm";
import { getHeroByName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queriString.parse(location.search);

  const heroes = getHeroByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length == 0) return;

    navigate(`?q=${searchText}`);
  };

  return (
    <div className="bg-black px-6 py-4 min-h-[calc(100vh-3rem)]">
      <h2 className="text-3xl font-bold text-white mb-1">Search</h2>

      <form className="flex gap-2" onSubmit={onSearchSubmit}>
        <input
          autoComplete="off"
          className="w-full bg-black text-primary border-b-2 border-primary placeholder-primary px-1"
          name="searchText"
          onChange={onInputChange}
          placeholder="Search a hero"
          type="text"
          value={searchText}
        />

        <button className="bg-primary px-4 font-bold rounded-sm">Search</button>
      </form>

      <div>
        <h3 className="text-xl font-medium text-white mt-2">Result</h3>

        {
          (q === "")
            ? <p className="bg-gray px-1 mb-1 text-white">Search a hero</p>
            : (heroes.length === 0) && (
              <p className="bg-gray px-1 mb-1 text-white">
                No hero with: <b>{q}</b>
              </p>
            )
        }

        <div className="grid grid-cols-6 gap-4 mt-2 w-full">
          {
            heroes.map((hero) => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>
    </div>
  );
};
