using System;
using System.ComponentModel.DataAnnotations;

namespace MedicappApi.Models
{
  public class Operacion
  {
    [Key]
    public int Id { get; set; }

    public DateTime FechaInicio { get; set; }

    public string Comentarios { get; set; }

    public string Elemento { get; set; }

    public string Imagen { get; set; }

    public Usuario Usuario { get; set; }
  }
}