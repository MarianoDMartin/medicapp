using MedicappApi;
using MedicappApi.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace MedicappApiTest
{
  public class UsuariosTest : IClassFixture<TestFixture<Startup>>
  {
    private HttpClient _client;

    public UsuariosTest(TestFixture<Startup> fixture)
    {
      _client = fixture.Client;
    }

    [Fact]
    public async Task GestUsuarios()
    {
      // Arrange
      var request = "/api/usuarios";

      // Act
      var response = await _client.GetAsync(request);

      // Assert
      Assert.Equal(HttpStatusCode.OK, response.StatusCode);
    }

    [Fact]
    public async Task GestUsuario()
    {
      // Arrange
      var request = "/api/usuarios/1";

      // Act
      var response = await _client.GetAsync(request);

      // Assert
      Assert.Equal(HttpStatusCode.NotFound, response.StatusCode);
    }

    [Fact]
    public async Task PostUsuario()
    {
      // Arrange
      var request = new
      {
        Url = "/api/usuarios",
        Body = new Usuario
        {
          Nombre = "",
          Apellido = "",
          Calle = "",
          CodigoPostal = 123,
          Email = "",
          Numero = 12,
          Password = "",
          Provincia = "",
          Telefono = "",
          Telefono2 = ""
        }
      };

      // Act
      var response = await _client.PostAsync(request.Url, ContentHelper.GetStringContent(request.Body));

      // Assert
      Assert.Equal(HttpStatusCode.OK, response.StatusCode);
    }

    [Fact]
    public async Task PutUsuario()
    {
      // Arrange
      var request = new
      {
        Url = "/api/usuarios/3",
        Body = new Usuario
        {
          Nombre = "",
          Apellido = "",
          Calle = "",
          CodigoPostal = 123,
          Email = "",
          Numero = 12,
          Password = "",
          Provincia = "",
          Telefono = "",
          Telefono2 = ""
        }
      };

      // Act
      var response = await _client.PutAsync(request.Url, ContentHelper.GetStringContent(request.Body));

      // Assert
      Assert.Equal(HttpStatusCode.OK, response.StatusCode);
    }

    [Fact]
    public async Task DeleteUsuario()
    {
      // Arrange
      var postRequest = new
      {
        Url = "/api/usuarios",
        Body = new Usuario
        {
          Nombre = "Pepe",
          Apellido = "Martinez",
          Calle = "Algo",
          CodigoPostal = 123,
          Email = "prueba@prueba.com",
          Numero = 12,
          Password = "asd",
          Provincia = "asd",
          Telefono = "123",
          Telefono2 = "123"
        }
      };

      // Act
      _ = await _client.PostAsync(postRequest.Url, ContentHelper.GetStringContent(postRequest.Body));

      var response = await _client.DeleteAsync("/api/usuarios/3");

      // Assert
      Assert.Equal(HttpStatusCode.OK, response.StatusCode);
    }
  }
}