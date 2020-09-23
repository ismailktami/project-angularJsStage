

app.controller("modal-indicateur-controller",function($scope,$controller,$rootScope){
    $scope.offre="";
    $scope.techno="";
    $scope.valider=false;
    $scope.validerregle=false;

    $rootScope.$on("edit_indicateur",(event,{indicateur,parent,index})=>{
      $("#exampleModal").modal();
      $scope.parent=parent;
        $scope.indicateur=indicateur;
        $scope.indicateur_before_edit={...indicateur};
        $scope.index=index;
        $scope.indicateur_to_edit=Object.assign(indicateur);

        console.log(indicateur);
    })
    



    
    $scope.modifier=function(){
      $scope.valider=true;

      setTimeout(function(){
        $("#exampleModal").modal('hide');
        $scope.valider=false;
      },1000);

      
      /**
       * au cas d'erreurs
       */
      //Object.assign($scope.indicateur,$scope.indicateur_before_edit);
    }
    $scope.deletecClient=function(index){
    
    //Apply service to delete client
      $scope.indicateur_to_edit.clients.splice(index,1);  
    
    }
    $scope.addClient=function(techno,offre){
      $scope.offre='';
      $scope.techno='';
      // if(ContainsClient(techno,offre)){

      // }
      // else
      $scope.indicateur_to_edit.clients.push({technologie:techno,type_of_abonnement:offre});

    }

    $scope.addRegle=function(){
      console.log($scope.indicateur_to_edit.regle);
    }

    $scope.ContainsClient=function(techno,offre){
      return  ($scope.indicateur_before_edit.clients.find(function(e){
                       return (e.technologie==techno && e.type_of_abonnement==offre)
                                                            }))!=null;
    }
});