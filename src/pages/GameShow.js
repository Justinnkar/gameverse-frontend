import React from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
} from "reactstrap";
import "../styles/GameShow.css";

const GameShow = ({ currentUser, games }) => {
  const { id } = useParams();
  let currentGame = games?.find((game) => game.id === +id);

  return (
    <main>
      {currentGame && (
        <Container className="show-page">
          <Card className="card-container-show">
            <img
              alt={`profile of the game ${currentGame.name}`}
              src={currentGame.image}
              className="card-img-show"
            />
            <CardBody className="card-body-show">
              <CardTitle className="card-title-show" tag="h3">
                {currentGame.title}
              </CardTitle>
              <CardSubtitle className="card-subtitle-show" tag="h6">
                Platform: {currentGame.platform}
                <br />
                Genre: {currentGame.genre}
                <br />
                Developer: {currentGame.developer}
                <br />
                Summary: {currentGame.summary}
                <br />
                Release Date: {currentGame.release_date}
                <br />
              </CardSubtitle>
              {currentUser && (
                <div className="edit-btn-container-show">
                  <Button
                    className="edit-btn-show"
                    href={`/gameedit/${currentGame.id}`}
                  >
                    Edit Game
                  </Button>
                </div>
              )}{" "}
              <div className="card-rating-show">{currentGame.rating}</div>
            </CardBody>
          </Card>
        </Container>
      )}
    </main>
  );
};

export default GameShow;
