import { useState } from "react"

export const useShowElement = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  const onOpen = () => { setIsOpen(true) }
  const onClose = () => { setIsOpen(false) }
  const onOpenChange = () => { setIsOpen(!isOpen) }

  return {
    isOpen,
    setIsOpen,
    onOpen,
    onClose,
    onOpenChange
  }
}