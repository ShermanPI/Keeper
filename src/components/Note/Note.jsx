import './assets/style/note.css'

export default function Note ({ children, title }) {
  return (
    <div className='note'>
      <h4>{title}</h4>
      <p>{children}</p>
    </div>
  )
}
