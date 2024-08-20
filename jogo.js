let saude = 20;
let saudeLimite = 20;
let VIDA = 0;
let DanoMedio = 10; //VARIAVEIS DO EDILIO.

let inventario = [];
let sentimentos = 0; //VARIAVEIS DE SENTIMENTOS.


let MariVida = 20;
let MariDano = 5;
let MariCura = 7; //VARIAVEIS DA MARIALEJANDRA.

let START = true;//INICIO.
alert("BEM VINDO Á SOOPER SHOOTER!")



let arvore = { //inimigo tutorial.
    vidaArvore: 20,
    ataqueArvore: 5,
    ataqueNome: "jogar casca de árvore"
}


//INTRODUÇÃO.
alert("2017. Barquisimeto, Lara, Venezuela. Você se chama Edílio Centeno Nieves.")
alert("você está em sua casa, do lado de fora, você pega a sua pistola de pressão e mira em uma árvore para treinar sua pontaria.")

//TUTORIAL.
alert("TUTORIAL!")
let batalha1 = true
while (batalha1 == true) {
    acao = Number(prompt(` VIDA: ${VIDA}, SAÚDE: ${saude}. \n INIMIGO: Árvore. SAUDE DO INIMIGO: ${arvore.vidaArvore} \n PRESSIONE 1 PARA ATIRAR;  \n PRESSIONE 2 PARA ABRIR O INVENTÁRIO.`))
    if(arvore.vidaArvore <= 0 ){}
    if (acao == 1) {
        alert("Você deu um tiro na arvore.")
        alert(`${DanoMedio} de dano!`)
        arvore.vidaArvore -= DanoMedio;
    }
    else if (acao == 2) {
        alert("Seu inventário está vazio!")
    }

    else { console.log("Opção nõa reconhecida.") }
    alert(`A árvore usou ${arvore.ataqueNome}. \n -${arvore.ataqueArvore} de SAÚDE!`)
    saude -= arvore.ataqueArvore;
    if (saude <= 0) {
        alert("..., você foi morto por uma árvore.");
        saude = 20;
        arvore.vidaArvore = 20;
        alert("RECOMEÇANDO BATALHA.")
        alert("TUTORIAL!")

    }
    if(arvore.vidaArvore <= 0 ){ batalha1 = false;}
}// FIM DO TUTORIAL.
alert("BATALHA CONCLUIDA!")

//INICIO DA HISTORIA.
alert("a sua irmã sai de dentro de casa.")
alert("-Edílio, você viu as noticias?")
alert("Parece que a situação está piorando, esta manhã os preços nos mercados e lojas dobraram!")
alert("Se continuar assim, não vamos conseguir nem comprar comida.")
let Decisao1 = Number(prompt("Acho que a sua família está na academia, você vai se encontrar com eles? \n 1- Sim \n 2- vou pegar algumas coisas antes..."))
if (Decisao1 == 1)//PULAR CENA DO AVÔ.
{
    alert("Ótimo, então eu vou com você.")
    alert("MARIALEJANDRA SE JUNTOU AO TIME!")
    alert("Você perdeu 1 ponto de vida.")
    VIDA -= 1;
}
else if (Decisao1 == 2) //CENA DO AVÔ1.
{

    alert("Vou te esperara aqui.")
    alert("Você entra em sua casa, seu vô está sentado em uma poltrona lendo um jornal")
    //Tocar musica tranquila.
    alert("Você tenta não incomoda-lo, então você pega o 100 Bolívares no balcão")
    alert("100 BOLÍVARES adicionados á seu inventario!")
    inventario.push("100 BOLÍVARES")

    alert("Quando você está no caminho da saída, seu avô chama você.")
    alert("Avô: Edílio, você pode vir aqui?")
    alert("(Você se aproximou dele)")
    alert("Avô: Você e sua irmã são meus maiores orgulhos...")
    alert("Avô: Você não tem praticado muito, não é?")
    alert("Edílio: Eu não tive muito tempo para isso desde que tudo isso começou")
    alert("Avô: Tudo bem... Quando eu era jovem, o meu maior sonho era sair deste país, não pelas coisas estarem ruins, mas para ser uma nova pessoa, Mas eu nunca tive a chance...")
    alert("Avô: Edílio, você deveria sair deste lugar, encontrar um lar novo, um lar bom de verdade...")
    let DecisaoCasa1 = Number(prompt("vô... \n 1- eu não posso sair daqui, toda a nossa familia está por aqui... as coisas vão melhorar, eu te prometo.. \n 2- eu vou nos levar para um lugar novo, eu prometo.."))
    if (DecisaoCasa1 == 1)//NEGAR ESPERANÇA.
    {

        alert("Avô: Sim, claro... \n Ele olha meio triste para a janela.")
        alert("você se sentiu mal. \n Você saiu da casa.")
        alert("Você perdeu 1 ponto de vida.")
        VIDA -= 1;
        alert("Mari: Está pronto?")
        alert("Edílio: sim.")
        alert("MARIALEJANDRA SE JUNTOU AO TIME!")
    }
    else if (DecisaoCasa1 == 2)//ESPERANÇA.
    {
        alert("Seu avô olha em seus olhos com alegria e diz: 'Então está prometido.'")

        alert("VOCÊ DESBLOQUEOU O SENTIMENTO: ESPERANÇA. \n sua VIDA aumentou em 1! Saude aumentada em 10 pontos! \n você saiu da casa.") //GANHAR ESPERANÇA.
        inventario.push("ESPERANÇA")
        sentimentos += 1;
        AumentarVida();

        alert("Mari: Está pronto?")
        alert("Edílio: sim.")
        alert("MARIALEJANDRA SE JUNTOU AO TIME!")
    }
}
//FIM DA CENA DO AVÔ.
//CAMINHADA.

