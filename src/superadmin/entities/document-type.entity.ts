import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('tipo_documento')
export class DocumentType {
  @PrimaryColumn({ name: 'Id_TipoDocumento' })
  id: number;

  @Column({
    type: 'varchar',
    name: 'Nombre_TipoDocumento',
    length: 50,
    unique: true,
  })
  name: string;

  @Column({
    type: 'varchar',
    name: 'Descripcion_TipoDocumento',
    length: 50,
  })
  description: string;
}
