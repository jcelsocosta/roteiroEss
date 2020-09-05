import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../../common/aluno';
import { AlunoService } from './aluno.service';

  @Component({
   selector: 'app-root',
   templateUrl: './alunos.component.html',
   styleUrls: ['./alunos.component.css']
 })
 export class AlunosComponent implements OnInit {

    aluno: Aluno = new Aluno();
    alunos: Aluno[] = [];
    cpfduplicado: boolean = false;
    loginDuplicado: boolean = false;

    constructor(private alunoService: AlunoService) {}

     criarAluno(a: Aluno): void {
       this.alunoService.criar(a)
              .subscribe(
                ar => {
                  if (ar) {
                    this.alunos.push(ar);
                    this.aluno = new Aluno();
                  } else {
                    this.cpfduplicado = true;
                    //this.loginDuplicado = true;
                  } 
                },
                msg => { alert(msg.message); }
              );
    } 

    onMove(): void {
       this.cpfduplicado = false;
      // this.loginDuplicado = false;
    }

    excluirAluno(a: Aluno): void {
      this.alunoService.excluir(a)
              .subscribe(
                ar => {
                  if(a){
                    var index;
                    var len = this.alunos.length;
                    for (var i = 0 ; i < len; i++){
                        if(this.alunos[i].cpf == a.cpf){
                          index = i;
                        }
                    }
                    this.alunos.splice(index,1);
                  }
                }
              );
    }

     ngOnInit(): void {
       this.alunoService.getAlunos()
             .subscribe(
               as => { this.alunos = as; },
               msg => { alert(msg.message); }
              );
     }

  }