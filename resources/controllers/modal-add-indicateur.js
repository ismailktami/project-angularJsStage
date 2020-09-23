app.controller("modal-add-indicateur-controller",function($scope,$controller,$rootScope){
   

    $rootScope.$on("add-indicateur",(event,{parent})=>{
        $("#modalSelectType").modal();
        $scope.typeselected=false;
        $scope.typeIndicateur="";

        $scope.parent=parent;
        $scope.indicateur_to_add={

            clients:[
                {technologie:localStorage.getItem('techno'),type_of_abonnement:localStorage.getItem('offre')}            ]
        };
        $scope.indicateurset_to_add={
            indicateurs:[]

        };
        $scope.valider=false;
        $scope.setMode=false;
    })

    $scope.evennt=function(){
        if(!$scope.setMode){
        $scope.valider=true;
        setTimeout(function(){    
        $("#exampleModal2").modal("hide");
        },1000);  
        $scope.parent.indicateurs.push($scope.indicateur_to_add);
    }
    else
    {
        $scope.indicateurset_to_add.indicateurs.push($scope.indicateur_to_add);
        $scope.indicateur_to_add={
            clients:[
                {technologie:localStorage.getItem('techno'),type_of_abonnement:localStorage.getItem('offre')}            ]
        };      
        $("#exampleModal2").modal('hide');


            console.log($scope.indicateurset_to_add);
            $scope.parent.indicateurs_sets.push($scope.indicateurset_to_add);
    
    }


    }
  
    $scope.selectType=function(type){
        $scope.typeselected=true;
    
        //$scope.parent.name="indicateur Set courant";
    
    
        $("#modalSelectType").modal('hide');
        
        if(type ==='simple'){
            $("#exampleModal2").modal();

        }
        else{
            $("#exampleModal3").modal();
        }

    }
    
    $scope.addIndicateur=function(indicateur_to_add){
        $("#exampleModal2").modal();
        $scope.setMode=true;
    }

    $scope.addIndicateurToSet=function(){
        
        $("#exampleModal2").modal('hide');
        }

    $scope.addClient=function(a,b){
        $scope.indicateur_to_add.clients.push({technologie:a,type_of_abonnement:b});
      
    }



});