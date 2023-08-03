import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Activity } from './activity.entity';

@Entity({ name: 'modulo' })
export class Module {
  @PrimaryGeneratedColumn({ name: 'Id_Modulo' })
  id: number;

  @Column({ name: 'Nombre_Modulo', type: 'varchar', length: 100, unique: true })
  name: string;

  @Column({
    name: 'area',
    type: 'varchar',
    length: 191,
    nullable: true,
  })
  area: string;

  @Column({ name: 'Redireccion', type: 'varchar', length: 100 })
  redirect: string;

  @Column({ name: 'Imagen', type: 'varchar', length: 200 })
  image: string;

  @Column({
    name: 'Estado',
    type: 'tinyint',
    width: 1,
    default: 1,
    nullable: true,
  })
  state: number;

  @Column({
    name: 'Misional',
    type: 'int',
    width: 50,
  })
  missionary: number;

  @Column({
    name: 'compatible',
    type: 'tinyint',
    width: 3,
    default: 0,
    nullable: true,
  })
  compatible: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Date;
  @BeforeInsert()
  insertCreated() {
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  @OneToMany(() => Activity, (activity) => activity.module)
  activities: Activity[];
}
