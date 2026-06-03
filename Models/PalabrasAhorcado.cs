public class PalabrasAhorcado{
    private List<string> palabras= new List<string>();

    public PalabrasAhorcado(){
        palabras.Add("OBSTACULO");
        palabras.Add("ZANAHORIA");
        palabras.Add("OTORRINOLARINGOLOGO");
        palabras.Add("OBLICUOS");
        palabras.Add("AURICULARES");
        palabras.Add("ASIMISMO");
        palabras.Add("ZOPILOTE");
        palabras.Add("BULLYING");
        palabras.Add("CONSUMIRSE");
        palabras.Add("UTILIZAR");
    }

    public string ObtenerPalabra(){
        Random rnd = new Random();
        int numero = rnd.Next(0, 10); // Entre 0 y 9
        return palabras[numero];
    }

}