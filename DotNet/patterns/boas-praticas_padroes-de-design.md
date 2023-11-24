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



  
