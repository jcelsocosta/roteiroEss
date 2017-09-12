import { Injectable }    from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';

import { Aluno } from '../../../common/aluno';

@Injectable()
export class AlunoService {
  alunos: Aluno[] = [];

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  criar(aluno: Aluno): Observable<Aluno> {
    
    return this.http.post<any>(this.taURL + "/aluno", aluno, {headers: this.headers})
             .pipe( 
                retry(2),
                map( res => {if (res.success) {return aluno;} else {return null;}} )
              ); 
  }

  atualizar(aluno: Aluno): Observable<Aluno> {
    return this.http.put<any>(this.taURL + "/aluno",JSON.stringify(aluno), {headers: this.headers})          .pipe( 
                retry(2),
                map( res => {if (res.success) {return aluno;} else {return null;}} )
              ); 
  }
  
  excluir(aluno: Aluno): Observable<{}>{
      const id = typeof aluno === 'number' ? aluno : aluno.cpf;
      const taUrls = 'http://localhost:3000/aluno';
      const url = `${taUrls}/${id}`;
      return this.http.delete(this.taURL+"/aluno",{headers: this.headers}).pipe(
        retry(2)
      );
      
     
  }
  getAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.taURL + "/alunos")
              .pipe(
                 retry(2)
               );
  }

}