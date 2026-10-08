export default class Collapsible {
  constructor({ root, text }) {
    this.root = root;
    this.text = text;

    this.render();
    this.bindEvents();
  }

  render() {
    this.root.innerHTML = `
      <div class="widget">
        <div class="widget-header">
          <button class="collapse-btn" type="button">Collapse</button>
        </div>
        <div class="widget-content">
          <div class="widget-content-inner">
            <p>${this.text}</p>
          </div>
        </div>
        <div class="widget-footer">
          <a href="#" class="copy-link">Copy</a>
        </div>
      </div>
    `;

    this.widget = this.root.querySelector(".widget");
    this.button = this.root.querySelector(".collapse-btn");
  }

  bindEvents() {
    this.button.addEventListener("click", () => this.toggle());
  }

  toggle() {
    this.widget.classList.toggle("is-open");
  }
}
