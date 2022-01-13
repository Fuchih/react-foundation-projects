const About = () => {
  return (
    <section className="section about-section">
      <h1 className="section-title">about us</h1>
      <p>
        <b>What is it?</b>
        <br /> Its an open online database of cocktail recipes. There are many
        other sites online but none offered a nice API, so I wrote one myself
        <br />
        <br />
        <b>How to use it with Kodi?</b>
        <br /> You don't yet... but there is a very simple JSON API that any
        developer can use to write a simple add-on. The vision is to be able to
        use Kodi in my kitchen/bar area to look up cocktail recipes with the
        remote. Hopefully a developer will jump on board and write the add-on
        (*Cough* Enen if you want a new project).
      </p>
    </section>
  )
}

export default About
