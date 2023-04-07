import './Directory.styles.scss'
import CategoryItems from '../category-item/CategoryItems'

function Directory({ categories }) {
  console.log(categories)
  return (
    <div className='directory-container'>
     {categories.map((category) => (
        <CategoryItems key={category.id} category={category} />
     ))}
    </div>
  )
}

export default Directory
