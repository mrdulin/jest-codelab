class SomeClass {
  skipToBotHandler() {
    const skipNav = document.querySelector('.skipnav');

    skipNav.addEventListener('click', () => {
      this.skipLinkFocusHandler();
    });
  }

  skipLinkFocusHandler() {}
}

export { SomeClass };
