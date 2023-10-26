import frase from "./sumador.js";
import sumar from "./sumador.js";


describe("Frase", () => {
  it("deberia retornar una frase", () => {
    const calcu = new frase();
    expect(calcu.separar("hola")).toEqual("hola");
  });

  it("deberia retornar una frase volviendo todo a minuscula", () => {
    const calcu = new frase();
    expect(calcu.separar("HOLA")).toEqual("hola");
  });

});
