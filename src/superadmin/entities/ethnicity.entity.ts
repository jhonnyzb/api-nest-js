import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('etnia')
export class Ethnicity {
  @PrimaryColumn({ name: 'Id_Etnia' })
  id: number;

  @Column({
    type: 'varchar',
    name: 'Nombre_Etnia',
    length: 50,
    unique: true,
  })
  name: string;
}
