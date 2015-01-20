'use strict';

/**
 * @ngdoc function
 * @name angularMermaidApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularMermaidApp
 */
angular.module('angularMermaidApp')
  .controller('MainCtrl', ['$scope', '$sce', function($scope, $sce) {
    $scope.checkUpdate = function() {
      setTimeout(function() {
        var mermaidholder = document.getElementById('mermaidholder');
        //Delete the exisiting child nodes
        while (mermaidholder.firstChild) {
          mermaidholder.removeChild(mermaidholder.firstChild);
        }

        //Add the new node
        var mermaidnode = document.createElement('div');
        mermaidnode.className = 'mermaid';
        mermaidnode.appendChild(document.createTextNode($sce.trustAsHtml($scope.mermaidsyntax)));
        mermaidholder.appendChild(mermaidnode);

        mermaid.init(); // jshint ignore:line
      }, 1000);
    };

    $scope.mermaidsyntax = 'sequenceDiagram\n' +
      'A->> B: Query\n' +
      'B->> C: Forward query\n' +
      'Note right of C: Thinking...\n' +
      'C->> B: Response\n' +
      'B->> A: Forward response\n';
    document.getElementsByClassName('materialize-textarea')[0].focus();
    $scope.checkUpdate();

  }]);
