import type { HTMLDialogueElement } from './types.ts'

export interface DialogueOptions {

}

/**
 * Represents a dialogue
 */
export class Dialogue {
  /**
   * The HTML dialog element.
   */
  protected dialog: HTMLDialogueElement | undefined = undefined

  /**
   * Creates an instance of Dialogue.
   * @param {string | HTMLDialogElement} selectorOrElement - The CSS selector string or HTMLDialogElement.
   */
  constructor(selectorOrElement: string | HTMLDialogueElement) {
    if (typeof selectorOrElement === 'string') {
      const dialogElement = document.querySelector<HTMLDialogueElement>(selectorOrElement)

      if (dialogElement)
        this.dialog = dialogElement
    }
    else {
      this.dialog = selectorOrElement
    }

    this.init()
  }

  /**
   * Initializes the dialogue.
   */
  private init() {
    if (this.dialog) {
      this.dialog.instance = this
      if (this.hasDisableEsc)
        this.dialog.addEventListener('keydown', this.preventEscClose)

      this.dialog.addEventListener('pointerdown', this.onClickInsideDialog)
      this.dialog.addEventListener('cancel', this.onCancel.bind(this))
    }
  }


  /**
   * Handles the cancellation event.
   * @param {Event} event - The event object.
   * @returns {void}
   */
  private onCancel(event: Event): void {
    event.preventDefault()
    this.close()
  }

  /**
   * Handles click inside the dialogue box.
   * @param {MouseEvent} event - The click event.
   */
  private onClickInsideDialog(event: any) {
    // close dialog on outside clicked
    if (event.target === event.currentTarget)
      this.instance.close()
  }

  /**
   * Prevents the dialog from closing when ESC key is pressed.
   * @param {KeyboardEvent} event - The keydown event.
   */
  private preventEscClose(event: KeyboardEvent) {
    console.log('123')
    if (event.key === 'Escape')
      event.preventDefault() // Prevent the default action of closing the dialog
  }

  /**
   * Checks if the dialogue box is set to open only once.
   * @returns {boolean} Whether the dialogue box is set to open only once.
   */
  get isOnce(): boolean | undefined {
    return this.dialog?.hasAttribute('once')
  }

  get hasAnimation() {
    return this.dialog?.hasAttribute('animation')
  }

  /**
   * Checks if ESC key is disabled for closing the dialogue box.
   * @returns {boolean} Whether ESC key is disabled for closing the dialogue box.
   */
  get hasDisableEsc(): boolean | undefined {
    return this.dialog?.hasAttribute('disable-esc')
  }

  /**
   * Gets the open delay of the dialogue box.
   * @returns {string | null} The open delay of the dialogue box.
   */
  get openDelay(): string | null | undefined {
    return this.dialog?.getAttribute('open-delay')
  }

  /**
   * Opens the dialogue.
   */
  public open(): void {
    if (this.dialog) {
      if (this.isOnce && this.dialog.wasOpen)
        return

      if (this.openDelay) {
        const timer = setTimeout(() => {
          this.dialog?.showModal()
          clearTimeout(timer)
        }, +this.openDelay)
      }
      else {
        this.dialog.showModal()
      }

      if (!this.dialog.wasOpen)
        this.dialog.wasOpen = true
    }
  }

  /**
   * Callback function to handle animation end event.
   */
  private onAnimationEnd(): void {
    if (this.dialog) {
      if (this.dialog.hasAttribute('close')) {
        this.dialog.removeAttribute('close')
        this.dialog.close()
        this.dialog.removeEventListener('animationend', this.onAnimationEnd)
      }
    }
  }

  /**
   * Function to initiate close animation process.
   */
  private animationProcess(): void {
    if (this.dialog) {
      this.dialog.setAttribute('close', '')
      this.dialog.addEventListener('animationend', this.onAnimationEnd.bind(this))
    }
  }

  /**
   * Closes the dialogue box.
   */
  public close(): void {
    if (this.dialog) {
      if (this.hasAnimation)
        this.animationProcess()
      else
        this.dialog.close()
    }
  }
}
