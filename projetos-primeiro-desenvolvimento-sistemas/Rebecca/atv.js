//Variaveis
let regiao = "Internacional"
let destino = "Ásia";
let classificacao = "Executiva";
let adulto = 7;
let kid = 2;
let ptt = (kid + adulto)

//Norte
let nortadulteco = 500 * adulto;
let nortkideco = 400 * kid;
let nortadultexe =adulto*( 500 + (500 * 20 / 100));
let nortkidexe = kid * (400 + (400 * 10 / 100));
//valor total da viagem
let vtt = (nortadultexe) + (nortkidexe)
let vtt1 = (nortadulteco) + (nortkideco)

//Sul
let suladulteco = 200 * adulto;
let sulkideco = 200 * kid;
let suladultexe = 400 * adulto;
let sulkidexe = 400 * kid;
//valor total da viagem
let vtt2 = (suladultexe) + (sulkidexe)
let vtt3 = (suladulteco) + (sulkideco)

//Asia
let asiaadulteco = 1600 * adulto;
let asiakideco = 1600 * kid;
let asiaadultexe = 2000 * adulto;
let asiakidexe = 2000 * kid;
//valor total da viagem
let vtt4 = (asiaadultexe) + (asiakidexe)
let vtt5 = (asiaadulteco) + (asiakideco)

//Europa
let euroadulteco = 1800 * adulto;
let eurokideco = 1800 * kid;
let euroadultexe = 2300 * adulto;
let eurokidexe = 2300 * kid;
//valor total da viagem
let vtt6 = (euroadultexe) + (eurokidexe)
let vtt7 = (euroadulteco) + (eurokideco)

//Africa
let afriadulteco = 1200 * adulto;
let afrikideco = 1200 * kid;
let afriadultexe = 1900 * adulto;
let afrikidexe = 1900 * kid;
//valor total da viagem
let vtt8 = (afriadultexe) + (afrikidexe)
let vtt9 = (afriadulteco) + (afrikideco)

