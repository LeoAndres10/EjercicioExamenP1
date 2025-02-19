function CalcularOperaciones(){
    let producto1= document.getElementById("Producto1").value;
    let producto2= document.getElementById("Producto2").value;
    let producto3= document.getElementById("Producto3").value;
    let producto4= document.getElementById("Producto4").value;
    let producto5= document.getElementById("Producto5").value;

    if (producto1 === "") {
        Swal.fire({
            icon: "error",
            title: "Oops... Ingrese el primer producto!",
           
            
          });
    } else if(producto2 === "") {
        Swal.fire({
            icon: "error",
            title: "Oops... Ingrese el segundo producto!",    
          
          });
    }else if(producto3 === ""){
        Swal.fire({
            icon: "error",
            title: "Oops... Ingrese el tercer producto!",    
          
          });
    }else if( producto4 === ""){
        Swal.fire({
            icon: "error",
            title: "Oops... Ingrese el cuarto producto!",    
          
          });
        }else if( producto5 === ""){
            Swal.fire({
                icon: "error",
                title: "Oops... Ingrese el quinto producto!",    
              
              });
            
        }else{
        let p1=parseInt(producto1);
        let p2=parseInt(producto2);
        let p3=parseInt(producto3);
        let p4=parseInt(producto4);
        let p5=parseInt(producto5);

        let subtotal= (p1+p2+p3+p4+p5);

        if (subtotal >= 0 && subtotal <=999.99) {
            Swal.fire({
                icon: "error",
                title: "NO APLICA DESCUENTO!",    
              
              });
              document.getElementById("Subtotal").value= subtotal;
              document.getElementById("Descuento").value="No descuento";
              let total=subtotal;
              document.getElementById("Total").value=total;
            }else if (subtotal>=1000.00 && subtotal <=4999.99) {
            
                Swal.fire({
                    icon: "success",
                    title: "Aplica 20% de Descuento",
                    draggable: true

                  });

            document.getElementById("Subtotal").value= subtotal;
            let descuento=(subtotal*0.20);
            document.getElementById("Descuento").value=descuento;
            let total=(subtotal- descuento);
            document.getElementById("Total").value=total;
        }
    
}}