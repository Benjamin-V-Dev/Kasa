
export default function Banner({imageUrl, imageAlt, bannerContent}) {

  /* On récupére ci-dessus les props de l'élément parent et on les utilise ci-dessous */
  /* Sur la bannière, il n'y à pas de données stockée dans data, les éléments sont donc statiques */
  return (
    <div className="banner">
      <img src={imageUrl} alt={imageAlt} />
      <div className="banner-filter"></div>
      <h1>{bannerContent}</h1>
    </div>
  )
}