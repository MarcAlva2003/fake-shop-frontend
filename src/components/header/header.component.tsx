import './header.style.css'

import { HeaderMobileNav } from './header-moble-nav/header-moble-nav.component'
import { IconsList } from '../../UI/icons/icons-list'
import MainLogo from '../../public/logos/fake-shop-logo.png'
import { SVGIcon } from '../../UI/components/icons/icon.component'
import { useHeadeNav } from '../../hooks/useHeaderNav.hook'
import { useShowElement } from '../../hooks/useShowElement.hook'

export const Header = () => {
  const {
    isOpen: navbarOpen,
    onOpenChange,
    onClose
  } = useShowElement();

  const { navOptions } = useHeadeNav()


  return (
    <header className='header-component-bg'>
      <div className='header-component-container'>
        <div className='header-component-left'>
          <a href='/' className='header-component-left--logo'>
            <img src={MainLogo} alt="Fake Shop Logo" />
          </a>
        </div>
        <div className='header-component-right'>
          <nav className='header-component-right--desktop header-desktop-nav'>
          </nav>
          <div className='header-component-right--shopping-cart'>
            <SVGIcon size='32px' icon={IconsList.custom.shoppingCart} />
          </div>
          <div onClick={onOpenChange} className='header-component-right--mobile header-mobile-opener'>
            <SVGIcon size='32px' icon={IconsList.custom.menu} />
          </div>
          <HeaderMobileNav isOpen={navbarOpen} items={navOptions} onClose={onClose} />
        </div>
      </div>
    </header>
  )
}