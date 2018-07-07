function rotateItem(itemSelector, rotateClass) {
  let item = document.querySelector(itemSelector);
      // itemClasses = Array.from(item.classList),
      // itemIsRotated = itemClasses.findIndex(c => c === rotateClass) > -1;

  let result = item.classList.toggle(rotateClass);
}
