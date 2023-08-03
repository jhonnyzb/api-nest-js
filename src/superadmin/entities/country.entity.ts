import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { City } from './city.entity';

@Entity('pais')
export class Country {
  @PrimaryColumn({ name: 'Id_Pais' })
  id: number;

  @Column({ type: 'varchar', name: 'Nombre_Pais', length: 50, unique: true })
  name: string;

  @OneToMany(() => City, (citi) => citi.country)
  cities: City[];
}
