export class Location {
  id: number;
  name: string;
  type: string;
  dimension: string;

  constructor(id: number, name: string, type: string, dimension: string) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.dimension = dimension;
  }
}