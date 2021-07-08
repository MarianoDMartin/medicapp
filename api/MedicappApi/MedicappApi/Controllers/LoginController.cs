using MedicappApi.Models;
using MedicappApi.Services;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Linq;

namespace MedicappApi.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class LoginController : ControllerBase
  {
    private readonly IDapper _dapper;

    public LoginController(IDapper dapper)
    {
      _dapper = dapper;
    }

    // POST api/<UsuarioController>
    [HttpPost]
    public ActionResult Post([FromBody] Usuario usuarioLogin)
    {
      //var usuario = _dapper.Get<Usuario>(x => x.Email == usuarioLogin.Email && x.Password == usuarioLogin.Password);
      var usuario = _dapper.Get<Usuario>($"SELECT * FROM Usuario WHERE Email = '{usuarioLogin.Email}' AND Password = '{usuarioLogin.Password}'", null, commandType: CommandType.Text);
      if (usuario != null)      
        return Ok(usuario);
      
      return NotFound(null);
    }
  }
}