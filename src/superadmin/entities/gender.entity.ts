import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('genero')
export class Gender {
  @PrimaryColumn({ name: 'Id_Genero' })
  id: number;

  @Column({ type: 'varchar', name: 'Nombre_Genero', length: 50, unique: true })
  name: string;
}
