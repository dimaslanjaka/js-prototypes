interface Element {
  insertAfter: (el: HTMLElement) => HTMLElement;
}
Element.prototype.insertAfter = function(el) {
  this.parentNode.insertBefore(el, this.nextSibling);
  return this;
}
