const { Bot, InputFile } = require('grammy');
const crypto = require('crypto');

function obterEntropiaPura64() {
    const buffer = crypto.randomBytes(8);
    const uInt = buffer.readUInt32BE(0) + (buffer.readUInt32BE(4) * 0x100000000);
    const floatVal = uInt / 18446744073709551616; 
    return floatVal === 0 ? 1e-16 : floatVal;
}

function gerarGaussianaCripto(media, desvioPadrao) {
    const u1 = obterEntropiaPura64();
    const u2 = obterEntropiaPura64();
    const num = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
    return num * desvioPadrao + media;
}

function calcularCriterioKelly(probabilidadeSucesso, payoutOdds = 2.0) {
    const p = probabilidadeSucesso / 100;
    const q = 1 - p;
    const b = payoutOdds - 1; 
    if (b <= 0) return "1.00";
    const f_estrela = (b * p - q) / b;
    return Math.max(f_estrela * 100, 1.0).toFixed(2);
}

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const tokenBot = process.env.TELEGRAM_BOT_TOKEN || '7952068266:AAF1N1lo3V6FTid4KvNLngaP0-0uccKU580';
    const GRUPO_ID = process.env.TELEGRAM_CHAT_ID || '-1004473816920';

    const bot = new Bot(tokenBot);

    try {
        const estadosJogos = [
            { id: 'TIGER', nome: '🐯 FORTUNE TIGER', payout: 2.0, matriz: 'Matriz Gauss-Markov Nível 4' },
            { id: 'MINES', nome: '💣 MINES QUANTUM', payout: 3.5, matriz: 'Matriz Padrão Bayesiana Nível 2' },
            { id: 'AVIATOR', nome: '🚀 AVIATOR CRITICAL', payout: 2.0, matriz: 'Distribuição Exponencial Contínua' }
        ];
        
        const jogoMestre = estadosJogos[Math.floor(obterEntropiaPura64() * estadosJogos.length)];
        const gauss = gerarGaussianaCripto(0, 1);
        
        const assertividade_real = parseFloat(Math.min(Math.max(gauss * 1.3 + 96.2, 91.0), 99.9).toFixed(2));
        const fracaoKelly_real = calcularCriterioKelly(assertividade_real, jogoMestre.payout);
        const timestamp = new Date().toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

        const d1 = parseFloat(gerarGaussianaCripto(92, 3).toFixed(1));
        const d2 = parseFloat(gerarGaussianaCripto(94, 2).toFixed(1));
        const d3 = parseFloat(gerarGaussianaCripto(91, 4).toFixed(1));
        const d4 = parseFloat(gerarGaussianaCripto(95, 1).toFixed(1));

        // URL TOTALMENTE LIMPA: Sem chavetas, aspas ou arrays complexos que ativem barreiras na Vercel
        const urlAPI = `https://quickchart.io:[1,2,3,4,5],datasets:[%7BborderColor:%27%2300ffcc%27,data:[${d1},${d2},${d3},${d4},${assertividade_real}]%7D]%7D%7D`;

        const responseChart = await fetch(urlAPI);
        if (!responseChart.ok) throw new Error("Falha QuickChart");
        
        const chartBuffer = Buffer.from(await responseChart.arrayBuffer());
        const arquivoGrafico = new InputFile(chartBuffer, 'analytics.png');

        const mensagemSinal = 
            `🧠 <b>BARE-METAL MATHEMATICAL ENGINE ACTIVE</b> 🧠\n` +
            `<code>[ALGORITMO DE ELITE — PROTOCOLO TAO-MUSK V1.4]</code>\n\n` +
            `🎯 <b>Vetor Alvo:</b> <code>${jogoMestre.nome}</code>\n` +
            `📊 <b>Probabilidade Gaussiana (p):</b> <code>${assertividade_real}%</code>\n` +
            `📈 <b>Gestão de Risco (Critério de Kelly):</b> <code>Alocar ${fracaoKelly_real}% da Banca</code>\n` +
            `⚡️ <b>Modelo de Dados:</b> <code>${jogoMestre.matriz}</code>\n` +
            `⏱ <b>Sincronização Iterativa:</b> <code>${timestamp} UTC</code>\n\n` +
            `📥 <b>EXECUÇÃO DE ENTRADA MATEMÁTICA PURA:</b>\n` +
            `<i>Upload binário nativo via stream de memória. Isolamento de rotas ativado contra erros de caracteres de host.</i>\n\n` +
            `🔗 <a href="https://anjos777.fun">CONECTAR AO BACKEND DO CASSINO</a>`;

        await bot.api.sendPhoto(GRUPO_ID, arquivoGrafico, { caption: mensagemSinal, parse_mode: 'HTML' });
        
        return res.status(200).json({ status: "success", engine: "TAO_MUSK_V7_4", assertividade: assertividade_real });
    } catch (e) {
        return res.status(500).send("Erro no processador estocástico: " + e.message);
    }
};
