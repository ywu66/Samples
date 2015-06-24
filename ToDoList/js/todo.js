angular.module('todoApp',[])
.controller('TodoCtrl', function($scope) {
    $scope.todos = [
        {text:'Learn AngularJS', done:false},
        {text:'Build an app', done:false}
    ];
    
    $scope.getTotalTodos = function () {
        return $scope.todos.length;
    };
    
    $scope.remaining = function(){
    var count = 0;
    angular.forEach($scope.todos, function(todo){
        count+=todo.done ? 0 : 1; //true count+0, flase count+1
    });
        return count;
    }

    $scope.clearCompleted = function () {
        var oldTodos = $scope.todos;
        $scope.todos = []; //將array清空
        angular.forEach(oldTodos, function(todo) {
        if (!todo.done) $scope.todos.push(todo); //如果todo.done為false 則將todo加回去
      });
    };
    
    $scope.addTodo = function () {
        if ($scope.TodoText == undefined || $scope.TodoText==''){
            HTMLButtonElement == 'disable';
            alert('You must write something!');
        }
        else{
        $scope.todos.push({text:$scope.TodoText, done:false});//加入輸入的項目
        $scope.TodoText = '';
        }

    };
    
});
