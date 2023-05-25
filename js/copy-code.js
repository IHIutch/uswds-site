const COPY_CODE_CLASS = "copy-code";
const COPY_BUTTON_CLASS = `usa-button usa-button--outline ${COPY_CODE_CLASS}__button`;
const COPY_BUTTON_SUCCESS_CLASS = `${COPY_CODE_CLASS}__button--success`;
const COPY_WRAPPER_CLASS = `${COPY_CODE_CLASS}__wrapper`;
const SR_STATUS_MESSAGE_CLASS = `${COPY_CODE_CLASS}__sr-status`;

const COPY_CODE = document.querySelectorAll(`.${COPY_CODE_CLASS}`);
const COPY_WRAPPER = `.${COPY_WRAPPER_CLASS}`;
const SR_STATUS_MESSAGE = `.${SR_STATUS_MESSAGE_CLASS}`;

const SR_DEFAULT_MESSAGE = "Copy component code.";
const SR_SUCCESS_MESSAGE = "Code copied to clipboard.";

/**
 * Creates a wrapper for copy button.
 *
 * @return {HTMLElement} - A div for `copy-code__wrapper`.
 */
const createWrapper = () => {
  const wrapper = document.createElement("div");
  wrapper.classList.add(COPY_WRAPPER_CLASS);

  return wrapper;
};

/**
 * Creates a copy button component.
 *
 * @return {HTMLElement} - A button for copying code `copy-code__button`.
 */
const createCopyButton = () => {
  const btn = document.createElement("button");
  const btnText = `
    <span aria-hidden="true">Copy</span>
  `;

  btn.className = COPY_BUTTON_CLASS;
  btn.setAttribute("type", "button");
  btn.setAttribute("aria-describedby", SR_STATUS_MESSAGE_CLASS);
  ;

  btn.insertAdjacentHTML("beforeend", btnText);

  return btn;
};

/**
 * Creates a screen reader only span element for success text 
 * 
 * @returns {HTMLElement} - A span for screen reader text
 */
const createSRStatus = () => {
  const srText = document.createElement("div");
  srText.classList.add("usa-sr-only");
  srText.classList.add(SR_STATUS_MESSAGE_CLASS);
  srText.setAttribute("aria-live", "polite");
  srText.innerHTML = SR_DEFAULT_MESSAGE;

  return srText;
};

/**
 * Copy <code> text content when copy code button is clicked.
 *
 * @param {Event} event - The click event from copy code button.
 * @return {Clipboard} - Code element contents written to clipboard.
 */
const copyOnClick = (event) => {
  const copyBtn = event.currentTarget;
  const btnWrapper = copyBtn.closest(COPY_WRAPPER);
  const labelVisual = copyBtn.querySelector("[aria-hidden]");
  const labelSR = btnWrapper.querySelector(SR_STATUS_MESSAGE);


  // Set success state
  copyBtn.classList.add(COPY_BUTTON_SUCCESS_CLASS);
  labelVisual.innerHTML = "Copied!";
  labelSR.innerHTML = SR_SUCCESS_MESSAGE;

  // After timeout, reset to default state
  setTimeout(() => {
    copyBtn.classList.remove(COPY_BUTTON_SUCCESS_CLASS);
    labelVisual.innerHTML = "Copy";
    labelSR.innerHTML = SR_DEFAULT_MESSAGE;
  }, 3000);

  // Select section code and copy to clipboard
  const copyComponent = copyBtn.closest(`.${COPY_CODE_CLASS}`);
  const codeElement = copyComponent.querySelector("code");
  return navigator.clipboard.writeText(codeElement.textContent);
};

/**
 * Initialize code component.
 *
 * Iterate through all code components and attach dynamically generated
 * button & wrapper to DOM. Copy code element contents when button is clicked.
 *
 */
const init = () => {
  COPY_CODE.forEach((copyCodeElement) => {
    const copyWrapper = createWrapper();
    const copyButton = createCopyButton();
    const labelSROnly = createSRStatus();
    
    copyWrapper.appendChild(labelSROnly);
    copyWrapper.appendChild(copyButton);
    copyCodeElement.appendChild(copyWrapper);

    copyButton.addEventListener("click", copyOnClick);
  });
};

init();
