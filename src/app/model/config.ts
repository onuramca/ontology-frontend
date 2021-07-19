export class Config {
  title?: string;
  description?: string;
  definitionProperties?: Array<string>;
  synonymProperties?: Array<string>;

  constructor(title: string, description: string, definitionProperties: Array<string>, synonymProperties: Array<string>) {
    this.title = title;
    this.description = description;
    this.definitionProperties = definitionProperties;
    this.synonymProperties = synonymProperties;
  }
}
