


class Indicateur{
    
    constructor(name,code_datalib){
        this.name=name;
        this.code_datalib=code_datalib;
    }
}




var app = angular.module("index-model", []);

app.controller("testController", function($scope, $http) {

    loadfunction=function(){

        var indicateurss =null;      var indicateurss2 =null;

        indicateurss= [   
            {id:44,name:'indicateur1',code_datalib:'code1'},
            {name:'indicateur2',code_datalib:'code2'},
            {name:'indicateur3',code_datalib:'code3'}
           ];


           indicateurss2= [   
            {id:44,name:'indicateur1',code_datalib:'code1'},
            {name:'indicateur2',code_datalib:'code2'},
            {name:'indicateur3',code_datalib:'code3'}
           ];
        return [
            {id:11,name:"bloc1",inds:
            indicateurss},

           {id:12,name:"bloc2",inds:
           indicateurss2},
            
            ];
    }
    
    $scope.blocs=loadfunction();

  
    $scope.testFunction=function(){
        $scope.blocs=[];
    }

    $scope.afficherIndicateur=function(indicateur){
        console.log(indicateur);
    }


    $scope.edit=function(){
        
        
 Object.assign($scope.blocs.find(function(bloc){
    return bloc.id == $scope.bloc_id;
        }).inds.find(function(i){
    return i.id == $scope.indicateur_selected.id;})
    
    , $scope.indicateur_selected);

     //   i.name=$scope.indicateur_selected.name;
        $scope.indicateur_selected=null;
    
    
    }
    
    $scope.editIndicateur=function(indicateur,bloc){
        $scope.indicateur_selected={...indicateur};
        $scope.bloc_id=bloc;
    
    }
    
    $scope.indicateur_selected=null;

    $scope.indedxx=function(index){
        console.log(index);
    }

    $scope.remove=function(indicateur,blocid,index){
        $scope.indicateur_removed={...indicateur};
        $scope.bloc_id=blocid;

        $scope.blocs.find(function(bloc){
            return bloc.id == blocid;
        }).inds.splice(index,1);
        
       

    }

});