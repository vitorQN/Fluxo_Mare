import * as images from "../assets/images"


const products = [
  {
    id: 1,
    name: "Maré",
    price: "R$ 149,00",
    times: 2,
    image:
      `${images.foto31}`,
    description:
      "Uma peça que carrega o espírito do Brasil em cada detalhe. Confeccionada em algodão puro, a camiseta une conforto e identidade com bordado texturizado e corte juvenil levemente oversized.",
    fabric: "100% Algodão",
    care: "Lavar à mão ou na máquina em ciclo delicado. Não usar alvejante.",
    sizes: ["10", "12", "14", "16"],
    sizeWithout: ["10"],
    images: [
      `${images.foto31}`,
      `${images.foto31}`,
      `${images.foto31}`,
    ],
    similar: [
      { name: "Maré", price: 149.0, image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80" },
      { name: "Brisa", price: 129.0, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80" },
      { name: "Corrente", price: 139.0, image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80" },
    ],
  },
  {
    id: 2,
    name: "Brisa",
    price: "R$ 129,00",
    image:
      `${images.foto32}`,
      description:
      "Uma peça que carrega o espírito do Brasil em cada detalhe. Confeccionada em algodão puro, a camiseta une conforto e identidade com bordado texturizado e corte juvenil levemente oversized.",
    fabric: "100% Algodão",
    care: "Lavar à mão ou na máquina em ciclo delicado. Não usar alvejante.",
    sizes: ["10", "12", "14", "16"],
    sizeWithout: ["10"],
    images: [
      `${images.foto32}`,
      `${images.foto32}`,
      `${images.foto32}`,
    ],
    similar: [
      { name: "Maré", price: 149.0, image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80" },
      { name: "Brisa", price: 129.0, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80" },
      { name: "Corrente", price: 139.0, image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80" },
    ],
  },
  {
    id: 3,
    name: "Onda",
    price: "R$ 169,00",
    image:
      `${images.foto35}`,
      description:
      "Uma peça que carrega o espírito do Brasil em cada detalhe. Confeccionada em algodão puro, a camiseta une conforto e identidade com bordado texturizado e corte juvenil levemente oversized.",
    fabric: "100% Algodão",
    care: "Lavar à mão ou na máquina em ciclo delicado. Não usar alvejante.",
    sizes: ["10", "12", "14", "16"],
    sizeWithout: ["10"],
    images: [
      `${images.foto35}`,
      `${images.foto35}`,
      `${images.foto35}`,
    ],
    similar: [
      { name: "Maré", price: 149.0, image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80" },
      { name: "Brisa", price: 129.0, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80" },
      { name: "Corrente", price: 139.0, image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80" },
    ],
  },
  {
    id: 4,
    name: "Corrente",
    price: "R$ 139,00",
    image:
      `${images.foto33}`,
    description:
      "Uma peça que carrega o espírito do Brasil em cada detalhe. Confeccionada em algodão puro, a camiseta une conforto e identidade com bordado texturizado e corte juvenil levemente oversized.",
    fabric: "100% Algodão",
    care: "Lavar à mão ou na máquina em ciclo delicado. Não usar alvejante.",
    sizes: ["10", "12", "14", "16"],
    sizeWithout: ["10"],
    images: [
      `${images.foto33}`,
      `${images.foto33}`,
      `${images.foto33}`,
    ],
    similar: [
      { name: "Maré", price: 149.0, image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80" },
      { name: "Brisa", price: 129.0, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80" },
      { name: "Corrente", price: 139.0, image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80" },
    ],
  }, 
  {
    id: 5,
    name: "Maré",
    price: "R$ 149,00",
    image:
      `${images.foto34}`,
    description:
      "Uma peça que carrega o espírito do Brasil em cada detalhe. Confeccionada em algodão puro, a camiseta une conforto e identidade com bordado texturizado e corte juvenil levemente oversized.",
    fabric: "100% Algodão",
    care: "Lavar à mão ou na máquina em ciclo delicado. Não usar alvejante.",
    sizes: ["10", "12", "14", "16"],
    sizeWithout: ["10"],
    images: [
      `${images.foto34}`,
      `${images.foto34}`,
      `${images.foto34}`,
    ],
    similar: [
      { name: "Maré", price: 149.0, image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80" },
      { name: "Brisa", price: 129.0, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80" },
      { name: "Corrente", price: 139.0, image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80" },
    ],
  },
  {
    id: 6,
    name: "Brisa",
    price: "R$ 129,00",
    image:
      `${images.foto36}`,
    description:
      "Uma peça que carrega o espírito do Brasil em cada detalhe. Confeccionada em algodão puro, a camiseta une conforto e identidade com bordado texturizado e corte juvenil levemente oversized.",
    fabric: "100% Algodão",
    care: "Lavar à mão ou na máquina em ciclo delicado. Não usar alvejante.",
    sizes: ["10", "12", "14", "16"],
    sizeWithout: ["10"],
    images: [
      `${images.foto36}`,
      `${images.foto36}`,
      `${images.foto36}`,
    ],
    similar: [
      { name: "Maré", price: 149.0, image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80" },
      { name: "Brisa", price: 129.0, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80" },
      { name: "Corrente", price: 139.0, image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80" },
    ],  
  },
  {
    id: 7,
    name: "Onda",
    price: "R$ 169,00",
    image:
      `${images.foto37}`,
    description:
      "Uma peça que carrega o espírito do Brasil em cada detalhe. Confeccionada em algodão puro, a camiseta une conforto e identidade com bordado texturizado e corte juvenil levemente oversized.",
    fabric: "100% Algodão",
    care: "Lavar à mão ou na máquina em ciclo delicado. Não usar alvejante.",
    sizes: ["10", "12", "14", "16"],
    sizeWithout: ["10"],
    images: [
      `${images.foto37}`,
      `${images.foto37}`,
      `${images.foto37}`,
    ],
    similar: [
      { name: "Maré", price: 149.0, image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80" },
      { name: "Brisa", price: 129.0, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80" },
      { name: "Corrente", price: 139.0, image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80" },
    ],  
  },
  {
    id: 8,
    name: "Corrente",
    price: "R$ 139,00",
    image:
      `${images.foto38}`,
    description:
      "Uma peça que carrega o espírito do Brasil em cada detalhe. Confeccionada em algodão puro, a camiseta une conforto e identidade com bordado texturizado e corte juvenil levemente oversized.",
    fabric: "100% Algodão",
    care: "Lavar à mão ou na máquina em ciclo delicado. Não usar alvejante.",
    sizes: ["10", "12", "14", "16"],
    sizeWithout: ["10"],
    images: [
      `${images.foto38}`,
      `${images.foto38}`,
      `${images.foto38}`,
    ],
    similar: [
      { name: "Maré", price: 149.0, image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80" },
      { name: "Brisa", price: 129.0, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80" },
      { name: "Corrente", price: 139.0, image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80" },
    ],  
  },
];

export default products;