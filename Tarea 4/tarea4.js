const ordenesLechugaPalta = () => {

  return sandwichOrders.filter(order => order.ingredients.includes('lechuga') && order.ingredients.includes('palta')); 

}

const findOrderById = ( orderId ) => {
  
  let mensaje = '';
  
  const result =  sandwichOrders.find((sandwichOrder) => sandwichOrder.id === orderId);                                        
  
  const { ordered = 0, 
          ingredients = []
        } = result;

  if( result === undefined ) {
    mensaje = `No se encontró la orden con id ${orderId}`
  } else {
    mensaje = `La orden fue realizada el ${ordered}, la orden llevó`

    ingredients
    .forEach((ingredient, index, array) => {
      if( index === 0 && index === array.length-1 )
        mensaje = mensaje.concat(` ${ingredient}`);
      else if( index === array.length-1 ) 
        mensaje = mensaje.substring(0,mensaje.length-1).concat(` y ${ingredient}`)
      else 
        mensaje = mensaje.concat(` ${ingredient},`);
    });
  } 

  return mensaje;

}

const  findOrderByIdWithPickles = ( orderId ) => {

  const result = sandwichOrders              
                .filter(sandwichOrder => sandwichOrder.ingredients.includes('pepinillos'))
                .find(sandwichOrder => sandwichOrder.id === orderId);
  
  return result !== undefined;                    

}

const findOrdersByDate = ( orderDate ) => {
  const result = sandwichOrders.reduce(
    (cantidadOrdenes, ordenActual) => {      
      const { ordered } = ordenActual;      
      if( ordered === orderDate ){
        const { [ordered]: listaDeFechasActual = [] } = cantidadOrdenes;
        cantidadOrdenes[ordered] = [...listaDeFechasActual, ordenActual];
      }        
      return cantidadOrdenes;
    },
    {}
  )

  const cantidad = result[orderDate].length;

  return  `Se encontraron ${cantidad} ordenes para la fecha ${orderDate}`;
}