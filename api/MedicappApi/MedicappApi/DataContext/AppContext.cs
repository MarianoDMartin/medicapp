using Microsoft.EntityFrameworkCore;

namespace MedicappApi.DataContext
{
  public class AppContext : DbContext
  {
    public AppContext() { }
    public AppContext(DbContextOptions<AppContext> options) : base(options) { }
  }
}