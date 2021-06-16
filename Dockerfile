
FROM timbru31/java-node
ENV NODE_ENV=production
WORKDIR /app
RUN npm install node
RUN npm install mocha
RUN npm install chai
RUN npm install chai-http
RUN npm install mocha-junit-reporter
RUN npm install --production
COPY ["package.json", "package-lock.json*", "./"]

COPY . .
CMD [ "java", "-jar" , "test-engineer-exercise-0.0.1.jar"]
