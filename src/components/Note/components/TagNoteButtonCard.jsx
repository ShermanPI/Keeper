import { TagIcon } from '../assets/images/Icons'
import TagManager from '../../TagManager/TagManager'
import { useToggle } from '../../../hooks/useToggle'

export default function TagNoteButtonCard ({ noteId }) {
  const { toggleState, toggle } = useToggle({ initialValue: false })

  return (
    <>
      <TagManager isVisible={toggleState} noteId={noteId} />
      <button className='note-action-button tags-btn' onClick={toggle}>
        <TagIcon />
      </button>
    </>
  )
}
