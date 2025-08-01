

class Telefono{
    estado = null;
    imei = "";
    modelo = "";
    estaReportado = 0;
    marca = "";
    constructor(imei,marca,modelo,estado){
        this.imei = imei;
        this.marca = marca;
        this.modelo = modelo;
        this.estado = estado;
    }
    updateState(estado){
        this.estado=estado;
    }
    updateState(estaReportado){
        this.estaReportado=estaReportado;
    }
}


const estadoTicket={
    inic : 'inicializado',
    en_proc : "en proceso",
    final : "finalizado",
}

class Ticket{
    telefono;
    diagnostico;
    porcentajePago;
    montoFinal;
    estado = estadoTicket.inic;
    cliente; //TODO crear entidad llamada cliente.
    autorizado=0;

    constructor(telefono,diagnostico,porcentajePago,montoFinal,cliente,autorizado){
    this.telefono=telefono;
    this.diagnostico=diagnostico;
    this.porcentajePago=porcentajePago;
    this.montoFinal=montoFinal;
    this.cliente=cliente; //crear entidad llamada cliente.
   }
   cambioAutorizado(estado){
    this.autorizado=autorizado;
   }
   //TODO Crear metodo para agregar repuestos usados.
   //TODO Automatizar el porcentajede pago, agregar Pago(monto)==>actualizar el 
   //campo monto pago y el porcentaje.
   //TODO Agregar un metodo para cambiar el porcentaje depago

   inicServicio(){
    if (this.autorizado && this.porcentajePago>=50){
        this.telefono.updateState("en reparacion");

        this.estado=estadoTicket.en_proc;

        return "Servicio inicializado";
    }   else{
        return "No cumple con lascondiciones basicas para inicializar el servicio";
    }
  }
//TODO Crear un metodo para finalizar servicio
}

//TODO Agregar una clase para los tecnicos
class Sucursal{
    nombre="";
   // ubicacion;
   // telefono;
    empleados=[];
    tickets=[];
    clientes=[];
    contacto="";
    direccion="";
    central;

    constructor(nombre,ubicacion,telefono,empleados,tickets){
    this.nombre=nombre;
   // this.ubicacion=ubicacion;
   // this.telefono=telefono;
    this.empleados=empleados;
    this.tickets=tickets;
    this.clientes=clientes;
    this.contacto=contacto;
    this.direccion=direccion;
    this.central=this.central;
    }
  addTicket(ticket){
  //agregarTicket(ticket); {
    //TODO Crear metodo para validar si el celular esta reportado.
    
    const existeCelReportado = this.central.reporteTelefono.find((telefono)=>telefono.imei == ticket.telefono.imei);


    if (existeCelReportado){
        console.error("El celular esta reportado, llamando a la policia!!!"
        );
        return;
    }
    this.tickets.push(ticket);
  }
}
class Central{
    reporteTelefono =[];
    sucursal= [];

    //TODO Agregar mas datos de central
 
    constructor(reporteTelefono,sucursal){
        this.reporteTelefono=reporteTelefono;
        this.sucursal=sucursal;
    }
    addTelefono(telefono){
        this.reporteTelefono.push(telefono);
    }

    addSucursal(sucursal){
        this.sucursal.push(sucursal)
    }

    //TODO Metodo para eliminar celular robado deletePhoneReport(imei)==>ReportedPhones

}

const tecnoIdat = new Central();

const tecnoTrujillo = new Sucursal(
    'tecnoTrujillo',
    '989390000',
    'Las Palmeras',
    tecnoIdat
);

tecnoIdat.addSucursal(tecnoTrujillo);
console.log(("Sucursal "+ tecnoTrujillo))
console.log(tecnoIdat);