alert("Habilidade da MARI desbloqueada: CURA!")
alert("Enquanto vocês andam calmamente pelas ruas Mari sorri e diz:' Lembra daquela vez que nossa mãe pediu para nós comprarmos pão e nós acabamos nos perdendo?'")
alert("Mari: Nós ficamos horas andando de um lado para outro tentando achar ajuda.")
alert("Edílio: E no fim nós só estavamos a uma quadra de casa.")
alert("Mari: Você estava tão preocupado que sempre que via alguém você só segurava a minha mão e andava o mais rapido que podia.")
alert("Edílio: A nossa mãe disse que eu estava responsavel por você e se qualquer coisa acontesse ela iria me matar. Bons tempos.")
alert("Após uma pequena pausa ela continua:' Você acha que este lugar vai voltar a ser o que era antes?'")
alert("Edílio: Quem sabe... Tudo aqui já se foi, acho que nós poderiamos ir para um lugar novo, um lugar onde dê para seguir a vida.")
alert("Edílio: Voltar a treinar...")
alert("A Mari responde novamente com um sorriso animado: ' E quem sabe poderemos ser os melhores atiradores do mundo.'")
//FIM DA CAMINHADA.

alert("Vocês continuam a falar sobre suas esperanças e sonhos.")
alert("Após algum tempo, vocês se deparam com um pequeno grupo de pessoas gritando, na frente há um homem assaltando uma loja, destruindo tudo impiedosamente. \n o dono da loja está desesperado vendo.")
//CENA DO LADRAO.
let batalhaLadrao = true;
while (batalhaLadrao){
    let DecisaoRua1 = Number(prompt("...? \n 1- Ajudar. \n 2. Proteger Mari."))


if (DecisaoRua1 == 1)//AJUDAR O DONO DA LOJA.
{
    let vidaladraoInicial = 35;
    let vidaLadrao = 35;
    let DanoLadrao = 10;
    let ataqueLadrao = 'tiro'
    let nomeAssaltante = 'Assaltante'
    alert("O olhar do dono da loja vendo toda a sua vida sendo destruida te enche de COMPAIXÃO")
    alert("NOVO SENTIMENTO DESBLOQUEADO: COMPAIXÃO.") //DESBLOQUEAR COMPAIXÃO.
    inventario.push("COMPAIXÃO")
    alert(inventario)
    sentimentos += 1;
    alert("Você se aproxima da loja e saca sua arma.")
    alert("BATALHA!")
    while (vidaLadrao > 0 || saude <= 0 || MariVida <= 0) {
       vidaLadrao = Batalha(vidaLadrao, DanoLadrao, nomeAssaltante, ataqueLadrao,vidaladraoInicial)
    }
    alert("BATALHA CONCLUIDA")
    AumentarVida()
    alert("O vendedor olha extremamente agradecido.")
    alert("NOVO SENTIMENTO DESBLOQUEADO: GRATIDÃO.")
    inventario.push("GRATIDÃO")//GRATIDAO.
    batalhaLadrao = false;
}
if (DecisaoRua1 == 2) { //NÃO AJUDAR O SENHOR DA LOJA.
    batalhaLadrao = false;
    alert("Você olha para sua irmã e decide que a segurança de vocês te mais valor.")
    alert("Você segura a mão dela e corre para evitar a situação.")
    alert("Você perdeu 1 ponto de vida.")
    VIDA -= 1;
}
}
//FIM DA CENA DO LADRAO.
//CENA DA CRIANÇA.
    alert("Vocês continuam andando e encontram uma pequena criança sozinha.")
    alert("Ela parece um pouco suja e tem apenas uma boneca em suas mãos, parece que ela não come nada há alguns dias.")
    if(inventario.includes("100 BOLÍVARES"))
    {
        let doar = confirm("Você pensa em dar alguma coisa para ajudar ela. Doar 100 Bolívares? (OK para confirmar, CANCELAR para negar)")
        if(doar)// AJUDAR A CRIANÇA
        {
            alert("Você se aproxima dela e dá os 100 Bolívares. \n Ela olha extremamente feliz e te dá um abraço.")
            alert("Após isso te oferece sua boneca. Mesmo você negando, ela a deixa em suas mãos e corre para comprar algo para comer.")
            alert("NOVO SENTIMENTO DESBLOQUEADO: EMPATIA.")
            alert("SUA VIDA AUMENTOU EM 1! 10 pontos de saude aumentados.")
            AumentarVida()// EMPATIA.
            inventario.push("EMPATIA")
            inventario.push("BONECA.")
            let objeto = inventario.indexOf("100 BOLÍVARES");
            inventario.splice(objeto,1);

        }
        else //NÃO AJUDAR A CRIANÇA.
        {
            alert("Você decide não doar os 100 Bolívares e ignorar a situação.")
            alert("Você perdeu 1 ponto de vida.")
            VIDA -= 1;
        }
    }
    else //NÃO PODER AJUDAR A CRIANÇA
    {
        alert("Você pensa em doar algo para a criança, mas você não tem nada para dar.")
    }
