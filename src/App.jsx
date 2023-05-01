import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import GoToTop from "./components/GoToTop";

function App() {

  const [mydata, setMydata] = useState([])
  const [page, setPage] = useState(1)
  const [loadButton, setLoadButton] = useState("Load More")

  const fetchData = async () => {
    const res = await fetch(`http://www.omdbapi.com/?apikey=1cb3a533&s=comedy&page=${page}`, {
      method: "GET",
    })

    const data = await res.json()
    setMydata(prevData => [...prevData, ...data.Search])
    setLoadButton("Load More")
  
  }

  const loadData = () => {
    setLoadButton("Loading. . . .")
    setPage(page+1)
    setTimeout(() => {
      fetchData()
    }, 1000);
    // fetchData()
  }

  useEffect(() => {
      // console.log(dataArray);
    fetchData()
  }, []);

  return (
    <div className="app">
      <h1>This is a Movie API website</h1>
      <Card data={mydata} />

      <button onClick={loadData}>{loadButton}</button>

      <GoToTop />
    </div>
  );
}

export default App;
