using System;

namespace MedicappApi.Models
{
  public class OperacionGet
  {
    public int Id { get; set; }

    public DateTime FechaInicio { get; set; }

    public string Comentarios { get; set; }

    public string Elemento { get; set; }

    public string Imagen { get; set; }

    public int UsuarioId { get; set; }

    public string UsuarioNombre { get; set; }

    public string UsuarioApellido { get; set; }

    public string UsuarioProvincia { get; set; }
  }
}
