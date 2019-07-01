# Anatta
Project Setup steps:
1) git clone https://github.com/RamSinghAKG/Anatta.git
2) cd Anatta
3) npm install
4) npm start   //open browser http://localhost:3000

# Docker commands
1) docker build -f Dockerfile-prod -t anatta:prod .
2) docker run -it -p 80:80 anatta:prod
3) open browser http://localhost/

# Pending Enhancement:
1) Edge cases for different base currency from config
2) Error Handling
3) Puppeteer issue in docker file
4) i18n 



