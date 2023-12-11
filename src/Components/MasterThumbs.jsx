
import data from '../../src/data.json';


export default function MasterThumbs() {

  return (
    <section className="home-section-thumb">
      {data.map((item) => 
        <div key={item.id} className="thumb">
          <div className='thumb-filter'></div>
          <img src={item.cover} alt={item.title} />
          <p>{item.title}</p>
        </div>
      
      )}
    </section>
  )
}