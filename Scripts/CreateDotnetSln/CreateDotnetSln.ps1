Write-Host "  [WARN] Lendo script de geração de solução .NET Domain-Drive v1.0.0." -ForegroundColor Yellow

if (Test-Path Variable:\newSolution) {
    Write-Host "[INFO] Criando solução '$newSolution':" -ForegroundColor Cyan
    
    Write-Host "[INFO] Etapa 1/6 - Cria ./$newSolution.sln" -ForegroundColor Cyan
    dotnet new sln -n RibasMessenger
    
    Write-Host "[INFO] Etapa 2/6 - Cria ./$newSolution.Domain" -ForegroundColor Cyan
    dotnet new classlib -o RibasMessenger.Domain
    New-Item -Path "./$newSolution.Domain/Interfaces" -ItemType Directory
    New-Item -Path "./$newSolution.Domain/Services" -ItemType Directory
    
    Write-Host "[INFO] Etapa 3/6 - Cria ./$newSolution.Infrastructure" -ForegroundColor Cyan
    dotnet new classlib -o RibasMessenger.Infrastructure
    New-Item -Path "./$newSolution.Infrastructure/Configuration" -ItemType Directory
    New-Item -Path "./$newSolution.Infrastructure/Repositories" -ItemType Directory
    
    Write-Host "[INFO] Etapa 4/6 - Cria ./$newSolution.Tests" -ForegroundColor Cyan
    dotnet new xunit -o RibasMessenger.Tests
    
    Write-Host "[INFO] Etapa 5/6 - Cria ./$newSolution.WebApi" -ForegroundColor Cyan
    dotnet new web -o RibasMessenger.WebApi
    
    Write-Host "[INFO] Etapa 6/6 - Registra projetos criados em ./$newSolution.sln" -ForegroundColor Cyan
    dotnet sln ./$newSolution.sln add ./$newSolution.Domain\$newSolution.Domain.csproj
    dotnet sln ./$newSolution.sln add ./$newSolution.Infrastructure\$newSolution.Infrastructure.csproj
    dotnet sln ./$newSolution.sln add ./$newSolution.Tests\$newSolution.Tests.csproj
    dotnet sln ./$newSolution.sln add ./$newSolution.WebApi\$newSolution.WebApi.csproj

    Write-Host "[INFO] A solução $newSolution está pronta!" -ForegroundColor Cyan
    
    # CLEANING
    Remove-Item -Path .\$newSolution.Domain\ -Force -Recurse
    Remove-Item -Path .\$newSolution.Infrastructure\ -Force -Recurse
    Remove-Item -Path .\$newSolution.Tests\ -Force -Recurse
    Remove-Item -Path .\$newSolution.WebApi\ -Force -Recurse
    Remove-Item -Path .\$newSolution.sln
}
else {
    Write-Host "  [ERRO] Nenhuma variável 'newSolution'. Defina uma variável 'newSolution' com o nome a ser dado à solução e tente novamente." -ForegroundColor DarkRed
    Write-Host "  [INFO] O script lido não gerou nenhuma solução e foi terminado." -ForegroundColor Cyan
}
