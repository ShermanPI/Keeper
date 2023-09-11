import './assets/styles/sideMenu.css'
import { useState } from 'react'
import MenuCategory from '../Category/MenuCategory'
import { Inventory, Ligthbulb, PaperBin, Tags } from '../Category/assets/images/Icons'

export default function SideMenu ({ menuOpen, menuOpenHandler }) {
  const [selectedLabel, setSelectedLabel] = useState('category-1')
  const hiddenClass = menuOpen ? '' : 'hidden'

  return (
    <section className={`categories-menu ${hiddenClass}`} onClick={menuOpenHandler}>
      <section className={`categories-section ${hiddenClass}`} onClick={(e) => e.stopPropagation()}>
        <div className='logo-text'>
          <div className='logotext-image-container'>
            <img src='src/assets/images/logo.png' alt='Keeper App Logo' />
          </div>
          <h1>Keeper</h1>
        </div>
        <ul className='categories-list'>
          <li><MenuCategory id='category-1' labelHandler={setSelectedLabel} selectedLabel={selectedLabel} icon={<Ligthbulb />}> Notes </MenuCategory></li>
          <li><MenuCategory id='category-2' labelHandler={setSelectedLabel} selectedLabel={selectedLabel} icon={<Tags />}> Edit Labels </MenuCategory></li>
          <li><MenuCategory id='category-3' labelHandler={setSelectedLabel} selectedLabel={selectedLabel} icon={<Inventory />}> File </MenuCategory></li>
          <li><MenuCategory id='category-4' labelHandler={setSelectedLabel} selectedLabel={selectedLabel} icon={<PaperBin />}> Paper Bin </MenuCategory></li>
        </ul>
      </section>
    </section>
  )
}
