import {Config} from "./config";

export class Ontology {
  ontologyId?: string;
  config: Config = {};

  constructor(ontologyId: string, config: Config) {
    this.ontologyId = ontologyId;
    this.config = config;
  }
}
