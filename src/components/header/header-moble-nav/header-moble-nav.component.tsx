import './header-moble-nav.style.css'

import { HeaderNavItemComponent } from '../header-nav-item/header-nav-item.component';
import { IHeaderMobileNav } from '../../../interfaces/components/header.interface'
import { INavigationItem } from '../../../interfaces/components/header.interface';

export const HeaderMobileNav = (props: IHeaderMobileNav) => {
  const { isOpen, items } = props;
  return (
    <div className={`header-mobile-nav-component ${isOpen ? 'header-mobile-nav-component-open' : ''}`}>
      <div className='header-mobile-nav-bg'></div>
      <nav className='header-mobile-nav-list'>
        {items.map((item: INavigationItem) => (
          <HeaderNavItemComponent item={item} />
        ))}
      </nav>
    </div>
  )
}