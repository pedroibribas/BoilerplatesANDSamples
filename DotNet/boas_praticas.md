# Legibilidade
## Usar código para explicar o código
- **Comentários:** Depender de comentários para explicar um código é ruim, porque o comentário dificilmente será atualizado quando o código for alterado. Nesse caso, convém limpar os comentários substituindo-os por variáveis com nomes signifiativos.
- **Nomes significativos:** O ideal é dar nomes significativos para as variáveis, isto é, nomes que efetivamente representam o seu valor (v. documentação da Microsoft). O mesmo vale para arquivos e métodos.
- **Nomes grandes:** O nome significativo pode ficar grande, o que não é um problema.
- **Nomes contextualizados:** O nome da variável deve depender do contexto. Portanto, um mesmo valor pode ser atribuído a uma variável diferente, cujo nome corresponde ao contexto diferente.
- **Sufixo 'Async':** O ideal é usar o sufixo Async ao final dos métodos assíncronos, porque fica mais fácil de identificar métodos assíncronos.
- **Renomeação:** O primeiro nome que damos a um arquivo, método, variável ou classe talvez não seja tão significativo quanto o ideal. Por isso, conforme o código vai sendo alterado com o tempo, os nomes podem ser revistos, aproveitando das ferramentas de refências da IDE.
- [Artigo '_General Naming Conventions_' da Microsoft.](https://learn.microsoft.com/en-us/dotnet/standard/design-guidelines/general-naming-conventions)
- **Muitas linhas de código:** Um arquivo com muitas linhas de código é ruim, pois exige _scrolling_ para ler e entender o que acontece no código.
- **Exração de classes:** Na POO, o ideal é isolar instruções em classes específicas.
- **Parâmetro nomeado:** Nomear o parâmetro ao chamar um método melhora a legibilidade do código.

# Refatoração
- **Conceito:** O processo de aplicar mudanças para melhorar código já escrito anteriormente sem alterar o comportamento externo da aplicação é chamado de Refatoração, e possui inúmeras referências na literatura de programação de software, sendo a mais famosa o livro Refactoring: Improving the Design of Existing Code do autor Martin Fowler.
- A cada mudança que aplicamos em nosso projeto para alcançar maior legibilidade precisamos testar se tudo continua funcionando como estava.
