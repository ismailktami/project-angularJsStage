app.controller("IndicateurSetController",function($scope,$rootScope){

    $scope.deleteIndicateur=function(indicateur,indicateurset,indice){
        $rootScope.$emit("delete_indicateur",{indicateur:indicateur,parent:indicateurset,index:indice});
    }

    $scope.editIndicateur=function(indicateur,bloc,index){
        $rootScope.$emit("edit_indicateur",{indicateur:indicateur,parent:bloc,index:index});
    }

    

    $rootScope.$on("delete_indicateur_set",(event,{indicateurset,parent,index})=>{
        $scope.indicateurset=indicateurset;
        $scope.parent=parent;
        $scope.index=index;
        $("#modaldeleteSet").modal();
    });

    $scope.confirmdelete=function(){
        $("#modaldeleteSet").modal("hide");    
        $scope.parent.indicateurs_sets.splice($scope.index,1);
    }



    
})