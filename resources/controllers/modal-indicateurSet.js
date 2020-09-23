

app.controller("modal-indicateur-set-controller",function($scope,$rootScope){

    $rootScope.$on("edit_indicateur_set",(event,{indicateurset,parent,index})=>{
      $("#exampleModalSet").modal();
      $scope.parent=parent;
        $scope.indicateurset=indicateurset;
        $scope.indicateurset_before_edit={...indicateurset};
        $scope.index=index;
        $scope.indicateurset_before_edit=Object.assign(indicateurset);
    })
    
    $scope.modifier=function(){
      $("#exampleModalSet").modal('hide');
      /**
       * au cas d'erreurs
       */
      //Object.assign($scope.indicateur,$scope.indicateur_before_edit);

    }

});