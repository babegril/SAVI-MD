FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/babegril/SAVI-MD /root/babegril
WORKDIR /root/babegril
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
