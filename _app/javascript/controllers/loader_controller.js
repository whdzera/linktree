import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["loaderWrapper"];

  connect() {
    this.preloadImages();
  }

  preloadImages() {
    const lightBgUrl = this.element.dataset.themeLightBgValue;
    const darkBgUrl = this.element.dataset.themeDarkBgValue;

    Promise.all([this.loadImage(lightBgUrl), this.loadImage(darkBgUrl)])
      .then(() => {
        this.hideLoader();
      })
      .catch(() => {
        console.warn("Failed to load some background images");
        this.hideLoader();
      });

    // Set initial loader theme
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      this.loaderWrapperTarget.classList.add("dark");
    }
  }

  loadImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();

      const timeoutId = setTimeout(() => {
        reject(new Error(`Image load timeout: ${url}`));
      }, 5000);

      img.onload = () => {
        clearTimeout(timeoutId);
        resolve();
      };

      img.onerror = () => {
        clearTimeout(timeoutId);
        reject(new Error(`Failed to load image: ${url}`));
      };

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
