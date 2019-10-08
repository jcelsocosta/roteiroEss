import { CadastroDeAlunos } from '../cadastrodealunos';
import { Aluno } from '../../common/aluno';

describe("O cadastro de alunos", () => {
  var cadastro: CadastroDeAlunos;

  beforeEach(() => cadastro = new CadastroDeAlunos())

  it("é inicialmente vazio", () => {
    expect(cadastro.getAlunos().length).toBe(0);
  })

  it("cadastra alunos corretamente", () => {
    var aluno: Aluno = new Aluno();
    aluno.nome = "Mariana";
    aluno.cpf = "683";
    cadastro.cadastrar(aluno);

    expect(cadastro.getAlunos().length).toBe(1);
    aluno = cadastro.getAlunos()[0];
    expect(aluno.nome).toBe("Mariana");
    expect(aluno.cpf).toBe("683");
    expect(aluno.email).toBe("");
    expect(aluno.metas.size).toBe(0);
  })

  it("não aceita alunos com CPF duplicado", () => {
    var aluno: Aluno = new Aluno();
    aluno.nome = "Mariana";
    aluno.cpf = "683";
    cadastro.cadastrar(aluno);

    aluno = new Aluno();
    aluno.nome = "Pedro";
    aluno.cpf = "683";
    cadastro.cadastrar(aluno);

    expect(cadastro.getAlunos().length).toBe(1);
  })

it ("não aceita alunos sem CPF", () => {
  var aluno: Aluno = new Aluno();
  aluno.nome = "Celso";
  aluno.cpf = "";
  cadastro.cadastrar(aluno);
  expect(cadastro.getAlunos().length).toBe(0);

  })
  
})