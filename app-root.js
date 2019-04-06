window['app-root'] = function (templateNode) {
  return class AppRoot extends HTMLElement {
    constructor() {
      super()

      const template = templateNode.content

      const shadowRoot = this.attachShadow({mode: 'open'}).appendChild(template.cloneNode(true))
    }
  }
}
