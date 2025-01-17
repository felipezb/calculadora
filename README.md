# Calculadora

Este projeto é uma calculadora simples desenvolvida utilizando Node.js, JavaScript e HTML. O projeto é executado em um contêiner Docker.

## Tecnologias Utilizadas

- Node.js
- JavaScript
- HTML
- Docker
- Git

## Como Executar

1. Clone o repositório:
    ```bash
    git clone https://github.com/felipezb/calculadora
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd calculadora
    ```
3. Construa a imagem Docker:
    ```bash
    docker build -t calculadora .
    ```
4. Execute o contêiner Docker:
    ```bash
    docker run -p 3000:3000 calculadora
    ```

## Estrutura do Projeto

- `src/`: Contém o código fonte do projeto.
- `src/Dockerfile`: Arquivo de configuração para criar a imagem Docker.
- `README.md`: Documentação do projeto.

## Contribuição

Sinta-se à vontade para contribuir com o projeto. Para isso, siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma nova branch:
    ```bash
    git checkout -b minha-feature
    ```
3. Faça as alterações desejadas e commit:
    ```bash
    git commit -m 'Minha nova feature'
    ```
4. Envie as alterações para o seu fork:
    ```bash
    git push origin minha-feature
    ```
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.