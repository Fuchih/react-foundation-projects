import Form from './SearchForm'
import Movies from './Movies'

const Home = () => {
  return (
    <main>
      <Form />
      <section className="movies">
        <Movies />
      </section>
    </main>
  )
}

export default Home
