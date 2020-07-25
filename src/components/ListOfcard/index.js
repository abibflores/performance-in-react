import React, { useEffect, useState } from "react";

import Card from "../Card";

const ListOfCard = () => {
    const [data, setData] = useState([]);

    const URL = "https://rickandmortyapi.com/api/character/";

    useEffect(() => {
        const getData = async () => {
            const RESP = await fetch(URL);
            const DATA = await RESP.json();
            const RESULTS = DATA.results;
            setData(RESULTS);
        };
        getData();
    }, []);

    return (
        <div className="Celebrity__Container">
            {
                data.map((item) => <Card {...item} key={item.id} />)
            }
        </div>
    );
};

export default ListOfCard;