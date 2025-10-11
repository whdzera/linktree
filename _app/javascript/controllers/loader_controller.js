import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["loaderWrapper"];

  connect() {
    this.preloadImages();
  }

  preloadImages() {
    const lightBg = new Image();
    const darkBg = new Image();

    const lightBgUrl = this.element.dataset.themeLightBgValue;
    const darkBgUrl = this.element.dataset.themeDarkBgValue;

    Promise.all([this.loadImage(lightBgUrl), this.loadImage(darkBgUrl)]).then(
      () => {
        this.hideLoader();
      }
    );

    // Check if user prefers dark mode
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      this.loaderWrapperTarget.classList.add("dark");
    }
  }

  loadImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => reject();
      img.src = url;
    });
  }

  hideLoader() {
    this.loaderWrapperTarget.classList.add("hide-loader");
    setTimeout(() => {
      this.loaderWrapperTarget.style.display = "none";
    }, 500);
  }
}
