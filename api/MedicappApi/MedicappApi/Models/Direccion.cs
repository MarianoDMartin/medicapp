using System.ComponentModel.DataAnnotations;

namespace MedicappApi.Models
{
  public class Direccion
  {
    [Key]
    public int Id { get; set; }

    public string Calle { get; set; }

    public int Numero { get; set; }

    public int CodigoPostal { get; set; }

    public string Provincia { get; set; }
  }
}