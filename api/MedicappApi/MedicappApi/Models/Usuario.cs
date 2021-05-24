using System.ComponentModel.DataAnnotations;

namespace MedicappApi.Models
{
  public class Usuario
  {
    [Key]
    public int Id { get; set; }

    public string Email { get; set; }

    public string Password { get; set; }

    public string Nombre { get; set; }

    public string Apellido { get; set; }

    public string Calle { get; set; }

    public int Numero { get; set; }

    public int CodigoPostal { get; set; }

    public string Provincia { get; set; }

    public string Telefono { get; set; }

    public string Telefono2 { get; set; }
  }
}