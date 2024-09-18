let destino1 = "internacional";
let destino = "europa";
let numcriancas = 9;
let numadultos = 5;
let classe = "executiva";
let passageiros = numcriancas + numadultos;

//regiao norte

let adultonorteeco = 500 * numadultos;
let criancanorteeco = 400 * numcriancas;
let ttnorteeco = adultonorteeco + criancanorteeco;

let adultonorteexe = [500 + (500 * 20) / 100] * numadultos;
let criancanorteexe = [400 + (400 * 10) / 100] * numcriancas;
let ttnorteexe = criancanorteexe + adultonorteexe;

//regiao sul

let criancasuleco = 200 * numcriancas;
let adultosuleco = 200 * numadultos;
let ttecosul = criancasuleco + adultosuleco;

let criancasulexe = 400 * numcriancas;
let adultosulexe = 400 * numadultos;
let ttexesul = criancasulexe + adultosulexe;

//continente asia

let criancaasiaeco = 1600 * numcriancas;
let adultosasiaeco = 1600 * numadultos;
let ttasiaeco = criancaasiaeco + adultosasiaeco;

let adultoasiaexe = 2000 * numadultos;
let criancasasiaexe = 2000 * numcriancas;
let ttasiaexe = adultoasiaexe + criancasasiaexe;

//continente africa

let criancaafrieco = 1200 * numcriancas;
let adultoafrieco = 1200 * numadultos;
let ttafrieco = criancaafrieco + adultoafrieco;

let criancaafriexe = 1900 * numcriancas;
let adultoafriexe = 1900 * numadultos;
let ttafriexe = criancaafriexe + adultoafriexe;

//continente europa

let criancaeuroeco = 1800 * numcriancas;
let adultoeuroeco = 1800 * numadultos;
let tteuroeco = criancaeuroeco + adultoeuroeco;

let criancaeuroexe = 2300 * numcriancas;
let adultoeuroexe = 2300 * numadultos;
let tteuroexe = criancaeuroexe + adultoeuroexe;

//processo de identificacwo nacional
if (destino1 === "nacional") {
  console.log(`Voo ${destino1}`);

  //destino e passageiros norte
  if (destino === "norte") {
    console.log(`Região de destino: ${destino}`);
    console.log(`Número de passagens criança: ${numcriancas}`);
    console.log(`Número de passagens adulto: ${numadultos}`);
    console.log(`Número de passageiros: ${passageiros}`);

    //passagem econonmica norte

    if (classe === "economica") {
      console.log(`Classe: ${classe}`);
      console.log(`Valor passagem econômica crianças: ${criancanorteeco}`);
      console.log(`Valor passagem econômica adultos: ${adultonorteeco}`);
      console.log(`Valor total das passagens: ${ttnorteeco}`);
    }

    //passagem executiva norte
    else {
      console.log(`Classe: ${classe}`);
      console.log(`Valor passagem executiva crianças: ${criancanorteexe}`);
      console.log(`Valor passagem executiva adultos: ${adultonorteexe}`);
      console.log(`Valor total das passagens: ${ttnorteexe}`);
    }
  }

  //REGIAO ESCOLHIDA SUL
  else {
    console.log(`Região de destino: ${destino}`);
    console.log(`Número passagens crianças: ${numcriancas}`);
    console.log(`Número passagens adultos: ${numadultos}`);
    console.log(`Número de passageiros: ${passageiros}`);

    //valor da passagem economica sul

    if (classe === "economica") {
      console.log(`Valor passagem econômica crianças: ${criancasuleco}`);
      console.log(`Valor passagem econômica adultos: ${adultosuleco}`);
      console.log(`Valor total das passagens: ${ttecosul}`);
    }

    //valor da passagem executiva sul
    else {
      console.log(`Classe: ${classe}`)
      console.log(`Valor passagem executiva crianças: ${criancasulexe}`);
      console.log(`Valor passagem executiva adultos: ${adultosulexe}`);
      console.log(`Valor total das passagens: ${ttexesul}`);
    }
  }
} else {
  if(destino1==="internacional")
  console.log(`Voo ${destino1}`);
}

if (destino === "asia") {
  console.log(`Destino: ${destino}`);
  console.log(`Número de passagens criança: ${numcriancas}`);
  console.log(`Número de passagens adulto: ${numadultos}`);
  console.log(`Número de passageiros: ${passageiros}`);

  //classe economica asia
  if (classe === "economica") {
    console.log(`Classe: ${classe}`);
    console.log(`Valor passagem econômica crianças: ${criancaasiaeco}`);
    console.log(`Valor passagem econômica adultos: ${adultosasiaeco}`);
    console.log(`Valor total das passagens: ${ttasiaeco}`);
  }
  //classe executiva asia
  else {
    console.log(`Classe: ${classe}`);
    console.log(`Valor passagem executiva crianças: ${criancasasiaexe}`);
    console.log(`Valor passagem executiva adultos: ${adultoasiaexe}`);
    console.log(`Valor total das passagens: ${ttasiaexe}`);
  }


}
 //destino escolhido africa
else {
  if (destino === "africa") {
    console.log(`Destino: ${destino}`);
    console.log(`Número de passagens criança: ${numcriancas}`);
    console.log(`Número de passagens adulto: ${numadultos}`);
    console.log(`Número de passageiros: ${passageiros}`);


    //classe economica africa
    if (classe === "economica") {
      console.log(`Classe: ${classe}`);
      console.log(`Valor passagem econômica crianças: ${criancaafrieco}`);
      console.log(`Valor passagem econômica adultos: ${adultoafrieco}`);
      console.log(`Valor total das passagens: ${ttafrieco}`);

      //classe executiva africa
    } else {
      console.log(`Classe: ${classe}`);
      console.log(`Valor passagem executiva crianças: ${criancaafriexe}`);
      console.log(`Valor passagem executiva adultos: ${adultoafriexe}`);
      console.log(`Valor total das passagens: ${ttafriexe}`);
    }
  } 
  
  //destino escolhido europa
  else {
    if(destino==="europa"){
    console.log(`Destino: ${destino}`);
    console.log(`Número de passagens criança: ${numcriancas}`);
    console.log(`Número de passagens adulto: ${numadultos}`);
    console.log(`Número de passageiros: ${passageiros}`);

    //classe economica europa
    if (classe === "economica") {
      console.log(`Classe: ${classe}`);
      console.log(`Valor passagem econômica crianças: ${criancaeuroeco}`);
      console.log(`Valor passagem econômica adultos: ${adultoeuroeco}`);
      console.log(`Valor total das passagens: ${tteuroeco}`);
    } 
    
    //classe executiva europa
    else {
      console.log(`Classe: ${classe}`);
      console.log(`Valor passagem executiva crianças: ${criancaeuroexe}`);
      console.log(`Valor passagem executiva adultos: ${adultoeuroexe}`);
      console.log(`Valor total das passagens: ${tteuroexe}`);
    }
   }
 }
}