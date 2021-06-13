using Dapper;
using MedicappApi.Models;
using MedicappApi.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Data;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MedicappApi.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UsuariosController : ControllerBase
  {
    private readonly IDapper _dapper;

    public UsuariosController(IDapper dapper)
    {
      _dapper = dapper;
    }

    // GET: api/<UsuarioController>
    [HttpGet]
    public ActionResult Get()
    {
      var result = _dapper.GetAll<Usuario>($"SELECT * FROM Usuario", null, commandType: CommandType.Text);
      if (result != null)
        return Ok(result);

      return NotFound(null);
    }

    // GET api/<UsuarioController>/5
    [HttpGet("{id}")]
    public ActionResult Get(int id)
    {
      var result = _dapper.Get<Usuario>($"SELECT * FROM Usuario WHERE Id = {id}", null, commandType: CommandType.Text);
      if (result != null)
        return Ok(result);

      return NotFound(null);
    }

    // POST api/<UsuarioController>
    [HttpPost]
    public ActionResult Post([FromBody] Usuario usuario)
    {
      try
      {
        string query = @"INSERT INTO 
                        Usuario (Email, Password, Nombre, Apellido, Calle, Numero, CodigoPostal, Provincia, Telefono, Telefono2) 
                        VALUES (@Email, @Password, @Nombre, @Apellido, @Calle, @Numero, @CodigoPostal, @Provincia, @Telefono, @Telefono2)";

        var dynParams = new DynamicParameters();
        dynParams.AddDynamicParams(new 
        { 
          usuario.Email, 
          usuario.Password, 
          usuario.Nombre, 
          usuario.Apellido, 
          usuario.Calle, 
          usuario.Numero, 
          usuario.CodigoPostal, 
          usuario.Provincia, 
          usuario.Telefono, 
          usuario.Telefono2 
        });

        _dapper.Insert<Usuario>(query, dynParams, commandType: CommandType.Text);
        return Ok();
      }
      catch (Exception)
      {
        return BadRequest();
      }
    }

    // PUT api/<UsuarioController>/5
    [HttpPut("{id}")]
    public ActionResult Put(int id, [FromBody] Usuario usuario)
    {
      if (usuario.Id == id)
      {
        string query = @"UPDATE Usuario SET 
                        Email = @Email, 
                        Password = @Password, 
                        Nombre = @Nombre, 
                        Apellido = @Apellido, 
                        Calle = @Calle, 
                        Numero = @Numero, 
                        CodigoPostal = @CodigoPostal, 
                        Provincia = @Provincia, 
                        Telefono = @Telefono, 
                        Telefono2 = @Telefono2";                        

        var dynParams = new DynamicParameters();
        dynParams.AddDynamicParams(new
        {
          usuario.Email,
          usuario.Password,
          usuario.Nombre,
          usuario.Apellido,
          usuario.Calle,
          usuario.Numero,
          usuario.CodigoPostal,
          usuario.Provincia,
          usuario.Telefono,
          usuario.Telefono2
        });

        _dapper.Update<Usuario>(query, dynParams, commandType: CommandType.Text);
        return Ok();
      }
      else
      {
        return BadRequest();
      }
    }

    // DELETE api/<UsuarioController>/5
    [HttpDelete("{id}")]
    public ActionResult Delete(int id)
    {
      var result = _dapper.Get<Usuario>($"SELECT * FROM Usuario WHERE Id = {id}", null, commandType: CommandType.Text);
      if (result != null)
      {
        _dapper.Delete<Usuario>($"DELETE Usuario WHERE Id = {id}", null, commandType: CommandType.Text);
        return Ok();
      }
      return NotFound(null);
    }    
  }
}