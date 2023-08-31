import './App.css';
import axios from 'axios';
import {useEffect, useState, useCallback} from 'react';


function App() {


const [loading, setLoading] = useState(false);
const [data, setData] = useState([]);

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';


const fetchCoctailHandler = useCallback(() => {
  setLoading(true);

  axios
  .get(URL)
  .then((res) => {
    console.log(res.data);
    setData(res.data.drinks);
  })
  .catch((e) => console.log(e))
  .finally(() => setLoading(false));

}, []);



useEffect(() => {
 fetchCoctailHandler();

}, [fetchCoctailHandler]);

if (loading) {
  return <h2>Loading...</h2>;
}


return <div className="App">
 {data.map((cocktail)=> (
<div key={cocktail.idDrink}>
  <h2>{cocktail.strDrink}</h2>
  <img src={cocktail.strDrinkThumb} alt="#"/>
  <h3>{cocktail.strGlass}</h3>
  <p>{cocktail.strInstructions}</p>
  <ul key={cocktail.strIngredient}>
  {cocktail.strIngredient1 && (
            <li>
              {cocktail.strIngredient1}
              <span>&nbsp;&nbsp;</span>
              {cocktail.strMeasure1}
            </li>
          )}
          {cocktail.strIngredient2 && (
            <li>
              {cocktail.strIngredient2}
              <span>&nbsp;&nbsp;</span>
              {cocktail.strMeasure2}
            </li>
          )}
          {cocktail.strIngredient3 && (
            <li>
              {cocktail.strIngredient3}
              <span>&nbsp;&nbsp;</span>
              {cocktail.strMeasure3}
            </li>
          )}
                    {cocktail.strIngredient4 && (
            <li>
              {cocktail.strIngredient4}
              <span>&nbsp;&nbsp;</span>
              {cocktail.strMeasure4}
            </li>
          )}
                    {cocktail.strIngredient5 && (
            <li>
              {cocktail.strIngredient5}
              <span>&nbsp;&nbsp;</span>
              {cocktail.strMeasure5}
            </li>
          )}
                    {cocktail.strIngredient6 && (
            <li>
              {cocktail.strIngredient6}
              <span>&nbsp;&nbsp;</span>
              {cocktail.strMeasure6}
            </li>
          )}
                    {cocktail.strIngredient7 && (
            <li>
              {cocktail.strIngredient7}
              <span>&nbsp;&nbsp;</span>
              {cocktail.strMeasure7}
            </li>
          )}
                    {cocktail.strIngredient8 && (
            <li>
              {cocktail.strIngredient8}
              <span>&nbsp;&nbsp;</span>
              {cocktail.strMeasure8}
            </li>
          )}
                    {cocktail.strIngredient9 && (
            <li>
              {cocktail.strIngredient9}
              <span>&nbsp;&nbsp;</span>
              {cocktail.strMeasure9}
            </li>
          )}
                    {cocktail.strIngredient10 && (
            <li>
              {cocktail.strIngredient10}
              <span>&nbsp;&nbsp;</span>
              {cocktail.strMeasure10}
            </li>
          )}
  </ul>
  <button onClick={fetchCoctailHandler}>Get another coctail</button>
  </div>
 ))}
  </div>;



}


export default App;