/* eslint-disable no-sequences */
import './App.css';
import './App.css';

const menu ={
	cap:{
		dough: 1,
		tomato_sauce: 1,
		onion: 2,
		sausage: 2,
		mashroom: 3,
		cheese: 1,
    },
	onions:{
		dough: 1,
		tomato_sauce: 1,
		onion: 2,
		meat: 1,
		cheese: 1,
    },
	king_one:{
		dough: 1,
		tomato_sauce: 1,
		onion: 2,
		mayo: 1,
		mashroom: 3,
		tomato: 2,
		cheese: 3,
		dill: 2,
		parsley: 2
    },
	gavay:{
		dough: 1,
		tomato_sauce: 1,
		onion: 2,
		ananas: 1,
		cheese: 2,
    },
	tonno:{
		dough: 1,
		tomato_sauce: 1,
		tuna: 2,
		kappers: 1,
		cheese: 1,
	},
	vegeterian:{
		dough: 1,
		tomato_sauce: 1,
		tomato: 2,
		kappers: 1,
		cucumber: 2,
		onion: 2,
		cheese: 1,
	}
}

function getPizzaInfo(lastPizzas) {
 
  let matchesOfPizzaOrders = lastPizzas.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1 , prev), {});
  let popular = Object
    .keys(matchesOfPizzaOrders)
    .sort(function (a, b) { return matchesOfPizzaOrders[b] - matchesOfPizzaOrders[a] })
    .slice(0, 5)
  
  let unsortedIngridients = [];

  lastPizzas.map(item => unsortedIngridients = [...unsortedIngridients, ...Object.entries(menu[item])])
  
  let uniqueIngridients = {};

  for (let i = 0; i < unsortedIngridients.length; i = i + 1){
     let item=unsortedIngridients[i][0] 
    if (item in uniqueIngridients===false) {
      uniqueIngridients[item]=unsortedIngridients[i][1] 
    }
    if (item in uniqueIngridients===true) {
      uniqueIngridients[item]+=unsortedIngridients[i][1] 
    }
  }
 
let ingridients = Object
    .keys(uniqueIngridients)
    .sort(function (a, b) { return uniqueIngridients[b] - uniqueIngridients[a] })
    
  return {popular,ingridients}
}

console.log(getPizzaInfo(['cap','cap','onions','gavay','cap', 'tonno','vegeterian', 'king_one']));


function App() {
  return (
    <div className="App">
      <header className="App-header">
                <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

