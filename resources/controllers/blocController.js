

app.controller("blocController",function($scope,$rootScope,$http){
   

    $scope.updateIndicateur=function(){
        $http.post('/api/users/post', JSON.stringify(data)).then(function (response) {
            if (response.data)
            
            $scope.indicateur_edited = response;
            
            }, function (error) {
            
            $scope.error = error;
            });
            
            };


    $scope.resetSearch=function(){
        $scope.MyVal='';
        $scope.search('');
         }
    $scope.removeBloc=function(bloc_id) {
        alert("remove_bloc "+bloc_id);
    }

    $scope.editIndicateur=function(indicateur,bloc,index){
        $rootScope.$emit("edit_indicateur",{indicateur:indicateur,parent:bloc,index:index});
    }
    $scope.editIndicateurSet=function(indicateurset,bloc,index){
        $rootScope.$emit("edit_indicateur_set",{indicateurset:indicateurset,parent:bloc,index:index});
    }
    
    $scope.deleteIndicateur=function(indicateur,bloc,indice){
        $rootScope.$emit("delete_indicateur",{indicateur:indicateur,parent:bloc,index:indice});
    }
    

    $scope.deleteIndicateurSet=function(indicateurset,bloc,index){
        $rootScope.$emit("delete_indicateur_set",{indicateurset:indicateurset,parent:bloc,index:index});
    }
   

    $scope.addIndicateur=function(bloc){
        $rootScope.$emit("add-indicateur",{parent:bloc});
    }



    $scope.search=function(myVal){
  

    let messages = Array.from(document.getElementsByClassName('indicateur_for_searching'));
        messages.forEach((msg)=>{
            var ss=myVal || '';
            if(msg.innerText.includes(ss)){
                if(ss!==""){
                 $(msg).css('background-color','#f4d977') ;
                  }  
                else{
                $(msg).css('background-color','white') ;            
                $(msg).show();
                }
            }
            else{
                $(msg).css('background-color','white') ;
            }
        })
    }


    
})