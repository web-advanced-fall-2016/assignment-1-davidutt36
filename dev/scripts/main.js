var Slider = function() { this.initialize.apply(this, arguments) }
var group = document.getElementsByClassName('slider-content');
var item = document.getElementsByClassName('slide');


	Slider.prototype = {

    initialize: function(slider) {
      this.group = slider.children[0]
      this.item = this.group.children

      // make <group> as large as all <li>’s
      this.group.style.width = (this.item[0].clientWidth * this.item.length) + 'px'

      this.currentIndex = 0
    },

    goTo: function(index) {
      // filter invalid indices
      if (index < 0 || index > this.item.length - 1)
        return

      // move <group> left
      this.group.style.left = '-' + (100 * index) + '%'

      this.currentIndex = index
    },

    goToPrev: function() {
      this.goTo(this.currentIndex - 1)
    },

    goToNext: function() {
      this.goTo(this.currentIndex + 1)
    }
  }

console.log(item);
console.log(item.length);
console.log(group);
