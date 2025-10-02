export interface Usuario {
  nombre: string;
  presentacion: string;
  fotoUrl: string;
  habilidades: string[]
  expLaboral?: string[];
  email: string;
  telefono: string;
}