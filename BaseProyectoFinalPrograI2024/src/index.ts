import {Paciente} from "./interfaces/paciente.interface";


let Paciente: Paciente[] = [];


// Crear pacientes 


function agregarPaciente (id_paciente: number, nombre: string, fecha_nacimiento: Date, direccion: string, telefono: number, alergias: string, medicamentos_actuales: string, condiciones_medicas: string)
{ const agregarPaciente:  Paciente = {id_paciente, nombre , fecha_nacimiento, direccion, telefono, alergias, medicamentos_actuales, condiciones_medicas};
    Paciente.push (agregarPaciente);
    console.log ('Pacinete Agregado con Exito: ${Paciente.nombre}');
}

agregarPaciente (1, "Valery Gomez", new Date ("2001-12-03"), "Zona 18", 45018741, "Mariscos", "Antialergico", "Estable",);
agregarPaciente (2, "Jonathan Soberanis", new Date ("2000-10-20"), "San Cristobal", 58472654, "Maní", "Allegra", "en tratamiento");


//Obtener paciente por ID 

function obtenerPacientePorId(id_paciente: number): Paciente | undefined {
    return Paciente.find(paciente => paciente.id_paciente === id_paciente);
}

const paciente = obtenerPacientePorId(1);
if (paciente) {
    console.log(`Paciente encontrado: ${paciente.nombre}`);
} else {
    console.log('Paciente no encontrado');
}

// Obtener todos los paciente 

function obtenerTodosLosPacientes(): Paciente[] {
    return pacientes;
}

const todosLosPacientes = obtenerTodosLosPacientes();
console.log('Todos los pacientes registrados:', todosLosPacientes);

// Eliminar paciente 

function eliminarPaciente(id_paciente: number): void {
    const indice = pacientes.findIndex(paciente => paciente.id_paciente === id_paciente);
    if (indice !== -1) {
        pacientes.splice(indice, 1);
        console.log(`Paciente eliminado con éxito: ${id_paciente}`);
    } else {
        console.log('Paciente no encontrado');
    }
}

eliminarPaciente(1);

// Contar pacientes 

function contarPacientes(): number {
    return Paciente.length;
}

const numeroDePacientes = contarPacientes();
console.log(`Número de pacientes registrados: ${numeroDePacientes}`);

