import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

import "./SingleFestivalPage.scss";

import back from "../../assets/icons/arrow_back-24px.svg";

const SingleFestivalPage = () => {
  const { id } = useParams();
  const [singleFestival, setSingleFestival] = useState([]);
  const [festivalProduct, setFestivalProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5050/festivals/" + id) //local host api
      .then((response) => {
        setSingleFestival(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:5050/festivals/${id}/festival_production`)
      .then((response) => {
        setFestivalProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="page">
      {singleFestival.map((festival) => (
        <div className="festival-container" key={festival.id}>
          <Link className="link" to={"/festivals/"}>
            <img className="arrow" src={back} alt="arrow back" />
          </Link>
          <div className="festival-container__context">
            <h1 className="festival-container__name">
              {festival.organization}
            </h1>
            <img className="festival-container__image" src={festival.image} />
          </div>
          <div className="festival-container__desktop">
            <p className="festival-container__info-desktop">
              Description:
              <span className="festival-container__info">
                {festival.description}
              </span>
            </p>
            <p className="festival-container__info-desktop">
              Availability:
              <span className="festival-container__info">
                {festival.availability}
              </span>
            </p>
            <p className="festival-container__info-desktop">
              Type:
              <span className="festival-container__info">{festival.type}</span>
            </p>
            <p className="festival-container__info-desktop">
              Address:
              <span className="festival-container__info">
                {festival.address}
              </span>
            </p>
            <p className="festival-container__product-list">Products:</p>
            {festivalProduct.map((product) => (
              <ul key={product.id}>
                <li className="festival-container__product">
                  {product.product}
                </li>
              </ul>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleFestivalPage;
