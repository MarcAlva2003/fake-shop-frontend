export interface INavigationSubitem {
  name: string;
  path: string;
}

export interface INavigationItem {
  name: string;
  path?: string;
  icon: string;
  subitems?: INavigationSubitem[]
}

export interface IHeaderMobileNav {
  items: INavigationItem[];
  isOpen: boolean;
  onClose: () => void;
}

export interface IHeaderNavItemComponent {
  item: INavigationItem;
}
