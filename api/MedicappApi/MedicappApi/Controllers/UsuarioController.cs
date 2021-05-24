using MedicappApi.Context;
using MedicappApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MedicappApi.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UsuarioController : ControllerBase
  {
    private readonly AppDbContext _context;

    public UsuarioController(AppDbContext context)
    {
      _context = context;
    }

    // GET: api/<UsuarioController>
    [HttpGet]
    public IEnumerable<Usuario> Get()
    {
      return _context.Usuario.ToList();
    }

    // GET api/<UsuarioController>/5
    [HttpGet("{id}")]
    public Usuario Get(int id)
    {
      var usuario = _context.Usuario.FirstOrDefault(x => x.Id == id);
      return usuario;
    }

    // POST api/<UsuarioController>
    [HttpPost]
    public ActionResult Post([FromBody] Usuario usuario)
    {
      try
      {
        _context.Usuario.Add(usuario);
        _context.SaveChanges();
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
        _context.Entry<Usuario>(usuario).State = EntityState.Modified;
        _context.SaveChanges();
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
      var usuario = _context.Usuario.FirstOrDefault(x => x.Id == id);
      if (usuario != null)
      {
        _context.Usuario.Remove(usuario);
        _context.SaveChanges();
        return Ok();
      }
      else
      {
        return NotFound();
      }
    }
  }
}