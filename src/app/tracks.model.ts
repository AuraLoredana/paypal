export class TracksModel {
  public artist!: string;
  public name!: string;
  public capitol!: any[];
  public id!: number;
  public playing!: boolean;
  public progress!: number;
  public src!: string;
  public title!: string;

  constructor() {
    (this.name as any) = null;
    (this.artist as any) = null;
    this.playing = false;
    this.capitol = [];
  }
}
