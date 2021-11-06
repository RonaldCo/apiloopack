import {Entity, model, property} from '@loopback/repository';

@model()
export class Ruta extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Origen: string;

  @property({
    type: 'string',
    required: true,
  })
  Destino: string;

  @property({
    type: 'number',
    required: true,
  })
  tiempoEst: number;


  constructor(data?: Partial<Ruta>) {
    super(data);
  }
}

export interface RutaRelations {
  // describe navigational properties here
}

export type RutaWithRelations = Ruta & RutaRelations;
