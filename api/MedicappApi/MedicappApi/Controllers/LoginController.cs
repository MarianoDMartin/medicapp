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
    public Usuario Post([FromBody] Usuario usuarioLogin)
    {
      var usuario = _context.Usuario.FirstOrDefault(x => x.Mail == usuarioLogin.Mail && x.Password == usuarioLogin.Password);
      return usuario;
    }
  }
}