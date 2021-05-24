using MedicappApi.Context;
using MedicappApi.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;


namespace MedicappApi.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class LoginController : ControllerBase
  {
    private readonly AppDbContext _context;

    public LoginController(AppDbContext context)
    {
      _context = context;
    }

    // POST api/<UsuarioController>
    [HttpPost]
    public ActionResult Post([FromBody] Usuario usuarioLogin)
    {
      var usuario = _context.Usuario.FirstOrDefault(x => x.Email == usuarioLogin.Email && x.Password == usuarioLogin.Password);
      if (usuario != null)
      {
        return Ok(usuario);
      }
      else
      {
        return NotFound(null);
      }         
    }
  }
}