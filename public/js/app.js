angular
  .module("الاستجابة الإقليميّة للاجئين السوريين", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    "$locationProvider",
    "$urlRouterProvider",
    RouterFunction
  ])
  // .factory("endFactory", [
  //   "$resource",
  //   EndFactoryFunction
  // ])
  // .factory("frameworkFactory", [
  //   "$resource",
  //   FrameworkFactoryFunction
  // ])
  // .factory("commentFactory", [
  //   "$resource",
  //   CommentFactoryFunction
  // ])
  .controller("IndexController", [
    "$state",
    IndexControllerFunction
  ])
  // .controller("EndShowController", [
  //   // "$scope",
  //   "$state",
  //   "$stateParams",
  //   "endFactory",
  //   EndShowControllerFunction
  // ])
  // .controller("FrameworkShowController", [
  //   "$state",
  //   "$stateParams",
  //   "endFactory",
  //   "frameworkFactory",
  //   "commentFactory",
  //   FrameworkShowControllerFunction
  // ])
  // Get this working for gold:
  // .directive('donutChart', function(){
  //   function link(scope, el){
  //     var data = scope.data
  //     var color = d3.scale.category10()
  //     var el = el[0]
  //     var width = el.clientWidth
  //     var height = el.clientHeight
  //     var min = Math.min(width, height)
  //     var pie = d3.layout.pie()
  //       .value(function(d) {return d.number;})(data);
  //     var arc = d3.svg.arc()
  //       .outerRadius(min/2 * 0.9)
  //       .innerRadius(min/2 * 0.5)
  //     var labelArc = d3.arc()
  //       .outerRadius(min/2 * .1)
  //       .innerRadius(min/2 * .5)
  //     var svg = d3.select(el).append('svg')
  //       .attr({width: width, height: height})
  //       .append('g')
  //         .attr('transform', 'translate(' + width/2 + ',' + height/2 + ')')
  //       svg.selectAll('path').data(pie(data.number))
  //         .enter().append('path')
  //           .style('stroke', 'white')
  //           .attr('d', arc)
  //           .attr('fill', function(d, i){return color(i)})
  //           .append("text")
  //             .attr("transform", function(d) {return "translate(" + labelArc.centroid(d)+ ")"; })
  //             .text(function(d) {return d.data.name;})
  //             .style("fill", "#fff");
  //   }
  //   return {
  //     link: link,
  //     restrict: 'E',
  //     scope: {data: '='}
  //   }
  // })


// In Angular, the $location service parses the URL in the address bar and makes changes to your application and vice versa.
  function RouterFunction($stateProvider, $locationProvider, $urlRouterProvider){
    $locationProvider.html5Mode(true)
    $stateProvider
    .state("Index", {
      url: "/",
      templateUrl: "/assets/js/ng-views/index.html",
      controller: "IndexController",
      controllerAs: "vm"
    })
  // .state("endShow", {
  //   url: "/ends/:type",
  //   templateUrl: "/assets/js/ng-views/ends/show.html",
  //   controller: "EndShowController",
  //   controllerAs: "vm"
  // })
  //
  // .state("frameworkShow", {
  //   url: "/ends/:type/frameworks/:title",
  //   templateUrl: "/assets/js/ng-views/frameworks/show.html",
  //   controller: "FrameworkShowController",
  //   controllerAs: "vm"
  // })
  $urlRouterProvider.otherwise("/ends")
}
