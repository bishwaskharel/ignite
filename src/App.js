import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "./actions/gamesAction";

function App() {
  const dispatch = useDispatch();
  console.log(dispatch);
  useEffect(() => {
    dispatch(loadGames());
  });

  return (
    <div>
      <h1>Aba kehi huncha ki</h1>
    </div>
  );
}

export default App;
