import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { RequestInit } from 'apollo-server-env';
import qs from 'qs';
import { Config } from '../../config';
const config = Config.fromEnv();
const defaultRequest = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
};

export class CloudikeBaseAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = config.baseUrl;
  }

  protected willSendRequest(request: RequestOptions): void {
    const token = this.context.token;
    if (!token) {
      return;
    }
    request.headers.set('Mountbit-Auth', token);
  }

  protected didEncounterError(error: Error): void {
    console.error(error);
    throw error;
  }

  postEncoded<TResult = any>(
    path: string,
    body?: any,
    init?: RequestInit
  ): Promise<TResult> {
    const options = init
      ? { ...init, headers: { ...init.headers, ...defaultRequest.headers } }
      : defaultRequest;
    return this.post(path, body ? qs.stringify(body) : body, options);
  }
  postFormData<TResult = any>(path: string, body?: Body): Promise<TResult> {
    const options = { headers: { ...defaultRequest.headers } };
    // console.log(body);
    // console.log(options);
    return this.post(path, body, options);
  }
}
