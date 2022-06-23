import React, { useCallback,ChangeEvent, useState } from "react";
import GameListRender from "./GameList.render";
import { Filter } from "./types";
import useFetch from "../../hooks/useFetch";

const GameList = () => {
  const [filter, setFilter] = useState<Filter>({ platform: "browser", sortBy: "relevance" });
  const {games, error } = useFetch(filter);

  const onFilterChange = useCallback(
    (e: ChangeEvent<HTMLFormElement>) => {
      setFilter(current => ({ ...current, [e.target.name]: e.target.value }));
    }, []);

  return <GameListRender err={error} games={games} onFilterChange={onFilterChange} />;
};

export default GameList;
