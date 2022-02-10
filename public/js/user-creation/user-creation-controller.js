
(function(window, angular, undefined){
  angular.module('chatApp')
  .controller('userCreationCtrl', ['$rootScope','$scope', function($rootScope, $scope){
    var vm = this;
    vm.test = "Testing Chat.";
    vm.username = undefined;
    vm.createUser =  function(username){
      console.log(username);
      $rootScope.$emit('new-user:', username);
    };
  }])
})(window, window.angular);
