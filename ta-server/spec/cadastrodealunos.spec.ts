import { CadastroDeAlunos } from '../cadastrodealunos';
import { Aluno } from '../../common/aluno';

describe("O cadastro de alunos", () => {
  var cadastro: CadastroDeAlunos;

  function cadastrarAluno(nome:string, cpf:string) {
    var aluno: Aluno = new Aluno();
    aluno.nome = nome;
    aluno.cpf = cpf;
    cadastro.cadastrar(aluno);
  }

  function expectSoUmAluno() {
    expect(cadastro.getAlunos().length).toBe(1);
    var aluno = cadastro.getAlunos()[0];
    return aluno;
  }

  beforeEach(() => cadastro = new CadastroDeAlunos())

  it("é inicialmente vazio", () => {
    expect(cadastro.getAlunos().length).toBe(0);
  })

  it("cadastra alunos corretamente", () => {
    cadastrarAluno("Mariana","683");

    var aluno = expectSoUmAluno();
    expect(aluno.nome).toBe("Mariana");
    expect(aluno.cpf).toBe("683");
    expect(aluno.email).toBe("");
    expect(aluno.metas.size).toBe(0);
  })

  it("não aceita alunos com CPF duplicado", () => {
    cadastrarAluno("Mariana","683");
    cadastrarAluno("Pedro","683");

    var aluno = expectSoUmAluno();
    expect(aluno.nome).toBe("Mariana");
  })

  it("remove aluno através do CPF",() => {
    cadastrarAluno("celso","555");
    var aluno = expectSoUmAluno();
    expect(aluno.nome).toBe("celso");

    cadastro.apagar(aluno);
    expect(cadastro.getAlunos().length).toBe(0);
  }) 
  
 it("remove todos os alunos", () => {
  cadastrarAluno("celso","555");
  cadastrarAluno("lima","111");
  cadastrarAluno("costa","222");
  var i = cadastro.getAlunos().length;
  for(var j = 0;j<i;j++){
    var aluno = expectSoUmAluno();
    cadastro.apagar(aluno);
  }
  expect(cadastro.getAlunos().length).toBe(0);
 })


it ("não aceita alunos sem CPF", () => {
  var aluno: Aluno = new Aluno();
  aluno.nome = "Celso";
  aluno.cpf = "";
  cadastro.cadastrar(aluno);
  expect(cadastro.getAlunos().length).toBe(1);
  })
  
})



