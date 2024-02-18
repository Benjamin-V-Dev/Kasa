import { Helmet } from 'react-helmet';
import Banner from '../../Components/Banner'


export default function Home({data}) {

  alert("Ce site web est un projet fictif réalisé dans le cadre d'une formation")

  return (
    <>
      <Helmet>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Kasa | Accueil</title>
        <meta name="description" content="Découvrez sur Kasa une sélection de logements de qualité pour la location entre particuliers. Trouvez votre maison ou appartement idéal facilement." />

        <meta property="og:title" content="Bienvenue sur Kasa - Votre solution de logement en France" />
        <meta property="og:description" content="Découvrez une variété de logements pour tous les goûts et budgets sur Kasa. Location et vente en France facile et rapide." />
        <meta property="og:image" content="../../../../public/logo.png"/>
        <meta property="og:url" content="/logo.png" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Bienvenue sur Kasa - Votre solution de logement en France" />
        <meta name="twitter:description" content="Découvrez une variété de logements pour tous les goûts et budgets sur Kasa. Location et vente en France facile et rapide." />
        <meta name="twitter:image" content="../../../../public/logo.png" />
        <meta name="twitter:card" content="Bienvenue sur Kasa" />
      </Helmet>

      <Banner imageUrl={'banner1.png'} imageAlt={'Paysage de côte sauvage'}  bannerContent={"Chez vous, partout et ailleurs"}/>
      <section className="home-section-thumb">
        {data.map((item) =>
          <div key={item.id} className="thumb">
            <a href={`/Accommodation/${item.id}`}>
              <div className='thumb-filter'></div>
              <img src={item.cover} alt={item.title}/>
              <p>{item.title}</p>
            </a>
          </div>
        )}
      </section>
    </>
  )
}