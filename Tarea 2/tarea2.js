    var mascota = {
        mascotas: ['perros','gatos','canarios','pez','serpiente'],
        esSegura: false,
        llamarAlerta: function(alerta){
            alert(alerta+' entregado como parámetro');
        },
        esHttps: function() {
            this.esSegura = location.protocol === 'https:';
            return this.esSegura;
        },
        eliminarMascota: function(mascotaE){ 
            var index = this.mascotas.indexOf(mascotaE.toLowerCase());
            
            if(index >= 0)
                this.mascotas.splice(index, 1);
            
            return this.mascotas;        
        },
        eliminarUltimaMascota: function(){
            var tamanoArreglo = this.mascotas.length - 1;
            
            if(tamanoArreglo >= 0)
                this.mascotas.splice(tamanoArreglo, 1); 
            
            return this.mascotas;
        },
        agregarMascota: function(mascotaA){           
            this.mascotas.push(mascotaA);
            return this.mascotas;
        },
        contadorMascotas: function(){
            var cantidad = 0;
            
            for(var i = 0; i < this.mascotas.length ; i++) {
                var arrMascota = this.mascotas[i].toLowerCase();
                var tamanoMascota = arrMascota.length;
                if(arrMascota.substring(tamanoMascota-2,tamanoMascota) === 'os')
                    cantidad = cantidad + 1;  
            }

            return 'En el arreglo hay '+cantidad+' mascotas que terminan con \'os\'';
        }
    }