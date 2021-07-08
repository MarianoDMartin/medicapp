using MedicappApi.Models;
using MedicappApi.Services;
using Microsoft.AspNetCore.Mvc;
using System.Data;

namespace MedicappApi.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ElementosController : ControllerBase
  {
    private readonly IDapper _dapper;

    public ElementosController(IDapper dapper)
    {
      _dapper = dapper;
    }

    // GET: api/<ElementosController>
    [HttpGet]
    public ActionResult Get()
    {
      var result = _dapper.GetAll<Elemento>($"SELECT Id, Descripcion, Imagen FROM Elemento", null, commandType: CommandType.Text);
      if (result != null)
        return Ok(result);

      return NotFound(null);
    }
  }
}