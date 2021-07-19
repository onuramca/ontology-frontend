import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ontology} from "../model/ontology";

@Injectable()
export class OntologyService {

  private ontologiesUrl: string;

  constructor(private http: HttpClient) {
    this.ontologiesUrl = 'http://localhost:8080/v1/ontologies';
  }

  public getById(ontologyId: string): Observable<Ontology> {
    return this.http.get<Ontology>(this.ontologiesUrl + "/" + ontologyId);
  }

  public save(ontology: Ontology) {
    return this.http.post<string>(this.ontologiesUrl, ontology);
  }
}
