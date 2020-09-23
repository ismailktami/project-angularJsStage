

app.controller("indicateurController",function($scope,$rootScope){

    $rootScope.$on("delete_indicateur",(event,{indicateur,parent,index})=>{
      
        $scope.parent=parent;
        $scope.index=index;
        $scope.indicateur=indicateur;
        $("#modaldelete").modal();
    });

    $scope.confirmdelete=function(){
        $("#modaldelete").modal("hide");    
        $scope.parent.indicateurs.splice($scope.index,1);
    }


    

});