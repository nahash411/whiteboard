angular.module('whiteboard.services.board', [])
.factory('Board', function (Snap) {
  var board = {};
  
  board.$el;
  board.paper;

  board.createBoard = function (appendTo, width, height) {
    this.paper = Raphael(document.getElementById(appendTo), width, height);
    this.$el = $('#' + appendTo + ' svg');
  };

  board.attachMouseListeners = function (handler) {
    var self = this;

    this.$el.on('mousedown', function (e) {
      console.log('click')
      handler(e);
    });
    
    this.$el.on('mouseup', function () {
      self.$el.off('mousemove');
      Snap.createSnaps(self.lastShape);
    });
    
  };

  return board;

});