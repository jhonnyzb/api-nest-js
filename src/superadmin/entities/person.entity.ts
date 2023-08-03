import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { CreatePersonDto } from '../dtos/person.dto';

@Entity('persona')
export class Person {
  // @PrimaryColumn({ name: 'Id_Persona' })
  @PrimaryGeneratedColumn({ name: 'Id_Persona' })
  id: number;

  @Column({
    name: 'Cedula',
    type: 'varchar',
    length: 50,
    // unique: true,
    nullable: false,
  })
  document: string;

  @Column({ name: 'Id_TipoDocumento', type: 'int', nullable: false })
  documentTypeId: number;

  @Column({
    name: 'Primer_Apellido',
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  surname: string;

  @Column({
    name: 'Segundo_Apellido',
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  secondSurname: string;

  @Column({
    type: 'varchar',
    name: 'Primer_Nombre',
    length: 50,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    name: 'Segundo_Nombre',
    length: 50,
    nullable: true,
  })
  secondName: string;

  @Column({ name: 'Fecha_Nacimiento', type: 'date', nullable: false })
  birthDate: Date;

  @Column({ name: 'Id_Pais', type: 'int', nullable: false })
  countryId: number;

  @Column({
    type: 'varchar',
    name: 'Nombre_Ciudad',
    length: 50,
    nullable: false,
  })
  cityName?: string;

  @Column({ name: 'Id_Genero', type: 'int', nullable: false })
  genderId: number;

  @Column({ name: 'Id_Etnia', type: 'int', nullable: false })
  ethnicityId: number;

  @Column({
    name: 'Id_Departamento',
    type: 'int',
    nullable: true,
    default: 14,
  })
  departamentId: number;

  @Column({
    name: 'i_fk_id_ciudad',
    type: 'int',
    nullable: true,
    default: null,
  })
  cityId: number;

  @Column({
    name: 'Id_Identidad_Genero',
    type: 'int',
    nullable: true,
    default: null,
  })
  genderIdentityId: number;

  @Column({
    name: 'Estado',
    type: 'int',
    nullable: true,
  })
  status: number;

  @Column({
    name: 'Vinculación',
    type: 'simple-enum',
    nullable: true,
    default: null,
  })
  Bonding: BondingEnum;

  @Column({
    name: 'FinalContrato',
    type: 'date',
    nullable: true,
    default: null,
  })
  contractEndDate: Date;

  @Column({
    name: 'TimeStamp',
    type: 'datetime',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  // static mapToDto(personDto: CreatePersonDto): Person {
  //   const person = new Person();
  //   person.firsName = personDto.firstName;
  //   return person;
  // }
}

export enum BondingEnum {
  CONTRATISTA = 'Contratista',
  PLANTA = 'planta',
  OTRO = 'otro',
}
