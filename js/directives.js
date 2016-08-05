angular.module('emailApp')
.directive('sideBar',function($rootScope){
    return {
        link:function(scope,element){
            var lis = element.find('li');
            function delActive(){
                for(var i =0;i<lis.length;i++){
                    angular.element(lis[i]).removeClass('active');
                }
            }
            element.on('click',function(event){
                delActive();
                angular.element(event.target).addClass('active');
            })
        }
    }
})
.directive('setTitle',function(){
    return {
        link:function($rootState,element){
            $rootState.$on('$stateChangeStart',function(event,toState){
                console.log(toState.data);
                element.text(toState.data.title);
            })
        }
    }
});