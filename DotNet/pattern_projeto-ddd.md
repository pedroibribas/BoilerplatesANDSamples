## sample
```shell
Solution
    |-- Presentation
        |-- Controllers
        |-- ViewModels
        |-- Views
    |-- Domain
        |-- Interfaces
            |-- Services
            |-- Repositories
        |-- Dtos
        |-- Validations
        |-- Services
        |-- Entities
        |-- Enums
    |-- Data
        |-- Context
        |-- Repositories
        |-- Migrations
        |-- CrossCutting
    |-- Tests
```

## var 1: API Web
```shell
Solution
    |-- Api
        |-- Controllers
        |-- Models
    ...
```

## var 2: removendo responsabilidades do Domain
```shell
...
    |-- Domain
        |-- Interfaces
        |-- Dtos
        |-- Validations
    |-- Entities
        |-- Enums
    |-- Application
        |-- Services
```

## conceitos
- Solution: solução .NET; ela reúne um conjunto de projetos.
- Domain (ou Core?): esfera de conhecimento e atividade ao redor do qual a aplicação se desenvolve. Ela apresenta: contratos, entidades, serviços, objetos de valor e fábricas. Ela acaba que não conhece nenhuma outra.
- Presentation: aplicação web completa, com API Web e UI.
- Entities (entidades): regras de negócio.
- Interfaces: contratos.
- Dtos: classes p/ transferência de dados usadas por controladores.
- Data (ou Infra, ou Infrastructure): classes responsáveis por implementar os contratos do domínio relativos aos repositórios.
