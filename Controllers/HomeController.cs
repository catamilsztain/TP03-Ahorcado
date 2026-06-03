using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using TP03_Ahorcado.Models;

namespace TP03_Ahorcado.Controllers;

public class HomeController : Controller
{
    PalabrasAhorcado ahorcado1 = new PalabrasAhorcado();
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        ViewBag.ocultis = ahorcado1.ObtenerPalabra();
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
