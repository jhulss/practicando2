import frase from "./sumador.js";
import sumar from "./sumador.js";


describe("Frase", () => {
  it("deberia retornar una frase", () => {
    const calcu = new frase();
    expect(calcu.separar("hola")).toEqual("hola");
  });


});
