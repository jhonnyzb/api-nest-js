import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Country } from './country.entity';

@Entity('ciudad')
export class City {
  @PrimaryColumn({ name: 'Id_Ciudad' })
  id: number;

  @Column({ type: 'varchar', name: 'Nombre_Ciudad', length: 50, unique: true })
  name: string;

  @ManyToOne(() => Country, (country) => country.cities)
  @JoinColumn({ name: 'Id_Pais' })
  country: Country;
}
