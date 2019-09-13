import {CapitolModel} from './capitol.model';

export class TracksModel {
  artist: string;
  capitol: Array<CapitolModel>;
  playing: boolean;
  progress: number;
  src: string;
  title: string;
  id: number;
}
