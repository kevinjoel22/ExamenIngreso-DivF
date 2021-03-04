
/*Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
situcación laboral ("buscando" , "trabajando" o "solo estudiante")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no de los que tarbajan o estan buscando
b) El nombre del mas viejo de los alumnos que solo sea estudiantes
c) El promedio de nota por situacion laboral
d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo*/
function mostrar()
{
  let situacionlaboral;
  let cantidadmaterias;
  let sexo;
  let notapromedio;
  let edad;
  let flag = 1;
  let nombrepromedio;
  let notamax = 0;
  let flagedad = 1;
  let acumt = 0;
  let contt = 0;
  let acums = 0;
  let conts = 0;
  let acumb = 0;
  let contb = 0;
  let promediot;
  let promediob;
  let promedios;


  do {
    nombre = prompt("Ingrese nombre: ");
    situacionlaboral = prompt("Ingrese situacion laboral : buscando / trabajando / solo estudiante");
    while (situacionlaboral != "buscando" && situacionlaboral !=  "trabajando" && situacionlaboral != "solo estudiante"){
      situacionlaboral = prompt("Error. Ingrese situacion laboral : buscando / trabajando / solo estudiante");
    }
    cantidadmaterias = parseInt(prompt("Ingrese cantidad de materias: "));
    while (isNaN(cantidadmaterias) || (cantidadmaterias < 0 && cantidadmaterias > 8)) {
      cantidadmaterias = parseInt(prompt("Error. Ingrese cantidad de materias: "));
    }
    sexo = prompt("Ingrese el sexo: ");
      while(sexo != "m" && sexo != "f"){
      sexo = prompt("Error. Ingrese el precio: ");
      }
      notapromedio = parseInt(prompt("Ingrese nota promedio : "));
      while (isNaN(notapromedio) || (notapromedio > 0 && notapromedio < 10)) {
        notapromedio = parseInt(prompt("Error. Ingrese nota promedio: "));
      }
      edad = parseInt(prompt("Ingrese edad: "));
      while (isNaN(edad) || (edad < 0 && edad > 8)) {
        edad = parseInt(prompt("Error. Ingrese edad: "));
      }
      if((flag == 1 || notamax < notaPromedio) && situacionlaboral != "solo estudiante"){
        notamax = notaPromedio;
        nombrepromedio = nombre;
        flagNota = 1;
      }
      if(flagedad = 1 || situacionlaboal == "solo estudiante"  && maxviejo < edad){
          maxviejo += edad;
          nombreviejo = nombre;
          flagedad = 0;
      }
      if(situacionlaboral == "trabajando"){
        acumt += notapromedio;
        contt++;
      }
      if(situacionlaboral == "buscando"){
        acumb += notapromedio;
        contb++;
      }
      if(situacionlaboral == "solo estudiante"){
        acums += notapromedio;
        conts++;
      }




      seguir = prompt("Quiere ingresar otro alumno?");
    }while(seguir == `s`);


    promediot = acumt / contt;
    promediob = acumb / contb;
    premedios = acums / conts;
    
    console.log("nombre del mejor promedio que trabajan o esta buscando "+ nombrepromedio);
    console.log("el nombre del mas viejo estudiante es "+ nombreviejo);
    console.log("promedio de nota de los que trabajan es "+ promediob);
    console.log("promedio de nota de los que estan buscando es "+ promediot);
    console.log("promedio de nota de los que solo estudian es "+ promedios);
}
// La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo