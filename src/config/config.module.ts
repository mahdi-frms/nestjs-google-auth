import { DynamicModule, Global, Module } from '@nestjs/common';
import { readFileSync } from 'fs';

@Global()
@Module({})
export class ConfigModule {
  static register(configfile: string): DynamicModule {
    const values = JSON.parse(
      readFileSync(__dirname + '/../../' + configfile).toString(),
    );

    const Config = {
      provide: 'Config',
      useValue: values,
    };

    return {
      module: ConfigModule,
      providers: [Config],
      exports: [Config],
    };
  }
}

export interface Config {
  clientID: string;
  clientSecret: string;
  jwtSecret: string;
}
