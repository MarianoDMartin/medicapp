using MedicappApi.Models;
using MedicappApi.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Data;

namespace MedicappApi.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class DonacionesController : ControllerBase
  {
    private readonly IDapper _dapper;

    public DonacionesController(IDapper dapper)
    {
      _dapper = dapper;
    }

    // GET: api/<UsuarioController>
    [HttpGet]
    public ActionResult Get()
    {
      string query = @"SELECT OP.ID, OP.FECHAINICIO, OP.COMENTARIOS, EL.DESCRIPCION AS ELEMENTO, NULL AS IMAGEN,
                        US.ID AS USUARIOID, US.NOMBRE AS USUARIONOMBRE, US.APELLIDO AS USUARIOAPELLIDO, US.PROVINCIA AS USUARIOPROVINCIA
                        FROM OPERACION OP 
                        INNER JOIN ELEMENTO EL ON OP.ELEMENTOID = EL.ID        
                        INNER JOIN USUARIO US ON OP.USUARIOID = US.ID
                        AND OP.TIPOOPERACIONID = (SELECT ID FROM TIPOOPERACION WHERE DESCRIPCION = 'donacion')";      

      var result = _dapper.GetAll<OperacionGet>(query, null, commandType: CommandType.Text);
      if (result != null)
      {
        var operaciones = new List<Operacion>();
        foreach (var item in result)
        {
          operaciones.Add(new Operacion
          {
            Id = item.Id,
            FechaInicio = item.FechaInicio,
            Elemento = item.Elemento,
            Imagen = item.Imagen,
            Comentarios = item.Comentarios,
            Usuario = new Usuario { Id = item.UsuarioId, Nombre = item.UsuarioNombre, Apellido = item.UsuarioApellido, Provincia = item.UsuarioProvincia }
          });
        }
        return Ok(operaciones);
      }
      return NotFound(null);
    }
  }
}