import { config as envConfig } from 'dotenv';

export interface LoggerOptions {
  readonly level: string;
}

export interface ConfigOptions {
  readonly port: number;
  readonly baseUrl: string;
  readonly isGqlPlaygroundEnabled: boolean;
  readonly logger: LoggerOptions;
}

export class Config {
  public static fromEnv(): ConfigOptions {
    envConfig();
    const processEnv = process.env;

    return {
      port: Number(processEnv.PORT),
      baseUrl: processEnv.CLOUDIKE_API,
      isGqlPlaygroundEnabled:
        (processEnv.GRAPHQL_PLAYGROUND_ENABLED &&
          processEnv.GRAPHQL_PLAYGROUND_ENABLED.toLowerCase()) === 'true',
      logger: {
        level: processEnv.LOGGER_LEVEL || 'info',
      },
    };
  }
}
