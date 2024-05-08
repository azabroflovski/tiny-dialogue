import { Dialogue } from './dialogue.ts'
import type { HTMLDialogueElement } from './types.ts'

export function initSimpleMode() {
  // SSR FRIENDLY
  if (typeof document === 'undefined' || typeof window === 'undefined')
    return

  document.addEventListener('click', (event) => {
    // The event.target property references the element that was clicked.
    // The 'as Element' part casts the target to an Element type.
    const target = event.target as Element

    // Use the closest method to find the nearest ancestor of the clicked element
    // (including the clicked element itself) that has the 'data-modal-open' attribute.
    const openDialogElement = target.closest('[data-dialog-open]')

    // If an element with 'data-modal-open' was found...
    if (openDialogElement) {
      // Retrieve the value of the 'data-modal-open' attribute, which should correspond
      // to the selector of the dialog to be opened.
      const targetDialogSelector = openDialogElement?.getAttribute('data-dialog-open')

      // If the selector is not empty, use it to find and open the dialog.
      if (targetDialogSelector) {
        const dialog = new Dialogue(targetDialogSelector)

        dialog.open()
      }

      return
    }

    // Similar to the previous block, but for closing dialogs.
    // It finds the nearest ancestor element with the 'data-modal-close' attribute.
    const closeDialogElement = target.closest('[data-dialog-close]')
    if (closeDialogElement) {
      // Retrieve the value of the 'data-modal-close' attribute, which should correspond
      // to the selector of the dialog to be closed.
      const targetDialogSelector = closeDialogElement?.getAttribute('data-dialog-close')

      // If the selector is provided, use it to find and close the dialog.
      if (targetDialogSelector) {
        // getDialogElement(targetDialogSelector).close()
      }
      else {
        // If no specific dialog selector is provided,
        // find the closest dialog element to the clicked element and close it.
        const targetDialog = closeDialogElement.closest('dialog')

        if (!targetDialog)
          return

        const dialog = new Dialogue(targetDialog as HTMLDialogueElement)
        // dialog.close()
      }
    }
  })
}
