/*Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
	de cada una debo obtener los siguientes datos:
	el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
	el precio (validar entre 100 y 300),
	la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
	Categoria ("desinfectante", "bactericida", "detergente" ) y el fabricante.
	Se debe Informar al usuario lo siguiente:
	a) El promedio de cantidad por tipo de producto
	b) La categoria con mas cantidad de unidades en total de la compra
	c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
	d) el fabricante y Categoria del más caro de los productos¨*/
function mostrar() {
  let nombre;
  let tipo;
  let precio;
  let cantidad;
  let categoria;
  let fabricante;
  let contador = 0;
  let promedioa;
  let promedioi;
  let promedioq;
  let acuma = 0;
  let conta = 0;
  let acumi = 0;
  let conti = 0;
  let acumq = 0;
  let contq = 0;

  let acumd;
  let acumde;
  let acumb;
  let contd;
  let contde;
  let contb;

  let flagjoven = 1;
  let menoredad;
  let nombrejoven;
  let contadoruniprecio;

  do {
    nombre = prompt("Ingrese nombre: ");
    
    tipo = prompt("Ingrese tipo de producto: alcohol / iac / quat");
    while (tipo != "alcohol" && tipo != "iac" && tipo != "quat") {
      tipo = prompt("Error. ingrese tipo de producto: alcohol / iac / quat");
    }
    precio = parseInt(prompt("Ingrese precio: "));
    while (isNaN(precio) && precio < 0) {
      precio = parseInt(prompt("Error. Ingrese precio: "));
    }
    cantidad = parseInt(prompt("Ingrese cantidad: "));
    while (isNaN(cantidad) || (cantidad < 0 && cantidad > 1000)) {
      cantidad = parseInt(prompt("Error. Ingrese cantidad: "));
    }
    categoria = prompt("Ingrese tipo de categoria: desinfectante / bactericida / detergente");
      while(categoria != " desinfectante" && categoria != "bactericida" && categoria !=  "detergente"){
		  categoria = prompt("Error. ingrese tipo de categoria: desinfectante / bactericida / detergente ");
	  }
	fabricante = prompt("Ingrese fabricante: ");

    //a) El promedio de cantidad por tipo de producto
    if (tipo == "alcohol"){
		acuma += cantidad;
		conta++;
	}
	if(tipo == "iac"){
		acumi += cantidad;
		conti++;
	}
	if(tipo == "quat"){
		acumc += cantidad;
		contq++;
	}
	if(categoria == "desinfectante"){
		acumd += cantidad;
		contd++;
	}
	if(categoria == "bactericida"){
		acumb += cantidad;
		contb++;
	}
	if(categoria == "detergente"){
		acumde += cantidad;
		contde++;
	}
        if ((flagjoven == 1 || menoredad > edad) && tipoCursada == "libre") {
          menorEdad = edad;
          nombrejoven = nombre;
          flagJoven = 0;
		}

		
    contador++;
  } while (contador < 5);
  //c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
  if(categoria == "detergente" && precio < 200){
		contadoruniprecio++;
  }


  if(acumd > acumb && acumde > acumd){
	  maxunidades = acumd / contd;
  }else if(acumb > acumde){
	  maxunidades = acumb /contb;
  }
  else{
	  maxunidades = acumde /contde
  }
  promedioa = acuma / conta;
  promedioi = acumi / conti;
  promedioq = acumq / contq;

  console.log("El promedio de alcohol es "+ promedioa);
  console.log("El promedio de iac es" + promedioi);
  console.log("El promedio de quat es "+ promedioq);
  console.log("categoria con mas unicades compradas es: "+ maxunidades);
  console.log("La cantidad de detergentes menor de 200$ es de "+ contadoruniprecio);

}
