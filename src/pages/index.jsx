import CardRazasPerros from 'components/CardRazasPerros';
import Footer from 'components/Footer'
import Header from 'components/Header';
import borderCollie from 'media/BorderCollie.jpg';
import sammy from 'media/Sammy.jpeg';
import rhodesian from 'media/Rhodesian.jpg';
import sanBernardo from 'media/San bernardo.jpg';


function Index() {
    return(
        <div>
            <Header />
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
        <Footer />
        </div>
        
    )
}

export default Index;