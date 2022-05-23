import { Song } from './song.interface';

export interface Songs {
  id: number;
  genre: string;
  data: Song[];
}
