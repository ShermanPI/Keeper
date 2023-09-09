import './assets/style/category.css'

export default function MenuCategory ({ icon, children }) {
  return (
    <div className='menu-category'>
      <h2>{children}</h2>
    </div>
  )
}
