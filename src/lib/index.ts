import './styles/default.css'
import { getDialogElement } from './helpers'

document.addEventListener('click', (event) => {
    // The event.target property references the element that was clicked.
    // The 'as Element' part casts the target to an Element type.
    const target = event.target as Element

    // Use the closest method to find the nearest ancestor of the clicked element
    // (including the clicked element itself) that has the 'data-dialog-open' attribute.
    const openDialogElement = target.closest('[data-dialog-open]')

    // If an element with 'data-dialog-open' was found...
    if (openDialogElement) {
        // Retrieve the value of the 'data-dialog-open' attribute, which should correspond
        // to the selector of the dialog to be opened.
        const targetDialogSelector = openDialogElement?.getAttribute('data-dialog-open')

        // If the selector is not empty, use it to find and open the dialog.
        if (targetDialogSelector) {
            getDialogElement(targetDialogSelector).showModal()
        }

        return
    }

    // Similar to the previous block, but for closing dialogs.
    // It finds the nearest ancestor element with the 'data-dialog-close' attribute.
    const closeDialogElement = target.closest('[data-dialog-close]')
    if (closeDialogElement) {
        // Retrieve the value of the 'data-dialog-close' attribute, which should correspond
        // to the selector of the dialog to be closed.
        const targetDialogSelector = closeDialogElement?.getAttribute('data-dialog-close')

        // If the selector is provided, use it to find and close the dialog.
        if (targetDialogSelector) {
            getDialogElement(targetDialogSelector).close()
        } else {
            // If no specific dialog selector is provided,
            // find the closest dialog element to the clicked element and close it.
            const targetDialog = closeDialogElement.closest('dialog')

            if (!targetDialog) return

            if (targetDialog.hasAttribute('animation')) {
                targetDialog.setAttribute('close', '')
                targetDialog.addEventListener('animationend', () => {
                    if (targetDialog.hasAttribute('close')) {
                        targetDialog.removeAttribute('close')
                        targetDialog.close()
                    }
                });
            } else {
                targetDialog.close()
            }
        }
        return
    }
})
