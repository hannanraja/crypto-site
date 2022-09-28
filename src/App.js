import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';

function App() {
  var selectedCoin;
  const [coins,setcoinvalue] = useState([]);
  useEffect(()=>{
    axios
    .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=pkr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setcoinvalue(res.data)
    
  })
    .catch(err => console.log(err))
  })
function change(){
  selectedCoin = document.querySelector('input').value;
  console.log(selectedCoin);
}
  return (
    <div className="App">
      <h1>Updated values of all the virtual currency coins</h1>
     <label>Enter a Coin Name to get values <br />
     <input type="text" placeholder="eg bitcoin" />
     <button onClick={change}>Submit</button>
     </label>
     <table>
     <tr>
    <th>Name</th>
    <th>Current Price</th>
    <th>Symbol</th>
    <th>Last Updated</th>
    <th>Image</th>
  </tr>
      {
     
        coins.map((coin)=>{
          if(coin.id == "bitcoin"){
return(    
    <tr>
<td> {coin.name}</td>
<td> {coin.current_price}</td>
<td> {coin.symbol}</td>
<td> {coin.last_updated}</td>
<td><img src={coin.image} /></td>
</tr>
)
          }
        })
      }
      </table>
    </div>
  );
}

export default App;
