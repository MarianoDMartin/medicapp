using System.ComponentModel.DataAnnotations;

namespace MedicappApi.Models
{
  public class Usuario
  {
    [Key]
    public int Id { get; set; }

    public string Descripcion { get; set; }

    public string Mail { get; set; }

    public string Password { get; set; }

    public string Nombre { get; set; }

    public string Apellido { get; set; }

    //public Direccion Direccion { get; set; }
  }
}