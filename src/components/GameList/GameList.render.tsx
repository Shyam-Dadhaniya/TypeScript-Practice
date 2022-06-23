import React, { ReactElement, ChangeEvent }  from "react";
import { Game } from "../../types";
import GameCard from "../GameCard";
import GameFilter from "../GameFilter";
import { List, ListItem} from "./styles";

interface Props {
    err?: string;
    games: Game[];
    onFilterChange: (e: ChangeEvent<HTMLFormElement>) => void;
}

const GameListRender = ({err, games,onFilterChange}: Props): ReactElement => {
    if (err) {
        console.log(err);
        return <div>Unable to fetch games</div>;
    }
    if (!games?.length) {
        return <div>No games found</div>;
    }
    return (
        <>
        <GameFilter onChange={onFilterChange}/>
        <List>
            {games.map(game => (
                <ListItem key={game.id}>
                    <GameCard content={game} />
                </ListItem>
            ))}
        </List>
        </>
    )

}

export default GameListRender;