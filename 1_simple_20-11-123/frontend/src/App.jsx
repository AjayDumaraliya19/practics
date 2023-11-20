import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setjokes] = useState([]);

  useEffect(() => {
    axios
      .get("/v1/joke")
      .then((res) => {
        setjokes(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Ajay dumaraliya</h1>
      <p>JOKES:{jokes.length}</p>
      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
        </div>
      ))}
    </>
  );
}

export default App;
