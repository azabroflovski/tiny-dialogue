/**
 * Function to retrieve a dialog element based on a CSS selector.
 * @param selector {string}
 */
export function getDialogElement(selector: string) {
  // The querySelector function is used to find the first element that matches the provided CSS selector.
  // The 'as HTMLDialogElement' part casts the result to an HTMLDialogElement type,
  // ensuring that the returned value is treated as a dialog element.
  return document.querySelector(selector) as HTMLDialogElement
}
