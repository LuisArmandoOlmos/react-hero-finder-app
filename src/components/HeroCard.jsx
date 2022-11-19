import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
  url_img
}) => {
  const imageUrl = `${url_img}`

  return (
    <div className="bg-gray border-2 border-primary rounded-lg overflow-hidden">
      <img src={imageUrl} alt="" />
      <div className="p-2">
        <h3 className="text-primary font-semibold">{superhero}</h3>
        <p className="text-white">Alter ego: {alter_ego}</p>
        <p className="text-white">First appearance: {first_appearance}</p>
        <Link className="text-primary hover:underline" to={`/hero/${id}`}>More info...</Link>
      </div>
    </div>
  );
};
