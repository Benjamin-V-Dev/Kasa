import Banner from "../../Components/Banner";


export default function Home({data}) {
  return (
    <>
      <Banner />
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