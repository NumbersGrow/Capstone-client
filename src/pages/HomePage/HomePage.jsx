import { Link } from "react-router-dom";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <section className="body">
      <Link to="/farms" className="body__link">
        <div className="body__image body__image-farm">
          <p className="body__text">Farms</p>
        </div>
      </Link>
      <Link to="/festivals" className="body__link">
        <div className="body__image body__image-festival">
          <p className="body__text">Festivals</p>
        </div>
      </Link>
    </section>
  );
};

export default HomePage;
