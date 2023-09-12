import './assets/style/note.css'

export default function Note ({ children, title }) {
  return (
    <div className='note'>
      <b>{title}</b>
      <p>{children}</p>
    </div>
  )
}
