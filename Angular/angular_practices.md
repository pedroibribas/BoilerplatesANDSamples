# Práticas com Angular



## Iniciar novo projeto com Angular CLI
- Sample de task para rodar no Bash:
```bash
~$ APP_NAME=meu-app
~$ ng new $APP_NAME --strict --routing --styling scss
~$ cd ./$APP_NAME
~$ npm i jwt-decode bootstrap
```
- Features:
    - `--strict`: define ambiente estrito, que disponibiliza rigor no debug.
    - `--routing`: cria arquivo `app.routing` responsável pelo roteamento global.
    - `--styling scss`: instala o uso de `.scss` na aplicação.
    - Pacotes Node:
        - JWT Decode: usado p/ decodificar texto JWT enviado do backend.
        - Bootstrap: usado p/ otimizar tempo de estilização.

<br>

*Atualizado em 16/10/2023.*



## Padrão de diretórios
```bash
src
|-- app
    # serviço p/ receber dados do usuário do backend:
    |-- auth
        |-- user
            |-- user.ts
            |-- user.service.ts
        |-- auth.module.ts
        |-- auth.service.ts
        |-- auth.interceptor.ts
        |-- token.service.ts
    # componentes angular:
    |-- components
        |-- header
        |-- footer
    # modulos angular:
    |-- [module] # nomear conforme a rota da página
        # componentes roteados:
        |-- [component] # nomear conforme o endpoint
            |-- [component].component.ts
            |-- [component].service.ts
            |-- validators # dir p/ validações personalizadas de formulário
        |-- [module].module.ts
        |-- [module]-routing.module.ts # roteamento p/ os componentes
        |-- [module].service.ts
        # componente do módulo:
        |-- [module].component.html
        |-- [module].component.ts
        # componentes compartilhados:
        |-- shared
        # regras de negócio compartilhadas:
        |-- models
        |-- enums
        |-- services
    # módulo global:
    |-- app.module.ts
    |-- app-routing.module.ts # roteamento dos módulos
    |-- app.component.ts
# arquivos estáticos:
|-- assets
    |-- images
```

<br>

*Atualizado em 16/10/2023.*



## Práticas Angular
- Roteamento:
    - Feature Modules - módulos Angular:
    - Lazy loading: 
    - Router:
    - Router Link:
- Formulários:
    - Template Driven Form:
    - Reactive Form:
- Http:
    - HttpInterceptor:
- Autenticação:
    - Autenticação JWT:

<br>

*Atualizado em 16/10/2023.*



## Scripts BASH

- Serviço de autenticação do usuário:
```bash
~$ ng g module auth
~$ ng g service auth/auth --skip-tests
~$ ng g service auth/token --skip-tests
~$ ng g service auth/user/user --skip-tests 
~$ ng g interface auth/user/user
# CRIA ./app/auth/auth.module.ts
# CRIA ./app/auth/auth.service.ts
# CRIA ./app/auth/token.service.ts
# CRIA ./app/auth/user/user.interface.ts = modelo p/ os dados do usuário
```

<br>

- Componente
    - E.g. `header`, `footer`, `alert`
```bash
~$ NAME=meu-componente
~$ ng g module components/$NAME
~$ ng g component components/$NAME --skip-tests --inline-style
# CRIA ./app/$NAME/$NAME/$NAME.module.ts
# CRIA ./app/$NAME/$NAME/$NAME.component.ts
# CRIA ./app/$NAME/$NAME/$NAME.html.ts
```

<br>

- Feature
    - E.g. `home`, CRUDs
```bash
~$ NAME=meu-modulo
~$ ng g module $NAME --routing
~$ ng g component $NAME --skip-tests --inline-style
~$ ng g service $NAME/$NAME --skip-tests
# CRIA ./app/$NAME/$NAME.module.ts
# CRIA ./app/$NAME/$NAME.routing.ts = arquivo p/ roteamento
# CRIA ./app/$NAME/$NAME/$NAME.component.ts
# CRIA ./app/$NAME/$NAME/$NAME.html.ts
# CRIA ./app/$NAME/$NAME.service.ts
```

<br>

- Modelo p/ CRUD:
```bash
~$ MODEL=meu-model
~$ ng g m $MODEL --routing
~$ ng g c $MODEL --skip-tests --inline-style
~$ ng g i $MODEL/$MODEL
~$ ng g s $MODEL/$MODEL --skip-tests
~$ ng g c $MODEL/show-${MODEL}s --skip-tests --inline-style
~$ ng g c $MODEL/show-$MODEL --skip-tests --inline-style
~$ ng g c $MODEL/create-$MODEL --skip-tests --inline-style
~$ ng g c $MODEL/update-$MODEL --skip-tests --inline-style
~$ ng g c $MODEL/delete-$MODEL --skip-tests --inline-style
```

<br>

- CRUD `user`:
```bash
~$ ng g m user --routing
~$ ng g c user --skip-tests --inline-style
~$ ng g i user/user
~$ ng g c user/login --skip-tests --inline-style
~$ ng g c user/register --skip-tests --inline-style
~$ ng g s user/register/register --skip-tests
~$ ng g s user/register/user-exists --skip-tests
~$ ng g i user/register/new-user --skip-tests
```

<br>

*Atualizado em 16/10/2023.*
