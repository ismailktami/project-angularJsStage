app.controller("Sous_BlocController",function($scope,$rootScope){

    
    $scope.deleteIndicateur=function(indicateur,sous_bloc,indice){
        $rootScope.$emit("delete_indicateur",{indicateur:indicateur,parent:sous_bloc,index:indice});
    }

    $scope.deleteIndicateurSet=function(indicateurset,sous_bloc,index){
        $rootScope.$emit("delete_indicateur_set",{indicateurset:indicateurset,parent:sous_bloc,index:index});
    }
    $scope.editIndicateur=function(indicateur,sous_bloc,index){
        $rootScope.$emit("edit_indicateur",{indicateur:indicateur,parent:sous_bloc,index:index});
    }
})