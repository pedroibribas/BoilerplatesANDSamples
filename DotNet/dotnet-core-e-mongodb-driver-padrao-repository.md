# .NET Core e MongoDB Driver (Padrão Repository)

## Referências
- [Create a web API with ASP.NET Core and MongoDB; Microsoft](https://learn.microsoft.com/en-us/aspnet/core/tutorials/first-mongo-app?view=aspnetcore-8.0&tabs=visual-studio)
- [Build Your First .NET Core Application with MongoDB Atlas; MongoDB.com](https://www.mongodb.com/developer/languages/csharp/build-first-dotnet-core-application-mongodb-atlas/#building-a-poco-class-for-the-mongodb-document-model)
- [Create a RESTful API with .NET Core and MongoDB; MongoDB.com.](https://www.mongodb.com/developer/languages/csharp/create-restful-api-dotnet-core-mongodb/)

```csharp
// API

var builder = WebApplication.CreateBuilder(args);
builder.Services.Configure<MongoDbSettings>(
  builder.Configuration.GetSection("MongoDatabase"));

// Interfaces

namespace Domain.Interfaces.Repositories.Base
{
  public interface IBaseRepository<T>
  {
  }
}

namespace Domain.Interfaces.Repositories
{
  public interface IPersonRepository : IBaseRepository<Person>
  {
    Task<Domain.Entities.Person> GetByCpf(string cpf);
  }
}

// Settings

namespace Infrastructure.Configuration
{
  public class MongoDbSettings
  {
    public string? ConnectionString { get; set; }
    public string? Database { get; set; }
    public string? CollectionName { get; set; }
  }
}

// Unit of Work para acesso à data source

namespace Infrastructure.Context
{
  public class PersonContext
  {
    private readonly IMongoDatabase _database = null;

    public PersonContext(IOptions<MongoDbSettings> settings)
    {
      var client = new MongoClient(settings.Value.ConnectionString);
      if (client != null)
        _database = client.GetDatabase(settings.Value.Database);
    }

    public IMongoCollection<Person> People(string name)
    {
      get { return _database.GetCollection<Person>("Person"); }
    }
  }
}

// Repositórios

namespace Infrastructure.Repositories.Base
{
  public class BaseRepository<T> : IBaseRepository<T> where T : class
  {
    private readonly MongoDbContext _context = null;

    protected readonly FilterDefinition<T> FilterBuilder;
    protected readonly UpdateOptions UpdateOptions;

    public BaseRepository()
    {
      _context = new MongoDbContext(MongoDbSettings);

      FilterBuilder = Builders<T>.Filter;
      UpdateOptions = new UpdateOptions { isUpsert = true; };
    }
  }
}

namespace Infrastructure.Repositories.Person
{
  public class PersonRepository : BaseRepository<Domain.Entities.Person>, IPersonRepository
  {
    public PersonRepository(IMongoDbContext context) : base(context) { }
    public Task<Domain.Entities.Person> GetByCpf(string cpf)
    {
      FilterDefinition<Domain.Entities.Person> filter = FilterBuilder.Eq("Cpf", cpf);
      return _db.Find(filter).FirstOrDefault();
    }
  }
}

```
