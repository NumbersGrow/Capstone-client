import back from "../../assets/icons/arrow_back-24px.svg";

import "./SingleFarmPage.scss";

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const SingleFarmPage = () => {
  const { id } = useParams();
  const [singleFarm, setSingleFarm] = useState([]);
  const [farmProduct, setFarmProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5050/farms/" + id) //local host api
      .then((response) => {
        setSingleFarm(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:5050/farms/${id}/farm_production`)
      .then((response) => {
        setFarmProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="page">
      {singleFarm.map((farm) => (
        <div className="farm-container" key={farm.id}>
          <Link className="link" to={"/farms/"}>
            <img className="arrow" src={back} alt="arrow back" />
          </Link>
          <div className="farm-container__context">
            <h1 className="farm-container__name">{farm.farm_name}</h1>
            <img className="farm-container__image" src={farm.image} />
            <p>
              Address:
              <span className="farm-container__info">{farm.address}</span>
            </p>
            <p>
              City:<span className="farm-container__info"> {farm.city}</span>
            </p>
            <p>
              Owner:<span className="farm-container__info">{farm.owner}</span>
            </p>
            <p>
              Phone:
              <span className="farm-container__info">{farm.contact_phone}</span>
            </p>
            <p>
              Website:
              <span className="farm-container__info">{farm.website}</span>
            </p>
            <p>
              Current Promo:
              <span className="farm-container__info"> {farm.promotion}</span>
            </p>
          </div>
          <p className="farm-container__product-list">Products:</p>
          {farmProduct.map((product) => (
            <ul key={product.id}>
              <li className="farm-container__product">{product.product}</li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SingleFarmPage;
