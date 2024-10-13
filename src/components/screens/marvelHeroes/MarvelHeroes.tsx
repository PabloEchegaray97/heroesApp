import { useEffect, useState } from "react";
import { heroesData } from "../../../data/heroes";
import { ListHeroes } from "../../ui/ListHeroes/ListHeroes";
import { IHeroes } from "../../../types/heroes";

export const MarvelHeroes = () => {
  const [heroes, setHeroes] = useState<IHeroes[]>([]);
  const handleGetHeroesMarvel = () => {
    const result = heroesData.filter((hero) => hero.publisher == "Marvel Comics");
    setHeroes(result);
  }
  useEffect(() => {
    handleGetHeroesMarvel();
  },[])
  return (
    <ListHeroes heroes={heroes} title="Heroes Marvel Comics"></ListHeroes>
  )
}
