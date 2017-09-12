import { Aluno } from '../common/aluno';

export class CadastroDeAlunos {
   alunos: Aluno[] = [];

    cadastrar(aluno: Aluno): Aluno {
     var result = null;
     if (this.cpfNaoCadastrado(aluno.cpf) && this.loginNaoCadastrado(aluno.loginGit)) {
       result = new Aluno();
       result.copyFrom(aluno);
       this.alunos.push(result);
     }
     return result;
   }

    cpfNaoCadastrado(cpf: string): boolean {
      return !this.alunos.find(a => a.cpf == cpf);
   }
    loginNaoCadastrado(loginGit: string): boolean{
      return !this.alunos.find(a => a.loginGit == loginGit);
    }
    apagar(aluno: Aluno): Aluno []{
      var len = this.alunos.length;
      var index = 0;
      var result;
      for(var i = 0 ; i < len ; i++){
        if(aluno.cpf == this.alunos[i].cpf){
          index = i;
        }
      }
      return this.alunos.splice(index,1);
    }
    atualizar(aluno: Aluno): Aluno {
     var result: Aluno = this.alunos.find(a => a.cpf == aluno.cpf);
     if (result) result.copyFrom(aluno);
     return result;
   }

    getAlunos(): Aluno[] {
     return this.alunos;
   }
}