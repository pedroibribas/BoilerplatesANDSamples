## Classe que encapsula dicionário de dados dinâmicos
- Dicionário indexável para gerar dinamicamente classes diferentes.
- Centralização de manutenção dos dados do dicionário.
```csharp
public class Fruits
{
    private readonly Dictionary<string, IFruit> fruits = new()
    {
        { "banana", new Banana() },
        { "apple", new Apple() },
        { "orange", new Orange() }
    };
    public IFruit? this[string key] => fruits.ContainsKey(key) ? fruits[key] : null;
}

// Uso:
IFruit? fruit = fruits[command];
```
