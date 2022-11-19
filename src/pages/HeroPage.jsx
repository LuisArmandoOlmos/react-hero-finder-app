import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const hero = getHeroById(id);

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  const onReturn = () => {
    navigate(-1);
  };

  const imageUrl = `${hero.url_img}`;

  return (
    <div className="bg-black px-6 py-4 min-h-[calc(100vh-3rem)] flex justify-center items-center">
      <div className="w-full md:max-w-[80%] xl:max-w-[40%]">
        <h2 className="text-3xl font-bold text-white mb-1">{hero.publisher}</h2>
        <div className="md:flex bg-gray rounded-b-xl rounded-tr-xl overflow-hidden border-2 border-primary ">
          <div className="md:w-3/5">
            <img className="w-full" src={imageUrl} alt="" />
          </div>
          <div className="p-4 flex flex-col md:w-2/5 justify-between">
            <div>
              <h3 className="text-primary text-xl font-semibold">
                {hero.superhero}
              </h3>
              <h4 className="text-white text-lg font-medium">Alter ego</h4>
              <p className="text-white">{hero.alter_ego}</p>

              <h4 className="text-white text-lg font-medium mt-2">
                First appearance
              </h4>
              <p className="text-white">{hero.first_appearance}</p>

              <h4 className="text-white text-lg font-medium mt-2">
                Characters
              </h4>
              <p className="text-white">{hero.characters}</p>
            </div>
            <div>
              <button
                className="bg-primary text-gray rounded-md w-full text-lg font-medium bottom-4 right-4 mt-2"
                onClick={onReturn}
              >
                Return
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
