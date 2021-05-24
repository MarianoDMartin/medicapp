using MedicappApi.Models;
using Microsoft.EntityFrameworkCore;

namespace MedicappApi.Context
{
  public class AppDbContext : DbContext
  {
    public AppDbContext(DbContextOptions<AppDbContext> options):base(options)
    {
    }

    public DbSet<Usuario> Usuario { get; set; }
  }
}