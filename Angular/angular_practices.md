# Angular App Workflow

## Setup
```bash
ng new [app] --strict
cd ./[app] && npm i bootstrap jwt-decode
```

## Features
- Ambiente 'strict'
- SCSS
- Bootstrap
- Feature Modules (Módulos Angular)
- Lazy loading
- Router
- Router Link
- Template Driven Form
- Reactive Form
- Autenticação JWT
- HttpInterceptor

## Padrão de diretórios
```base
src
|-- app
    |-- auth
        |-- user
            |-- user.service.ts
            |-- user.ts
        |-- auth.module.ts
        |-- auth.service.ts
        |-- auth.interceptor.ts
        |-- token.service.ts
    |-- components
    |-- [page]
        |-- [endpoint]
            |-- validators
            |-- [endpoint].service.ts
        |-- [page]-routing.module.ts
        |-- [page].module.ts
        |-- [page].ts
        |-- [page].service.ts
        |-- [page].component.html
        |-- [page].component.ts
        |-- shared
    |-- app.component.html
    |-- app.component.ts
    |-- app.module.ts
    |-- app-routing.module.ts
|-- assets
    |-- images
```ng

## Feature Módulos

### Serviços

Autenticação
```bash
ng g m auth && ng g s auth/auth --skip-tests && ng g s auth/token --skip-tests && ng g s auth/user/user --skip-tests && ng g i auth/user/user && ng g interceptor auth/auth --skip-tests
```

Interceptadores
```bash
ng g m interceptors/auth && ng g interceptor interceptors/auth-interceptor/auth-interceptor --skip-tests
```

### Components / Pages

- Header
```bash
ng g m components/header && ng g c components/header --skip-tests --inline-style
```

- Footer
```bash
ng g m components/footer && ng g c components/footer --skip-tests --inline-style
```

- Alert
```bash
ng g m components/alert && ng g c components/alert --skip-tests --inline-style
```

Home
```bash
ng g m home --routing && ng g c home --skip-tests --inline-style && ng g s home/home --skip-tests
```

Authentication CRUD
```bash
ng g m user --routing && ng g c user --skip-tests --inline-style && ng g i user/user && ng g c user/login --skip-tests --inline-style && ng g c user/register --skip-tests --inline-style && ng g s user/register/register --skip-tests && ng g s user/register/user-exists --skip-tests && ng g i user/register/new-user --skip-tests
```

Product CRUD
```bash
ng g m product --routing &&
ng g c product --skip-tests --inline-style &&
ng g i product/product &&
ng g s product/product --skip-tests &&
ng g c product/show-products --skip-tests --inline-style &&
ng g c product/create-product --skip-tests --inline-style &&
ng g c product/update-product --skip-tests --inline-style &&
ng g c product/delete-product --skip-tests --inline-style &&
ng g c product/show-product --skip-tests --inline-style &&
```

Legendas
[p]: nome do projeto
[n]: nome do modelo/entidade
[m]: nome do módulo
