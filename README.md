
![Logo](https://raw.githubusercontent.com/lucaswalder/pokedex-nextjs/main/public/cover.png)


# Projeto Pokemon API - React + NextJs

Esse projeto foi desenvolvido durante o meu PDI - [PROJETO DE DESENVOLVIMENTO INDIVIDUAL]
O desafio era conseguir consumir uma API utilizando React, e mostrar esses conteúdos em tela.




## Funcionalidades


- Separa os pokemons por tipos;
- Pesquisar pokemons específicos;
- Modal de cada pokemon, mostrando suas habilidades e status;
- Salvar os pokemons favoritos.


## Exemplo de uso da API

#### Retorna todos os pokemons

```http
  GET https://pokeapi.co/api/v2/pokemon
```

#### Retorna um item

```http
  GET /api/items/pokemon/${ID}
  
  GET /api/items/pokemon/${name}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id` or `name`      | `string` | **Obrigatório**. O ID ou Nome do pokemon que você quer |


Para mais informações acesse a [Documentação da API](https://pokeapi.co/docs/v2)


## Demonstração

Clique no link abaixo para ver o projeto on line

[Pokemon API - NextJs](https://pokedex-nextjs-sigma.vercel.app/)


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/lucaswalder/pokedex-nextjs
```

Entre no diretório do projeto

```bash
  cd pokedex-nextjs
```

Instale as dependências

```bash
  npm install or yarn
```

Inicie o servidor

```bash
  npm  run dev
  or
  yarn dev
```


## Stack utilizada

- [React](https://reactjs.org/)
- [NextJs](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)



## Aprendizados

Sendo o meu segundo projeto em React, tive algumas dificuldades.
Até mesmo por ter sido criado com NextJs, Typescript e utilizando Styled Components
Como não tinha domínio nas ferramentas, tudo era um aprendizado, mas buscando na internet e na comunidade
pude ir superando os desafios, conseguindo implementar algumas coisas novas no projeto.

Como utlilizar o server side rendering do Next.
O poder o styled Components e Typescript.

## Licença

[MIT](https://choosealicense.com/licenses/mit/)


## 🚀 Sobre mim
Atualmente estou estudando desenvolvimento front-end e tenho certeza que serei um grande desenvolvedor no futuro.
🔭 Atualmente trabalho como Desenvolvedor Front-End na Insany Design.

🌱 Atualmente estou aprendendo NextJS, GraphQl e TypesScript.

👨‍💻 Todos os meus projetos estão disponíveis em lucaswalder.dev

📫 Como me contatar: contato@lucaswalder.dev

⚡ Curiosidade: trabalhei muitos anos como designer gráfico, mas sempre fui apaixonado por programação e agora resolvi seguir meu coração (sei que parece algo saído de um filme romântico.)

Para entrar em contato me siga no Instagram [@lucaswalder.dev](https://www.instagram.com/lucaswalder.dev/)

