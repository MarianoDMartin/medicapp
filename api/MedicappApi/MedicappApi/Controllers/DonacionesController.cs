using MedicappApi.Models;
using MedicappApi.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;

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

    // GET: api/<DonacionesController>
    [HttpGet]
    public ActionResult Get()
    {
      var usuarioId = Request.Query["usuarioid"].FirstOrDefault();
      string whereUsuario = usuarioId != null ? $"AND OP.USUARIOID = {int.Parse(usuarioId)}" : string.Empty;

      string query = @$"SELECT OP.ID, OP.FECHAINICIO, OP.COMENTARIOS, EL.DESCRIPCION AS ELEMENTODESCRIPCION, EL.IMAGEN AS IMAGEN,
                        US.ID AS USUARIOID, US.NOMBRE AS USUARIONOMBRE, US.APELLIDO AS USUARIOAPELLIDO, US.PROVINCIA AS USUARIOPROVINCIA
                        FROM OPERACION OP 
                        INNER JOIN ELEMENTO EL ON OP.ELEMENTOID = EL.ID        
                        INNER JOIN USUARIO US ON OP.USUARIOID = US.ID
                        AND OP.TIPOOPERACIONID = (SELECT ID FROM TIPOOPERACION WHERE DESCRIPCION = 'donacion') {whereUsuario}";

      var result = _dapper.GetAll<OperacionCrud>(query, null, commandType: CommandType.Text);
      if (result.Count > 0)
      {
        var operaciones = new List<Operacion>();
        foreach (var item in result)
        {
          operaciones.Add(new Operacion
          {
            Id = item.Id,
            FechaInicio = item.FechaInicio,
            Elemento = item.ElementoDescripcion,
            Imagen = item.Imagen,
            Comentarios = item.Comentarios,
            Usuario = new Usuario { Id = item.UsuarioId, Nombre = item.UsuarioNombre, Apellido = item.UsuarioApellido, Provincia = item.UsuarioProvincia }
          });
        }
        return Ok(operaciones);
      }
      return NotFound(null);
    }

    // POST api/<DonacionesController>
    [HttpPost]
    public ActionResult Post([FromBody] OperacionCrud operacion)
    {
      try
      {
        string query = @$"INSERT INTO 
                        Operacion (UsuarioId, ElementoId, EstadoOperacionId, TipoOperacionId, FechaInicio, Comentarios) 
                        VALUES ({operacion.UsuarioId}, {operacion.ElementoId}, 1, 2, getdate(), '{operacion.Comentarios}')";

        _dapper.Insert<Operacion>(query, null, commandType: CommandType.Text);
        return Ok();
      }
      catch (Exception)
      {
        return BadRequest();
      }
    }
  }
}