import CardRazasPerros from 'components/CardRazasPerros';
import logo from 'media/Logo_Soft.png';
import 'styles/styles.css';
import borderCollie from 'media/BorderCollie.jpg';
import sammy from 'media/Sammy.jpeg';
import rhodesian from 'media/Rhodesian.jpg';
import sanBernardo from 'media/San bernardo.jpg';



function App() {
  return (
    <div className="App">
      <header>
        <ul className="navbar">
            <li>
                <img src={logo} alt="imagen logo empresa" className="logo"/>
            </li>
            <li>
                <button className="button mainButton">Nuevo post</button>
            </li>
            <li>
                <div className="buscar">
                    <input placeholder="Buscar una raza"/>
                    <i className="fas fa-search button iconoBusqueda"></i>
                </div>
            </li>
            <li><button className="button secondaryButton">Login</button></li>
            <li><button className="button mainButton">Registro</button></li>
        </ul>
        
    </header>
  
    <main>
        <section>
            <h1>Razas de Perros</h1>
            <ul className="breedCardContainer">
                <CardRazasPerros nombreRaza= 'Border Collie' imagen= {borderCollie}/>
                <CardRazasPerros nombreRaza= 'Schnauzer' imagen= {sammy}/>
                <CardRazasPerros nombreRaza= 'Rhodesian' imagen= {rhodesian}/>
                <CardRazasPerros nombreRaza= 'San Bernardo' imagen= {sanBernardo}/>
                <CardRazasPerros nombreRaza= 'SAMMY' imagen= {sammy}/>
            </ul>
        </section>
        <section></section>
    </main>

    <footer></footer>

    </div>
  );
}



export default App;
