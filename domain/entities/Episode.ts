export class Episode {
  id: number;
  name: string;
  airDate: string;
  episode: string;

  constructor(id: number, name: string, airDate: string, episode: string) {
    this.id = id;
    this.name = name;
    this.airDate = airDate;
    this.episode = episode;
  }
}