const Categories = ({ categories, handleFilter }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            type="button"
            className="filter-btn"
            onClick={() => handleFilter(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
