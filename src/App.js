import './App.css';
import restaurant from './restaurant-le-47.jpg';

function Header(props){
  return(
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props){
  return(
    <section>
      <p>We serve the most {props.adjective} food arround.</p>
      <img src={restaurant} height={200} alt="Asn elegant restaurant"/>
      <ul style = {{textAlign: "left"}}>
        {props.dishes.map((dish) => <li key= {dish.id}>{dish.title}</li>)}
      </ul>
    </section>
  )
}

function Footer(props){
  return(
    <h3>Copyright {props.year}</h3>
  )
}

const dishes = [
  "Macarrão com queijo",
  "Salmão",
  "Sem tofu aqui!"
]

const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}));

function App() {
  return (
    <div className="App">
      <Header name="Ratax"/>
      <Main adjective="amazing" dishes = {dishObjects}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
