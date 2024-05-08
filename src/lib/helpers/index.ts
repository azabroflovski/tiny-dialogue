import type { HTMLDialogueElement } from '../types.ts'

/**
 * Function to retrieve a dialog element based on a CSS selector.
 * @param selector {string}
 */
export function getDialogElement(selector: string) {
  // The querySelector function is used to find the first element that matches the provided CSS selector.
  // The 'as HTMLDialogElement' part casts the result to an HTMLDialogElement type,
  // ensuring that the returned value is treated as a dialog element.
  return document.querySelector(selector) as HTMLDialogueElement
}

export function getDialogCloseIcon() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
}

export function getDialogueHeaderTemplate({ title, closable }: any) {
  return `
    <div data-dialog-header>
        <div data-dialog-title>${title}</div>
        <div data-dialog-close>
           ${closable ? getDialogCloseIcon() : ''}
        </div>
    </div>
  `
}
