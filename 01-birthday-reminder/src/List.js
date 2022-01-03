const List = ({ birthdays }) => {
  return (
    <>
      {birthdays.map((birthday) => {
        const { id, name, age, image } = birthday

        return (
          <article className="person" key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default List
