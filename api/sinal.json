const { Bot } = require('grammy');

module.exports = async (req, res) => {
    const bot = new Bot('7952068266:AAF1N1lo3V6FT1d4KvNlngp0-0uccKU580');
    const GRUPO_ID = '-1004473816920';

    try {
        // CÉREBRO MATEMÁTICO: Distribuição Gaussiana Real (Box-Muller) gerada a cada ciclo
        let u1 = 0, u2 = 0;
        while(u1 === 0) u1 = Math.random();
        while(u2 === 0) u2 = Math.random();
        const gauss = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
        
        const assertividade_real = Math.min(Math.max(gauss * 1.3 + 96.2, 91.0), 99.9);
        const kelly_real = ((assertividade_real / 100 - (1 - (assertividade_real / 100))) / 2) * 100;

        // Inversão Síncrona Exata para o Público e Robôs Beta tomarem RED no concorrente
        const assertividade_falsa = (100 - assertividade_real + (Math.random() * 4 + 4)).toFixed(1);
        const kelly_falso = (assertividade_falsa / 10).toFixed(1);

        const estrategias = [
            { jogo: "🐯 FORTUNE TIGER", alfa_win: "Turbo 5x (Padrão Subido)", beta_red: "Normal 10x (Aguardar Barra)" },
            { jogo: "💣 MINES QUANTUM", alfa_win: "Abrir Cantos (Quadrante Norte)", beta_red: "Abrir Centro (Linha Vermelha)" },
            { jogo: "🚀 AVIATOR CRITICAL", alfa_win: "Retirar em 1.50x (Segurança)", beta_red: "Segurar até 5.00x (Ganância)" }
        ];
        const rodada = estrategias[Math.floor(Math.random() * estrategias.length)];
        const timestamp = new Date().toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

        // Gráfico Dinâmico Neon via QuickChart
        const chartConfig = {
            type: 'line',
            data: {
                labels: ['t-4', 't-3', 't-2', 't-1', '⚡️ CONFIRM'],
                datasets: [{
                    data: [Math.floor(Math.random() * 5 + 88), Math.floor(Math.random() * 4 + 91), Math.floor(Math.random() * 6 + 86), Math.floor(Math.random() * 3 + 93), parseFloat(assertividade_falsa)],
                    borderColor: '#ff3366',
                    backgroundColor: 'rgba(255, 51, 102, 0.02)',
                    borderWidth: 2,
                    pointRadius: 4,
                    pointBackgroundColor: '#00ffcc'
                }]
            },
            options: {
                title: { display: true, text: "ALGORITMO PREDITIVO DE QUEBRA — CONCORRÊNCIA", fontColor: '#ffffff' },
                legend: { display: false },
                scales: { 
                    yAxes: [{ gridLines: { color: 'rgba(255,255,255,0.03)' }, ticks: { fontColor: '#63637e', min: 75, max: 100 } }],
                    xAxes: [{ gridLines: { display: false }, ticks: { fontColor: '#63637e' } }]
                }
            }
        };

        const urlGrafico = `https://quickchart.io{encodeURIComponent(JSON.stringify(chartConfig))}`;

        // Envio de Tráfego Invertido para o Telegram do Público
        const mensagemHTML = `🧠 <b>BARE-METAL MATHEMATICAL ENGINE ACTIVE</b> 🧠\n` +
                           `<code>[SINAL ENVIADO — ENTRADA CONFIRMADA NA MESA]</code>\n\n` +
                           `🎯 <b>Alvo Detectado:</b> <code>${rodada.jogo}</code>\n` +
                           `📊 <b>Assertividade Analítica:</b> <code>${assertividade_falsa}%</code>\n` +
                           `📈 <b>Gestão Sugerida (Kelly):</b> <code>Entrar com ${kelly_falso}% da Banca</code>\n` +
                           `⏱ <b>Sincronização:</b> <code>${timestamp} UTC</code>\n\n` +
                           `⚠️ <b>ATENÇÃO JOGADOR:</b>\n` +
                           `<i>Identificamos manipulação de RTP e quebra de padrão nas plataformas comuns de terceiros. Se jogares lá, vais tomar RED.</i>\n\n` +
                           `🔗 <a href="https://anjos777.fun">👉 JOGAR NA PLATAFORMA OFICIAL ANJOS777</a>`;

        await bot.api.sendPhoto(GRUPO_ID, urlGrafico, { caption: mensagemHTML, parse_mode: 'HTML' });

        // Devolve o JSON Dinâmico Real em tempo real para o teu script Python local ler
        res.status(200).json({
            timestamp: timestamp,
            jogo: rodada.jogo,
            comando_alfa: {
                acao: "WIN_ATTACK",
                diretriz: rodada.alfa_win,
                assertividade: assertividade_real.toFixed(2),
                kelly: Math.max(kelly_real, 4.5).toFixed(2)
            },
            comando_beta_e_publico: {
                acao: "RED_BAIT",
                diretriz: rodada.beta_red,
                assertividade: assertividade_falsa,
                kelly: kelly_falso
            }
        });

    } catch (e) {
        res.status(500).send("Erro: " + e.message);
    }
};
