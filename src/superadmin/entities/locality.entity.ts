import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('localidad')
export class Locality {
  @PrimaryColumn({ name: 'Id_Localidad' })
  id: number;

  @Column({
    type: 'varchar',
    name: 'Nombre_Localidad',
    length: 50,
    unique: true,
  })
  name: string;
}