// FIM DA CENA DA CRIANÇA
// INICIO DO PROTESTO.
let MariViva = true;
let sobreviveu = false;
alert("Você e sua irmã seguem andando pelas ruas mal cuidadas, a maioria das lojas parecem estar fechadas a tempos.")
alert("Mari: Sabe... é realmente impressionante que você tenha conseguido manter a academia aberta após tanta coisa.")
alert("Quando você vai responder vocês veem um grupo de pessoas correndo em sua direção.")
alert("Vocês continuam andando e encontram um protesto em andamento. \n a situação não parece muito pacífica.")
alert("Vocês estão quase chegando na academia e este é o caminho mais seguro. \n Não há outro jeito.")
alert("Você segura a mão de Mari e tenta atravessar pelo meio do protesto.")
alert("Quando vocês estão quase passando, as autoridades chegam para contêr a situação. \n por apenas um momento todos os gritos pararam.")
while(!sobreviveu){
alert("Então começaram-se a ouvir tiros e gritos de desespero. \n o caos se iniciou.")
alert("Sobreviva.")
alert("O cheiro de gás lacrimogênio queima seus olhos e narinas, os gritos ensurdecedores te privam de seus sentidos.")
let ProtestoEscolha1 = confirm("Você encontra uma pequena brecha no meio da multidão desesperada. Tentar passar por ela?")
if (ProtestoEscolha1) { // MARI MORRE.
    MariViva = false
    sobreviveu = true;

    alert("Você segura ainda mais forte a mão de mari e começa a correr em direção a brecha, mas a multidão desesperada empurra vocês.")
    alert("Com o impacto você solta a mão da Mari, que é jogada violentamente no chão.")
    alert("você só pode ver seus olhos desesperados antes de ser esmagada pela multidão.")
    alert("Seus gritos são abafados enquanto a grande massa de pessoas levam os últimos vestígios dela.")
    alert("Toda a multidão se vai. exeto você.")
    alert("você só escuta o silêncio.")
    alert("sobrevivencia completa.")
    alert("Você perdeu 1000 pontos de vida.")

    VIDA -= 1000;

    alert("SENTIMENTO DESBLOQUEADO: CULPA.")
    alert("SENTIMENTO DESBLOQUEADO: SOLIDÃO.")

    inventario.push("CULPA.")
    inventario.push("SOLIDÃO.") 

    alert("Você não consegue se manter em pé, não tem um motivo.")
    alert("...")
    alert("Após algum tempo você se levanta e vai em direção á academia.")

} else if (!ProtestoEscolha1) { //VOCES DOIS VIVEM.
    alert("Você resolve não passar pela brecha e tentar seguir o fluxo das pessoas.")
    alert(" Com todo o desespero vocês batem com uma parede de escudos das autoridades.")
    let ProtestoEscolha2 = confirm("Tentar Forçar para passar?")
    if(ProtestoEscolha2)//VOCÊ MORRE.
    {
        sobreviveu = false;
        alert("Você usa todas as suas forças para tentar passar, sem sorte.")
        alert("As autoridades começou a empurrar com ainda mais intensidade.")
        alert("Você sente uma dor extrema em seu peito. \n todos os sons se dissipam.")
        alert("Você pode ouvir mari gritando, enquanto tudo fica escuro.")
        let tentarDeNovo = confirm("VOCÊ MORREU. \n TENTAR NOVAMENTE?")
        if(!tentarDeNovo)
        {
            alert("FIM DE JOGO.")
            break
        }
    }else
    {
        sobreviveu = true
        alert("Vocês correm e se agacham atrás de um carro estacionado para tentar se proteger.")
        alert("Quando todos os gritos param, vocês levantam e olham em volta para ter certeza de que está seguro.")
        alert(" Antes que você possa reagir um policial segura o seu braço e aponta a arma para você. \n Rapidamente Mari aponta sua arma para ele.")
        let escolhaFeita = false;
        while(!escolhaFeita){
        let ProtestoEscolha3 = Number(prompt("... \n 1- Fazer um sinal para Mari atirar no policial. \n 2- Tentar explicar a situação."))
        if(ProtestoEscolha3 == 1) //AGREDIR O POLICIAL.
        {
            alert("Mari hesita em atirar e tenta explicar para o policial que vocês só estavam tentando passar pela situação.")
            alert("O policial parecia desconfiado, mas acreditou nela e liberou vocês. \n Vocês se levantam e saiem o mais rapido possível.")
            alert("VOCÊ PERDEU 1 PONTO DE VIDA.")
            VIDA -= 1;
            alert("Edílio: Nós precisamos sair deste país.")
            alert("Vocês continuam andando em completo silêncio.")
            alert("Vocês estão quase lá.")
            alert("Vocês finalmente chegam perto da academia e na frente há 2 policiais.")
            escolhaFeita = true;
        }
        else if(ProtestoEscolha3 == 2)//SE EXPLICAR PARA O POLICIAL.
        {
            alert("Mari abaixa a arma e tenta explicar para o policial que vocês estavam apenas tentando passar pela situação.")
            alert("Ele parece entender e libera vocês. \n vocês se levantaram e sairam calmamente.")
            alert("VOCÊ GANHOU 1 PONTO DE VIDA.")
            VIDA += 1;
            alert("SENTIMENTO DESBLOQUEADO: ALEGRIA.")
            inventario.push("ALEGRIA")
            alert("Vocês continuam andando em direção a academia. \n Você e a Mari dançavam pelas ruas, felizes por estarem vivos.")
            alert("O sentimento contagiante tirava alguns sorrisos de algumas pessoas na rua.")
            alert("Vocês estão quase lá!")
            alert(`Inventário até agora: ${Inventario2()}`)
            alert("Vocês chegam perto da academia, perto da entrada há 2 policiais.")
            escolhaFeita = true;
        }
        else //ESCOLHA NÃO REGISTRADA.
        {
            alert("OPÇÃO NÃO ENCONTRADA.");
            escolhaFeita = false;
        }}
    }
}
}
if(MariViva == true)//ENCONTRO COM POLICIAL. MARI VIVA.
    {
       alert("Vocês se aproximam deles.")
       alert("Policiais: Com licensa senhores, Vocês são os donos desta academia?")
       alert("Mari: Sim, claro. \n Policial: Ótimo, então, devido á situação atual nós somos obrigados a cobrar 100 Boliváres como uma taxa de proteção, \n seria bom se vocês colaborassem.")
       let decisaofeita2 = false;
       while(!decisaofeita2){
       let PolicialDecisao1 = Number(prompt("Pagar o valor? \n 1- Sim. \n 2- não."))
       if(PolicialDecisao1 == 1 && inventario.includes("100 BOLÍVARES")) 
        {
            alert("Você pagou a taxa")
            alert("Policiais: Nós dissemos 100? eu quis dizer 200.")
            alert("Vocês não tem dinheiro?")
            alert("O policial dá um tiro no vidro da academia, o vidro é estilhaçado criando um enorme estrondo.")
            alert("Ele dá mais alguns tiros, danficando os equipamentos, enquanto sua irmã toca seu ombro para te confortar.")
            alert("Você sente um enorme aperto no coração enquanto observa tudo ser destruido.")
            alert("Ambos os agressores vão embora.")
            alert("Mari, mesmo com lagrimas nos olhos, tenta dar um sorriso.")
            alert("Mari: T-tudo bem, nós vamos poder reconstruir, não é? \n você pode sentir a tristeza em sua voz.")
            alert(" Vocês entram em silêncio e vão até o fundo da academia.")
            alert("Você encontra sua família. Com todos os disparos, um deles acertou a sua filha.")
            alert("Você corre para abraçar ela.")
            if(inventario.includes("BONECA."))
                {
                    alert("Você entrega a boneca para ela.")
                    alert("Sua filha abraça ela com toda a força.")
                    alert("NOVO SENTIMENTO DESBLOQUEADO: CARINHO")
                    let indexBoneca = inventario.indexOf("BONECA.")
                    inventario.splice(indexBoneca,1);
                    inventario.push("CARINHO")
                }
                alert("Você olha para a sua esposa. \n Edílio: Nós não podemos mais viver aqui.")
                alert("Helena: Nós não podemos ir embora apenas com dois filhos e um sonho, Edílio. \n Nossa vida inteira está aqui.")
                alert("Helena: E se não encontrarmos nada em outro lugar?")
                let DecisaoFinal = confirm("Tentar Convencer Ela? \n (ESTÁ DECISÃO MUDARÁ CONFORME TODAS AS SUAS ESCOLHAS.)")

            if(DecisaoFinal) //FINAL NEUTRO1.
                {   
                    alert("Edílio: Eu sei, mas eu poderia ir na frente com a Mari e garantir que tudo corra bem.")
                    alert("Edílio: Se não tentarmos, nada vai mudar.")
                    alert("Helena: Edílio... toda a nossa vida está aqui, nossos familiares, Nós precisamos de você, EU preciso.")
                    alert("Mari: Eu poderia tentar ir na frente e levar vocês assim que possível! então vocês seguram as pontas por aqui até eu dar um jeito.")
                    alert("Edílio: o que acha? \n Helena: Tudo bem.")
                    alert("Vocês voltam para casa, e Mari se despede de vocês e vai embora.")
                    alert("Nos anos seguintes vocês manteram contato, ela sempre te mandava as fotos das competições internacionais que ela participava.")
                    alert("Mas Vocês nunca chegaram nas olimpiadas.")
                    alert("Quem sabe em outra vida isso tenha acontecido?")
                    alert("Quem sabe...")
                    alert("FINAL NEUTRO 1.")
                    alert("FINAIS: \n *FINAL NEUTRO 1*. \n FINAL NEUTRO 2. \n FINAL RUIM. \n FINAL BOM.")
                    alert(`SUA VIDA FINAL: ${VIDA}.`)
                    alert(`SEUS SENTIMENTOS: ${Inventario2()}`)
                }
                else if(!DecisaoFinal) //FINAL NEUTRO2.
                {
                    alert("Edílio: Tudo bem, acho que você está certa.")
                    alert("Vocês voltam para casa e tentaram seguir suas vidas.")
                    alert("Vocês tiveram que abandonar o tiro esportivo para ter mais tempo para trabalhar e conseguir o que comer.")
                    alert("Vocês nunca foram chamados para as olimpiadas.")
                    alert("Vocês nunca realizaram seus sonhos.")
                    alert("FINAL NEUTRO 2.")
                    alert("FINAIS: \n FINAL NEUTRO 1. \n *FINAL NEUTRO 2*. \n FINAL RUIM. \n FINAL BOM.")
                    alert(`SUA VIDA FINAL: ${VIDA}.`)
                    alert(`SEUS SENTIMENTOS: ${Inventario2()}`)
                }
            decisaofeita2 = true;
            
        }
        else if(PolicialDecisao1 == 1 && inventario.includes("100 BOLÍVARES") == false)
        {
            decisaofeita2 = true;
            alert("Você pensa em pagar a taxa, mas você não tem valor o suficiente. \n Um dos policiais percebe.")
            alert("Policial: Você não tem o valor necessário? Tudo bem.")
            alert("Policial: Só seria uma pena se alguém acabasse destruindo tudo que você lutou sua vida inteira para conquistar.")
            alert("O policial dá um tiro no vidro da academia, o vidro é estilhaçado criando um enorme estrondo.")
            alert("Ele dá mais alguns tiros, danficando os equipamentos, enquanto sua irmã toca seu ombro para te confortar.")
            alert("Você sente um enorme aperto no coração enquanto observa tudo ser destruido.")
            alert("Ambos os agressores vão embora.")
            alert("Mari, mesmo com lagrimas nos olhos, tenta dar um sorriso.")
            alert("Mari: T-tudo bem, nós vamos poder reconstruir, não é? \n você pode sentir a tristeza em sua voz.")
            alert("Você concorda com a cabeça.")
            alert("SUA VIDA AUMENTOU EM 1.")
            AumentarVida()
            alert("NOVO SENTIMENTO DESBLOQUEADO: ACEITAÇÃO.")
            inventario.push("ACEITAÇÃO")
            alert(" Vocês entram em silêncio e vão até o fundo da academia.")
            alert("Você encontra sua família. Com todos os disparos, um deles acertou a sua filha.")
            alert("Você corre para abraçar ela.")
            if(inventario.includes("BONECA."))
                {
                    alert("Você entrega a boneca para ela.")
                    alert("Sua filha abraça ela com toda a força.")
                    alert("NOVO SENTIMENTO DESBLOQUEADO: CARINHO")
                    let indexBoneca = inventario.indexOf("BONECA.")
                    inventario.splice(indexBoneca,1);
                    inventario.push("CARINHO")
                }
            alert("Você olha para a sua esposa. \n Edílio: Nós não podemos mais viver aqui.")
            alert("Helena: Nós não podemos ir embora apenas com dois filhos e um sonho, Edílio. \n Nossa vida inteira está aqui.")
            alert("Helena: E se não encontrarmos nada em outro lugar?") //FINAL BOM.
            let DecisaoFinal = confirm("Tentar Convencer Ela? \n (ESTÁ DECISÃO MUDARÁ CONFORME TODAS AS SUAS ESCOLHAS.)")
            if(DecisaoFinal && inventario.includes("ESPERANÇA") && inventario.includes("COMPAIXÃO") && inventario.includes("EMPATIA") && inventario.includes("ALEGRIA") && inventario.includes("ACEITAÇÃO") && inventario.includes("CARINHO"))
                {
                    alert("Neste momento você olha para sí.")
                    alert("Você pensa em tudo o que vocês passaram. \n")
                    alert("Tudo o que vocês sentiram.")
                    alert("Esperança...")
                    alert("Compaixão...")
                    alert("Empatia...")
                    alert("Alegria...")
                    alert("Aceitação...")
                    alert("Carinho...")
                    alert("Neste momento você sente algo novo. \n algo especial.")
                    alert("Você sente AMOR.")
                    alert("NOVA EMOÇÃO DESBLOQUEADA: AMOR.")
                    inventario.push("AMOR.")
                    alert("SUA VIDA AUMENTOU EM 1000.")
                    AumentarVida()
                    AumentarVida()
                    AumentarVida()
                    VIDA = 1000;
                    alert("Você olha para sua esposa e a abraça o mais forte possivel.")
                    alert("Edílio: Mas nós temos que tentar. Acredita em nós... em mim.")
                    alert("Helena: Tudo bem. Eu sei que você vai conseguir, vá com a Mari, vocês vão saber o que fazer.")
                    alert("Helena: Quando for a hora, nós vamos encontrar vocês.")
                    alert(" No fim desta tarde você, Sua irmã, sua esposa e seus filhos voltam para casa. \n Você e sua irmã vão se preparar para ir.")
                    alert("Você vai se despedir de seu avô. Ele está dormindo em sua poltrona, como sempre.")
                    alert("Edílio: Vô, nós finalmente vamos ir para um lugar novo... Quando for a hora nós vamos voltar e levar todos vocês com a gente, tudo bem?")
                    alert("sem resposta.")
                    alert("Edílio: Vô?")
                    alert(" Você toca em seu coração...")
                    alert("...")
                    alert("1 ano depois")
                    alert("Você e a Mari estão morando no México.")
                    alert("Vocês receberam um convite do time das olimpiadas de refugiados, e tudo está perfeito.")
                    alert("Vocês puderam voltar a treinar e a sua família está vindo morar com vocês.")
                    alert("FINAL BOM.")
                    alert("FINAIS: \n FINAL NEUTRO 1. \n FINAL NEUTRO 2. \n FINAL RUIM. \n *FINAL BOM*.")
                    alert(`SUA VIDA FINAL: ${VIDA}.`)
                    alert(`SEUS SENTIMENTOS: ${Inventario2()}`)
                }
                else if(DecisaoFinal)  //FINAL NEUTRO1.
                {   
                    alert("Edílio: Eu sei, mas eu poderia ir na frente com a Mari e garantir que tudo corra bem.")
                    alert("Edílio: Se não tentarmos, nada vai mudar.")
                    alert("Helena: Edílio... toda a nossa vida está aqui, nossos familiares, Nós precisamos de você, EU preciso.")
                    alert("Mari: Eu poderia tentar ir na frente e levar vocês assim que possível! então vocês seguram as pontas por aqui até eu dar um jeito.")
                    alert("Edílio: o que acha? \n Helena: Tudo bem.")
                    alert("Vocês voltam para casa, e Mari se despede de vocês e vai embora.")
                    alert("Nos anos seguintes vocês manteram contato, ela sempre te mandava as fotos das competições internacionais que ela participava.")
                    alert("Mas Vocês nunca chegaram nas olimpiadas.")
                    alert("Quem sabe em outra vida isso tenha acontecido?")
                    alert("Quem sabe...")
                    alert("FINAL NEUTRO 1.")
                    alert("FINAIS: \n *FINAL NEUTRO 1*. \n FINAL NEUTRO 2. \n FINAL RUIM. \n FINAL BOM.")
                    alert(`SUA VIDA FINAL: ${VIDA}.`)
                    alert(`SEUS SENTIMENTOS: ${Inventario2()}`)
                }
                else if(!DecisaoFinal) //FINAL NEUTRO 2
                {
                    alert("Edílio: Tudo bem, acho que você está certa.")
                    alert("Vocês voltam para casa e tentaram seguir suas vidas.")
                    alert("Vocês tiveram que abandonar o tiro esportivo para ter mais tempo para trabalhar e conseguir o que comer.")
                    alert("Vocês nunca foram chamados para as olimpiadas.")
                    alert("Vocês nunca realizaram seus sonhos.")
                    alert("FINAL NEUTRO 2.")
                    alert("FINAIS: \n FINAL NEUTRO 1. \n *FINAL NEUTRO 2*. \n FINAL RUIM. \n FINAL BOM.")
                    alert(`SUA VIDA FINAL: ${VIDA}.`)
                    alert(`SEUS SENTIMENTOS: ${Inventario2()}`)
                }
        }
        else if(PolicialDecisao1 == 2)
        {
            decisaofeita2 = true;
            alert("Policial: Tem certeza de que você não que pagar a taxa de segurança? \n seria tão ruim se alguém viesse e destruisse tudo isso.")
            alert("O policial dá um tiro no vidro da academia, o vidro é estilhaçado criando um enorme estrondo.")
            alert("Ele dá mais alguns tiros, danficando os equipamentos, enquanto sua irmã toca seu ombro para te confortar.")
            alert("Você sente um enorme aperto no coração enquanto observa tudo ser destruido.")
            alert("Ambos os agressores vão embora.")
            alert("Mari, mesmo com lagrimas nos olhos, tenta dar um sorriso.")
            alert("Mari: T-tudo bem, nós vamos poder reconstruir, não é? \n você pode sentir a tristeza em sua voz.")
            alert(" Vocês entram em silêncio e vão até o fundo da academia.")
            alert("Você encontra sua família. Com todos os disparos, um deles acertou a sua filha.")
            alert("Você corre para abraçar ela.")
            if(inventario.includes("BONECA."))
                {
                    alert("Você entrega a boneca para ela.")
                    alert("Sua filha abraça ela com toda a força.")
                    alert("NOVO SENTIMENTO DESBLOQUEADO: CARINHO")
                    let indexBoneca = inventario.indexOf("BONECA.")
                    inventario.splice(indexBoneca,1);
                    inventario.push("CARINHO.")
                }
                alert("Você olha para a sua esposa. \n Edílio: Nós não podemos mais viver aqui.")
                alert("Helena: Nós não podemos ir embora apenas com dois filhos e um sonho, Edílio. \n Nossa vida inteira está aqui.")
                alert("Helena: E se não encontrarmos nada em outro lugar?")
                let DecisaoFinal = confirm("Tentar Convencer Ela? \n (ESTÁ DECISÃO MUDARÁ CONFORME TODAS AS SUAS ESCOLHAS.)")

            if(DecisaoFinal) //FINAL NEUTRO 1.
                {   
                    alert("Edílio: Eu sei, mas eu poderia ir na frente com a Mari e garantir que tudo corra bem.")
                    alert("Edílio: Se não tentarmos, nada vai mudar.")
                    alert("Helena: Edílio... toda a nossa vida está aqui, nossos familiares, Nós precisamos de você, EU preciso.")
                    alert("Mari: Eu poderia tentar ir na frente e levar vocês assim que possível! então vocês seguram as pontas por aqui até eu dar um jeito.")
                    alert("Edílio: o que acha? \n Helena: Tudo bem.")
                    alert("Vocês voltam para casa, e Mari se despede de vocês e vai embora.")
                    alert("Nos anos seguintes vocês manteram contato, ela sempre te mandava as fotos das competições internacionais que ela participava.")
                    alert("Mas Vocês nunca chegaram nas olimpiadas.")
                    alert("Quem sabe em outra vida isso tenha acontecido?")
                    alert("Quem sabe...")
                    alert("FINAL NEUTRO 1.")
                    alert("FINAIS: \n *FINAL NEUTRO 1*. \n FINAL NEUTRO 2. \n FINAL RUIM. \n FINAL BOM.")
                    alert(`SUA VIDA FINAL: ${VIDA}.`)
                    alert(`SEUS SENTIMENTOS: ${Inventario2()}`)
                }
                else if(!DecisaoFinal)  // FINAL NEUTRO2.
                {
                    alert("Edílio: Tudo bem, acho que você está certa.")
                    alert("Vocês voltam para casa e tentaram seguir suas vidas.")
                    alert("Vocês tiveram que abandonar o tiro esportivo para ter mais tempo para trabalhar e conseguir o que comer.")
                    alert("Vocês nunca foram chamados para as olimpiadas.")
                    alert("Vocês nunca realizaram seus sonhos.")
                    alert("FINAL NEUTRO 2.")
                    alert("FINAIS: \n FINAL NEUTRO 1. \n *FINAL NEUTRO 2*. \n FINAL RUIM. \n FINAL BOM.")
                    alert(`SUA VIDA FINAL: ${VIDA}.`)
                    alert(`SEUS SENTIMENTOS: ${Inventario2()}`)
                }
        }
        else
        {
            alert("OPÇÃO NÃO RECONHECIDA.");
            decisaofeita2 = false;
        }
    }
    }