//localização do voo 
if (regiao === "Nacional") {
    console.log(`Voo: ${regiao}`)
    if (destino === "Norte") {
        console.log(`Destino escolhido: ${destino}`)
//passageiros        
        console.log(`Numero de passageiro: ${ptt}`)
        console.log(`Quantidade de passagens para adultos: ${adulto}`)
        console.log(`Quantidade de passagens infantis: ${kid}`)
//se será executiva ou economica
        if (classificacao === "Executiva") {
            console.log(`Classificação do voo: ${classificacao}`)
//valor das passagens
            console.log(`Preço total da passagem executiva para adulto é: R$ ${nortadultexe}`)
            console.log(`Preço total da passagem executiva infantil é: R$ ${nortkidexe}`)
//valor total da viagens
            console.log(`Custo total da viagem : R$ ${vtt}`)
        } else {
            console.log(`Classificação escolhida: ${classificacao}`)
//valor das passagens
            console.log(`Preço total da passagem econômica para adulto é: R$ ${nortadulteco}`)
            console.log(`Preço total da passagem econômica infantil é: R$ ${nortkideco}`)
//valor total da viagem            
            console.log(`Custo total da viagem : R$ ${vtt1}`)
        }
    } else {
        if (destino==="Sul") {
        console.log(`Destino escolhido: ${destino}`)
//passageiros
        console.log(`Numero de passageiro: ${ptt}`)
        console.log(`Quantidade de passagens para adultos: ${adulto}`)
        console.log(`Quantidade de passagens infantis: ${kid}`)
//se será executiva ou economica
        if (classificacao === "Executiva") {
            console.log(`Classificação escolhida: ${classificacao}`)
//valor das passagens
            console.log(`Preço total da passagem executiva para adulto é: R$ ${suladultexe}`)
            console.log(`Preço total da passagem executiva infantil é: R$ ${sulkidexe}`)
//valor total da viagem            
            console.log(`Custo total da viagem : R$ ${vtt2}`)
        } else {
            console.log(`Classificação do voo: ${classificacao}`)
//valor das passagens            
            console.log(`Preço total da passagem econômica para adulto é: R$ ${suladulteco}`)
            console.log(`Preço total da passagem econômica infantil é: R$ ${sulkideco}`)
//valor total da viagem          
            console.log(`Custo total da viagem : R$ ${vtt3}`)
            }
        }
    }
} else {
    if (regiao==="Internacional") {
    console.log(`Voo: ${regiao}`)
    if (destino === "Ásia") {
        console.log(`Destino escolhido: ${destino}`)
//passageiros        
        console.log(`Numero de passageiro: ${ptt}`)
        console.log(`Quantidade de passagens para adultos: ${adulto}`)
        console.log(`Quantidade de passagens infantis: ${kid}`)
//se será executiva ou economica
        if (classificacao === "Executiva") {
            console.log(`Classificação escolhida: ${classificacao}`)
//valor das passagens            
            console.log(`Preço total da passagem executiva para adulto é: R$ ${asiaadultexe}`)
            console.log(`Preço total da passagem executiva infantil é: R$ ${asiakidexe}`)
//valor da viagem            
            console.log(`Custo total da viagem : R$ ${vtt4}`)
        } else {
            console.log(`Classificação do voo: ${classificacao}`)
//valor das passagens            
            console.log(`Preço total da passagem econômica para adulto é: R$ ${asiaadulteco}`)
            console.log(`Preço total da passagem econômica infantil é: R$ ${asiakideco}`)
//valor da viagem        
            console.log(`Custo total da viagem : R$ ${vtt5}`)
        }
    }
    else {
        if (destino === "Europa") {
            console.log(`Destino escolhido: ${destino}`)
//passageiros            
            console.log(`Numero de passageiro: ${ptt}`)
            console.log(`Quantidade de passagens para adultos: ${adulto}`)
            console.log(`Quantidade de passagens infantis: ${kid}`)
//se será executiva ou economica            
            if (classificacao === "Executiva") {
                console.log(`Classificação do voo: ${classificacao}`)
//valor das passagens                
                console.log(`Preço total da passagem executiva para adulto é: R$ ${euroadultexe}`)
                console.log(`Preço total da passagem executiva infantil é: R$ ${eurokidexe}`)
//valor da viagem                
                console.log(`Custo total da viagem : R$ ${vtt6}`)
            } else {
                console.log(`Classificação escolhida: ${classificacao}`)
//valor das passagens                
                console.log(`Preço total da passagem econômica para adulto é: R$ ${euroadulteco}`)
                console.log(`Preço total da passagem econômica infantil é: R$ ${eurokideco}`)
//valor da viagem                
                console.log(`Custo total da viagem : R$ ${vtt7}`)
            }
        }
        else {
            if (destino==="África") {
                console.log(`Destino escolhido: ${destino}`)
                //passageiros            
                console.log(`Numero de passageiro: ${ptt}`)
                console.log(`Quantidade de passagens para adultos: ${adulto}`)
                console.log(`Quantidade de passagens infantis: ${kid}`)
                //se será executiva ou economica
                if (classificacao === "Executiva") {
                    console.log(`Classificação escolhida: ${classificacao}`)
                    //valor das passagens                
                    console.log(`Preço total da passagem executiva para adulto é: R$ ${afriadultexe}`)
                    console.log(`Preço total da passagem executiva infantil é: R$ ${afrikidexe}`)
                    //valor da viagem                
                    console.log(`Custo total da viagem : R$ ${vtt8}`)
                } else {
                    console.log(`Classificação do voo: ${classificacao}`)
                    //valor das passagens                
                    console.log(`Preço total da passagem econômica para adulto é: R$ ${afriadulteco}`)
                    console.log(`Preço total da passagem econômica infantil é: R$ ${afrikideco}`)
                    //valor da viagem                
                    console.log(`Custo total da viagem : R$ ${vtt9}`)
                }
            }
        }  
     }

    }
}