import './CategoryItems.styles.scss'

function CategoryItems({ category}) {
    const { imageUrl, title } = category;
    console.log(category)
  return (
    <div className='category-container'>
      <div
       className='background-image'
       style={{
        backgroundImage: `url(${imageUrl})`}}
       />
        <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

export default CategoryItems
