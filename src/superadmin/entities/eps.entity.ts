import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('eps')
export class Eps {
  @PrimaryGeneratedColumn({ name: 'Id_Eps' })
  id: number;

  @Column({
    type: 'varchar',
    name: 'Nombre_Eps',
    length: 50,
    unique: true,
  })
  name: string;

  @Column({
    type: 'int',
    name: 'estado',
    default: 1,
  })
  status: number;
}
