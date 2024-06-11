import React from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import Carousel from "../components/Carousel";

const Home = ({ games }) => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="home-carousel">
        <Carousel games={games} />
      </div>

      <div className="btn3-container">
        <Button className="all-view-btn" onClick={() => navigate("/gameindex")}>
          View All Games
        </Button>
      </div>
    </div>
  );
};

export default Home;
