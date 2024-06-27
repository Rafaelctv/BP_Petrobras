document.getElementById('finance-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Pegar valores do formulário
    // const totalAssets1 = parseFloat(document.getElementById('totalAssets1').value);
    // const totalAssets2 = parseFloat(document.getElementById('totalAssets2').value);
    // const totalLiabilities1 = parseFloat(document.getElementById('totalLiabilities1').value);
    // const totalLiabilities2 = parseFloat(document.getElementById('totalLiabilities2').value);
    // const netWorth1 = parseFloat(document.getElementById('netWorth1').value);
    // const netWorth2 = parseFloat(document.getElementById('netWorth2').value);
    // const revenue1 = parseFloat(document.getElementById('revenue1').value);
    // const revenue2 = parseFloat(document.getElementById('revenue2').value);
    // const expenses1 = parseFloat(document.getElementById('expenses1').value);
    // const expenses2 = parseFloat(document.getElementById('expenses2').value);
    // const netIncome1 = parseFloat(document.getElementById('netIncome1').value);
    // const netIncome2 = parseFloat(document.getElementById('netIncome2').value);

    // ativos circulantes
    const ativoTotal = parseFloat(document.getElementById('ativoTotal').value)
    const ativoTotal2 = parseFloat(document.getElementById('ativoTotal2').value)
    const caixa = parseFloat(document.getElementById('caixa').value)
    const caixa2 = parseFloat(document.getElementById('caixa2').value)
    const titulosEValoresAtiv = parseFloat(document.getElementById('titulosEValoresAtiv').value)
    const titulosEValoresAtiv2 = parseFloat(document.getElementById('titulosEValoresAtiv2').value)
    const ContasAReceAtiv = parseFloat(document.getElementById('ContasAReceAtiv').value)
    const ContasAReceAtiv2 = parseFloat(document.getElementById('ContasAReceAtiv2').value)
    const estoqueAtivo = parseFloat(document.getElementById('estoqueAtivo').value)
    const estoqueAtivo2 = parseFloat(document.getElementById('estoqueAtivo2').value)
    const impostosContriAtivo = parseFloat(document.getElementById('impostosContriAtivo').value)
    const impostosContriAtivo2 = parseFloat(document.getElementById('impostosContriAtivo2').value)
    const ativosParaVenda = parseFloat(document.getElementById('ativosParaVenda').value)
    const ativosParaVenda2 = parseFloat(document.getElementById('ativosParaVenda2').value)
    const ativosCirc = parseFloat(document.getElementById('ativosCirc').value)
    const ativosCirc2 = parseFloat(document.getElementById('ativosCirc2').value)
    // Ativos não circulantes
    const realizavelLP = parseFloat(document.getElementById('realizavelLP').value)
    const realizavelLP2 = parseFloat(document.getElementById('realizavelLP2').value)
    const contasARece = parseFloat(document.getElementById('contasARece').value)
    const contasARece2 = parseFloat(document.getElementById('contasARece2').value)
    const titulosEVal = parseFloat(document.getElementById('titulosEVal').value)
    const titulosEVal2 = parseFloat(document.getElementById('titulosEVal2').value)
    const depositosJudic = parseFloat(document.getElementById('depositosJudic').value)
    const depositosJudic2 = parseFloat(document.getElementById('depositosJudic2').value)
    const impostoRenda = parseFloat(document.getElementById('impostoRenda').value)
    const impostoRenda2 = parseFloat(document.getElementById('impostoRenda2').value)
    const impostosContri = parseFloat(document.getElementById('impostosContri').value)
    const impostosContri2 = parseFloat(document.getElementById('impostosContri2').value)
    const outrosAtivos = parseFloat(document.getElementById('outrosAtivos').value)
    const outrosAtivos2 = parseFloat(document.getElementById('outrosAtivos2').value)
    const investimenosLP = parseFloat(document.getElementById('investimenosLP').value)
    const investimenosLP2 = parseFloat(document.getElementById('investimenosLP2').value)
    const imobilizado = parseFloat(document.getElementById('imobilizado').value)
    const imobilizado2 = parseFloat(document.getElementById('imobilizado2').value)
    const intangivel = parseFloat(document.getElementById('intangivel').value)
    const intangivel2 = parseFloat(document.getElementById('intangivel2').value)

    // ----------------------------------------------------------------------------- //
    // Passivo circulante
    const passivoTotal = parseFloat(document.getElementById('passivoTotal').value)
    const passivoTotal2 = parseFloat(document.getElementById('passivoTotal2').value)
    const fornecedores = parseFloat(document.getElementById('fornecedores').value)
    const fornecedores2 = parseFloat(document.getElementById('fornecedores2').value)
    const financiamentos = parseFloat(document.getElementById('financiamentos').value)
    const financiamentos2 = parseFloat(document.getElementById('financiamentos2').value)
    const arrendamentos = parseFloat(document.getElementById('arrendamentos').value)
    const arrendamentos2 = parseFloat(document.getElementById('arrendamentos2').value)
    const impostosContriPassivo = parseFloat(document.getElementById('impostosContriPassivo').value)
    const impostosContriPassivo2 = parseFloat(document.getElementById('impostosContriPassivo2').value)
    const dividendosPropostos = parseFloat(document.getElementById('dividendosPropostos').value)
    const dividendosPropostos2 = parseFloat(document.getElementById('dividendosPropostos2').value)
    const provisaoDesmantelamento = parseFloat(document.getElementById('provisaoDesmantelamento').value)
    const provisaoDesmantelamento2 = parseFloat(document.getElementById('provisaoDesmantelamento2').value)
    const beneficiosEmpregados = parseFloat(document.getElementById('beneficiosEmpregados').value)
    const beneficiosEmpregados2 = parseFloat(document.getElementById('beneficiosEmpregados2').value)
    const passivosAssociados = parseFloat(document.getElementById('passivosAssociados').value)
    const passivosAssociados2 = parseFloat(document.getElementById('passivosAssociados2').value)
    const outrasContas = parseFloat(document.getElementById('outrasContas').value)
    const outrasContas2 = parseFloat(document.getElementById('outrasContas2').value)
    // Passivo não circulante
    const financiamentosLP = parseFloat(document.getElementById('financiamentosLP').value)
    const financiamentosLP2 = parseFloat(document.getElementById('financiamentosLP2').value)
    const arrendamentosLP = parseFloat(document.getElementById('arrendamentosLP').value)
    const arrendamentosLP2 = parseFloat(document.getElementById('arrendamentosLP2').value)
    const impostoRendaLP = parseFloat(document.getElementById('impostoRendaLP').value)
    const impostoRendaLP2 = parseFloat(document.getElementById('impostoRendaLP2').value)
    const impostoRendaLPdiferidos = parseFloat(document.getElementById('impostoRendaLPdiferidos').value)
    const impostoRendaLPdiferidos2 = parseFloat(document.getElementById('impostoRendaLPdiferidos2').value)
    const beneficiosEmpregadosLP = parseFloat(document.getElementById('beneficiosEmpregadosLP').value)
    const beneficiosEmpregadosLP2 = parseFloat(document.getElementById('beneficiosEmpregadosLP2').value)
    const provisaoProcessosJudiciais = parseFloat(document.getElementById('provisaoProcessosJudiciais').value)
    const provisaoProcessosJudiciais2 = parseFloat(document.getElementById('provisaoProcessosJudiciais2').value)
    const provisaoDesmantelamentoLP = parseFloat(document.getElementById('provisaoDesmantelamentoLP').value)
    const provisaoDesmantelamentoLP2 = parseFloat(document.getElementById('provisaoDesmantelamentoLP2').value)
    const outrasContasLP = parseFloat(document.getElementById('outrasContasLP').value)
    const outrasContasLP2 = parseFloat(document.getElementById('outrasContasLP2').value)
    // Patrimonio Líquido
    const patrimonioLiquido = parseFloat(document.getElementById('patrimonioLiquido').value)
    const patrimonioLiquido2 = parseFloat(document.getElementById('patrimonioLiquido2').value)
    const capitalSubscrito = parseFloat(document.getElementById('capitalSubscrito').value)
    const capitalSubscrito2 = parseFloat(document.getElementById('capitalSubscrito2').value)
    const reservaCapital = parseFloat(document.getElementById('reservaCapital').value)
    const reservaCapital2 = parseFloat(document.getElementById('reservaCapital2').value)
    const reservaLucros = parseFloat(document.getElementById('reservaLucros').value)
    const reservaLucros2 = parseFloat(document.getElementById('reservaLucros2').value)
    const resultadosAbrangentes = parseFloat(document.getElementById('resultadosAbrangentes').value)
    const resultadosAbrangentes2 = parseFloat(document.getElementById('resultadosAbrangentes2').value)
    const acionistasNaoControl = parseFloat(document.getElementById('acionistasNaoControl').value)
    const acionistasNaoControl2 = parseFloat(document.getElementById('acionistasNaoControl2').value)
    
    // Cálculos de análise vertical para o ano 1
    // const verticalLiabilities1 = (totalLiabilities1 / totalAssets1) * 100;
    // const verticalNetWorth1 = (netWorth1 / totalAssets1) * 100;
    // const verticalRevenue1 = (revenue1 / revenue1) * 100;
    // const verticalExpenses1 = (expenses1 / revenue1) * 100;
    // const verticalNetIncome1 = (netIncome1 / revenue1) * 100;

    // Cálculos de análise vertical para o ano 1
    
    // Cálculos de análise vertical para o ano 2
    

    // Cálculos de análise horizontal
    

    // Cálculos de análise horizontal
    // const variationAssets = ((totalAssets2 - totalAssets1) / totalAssets1) * 100;
    // const variationLiabilities = ((totalLiabilities2 - totalLiabilities1) / totalLiabilities1) * 100;
    // const variationNetWorth = ((netWorth2 - netWorth1) / netWorth1) * 100;
    // const variationRevenue = ((revenue2 - revenue1) / revenue1) * 100;
    // const variationExpenses = ((expenses2 - expenses1) / expenses1) * 100;
    // const variationNetIncome = ((netIncome2 - netIncome1) / netIncome1) * 100;

    // Cálculos de análise vertical para o ano 2
    // const verticalLiabilities2 = (totalLiabilities2 / totalAssets2) * 100;
    // const verticalNetWorth2 = (netWorth2 / totalAssets2) * 100;
    // const verticalRevenue2 = (revenue2 / revenue2) * 100;
    // const verticalExpenses2 = (expenses2 / revenue2) * 100;
    // const verticalNetIncome2 = (netIncome2 / revenue2) * 100;

    // Cálculos de índices financeiros
    // const liquidityIndex1 = totalAssets1 / totalLiabilities1;
    // const liquidityIndex2 = totalAssets2 / totalLiabilities2;
    // const indebtednessIndex1 = totalLiabilities1 / netWorth1;
    // const indebtednessIndex2 = totalLiabilities2 / netWorth2;
    // const profitMargin1 = netIncome1 / revenue1;
    // const profitMargin2 = netIncome2 / revenue2;

    // Exibir resultados
    // const results = `
    //     <h2>Resultados</h2>
    //     <h3>Análise Horizontal</h3>
    //     <p>Variação do Ativo Total: %</p>
    //     <p>Variação do Passivo Total: ${variationLiabilities.toFixed(2)}%</p>
    //     <p>Variação do Patrimônio Líquido: ${variationNetWorth.toFixed(2)}%</p>
    //     <p>Variação das Receitas: ${variationRevenue.toFixed(2)}%</p>
    //     <p>Variação das Despesas: ${variationExpenses.toFixed(2)}%</p>
    //     <p>Variação do Lucro Líquido: ${variationNetIncome.toFixed(2)}%</p>
    //     <h3>Análise Vertical Ano 1</h3>
    //     <p>Passivo Total: ${verticalLiabilities1.toFixed(2)}%</p>
    //     <p>Patrimônio Líquido: ${verticalNetWorth1.toFixed(2)}%</p>
    //     <p>Receitas: ${verticalRevenue1.toFixed(2)}%</p>
    //     <p>Despesas: ${verticalExpenses1.toFixed(2)}%</p>
    //     <p>Lucro Líquido: ${verticalNetIncome1.toFixed(2)}%</p>
    //     <h3>Análise Vertical Ano 2</h3>
    //     <p>Passivo Total: ${verticalLiabilities2.toFixed(2)}%</p>
    //     <p>Patrimônio Líquido: ${verticalNetWorth2.toFixed(2)}%</p>
    //     <p>Receitas: ${verticalRevenue2.toFixed(2)}%</p>
    //     <p>Despesas: ${verticalExpenses2.toFixed(2)}%</p>
    //     <p>Lucro Líquido: ${verticalNetIncome2.toFixed(2)}%</p>
    //     <h3>Índices Financeiros</h3>
    //     <p>Índice de Liquidez Ano 1: ${liquidityIndex1.toFixed(2)}</p>
    //     <p>Índice de Liquidez Ano 2: ${liquidityIndex2.toFixed(2)}</p>
    //     <p>Índice de Endividamento Ano 1: ${indebtednessIndex1.toFixed(2)}</p>
    //     <p>Índice de Endividamento Ano 2: ${indebtednessIndex2.toFixed(2)}</p>
    //     <p>Margem de Lucro Ano 1: ${profitMargin1.toFixed(2)}</p>
    //     <p>Margem de Lucro Ano 2: ${profitMargin2.toFixed(2)}</p>
    // `;

    document.getElementById('results').innerHTML = results;
});
