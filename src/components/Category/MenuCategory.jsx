import './assets/style/category.css'

export default function MenuCategory ({ id, labelHandler, selectedLabel, icon, children }) {
  const isSelected = id === selectedLabel

  const handlerClick = () => {
    if (!isSelected) {
      labelHandler(id)
    }
  }
  return (
    <div className={`menu-category ${isSelected && 'selected'}`} onClick={handlerClick} id={id}>
      <div className='category-icon-container'>
        {icon}
      </div>

      <h2>{children}</h2>
    </div>
  )
}
