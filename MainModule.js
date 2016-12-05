var gridApp = angular.module("gridApp", ["mainModule"]);

var mainModule = angular.module('mainModule',[]);
mainModule.controller('mainCtrl',function($scope){

  $scope.colors=["red", "pink", "green", "blue" , "violet", "aqua", "orange", "yellow"];

  $scope.displayValues=[];
  var values=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  var obj=0;
  for (i in values){
    $scope.displayValues.push({value:Number(i),
    visible:false,
    color:'#fff'})
  }
  function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };
  shuffle(values);

  $scope.switchColor= function(value){
    console.log(value, $scope.colors[((values).indexOf(value.value)%8)])
    $scope.displayValues[value.value].visible=true;
    $scope.displayValues[value.value].color=$scope.colors[((values).indexOf(value.value)%8)];

  }

  $scope.$watch('$scope', function(oldVal,newVal){

  });

});
