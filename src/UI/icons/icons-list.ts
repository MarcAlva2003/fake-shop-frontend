import closeRound from "./actions/close/close_round.svg";
import closeRoundFill from "./actions/close/close_round_fill.svg";
import menu from './custom/menu.svg'
import menuNotification from './custom/menu-notification.svg'
import settings from './custom/settings.svg'
import shoppingCart from './custom/shopping-cart.svg'
interface IActionIcons {
  closeRoundFill: string;
  closeRound: string;
}

interface ICustom {
  shoppingCart: string;
  menuNotification: string;
  menu: string;
  settings: string;
}

interface IIconsList {
  actions: IActionIcons;
  custom: ICustom;
}

export const IconsList: IIconsList = {
  actions: { closeRound, closeRoundFill },
  custom: {
    shoppingCart,
    menuNotification,
    menu,
    settings
  }
};
