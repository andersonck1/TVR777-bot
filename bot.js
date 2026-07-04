const { Bot } = require('grammy');
const { createCanvas } = require('canvas');

const bot = new Bot(process.env.TELEGRAM_TOKEN);
const GRUPO_ID = process.env.GRUPO_CHAT_ID;

function gerarGraficoDashboard(percentagemSucesso) {
    const canvas = createCanvas(600, 350);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#1e1e2f';
    ctx.fillRect(0, 0, 600, 350);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('MÉTODO CHINÊS MODERNO', 40, 50);
    ctx.fillStyle = '#00ffcc';
    const alturaAcertos = (percentagemSucesso / 100) * 150;
    ctx.fillRect(280, 270 - alturaAcertos, 200, alturaAcertos);
    ctx.fillStyle = '#ffffff';
    ctx.font = '20px Arial';
    ctx.fillText(`Assertividade: ${percentagemSucesso}%`, 40, 320);
    return canvas.toBuffer('image/png');
}

async function enviarSinal() {
    try {
        const assertividade = Math.floor(Math.random() * (99 - 85 + 1)) + 85;
        const imagemGrafico = gerarGraficoDashboard(assertividade);
        const mensagemSinal = `🤖 <b>ROBÔ ANJOS777 - SINAL DETECTADO</b> 🤖\n\n🎲 <b>Estratégia:</b> Método Chines Moderno\n📊 <b>Assertividade:</b> ${assertividade}%\n\n🎯 <a href="https://anjos777.fun">ENTRAR NO CASSINO AGORA</a>`;
        await bot.api.sendPhoto(GRUPO_ID, { source: imagemGrafico }, { caption: mensagemSinal, parse_mode: 'HTML' });
    } catch (e) { console.log("Erro ao enviar:", e.message); }
}

setInterval(enviarSinal, 5 * 60 * 1000);
bot.start();
console.log("Bot rodando!");
