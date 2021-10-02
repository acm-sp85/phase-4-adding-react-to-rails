import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/movies", {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }})
      .then((r) => r.json())
      .then(movies => {

        console.log(movies)
      })
  }, []);

  return <h1>Hello from React!</h1>;
}

export default App;