else//ENTRADA NA ACADEMIA. MARI NÃO VIVA.
    {   //FINAL RUIM.
        alert("Você entra na academia completamente abalado.")
        alert("Só de ver sua cara sua família percebe que algo não está certo.")
        alert("Eles correm e te abraçam.")
        alert("Edílio: A Maria... Ela...")
        alert("Você não consegue terminar esta frase e desaba no chão.")
        alert("Algumas semanas depois, Vocês se mudam para outro país.")
        alert("Você não conseguia viver naquele lugar sem lembrar dela.")
        alert("Você teve que abandonar o tiro esportivo.")
        alert("Você nunca foi chamado para as olimpiadas.")
        alert("FINAL RUIM. (POR FAVOR JOGUE DE NOVO E PEGUE UM FINAL BOM. SÉRIO.)")
        alert("FINAIS: \n FINAL NEUTRO 1. \n FINAL NEUTRO 2. \n *FINAL RUIM*. \n FINAL BOM.")
        alert(`SUA VIDA FINAL: ${VIDA}.`)
        alert(`SEUS SENTIMENTOS: ${Inventario2()}`)


    }











function Batalha(vidaInimigo, danoInimigo, nomeInimigo, nomeAtaque,vidaInicial) {

    let DecisaoBriga = Number(prompt(`VIDA: ${VIDA}, SAUDE: ${saude} DANO: ${DanoMedio} \n MARI: SAUDE: ${MariVida} \n INIMIGO: SAUDE: ${vidaInimigo} \n 1- ATIRAR. 2- CURAR. 3- Inventário.`))

    if (DecisaoBriga == 1) { //atacar
       vidaInimigo = ataque(vidaInimigo)
    }
    else if (DecisaoBriga == 2) //curar.
    {
        

           let curaAlvo = Number(prompt("Quem deseja curar? 1- Edílio \n 2- Mari.")) //se você escolher um alvo não definido você perde a sua cura.
            if (curaAlvo == 1) //curar Edilio.
            {
                saude += MariCura;
                if(saude > saudeLimite)
                    {
                        saude = saudeLimite;
                    }
                alert(`CURA DADA: ${MariCura}, SAUDE ATUAL: ${saude}`)
            }
            else if (curaAlvo == 2) //Curar Mari.
            {
                MariVida += MariCura;
                alert(`CURA DADA: ${MariCura}, SAUDE ATUAL: ${MariVida}`)
            } else { alert("ALVO NÃO ENCONTRADO.") }
    }
    else if (DecisaoBriga == 3) //INVENTARIO.
    {
        let mensagemInventario = ``
        for (let i = 0; i < inventario.length - 1; i++) {
            mensagemInventario += inventario[i] + "\n";
        
        }
        alert(`${mensagemInventario}. Nenhum destes itens é útil em combate.`)
    }
    if (vidaInimigo > 0) //ATAQUE DO INIMIGO.
    {
        let chances = Math.floor(Math.random() * 10)
        let danoAlvo = 0;
        let nomeAlvo = '';
        if (chances >= 5) //EDILIO LEVA O DANO.
        {
            danoAlvo = 1;
            nomeAlvo = 'Edílio'
            saude -= danoInimigo
        } else if (chances < 5)// MARI LEVA O DANO.
        {
            danoAlvo = 2;
            nomeAlvo = 'Mari'
            MariVida -= danoInimigo;
        }
        alert(`O ${nomeInimigo} usou o ataque ${nomeAtaque} e deu ${danoInimigo} de dano em ${nomeAlvo}!`)
      
    
    }if(saude <= 0 || MariVida <= 0){
        alert("Vocês morreram.")
        saude = saudeLimite;
        MariVida = 20;
        vidaInimigo = vidaInicial;
        alert("Começando novamente...")
        alert("BATALHA!")
    }
return vidaInimigo

}
function AumentarVida() { //AUMENTAR A VARIAVEL VIDA.
    VIDA += 1;
    saudeLimite += 10;
    saude = saudeLimite;
    alert("+1 PONTO DE VIDA!")
}



function ataque(vidaInimigo2) {
    vidaInimigo2 -= DanoMedio + MariDano;
    alert(`DANO DADO: ${DanoMedio} + TIRO DA MARI: ${MariDano}`)
    return vidaInimigo2;
}

function Inventario2()
{
    let mensagemInventario = ``
    for (let i = 0; i < inventario.length; i++) {
        mensagemInventario += inventario[i] + ` \n`;
    }
    return mensagemInventario;
}

