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

// Objeto para dados de configuração

namespace Infrastructure.Configuration
{
  public class MongoDbSettings
  {
    public string? ConnectionString { get; set; }
    public string? DatabaseName { get; set; }
    public string? CollectionName { get; set; }
  }
}

// Objeto de contexto
// Responsável por recuperar os dados da base.
namespace Infrastructure.Context.Mongo
{
  public class MongoDbContext : IMongoDbContext
  {
    private readonly IMongoDatabase _database = null;
    
    public MongoDbContext(IOptions<MongoDbSettings> settings)
    {
      var client = new MongoClient(settings.Value.ConnectionString);
      if (client != null)
        _database = client.GetDatabase(settings.Value.DatabaseName);
    }

    public IMongoCollection<T> GetCollection<T>(string name) =>
      _database.GetCollection<T>(name);
  }
}

// Repositórios

namespace Infrastructure.Repositories.Base
{
  public class BaseRepository<T> : IBaseRepository<T> where T : class
  {
    protected readonly _db;
    protected readonly FilterDefinition<T> FilterBuilder;
    protected readonly UpdateOptions UpdateOptions;
    public BaseRepository()
    {
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
