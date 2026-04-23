import { iniciarMenu } from './menu.js';
import { iniciarScrollProjetos } from './scrollProjetos.js';
import { iniciarAnimacoes } from './animacoes.js';
import { iniciarWhatsApp } from './whatsapp.js';
import { carregarProjetosGitHub } from './githubAPI.js';

document.addEventListener("DOMContentLoaded", () => {
    iniciarMenu();
    iniciarScrollProjetos();
    iniciarAnimacoes();
    iniciarWhatsApp();
    carregarProjetosGitHub(); 
});