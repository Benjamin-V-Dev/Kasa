
import Banner from "../../Components/Banner";
import Dropdown from "../../Components/Dropdown";
export default function About() {

  //Tableau contenant les différents "content"
  let contentDropdownAbout = [
    ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt, tortor ac dapibus faucibus, nibh turpis pharetra erat, ac congue metus sem sed dui. Aliquam et sagittis nunc, non accumsan ante. Pellentesque condimentum dolor metus, varius sagittis nisi placerat vel. Suspendisse tempor, lorem ac euismod sollicitudin, dolor ante congue tortor, ac luctus quam quam quis elit. Aliquam semper bibendum molestie. Mauris volutpat diam in magna aliquam sodales a eget dolor. Suspendisse porta aliquet efficitur. Maecenas magna turpis, mollis eu mi ac, ullamcorper ornare dolor. Ut nisl arcu, egestas nec dolor vel, sagittis semper mauris. Duis in ex quis orci condimentum vehicula. Aenean ac molestie orci."],
    ["Donec volutpat, mi eu rhoncus varius, lacus ex varius elit, a rhoncus erat urna ac risus. Integer scelerisque justo a felis posuere, at varius lectus facilisis. Ut convallis metus eros, et pretium felis tristique non. Maecenas tempus rhoncus tortor eget dapibus. Aliquam tincidunt odio sit amet commodo condimentum. Integer fermentum, turpis et auctor efficitur, ipsum massa ornare nibh, pharetra sagittis tellus urna sit amet justo. Morbi ante mauris, dapibus id enim ut, efficitur viverra enim. Ut risus mauris, cursus eu rutrum sed, vestibulum sit amet arcu. Cras vestibulum laoreet enim, id mollis tellus condimentum a. Etiam consectetur nulla arcu, a mollis risus suscipit sed. Curabitur non massa orci."],
    ["Quisque tortor turpis, feugiat eu varius vel, hendrerit gravida metus. Nullam vestibulum venenatis risus, a iaculis magna facilisis sed. Sed lorem sapien, sollicitudin quis tellus non, vulputate dignissim diam. Proin non odio massa. Suspendisse est lectus, laoreet venenatis ligula vitae, suscipit fermentum tortor. Donec et massa et ipsum molestie lacinia non et lectus. Etiam ligula turpis, volutpat ac rhoncus nec, placerat sit amet arcu. Duis id turpis blandit est cursus consectetur. Cras sem nulla, hendrerit molestie augue eget, dapibus laoreet mi. Aliquam eu porttitor risus. Nam consequat hendrerit nisi eu ullamcorper. Maecenas odio nulla, placerat eu ipsum et, auctor cursus lorem. Proin venenatis odio faucibus bibendum tempor. Aenean sed eros libero. Quisque quis mollis mauris. Aliquam in est in risus dictum maximus."],
    ["Nunc venenatis lacus eget nisi sollicitudin, pretium placerat libero accumsan. Donec placerat elit non mauris sagittis, a maximus ligula gravida. Sed varius, enim non fermentum rhoncus, neque urna porttitor magna, eu tincidunt sem quam vitae diam. Integer pretium, elit ut dignissim cursus, eros ante euismod sem, a tincidunt erat nisi eget neque. Proin quis condimentum odio. In scelerisque posuere turpis, sed feugiat augue interdum eget. Mauris sed maximus justo. Vestibulum venenatis pellentesque massa nec facilisis. Vivamus eget metus at augue auctor tristique in non erat. Ut vehicula neque interdum accumsan cursus."],
  ]


  return (
    <>
      <Banner imageUrl={'banner2.png'} imageAlt={'Paysage de montagne'}  bannerContent={""}/>
      <div className="master-dropdown">
        <Dropdown title="Fiabilité" content={contentDropdownAbout[0]} />
        <Dropdown title="Respect" content={contentDropdownAbout[1]} />
        <Dropdown title="Service" content={contentDropdownAbout[2]} />
        <Dropdown title="Sécurité" content={contentDropdownAbout[3]}/>
      </div>
    </>
  )
}

