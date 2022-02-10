(function(window, angular, undefined){
  angular.module('chatApp')
  .controller('chatCtrl', ['$rootScope','$scope', function($rootScope,$scope){
    var vm = this;
    vm.newMessage = undefined;
    vm.messages = [];
    vm.test = "Testing Chat.";
    vm.username = undefined;
    var socket =window.io('localhost:8080/');

    socket.emit('test', "We are passing a message.");

    socket.on('recieve-message', function(msg){
      $scope.$apply(function(){
        vm.messages.push(msg);
      });
    });

    vm.sendMessage = function(){
      var newMessage = {
        username: vm.username,
        message: vm.newMessage
      };
      socket.emit('new-message', newMessage);
      vm.newMessage = undefined;
    };

    $rootScope.$on('new-user', function(event, username){
      vm.username = username;
    });

    $scope.$watch(function(){
      return vm.username;
    }, function(){
      if(vm.usernmae){
        console.log("This is the value of the username: ", vm.username);
      }
    });
  }])
})(window, window.angular);
