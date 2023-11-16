export default function Color ({ children, backgroundColor = '#202124', isSelected, onClick }) {
  return (
    <li className='note-item-color' style={{ backgroundColor, borderColor: isSelected && '#a142f4' }} onClick={onClick}>
      {children}
    </li>
  )
}
