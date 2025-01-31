export class Aluno {
  nome: string;
  cpf: string;
  email: string;
  loginGit: string;
  metas: Map<string,string>;

  constructor() {
    this.clean();
  }

  clean(): void {
    this.nome = "";
    this.cpf = "";
    this.email = "";
    this.loginGit = "";
    this.metas = new Map<string,string>();
  }

  clear(aluno: Aluno): void {
    this.nome = "";
    this.cpf = "";
    this.email = "";
    this.loginGit = "";
    this.metas = new Map<string,string>();
  }
  clone(): Aluno {
    var aluno: Aluno = new Aluno();
    aluno.copyFrom(this);
    return aluno;
  }

  copyFrom(from: Aluno): void {
    this.nome = from.nome;
    this.cpf = from.cpf;
    this.email = from.email;
    this.loginGit = from.loginGit;
    this.copyMetasFrom(from.metas);
  }

  copyMetasFrom(from: Map<string,string>): void {
    this.metas = new Map<string,string>();
    for (let key in from) {
      this.metas[key] = from[key];
    }
  }
}