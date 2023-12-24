import './header-nav-item.style.css'

import { IHeaderNavItemComponent } from '../../../interfaces/components/header.interface'
import { useNavigate } from 'react-router-dom';
import { useShowElement } from '../../../hooks/useShowElement.hook';

export const HeaderNavItemComponent = (props: IHeaderNavItemComponent) => {
  const { item } = props;
  const { isOpen, onOpenChange } = useShowElement();
  const navigate = useNavigate();
  const elementIsCollapsable: boolean = !!item.subitems && item.subitems.length > 0;

  const onClickItem = () => {
    if (elementIsCollapsable) {
      onOpenChange();
    } else {
      item.path && navigate(item.path)
    }
  }

  return (
    <div className='header-mobile-nav-item-component'>
      <button onClick={onClickItem} className='header-mobile-nav-item-top'>
        <div className='header-mobile-nav-item-top--left'>{item.name}</div>
        {elementIsCollapsable && (
          <div className='header-mobile-nav-item-top--right'>
            {isOpen ? '+' : '-'}
          </div>
        )}
      </button>
      {elementIsCollapsable && (
        <div className={`header-mobile-nav-item-subitems ${isOpen ? 'header-mobile-nav-item-subitems--open' : ''}`}>
          {item.subitems?.map((subitem) => (
            <button className='header-mobile-nav-item-subitems--subitem'>
              {subitem.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}