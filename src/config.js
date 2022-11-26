// let PORT = 8080;
// let HOST = "localhost";
// let PROTOCOL = "http";
// let API_ROUTE = "/api/";
// let FULL_PATH = PROTOCOL + "://" + HOST + ":" + PORT + "/";
// let FULL_API_PATH = PROTOCOL + "://" + HOST + ":" + PORT + API_ROUTE;

let PORT = 80;
let HOST = "pruebaback.vercel.app";
let PROTOCOL = "https";
let API_ROUTE = "/api/";
let FULL_PATH = PROTOCOL + "://" + HOST + ":" + PORT + "/";
let FULL_API_PATH = PROTOCOL + "://" + HOST + ":" + PORT + API_ROUTE;

if (PORT === 80) {
    FULL_PATH = PROTOCOL + "://" + HOST + "/";
    FULL_API_PATH = PROTOCOL + "://" + HOST + API_ROUTE;
}
//https://pruebaback.vercel.app/api/usuarios/all

module.exports = {
    PORT,
    HOST,
    PROTOCOL,
    API_ROUTE,
    FULL_PATH,
    FULL_API_PATH,
};