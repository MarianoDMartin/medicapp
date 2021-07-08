using System.ComponentModel.DataAnnotations;

namespace MedicappApi.Models
{
  public class Elemento
  {
    [Key]
    public int Id { get; set; }

    public string Descripcion { get; set; }

    public string Imagen { get; set; }
  }
}