import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('grupo_sanguineo')
export class BloodGroup {
  @PrimaryColumn({ name: 'Id_GrupoSanguineo' })
  id: number;

  @Column({
    type: 'varchar',
    name: 'Nombre_GrupoSanguineo',
    length: 50,
    unique: true,
  })
  name: string;
}
