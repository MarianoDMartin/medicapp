using System;

namespace MedicappApi.Models
{
  public class OperacionCrud
  {
    public int Id { get; set; }

    public DateTime FechaInicio { get; set; }

    public string Comentarios { get; set; }

    public int ElementoId { get; set; }

    public string ElementoDescripcion { get; set; }

    public string Imagen { get; set; }

    public int UsuarioId { get; set; }

    public string UsuarioNombre { get; set; }

    public string UsuarioApellido { get; set; }

    public string UsuarioProvincia { get; set; }
  }
}
