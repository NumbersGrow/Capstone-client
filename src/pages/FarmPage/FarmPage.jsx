
import "./FarmPage.scss";

import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const FarmPage = () => {
  const { id } = useParams();
  const [farmList, setFarmList] = useState([]);
  const [selectedFarm, setSelectedFarm] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5050/farms/") //local host api
      .then((response) => {
        setFarmList(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5050/farms/${id}`)
        .then((response) => {
          setSelectedFarm(response.data);
        })
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <div className="page">
      {farmList.map((farm) => (
        <Link className="link" key={farm.id} to={`/farms/${farm.id}`}>
          <div className="farm-card">
            <p className="farm-card__name">{farm.farm_name}</p>
            <img className="farm-card__image" src={farm.image} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FarmPage;
