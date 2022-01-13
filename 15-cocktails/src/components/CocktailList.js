import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { cocktailsList, loading } = useGlobalContext()

  if (loading) return <Loading />

  if (cocktailsList.length === 0) {
    return (
      <section className="section">
        <h2 className="section-title">
          no cocktails matched your search criteria
        </h2>
      </section>
    )
  }

  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktailsList.map((item) => (
          <Cocktail {...item} key={item.id} />
        ))}
      </div>
    </section>
  )
}

export default CocktailList
