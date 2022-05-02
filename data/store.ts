import { type } from "os";
import { ImageProps } from "react-native"

export type Loja = {
    name: string;
    image: ImageProps["source"];
    description: string;
    price: number;
}

const imageMedusa = require("../assets/store/medusa.png")
const imageAjuda = require("../assets/store/ideia.png")
const imageZeus = require("../assets/store/zeus.png")
const imageHera = require("../assets/store/estrela.png")
const imageAtena = require("../assets/store/bateria.png")
const imageGala = require("../assets/store/diamante.png")
const image2Andar = require("../assets/store/bloco-de-anotacoes.png")
const imageHermes = require("../assets/store/trevo.png")
const imageAfrodite = require("../assets/store/espelho.png")
const imagePegasus = require("../assets/store/pegaso.png")

export const storeList: Loja[] = [
    {
        name: "Ajuda Divina",
        image: imageAjuda,
        description: "Ganhe dicas ao responder questões nos próximos 3 dias.",
        price: 10
    },
    {
        name: "Benção de Zeus",
        image: imageZeus,
        description: "Ganhe 20 pontos de experiência.",
        price: 20
    },
    {
        name: "Afago de Hera",
        image: imageHera,
        description: "Ganhe 10 pontos de experiência.",
        price: 12
    },
    {
        name: "Inteligência de Atena",
        image: imageAtena,
        description: "Sua respostas corretas valem 5 de experiência a mais por 3 dias.",
        price: 35
    },
    {
        name: "Traje de Gala",
        image: imageGala,
        description: "Ganhe um avatar aleatório.",
        price: 80
    },
    {
        name: "2º Andar do Olimpo",
        image: image2Andar,
        description: "Desbloqueia novas questões.",
        price: 100
    },
    {
        name: "Sorte de Hermes",
        image: imageHermes,
        description: "Sua próxima meta semanal valerá 40 pontos de experiência extra.",
        price: 30
    },
    {
        name: "Beleza de Afrodite",
        image: imageAfrodite,
        description: "Ganhe uma moldura moldada por Afrodite.",
        price: 50
    },
    {
        name: "Visita da Medusa",
        image: imageMedusa,
        description: "Suas metas diárias não expiram por 7 dias.",
        price: 35
    },
    {
        name: "Carona de Pegasus",
        image: imagePegasus,
        description: "Suba 2 níveis.",
        price: 150
    }
]