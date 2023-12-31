import { INavigationItem } from "../interfaces/components/header.interface"
import { IconsList } from "../UI/icons/icons-list"
import { useAppRouter } from "../routes/useAppRouter"

export const useHeadeNav = () => {
  const { publicRoutes } = useAppRouter()
  const navOptions: INavigationItem[] = [
    {
      name: 'Home',
      path: publicRoutes.HOME,
      icon: IconsList.actions.closeRound,
    },
    {
      name: 'categories',
      subitems: [
        { name: 'Tecnology', path: '/' },
        { name: 'Dessing', path: '/' },
        { name: 'Food', path: '/' },
      ],
      icon: IconsList.actions.closeRoundFill
    }
  ]
  return {
    navOptions
  }
}