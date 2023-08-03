import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GendersService } from './services/genders.service';
import { GendersController } from './controllers/genders.controller';
import { Gender } from './entities/gender.entity';
import { BloodGroup } from './entities/blood-group.entity';
import { BloodGroupsController } from './controllers/blood-groups.controller';
import { BloodGroupsService } from './services/blood-groups.service';
import { DocumentTypesService } from './services/document-types.service';
import { DocumentTypesController } from './controllers/document-types.controller';
import { DocumentType } from './entities/document-type.entity';
import { CountriesController } from './controllers/countries.controller';
import { CitiesController } from './controllers/cities.controller';
import { CitiesService } from './services/cities.service';
import { CountriesService } from './services/countries.service';
import { Country } from './entities/country.entity';
import { City } from './entities/city.entity';
import { LocalitiesService } from './services/localities.service';
import { EpsService } from './services/eps.service';
import { EpsController } from './controllers/eps.controller';
import { LocalitiesController } from './controllers/localities.controller';
import { Locality } from './entities/locality.entity';
import { Eps } from './entities/eps.entity';
import { PersonsService } from './services/persons.service';
import { PersonsController } from './controllers/persons.controller';
import { Person } from './entities/person.entity';
import { EthnicitiesService } from './services/ethnicities.service';
import { EthnicitiesController } from './controllers/ethnicities.controller';
import { Ethnicity } from './entities/ethnicity.entity';
import { ModuleService } from './services/module.service';
import { ModuleController } from './controllers/module.controller';
import { Module as ModuleEntity } from './entities/module.entity';
import { ActivityService } from './services/activity.service';
import { Activity } from './entities/activity.entity';
import { ActivityController } from './controllers/activity.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      BloodGroup,
      City,
      DocumentType,
      Eps,
      Ethnicity,
      Country,
      Gender,
      Locality,
      Person,
      ModuleEntity,
      Activity
    ]),
  ],
  providers: [
    GendersService,
    BloodGroupsService,
    DocumentTypesService,
    CitiesService,
    CountriesService,
    LocalitiesService,
    EpsService,
    PersonsService,
    EthnicitiesService,
    ModuleService,
    ActivityService,
  ],
  controllers: [
    GendersController,
    BloodGroupsController,
    DocumentTypesController,
    CountriesController,
    CitiesController,
    EpsController,
    LocalitiesController,
    PersonsController,
    EthnicitiesController,
    ModuleController,
    ActivityController,
  ],
})
export class SuperadminModule {}
