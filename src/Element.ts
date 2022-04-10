interface Element {
  /** @see {@link https://stackoverflow.com/a/59360710/6404439} */
  insertAfter: (el: HTMLElement) => HTMLElement;
}
Element.prototype.insertAfter = function(el) {
  this.parentNode.insertBefore(el, this.nextSibling);
  return this;
}
