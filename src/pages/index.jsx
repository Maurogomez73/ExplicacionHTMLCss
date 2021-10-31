import CardRazasPerros from 'components/CardRazasPerros';
import borderCollie from 'media/BorderCollie.jpg';
import sammy from 'media/Sammy.jpeg';
import rhodesian from 'media/Rhodesian.jpg';
import sanBernardo from 'media/San bernardo.jpg';



function Index() {
    return (
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
    )    
}

export default Index;