import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import GameEdit from "./pages/GameEdit";
import GameIndex from "./pages/GameIndex";
import GameNew from "./pages/GameNew";
import GameProtectedIndex from "./pages/GameProtectedIndex";
import GameShow from "./pages/GameShow";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import mockGames from "./mockGames";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [games, setGames] = useState(mockGames);

  const navigate = useNavigate();
  console.log(currentUser);
  console.log(games);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("token");
    if (loggedInUser) {
      setCurrentUser(loggedInUser);
    }
    // Temporarily comment out the readGames function
    // readGames();
  }, []);

  // const url = ''; // Placeholder for the API URL

  // const readGames = () => {
  //   fetch(`${url}/games`)
  //     .then((response) => response.json())
  //     .then((payload) => {
  //       setGames(payload);
  //     })
  //     .catch((error) => console.log(error));
  // };

  const createGame = (game) => {
    // Mock create game logic
    setGames([...games, game]);
  };

  const updateGame = (game, id) => {
    // Mock update game logic
    setGames(games.map((g) => (g.id === id ? game : g)));
  };

  const destroyGame = (id) => {
    // Mock destroy game logic
    setGames(games.filter((game) => game.id !== id));
    navigate("/gameindex");
  };

  const login = (userInfo) => {
    // Mock login logic
    const mockResponse = { id: 1, name: "Mock User" }; // Mock response
    setCurrentUser(mockResponse);
    localStorage.setItem("token", "mockToken"); // Mock token
  };

  const signup = (userInfo) => {
    // Mock signup logic
    const mockResponse = { id: 1, name: "Mock User" }; // Mock response
    setCurrentUser(mockResponse);
    localStorage.setItem("token", "mockToken"); // Mock token
  };

  const logout = () => {
    // Mock logout logic
    localStorage.removeItem("token");
    setCurrentUser(null);
  };

  return (
    <>
      <Header currentUser={currentUser} logout={logout} />
      <Routes>
        <Route path="/" element={<Home readGames={() => {}} games={games} />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/gameedit/:id"
          element={
            <GameEdit
              games={games}
              updateGame={updateGame}
              destroyGame={destroyGame}
            />
          }
        />
        <Route path="/gameindex" element={<GameIndex games={games} />} />
        <Route
          path="/gamenew"
          element={
            <GameNew createGame={createGame} currentUser={currentUser} />
          }
        />
        <Route
          path="/gameprotectedindex"
          element={
            <GameProtectedIndex currentUser={currentUser} games={games} />
          }
        />
        <Route
          path="/gameshow/:id"
          element={<GameShow currentUser={currentUser} games={games} />}
        />
        <Route path="/login" element={<LogIn login={login} />} />
        <Route path="/signup" element={<SignUp signup={signup} />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
