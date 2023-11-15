export default function Color ({ children, borderColor = '#202124', backgroundColor = '#202124' }) {
  return (
    <li className='note-item-color' style={{ backgroundColor }}>
      {children}
    </li>
  )
}
