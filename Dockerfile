# Base image
FROM node:16

# Instalar dependências do sistema
RUN apt-get update && apt-get install -y git

# Definir diretório de trabalho
WORKDIR /app

# Clonar o repositório do GitHub diretamente
RUN git clone https://github.com/Bvictor94/victor-beguito-ciclo2-gateway.git .

# Instalar dependências do projeto
RUN npm install

# Expor a porta para o serviço
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start"]
