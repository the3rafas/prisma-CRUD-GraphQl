FROM node:latest

# Create app directory
WORKDIR '/prisma'

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY ./package.json ./
COPY prisma ./prisma/

# Install app dependencies  
RUN npm install


COPY ./ ./

# VOLUME [ "./schema.prisma:/app/prisma/schema.prisma" ]

RUN npx prisma generate

# VOLUME [ "./schema.prisma:/app/prisma/schema.prisma" ]
CMD [ "npm","run","start",":div" ]