import axios, { AxiosInstance } from 'axios';

import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interfase';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;
  async executeSeed() {
    const { data } = await this.axios.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=10',
    );
    data.results.forEach(({ name, url }) => {
      const segment = url.split('/');
      const no: number = +segment[segment.length - 2];
      console.log({ name, no });
    });
    return data.results;
  }
}
