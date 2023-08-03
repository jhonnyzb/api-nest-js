import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Module } from './module.entity';

@Entity({ name: 'actividades' })
export class Activity {
  @PrimaryGeneratedColumn({ name: 'Id_Actividad' })
  id: number;

  @Column({
    name: 'Nombre_Actividad',
    type: 'varchar',
    length: 200,
  })
  name: string;

  @Column({
    name: 'Descripcion',
    type: 'varchar',
    length: 200,
  })
  description: string;

  @Column({
    name: 'Id_Modulo',
    type: 'int',
  })
  moduleId: number;

  @ManyToOne(() => Module, (module) => module.activities)
  @JoinColumn({ name: 'Id_Modulo' })
  module: Module;
}
