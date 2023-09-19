import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import "./FestivalPage.scss";

const FestivalPage = () => {
  const { id } = useParams();
  const [festivalList, setFestivalList] = useState([]);
  const [selectedFestival, setSelectedFestival] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5050/festivals/") //local host api
      .then((response) => {
        setFestivalList(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5050/festivals/${id}`)
        .then((response) => {
          setSelectedFestival(response.data);
        })
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <div className="page">
      <div className="festival-wrapper">
        {festivalList.map((festival) => (
          <Link
            className="link"
            key={festival.id}
            to={`/festivals/${festival.id}`}
          >
            <div className="festival-card">
              <p className="festival-card__name">{festival.organization}</p>
              <img className="festival-card__image" src={festival.image} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FestivalPage;
