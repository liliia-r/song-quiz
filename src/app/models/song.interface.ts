export interface Song {
  id: number;
  name: string;
  songTitle: string;
  image: string;
  audio: string;
  description: string;
}

export interface Songs {
  id: number;
  genre: string;
  data: Song;
}
