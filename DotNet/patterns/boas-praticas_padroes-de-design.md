# Padrões de projeto (ou solução) - _Design Patterns_

## Padrões Comportamentais - _Behavioral Patterns_

Padrões de projeto comportamentais são padrões que tratam das interações e divisões de responsabilidades entre as classes ou objetos.

### Comando - _Command Pattern_

> [!IMPORTANT]
> Por que usar o padrão Comando?
> - Para desacoplar o objeto que invoca a operação e aquele que sabe como executá-la;
> - Para reduzir o acoplamento entre as requisições dos clientes e o objetos que as executam;
> - Para usar objetos de 1ª classe, que podem ser manipulados e estendidos, de modo que um comando pode ser composto por outros;
> - Para facilitar a implantação de novas operações, porque não exige a mudança das classes existentes;
> - Para simplificar a manutenção das operações;
> - Para parametrizar objetos por uma ação a ser executada;
> - Para especificar, enfileirar e executar solicitações em tempos diferentes;
> - Para dar suporte para desfazer operações;
> - Para estruturar um sistema em torno de operações de alto nível, como transações;

O padrão comando é tratado no livro _Design Patterns (GoF)_.
Trata-se de um padrão comportamental em que uma solicitação (_request_) é encapsulada como um objeto.

As classes/objetos participantes do padrão são:
- **Comando (Command):** Declara uma classe abstrata _interface_ para executar uma operação, que é a classe-base para os objetos Command. Ela traz um método _execute_, que é usado pelo Chamador (_invoker_) para executar comandos.
- **ComandoConcreto (CommandConcret):** Classe que define uma vinculação entre um objeto _Receptor_ e uma ação. Trata-se da classe que implementa o método _execute_ e que contém todas as informações necessárias para a correta execução da ação usando o Receptor vinculado.
- **Cliente (Client):** Objeto que cria um _ComandoConcreto_ e define o seu _Receptor_. Dito de outro modo, é o consumidor das classes do padrão Command.
- **Receptor(Receiver):** Objeto que conhece como executar as operações associadas com a execução do comando, isto é, ele contém os métodos que são executados quando um ou mais comandos são invocados. Isso permite que a funcionalidade real seja realizada separadamente para as definições de comando.
- **Chamador (Invoker):** É o inicializador das ações de comando, e solicita ao comando para executar a requisição.

#### Conceito
```csharp
// Receptor
class Dog
{
  public Run(int Distance)
  {
    if (Distance > 0)
      Console.WriteLine("O cão correu {0} metros para frente.", Distance);
    else
      Console.WriteLine("O cão correu {0} metros para trás.", Distance);
  }

  public Bark(bool IsBarking)
  {
    if (IsBarking)
      Console.WriteLine("O cão está latindo.");
    else
      Console.WriteLine("O cão parou de latir.");
  }
}

// Comando
class abstract DogCommand {
  protected Dog _dog;
  public DogCommand(Dog dog) { _dog = dog };
  public abstract void Execute();
  public abstract void Undo();
}

// ComandoConcreto
class RunCommand : DogCommand
{
  public int Distance { get; set; }
  public RunCommand(Dog dog) : base(dog) {};
  public override void Execute() { _dog.Run(Distance); }
  public override void Undo() { _dog.Run(-Distance); }
}

class BarkCommand : DogCommand
{
  public bool Start { get; set; }
  public BarkCommand(Dog dog) : base(dog) {};
  public override void Execute() { _dog.Bark(Start); }
  public override void Undo() { _dog.Bark(!Start); }
}

// Chamador
class DogControl
{
  public Queue<DogCommand> Commands;
  private Stack<DogCommand> _undoStack;
  public DogControl()
  {
    Commands = new Queue<DogCommand>();
    _undoStack = new Stack<DogCommand>();
  }
  public void ExecuteCommands()
  {
    while (Commands.Count > 0)
    {
      DogCommand command = Commands.Dequeue();
      command.Execute();
      _undoStack.Push(command);
    }
  }
  public void UndoCommands(int commandsAmount)
  {
    while (commandsAmount > 0 && _undoStack.Count > 0)
    {
      DogCommand command = _undoStack.Pop();
      command.Undo();
      commandsAmount--;
    }
  }

class Program
{
  Dog dog = new();
  DogControl control = new();

  RunCommand run = new(dog);
  run.Distance = 10;
  control.Commands.Enqueue(run);

  control.ExecuteCommands();
  control.UndoCommands(1);
}
```
