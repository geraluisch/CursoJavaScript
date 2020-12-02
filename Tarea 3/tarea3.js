var tarea3 = {
  lista: null,
  llamadaApi: function(){
      if( this.lista === null){           
          fetch(
              'https://escalab-6b3e3.firebaseio.com/javascript.json',
              { method: 'GET' },
            ).then(response => response.json()
            ).then(data => {
              this.lista = data;               
            }).catch(error => {
              console.log("error: ",error)
            });                   
      }     
  },
  verDatoLista : function(posicion){
      if((posicion >= this.lista.length-1) || (posicion < 0) ){
        return 'No existe ese elemento en la lista';
      } else {
        return this.lista[posicion]
      }
  },
  vaciarLista : function(){    
      var self = this;  
      var promise = new Promise(function(resolve){         
      setTimeout(function(){          
          self.lista = null;  
          resolve('Lista eliminada!');
      }, 3000);
    })

    promise.then(respuestaResolve =>{
        
        console.log(respuestaResolve);
    })

    return 'Se eliminará la lista de forma asíncrona';
  },
  verPorPropiedad: function(posicion, propiedad){
      try {
          return this.lista[posicion][propiedad];
      } catch (error) {
          console.log(error);
      } 
  }
}