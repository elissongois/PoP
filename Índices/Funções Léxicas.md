# Índice de Funções

- [Índice de Funções](#índice-de-funções)
  - [02 - Carregamento do código fonte.pop](#02---carregamento-do-código-fontepop)
  - [03 - Validação do código fonte.pop](#03---validação-do-código-fontepop)
  - [10 - Rotinas pré e pós execução.pop](#10---rotinas-pré-e-pós-execuçãopop)
  - [16 - Etapa Final.pop](#16---etapa-finalpop)

## [02 - Carregamento do código fonte.pop](<..\Código-Fonte\02 - Carregamento do código fonte.pop> "02 - Carregamento do código fonte.pop")

```pop
[77]  Função para que se determine se um byte é um byte ignorável:
[78]    Se o byte for algum letra, diga sim.
[79]    Se o byte for algum dígito, diga sim.
[80]    Se o byte for o acento til, diga sim.
[81]    Se o byte for o sinal de arroba, diga sim.
[82]    Se o byte for o símbolo cardinal, diga sim.
[83]    Se o byte for o sinal de porcentagem, diga sim.
[84]    Se o byte for o & comercial, diga sim.
[85]    Se o byte for o underline, diga sim.
[86]    Se o byte for o apóstrofo, diga sim.
[87]    Se o byte for o hífen, diga sim.
[88]    Se o byte for o sinal de adição, diga sim.
[89]    Se o byte for o barra inclinada, diga sim.
[90]    Se o byte for o símbolo da Libra Esterlina, diga sim.
[91]    Diga não.

[172]  Função para que se determine se um percorredor está sobre múltiplas aspas duplas aninhadas:
[173]    Se o segmento final deste percorredor começa com """""", diga sim.
[174]    Diga não.

[344]  Função para que se determine se uma string deveria ser expandida usando uma segunda string (análise de termos compostos):
[345]    Se a string não for "partir", diga não.
[346]    Se a string não for "partindo", diga não.
[347]    \Se a string for alguma locução prepositiva, diga sim.
[348]    Se a segunda string não for "de", diga não.
[349]    Diga sim.

[351]  Função para que se determine se uma string está precisando ser decomposta:
[352]    Lance um percorredor sobre a string.
[353]    Se a string for algum operador de concatenação contraído usando o percorredor, diga sim.
[354]    Diga não.

[356]  Função para que se determine se uma string é algum operador de concatenação contraído usando um percorredor:
[357]    Se o segmento inicial deste percorredor de contrações for algum operador de concatenação,
[358]      Mova o percorredor (usando diretrizes de compilação).
[359]    \Se o segmento inicial deste percorredor de contrações for "seguida", mova o percorredor (usando diretrizes de compilação).
[360]    \Se o segmento inicial deste percorredor de contrações for "junto", mova o percorredor (usando diretrizes de compilação).
[361]   \ Se o segmento inicial deste percorredor de contrações for "acompanhado", mova o percorredor (usando diretrizes de compilação).
[362]    \Se o segmento inicial deste percorredor for uma variável, recue o percorredor.
[363]    Se o segmento inicial deste percorredor de contrações for alguma contração de preposição com artigo definido, diga sim.
[364]    Diga não.

[366]  Função para que se determine se uma string é algum operador de concatenação:
[367]    Se a string for "junto", diga sim. \ junto de ".., junto com o …
[368]    Se a string for "juntamente", diga sim. \ juntamente com o…
[369]    Se a string for "seguido", diga sim. \ seguido de "….
[370]    Se a string for "seguida", diga sim. \ seguido de "….
[371]    Se a string for "acompanhado", diga sim. \ acompanhado de "…
[372]    \Se a string for "em", diga sim.
[373]    \Se a string for "&", diga sim.
[374]    Diga não.

[376]  Função para que se determine se uma string é alguma contração de preposição com artigo definido:
[377]    Se a string for "do", diga sim.
[378]    Se a string for "da", diga sim.
[379]    Se a string for "dos", diga sim.
[380]    Se a string  for "das", diga sim. de Funções Léxicas
[381]    Diga não.
```

## [03 - Validação do código fonte.pop](<..\Código-Fonte\03 - Validação do código fonte.pop> "03 - Validação do código fonte.pop")

```pop
[155]  Função para que se determine se uma string é o início de algum tipo:
[156]    Se a string for algum artigo indefinido, diga sim.
[157]    Diga não.

[159]  Função para que se determine se uma string é algum artigo indefinido:
[160]    \PAL
[161]    Se a string for "um", diga sim.
[162]    Se a string for "uma", diga sim.
[163]    Se a string for "uns", diga sim.
[164]    Se a string for "umas", diga sim.
[165]    \Se a string for "outro", diga sim.
[166]    \Se a string for "outra", diga sim.
[167]    \Se a string for "algum", diga sim.
[168]    \Se a string for "alguma", diga sim.
[169]    \Se a string for "alguns", diga sim.
[170]    \Se a string for "algumas", diga sim.
[171]    Se a string for algum pronome demonstrativo abrangente, diga sim. \ para funcionamento dos possessivos - local correto
[172]    Diga não.

[174]  Função para que se determine se uma string é algum pronome demonstrativo abrangente:
[175]    Se a string for "esse", diga sim.
[176]    Se a string for "essa", diga sim.
[177]    Se a string for "aquele", diga sim.
[178]    Se a string for "aquela", diga sim.
[179]    Se a string for "esses", diga sim.
[180]    Se a string for "essas", diga sim.
[181]    Se a string for "aqueles", diga sim.
[182]    Se a string for "aquelas", diga sim.
[183]    Se a string for "certo", diga sim.
[184]    Se a string for "certa", diga sim.
[185]    Se a string for "certos", diga sim.
[186]    Se a string for "certas", diga sim.
[187]    Se a string for "determinado", diga sim.
[188]    Se a string for "determinada", diga sim.
[189]    Se a string for "determinados", diga sim.
[190]    Se a string for "determinadas", diga sim.
[191]    Diga não.

[263]  Função para que se determine se um percorredor está sobre algum indicador de início de variável:
[264]    \ compare com indicador de fim de variável
[265]    Se o segmento inicial deste percorredor for algum sinal de pontuação, diga não.
[266]    Se o segmento inicial deste percorredor for algum símbolo, diga não.
[267]    Se o segmento inicial deste percorredor for algum artigo, diga não.
[268]    Se o segmento inicial deste percorredor for alguma conjunção, diga sim.
[269]    Se o segmento inicial deste percorredor for algum possessivo inglês, diga não.
[270]    Se o segmento inicial deste percorredor for algum verbo, diga sim.
[271]    Se o segmento inicial deste percorredor for algum operador aritmético, diga sim.
[272]    Se o percorredor estiver sobre alguma preposição, diga sim.
[273]    Se o segmento inicial deste percorredor for algum qualificador, diga não.
[274]    Se o segmento inicial deste percorredor for algum valor literal, diga não.
[275]    Se o segmento inicial deste percorredor for uma palavra-chave de designação, diga sim.
[276]    Se o segmento inicial deste percorredor for "então", diga sim.
[277]    Se o segmento inicial deste percorredor for algum operador de atribuição composto, diga sim.
[278]    Se o segmento inicial deste percorredor estiver em branco, diga não.
[279]    Diga sim.

[281]  Função para que se determine se uma string é algum sinal de pontuação:
[282]    Se a quantidade de caracteres desta string não for 1, diga não.
[283]    Se o conteúdo deste caractere inicial desta string for algum sinal de pontuação, diga sim.
[284]    Diga não.

[286]  Função para que se determine se um byte é algum sinal de pontuação:
[287]    Se o byte for o ponto final, diga sim.
[288]    Se o byte for o vírgula, diga sim.
[289]    Se o byte for o ponto&vírgula, diga sim.
[290]    Se o byte for o sinal de dois pontos, diga sim.
[291]    Se o byte for o ponto de exclamação, diga sim.
[292]    Se o byte for o ponto de interrogação, diga sim.
[293]    Diga não.

[295]  Função para que se determine se uma string é algum símbolo:
[296]    Se a quantidade de caracteres desta string não for 1, diga não.
[297]    Se o conteúdo deste caractere inicial desta string for algum símbolo, diga sim.
[298]    Diga não.

[300]  Função para que se determine se um byte é algum símbolo:
[301]    \ esta rotina deveria estar na biblioteca padrão
[302]    Se o byte for o acento circunflexo, diga sim.
[303]    Se o byte for o barra vertical, diga sim.
[304]    Se o byte for o asterisco, diga sim.
[305]    Se o byte for o sinal de adição, diga sim.
[306]    Se o byte for o hífen, diga sim.
[307]    Se o byte for o barra inclinada, diga sim.
[308]    Se o byte for o símbolo menor do que, diga sim.
[309]    Se o byte for o símbolo maior do que, diga sim.
[310]    Se o byte for a chave esquerda, diga sim.
[311]    Se o byte for a chave direita, diga sim.
[312]    Se o byte for o sinal de igualdade, diga sim.
[313]    \ Codepage Extended ANSI - Windows-1252
[314]    Se o byte for 128, diga sim.
[315]    Se o byte for 130, diga sim.
[316]    Se o byte estiver entre 132 e 137, diga sim.
[317]    Se o byte for 139, diga sim.
[318]    Se o byte estiver entre 145 e 153, diga sim.
[319]    Se o byte for 155, diga sim.
[320]    Se o byte estiver entre 161 e 180, diga sim.
[321]    Se o byte estiver entre 183 e 191, diga sim.
[322]    Se o byte for 215, diga sim.
[323]    Se o byte for 247, diga sim.
[324]    Diga não.

[326]  Função para que se determine se uma string é algum artigo:
[327]    Se a string for algum artigo indefinido, diga sim.
[328]    Se a string for algum artigo definido, diga sim.
[329]    Diga não.

[331]  Função para que se determine se uma string é algum artigo definido:
[332]    Se a string for "o", diga sim.
[333]    Se a string for "a", diga sim.
[334]    Se a string for "os", diga sim.
[335]    Se a string for "as", diga sim.
[336]    Se a string for algum pronome demonstrativo adjacente, diga sim.
[337]    Diga não.

[339]  Função para que se determine se uma string é algum pronome demonstrativo adjacente:
[340]    Se a string for "este", diga sim.
[341]    Se a string for "esta", diga sim.
[342]    Se a string for "estes", diga sim.
[343]    Se a string for "estas", diga sim.
[344]    Diga não.

[346]  Função para que se determine se uma string é alguma conjunção:
[347]    \# verificar o uso dos termos: "ambos", "mas" e "nenhum"
[348]    Se a string for "e", diga sim.
[349]    Se a string for "ou", diga sim.
[350]    Se a string for "nem", diga sim.
[351]    \INGLÊS - REMOVER
[352]    Se a string for "neither", diga sim.
[353]    Se a string for "nor", diga sim.
[354]    Diga não.

[356]  Função para que se determine se uma string é algum possessivo inglês:
[357]    Se a string for "'s", diga sim.
[358]    Se a string for "'", diga sim.
[359]    Diga não.

[361]  Função para que se determine se uma string é algum verbo:
[362]    Se a string for "cabe", diga sim.
[363]    Se a string for "couber", diga sim.
[364]    Se a string for "começa", diga sim.
[365]    Se a string for "começar", diga sim.
[366]    Se a string for "conter", diga sim.
[367]    Se a string for "contiver", diga sim.
[368]    Se a string for "contém", diga sim.
[369]    Se a string for "deve", diga sim.
[370]    Se a string for "devem", diga sim.
[371]    Se a string for "deveria", diga sim.
[372]    Se a string for "deveriam", diga sim.
[373]    Se a string for "estamos", diga sim.
[374]    Se a string for "estar", diga sim.
[375]    Se a string for "estará", diga sim.
[376]    Se a string for "estarão", diga sim.
[377]    Se a string for "estava", diga sim.
[378]    Se a string for "estavam", diga sim.
[379]    Se a string for "estiver", diga sim.
[380]    Se a string for "estiverem", diga sim.
[381]    Se a string for "está", diga sim.
[382]    Se a string for "estão", diga sim.
[383]    Se a string for "excede", diga sim.
[384]    Se a string for "excedem", diga sim.
[385]    Se a string for "existe", diga sim.
[386]    Se a string for "existem", diga sim.
[387]    Se a string for "existir", diga sim.
[388]    Se a string for "finaliza", diga sim.
[389]    Se a string for "finalizar", diga sim.
[390]    Se a string for "é", diga sim.
[391]    Se a string for "foi", diga sim.
[392]    Se a string for "for", diga sim.
[393]    Se a string for "foram", diga sim.
[394]    Se a string for "forem", diga sim.
[395]    Se a string for "há", diga sim.
[396]    Se a string for "houver", diga sim.
[397]    Se a string for "inicia", diga sim.
[398]    Se a string for "iniciar", diga sim.
[399]    Se a string for "necessita", diga sim.
[400]    Se a string for "necessitar", diga sim.
[401]    Se a string for "parece", diga sim.
[402]    Se a string for "pode", diga sim.
[403]    Se a string for "podem", diga sim.
[404]    Se a string for "podemos", diga sim.
[405]    Se a string for "poderia", diga sim.
[406]    Se a string for "poderia", diga sim.
[407]    Se a string for "possuem", diga sim.
[408]    Se a string for "possui", diga sim.
[409]    Se a string for "possuir", diga sim.
[410]    Se a string for "puder", diga sim.
[411]    Se a string for "puderem", diga sim.
[412]    Se a string for "requer", diga sim.
[413]    \Se a string for "seja", diga sim.
[414]    Se a string for "ser", diga sim.
[415]    Se a string for "será", diga sim.
[416]    Se a string for "serão", diga sim.
[417]    Se a string for "supera", diga sim.
[418]    Se a string for "superam", diga sim.
[419]    Se a string for "superar", diga sim.
[420]    Se a string for "são", diga sim.
[421]    Se a string for "tem", diga sim.
[422]    Se a string for "ter", diga sim.
[423]    Se a string for "termina", diga sim.
[424]    Se a string for "terminar", diga sim.
[425]    Se a string for "tiver", diga sim.
[426]    Se a string for "têm", diga sim.
[427]    Diga não.

[429]  Função para que se determine se uma string é algum operador aritmético:
[430]    Se a string for "mais", diga sim.
[431]    Se a string for "menos", diga sim.
[432]    Se a string for "vezes", diga sim.
[433]    Se a string for "multiplicado", diga sim.
[434]    Se a string for "dividido", diga sim.
[435]    \Se a string for "depois", diga sim.
[436]    Se a string for "seguido", diga sim.
[437]    Se a string for "juntamente", diga sim.
[438]    Se a string for "junto", diga sim.
[439]    Se a string for "acompanhado", diga sim.
[440]    Diga não.

[442]  Função para que se determine se um percorredor está sobre alguma preposição:
[443]    Atribua o segmento inicial deste percorredor para um subtexto.
[444]    Se o percorredor estiver sobre alguma preposição conectiva, diga sim. \ "a" no sentido de "para"
[445]    Se o subtexto for "parde", diga sim. \ contração de para + de, usada internamente
[446]    Se o subtexto for "partir", diga sim.
[447]    Se o subtexto for "partindo", diga sim.
[448]    Se o subtexto for "abaixo", diga sim.
[449]    \Se o subtexto for "baixo", diga sim.
[450]    Se o subtexto for "acima", diga sim.
[451]    \Se o subtexto for "cima", diga sim.
[452]    Se o subtexto for "ante", diga sim.
[453]    Se o subtexto for "perante", diga sim.
[454]    Se o subtexto for "antes", diga sim.
[455]    Se o subtexto for "debaixo", diga sim.
[456]    Se o subtexto for "sob", diga sim.
[457]    Se o subtexto for "acerca", diga sim.
[458]    Se o subtexto for "cerca", diga sim.
[459]    Se o subtexto for "cuja", diga sim.
[460]    Se o subtexto for "cujo", diga sim.
[461]    Se o subtexto for "cujas", diga sim.
[462]    Se o subtexto for "cujos", diga sim.
[463]    Se o subtexto for "próximo", diga sim.
[464]    Se o subtexto for "perto", diga sim.
[465]    Se o subtexto for "com", diga sim.
[466]    \Se o subtexto for "contendo", diga sim.
[467]    Se o subtexto for "tal", diga sim.
[468]    Se o subtexto for "como", diga sim.
[469]    Se o subtexto for "contra", diga sim.
[470]    Se o subtexto for "dada", diga sim.
[471]    Se o subtexto for "dado", diga sim.
[472]    Se o subtexto for "dando", diga sim.
[473]    Se o subtexto for "gerando", diga sim.
[474]    Se o subtexto for "resultando", diga sim.
[475]    Se o subtexto for "retornando", diga sim.
[476]    Se o subtexto for "desde", diga sim.
[477]    Se o subtexto for "depois", diga sim.
[478]    Se o subtexto for "após", diga sim.
[479]    Se o subtexto for "durante", diga sim.
[480]    Se o subtexto for "em", diga sim.
[481]    Se o subtexto for "entre", diga sim.
[482]    Se o subtexto for "dentre", diga sim.
[483]    Se o subtexto for "até", diga sim.
[484]    \Se o subtexto for "que", diga sim.
[485]    \Se o subtexto for "esquerda", diga sim.
[486]    Se o subtexto for "mediante", diga sim.
[487]    Se o subtexto for "para", diga sim.
[488]    Se o subtexto for "via", diga sim.
[489]    Se o subtexto for "segundo", diga sim.
[490]    Se o subtexto for "acordo", diga sim.
[491]    Se o subtexto for "sem", diga sim.
[492]    Se o subtexto for "então", diga sim.
[493]    Se o subtexto for "sobre", diga sim.
[494]    Se o subtexto for "usando", diga sim.
[495]    Se o subtexto for "versus", diga sim.
[496]    Se o subtexto for "enquanto", diga sim.
[497]    Se o subtexto for "aproximadamente", diga sim.
[498]    Se o subtexto for "através", diga sim.
[499]    Se o subtexto for "algum", diga sim.
[500]    Se o subtexto for "sob", diga sim.
[501]    Se o subtexto for "debaixo", diga sim.
[502]    Se o subtexto for "entre", diga sim.
[503]    \Se o subtexto for "baixo", diga sim. -> erro
[504]    Se o subtexto for "por", diga sim.
[505]    Se o subtexto for "usando", diga sim.
[506]    Se o subtexto for "referente", diga sim.
[507]    Se o subtexto for "pertencente", diga sim.
[508]    Se o subtexto for "pertinente", diga sim.
[509]    Se o subtexto for "relativo", diga sim.
[510]    Se o subtexto for "relativa", diga sim.
[511]    Se o subtexto for "concernente", diga sim.
[512]    Se o subtexto for "atinente", diga sim.
[513]    Se o subtexto for "pertinente", diga sim.
[514]    Se o subtexto for "retornando", diga sim.
[515]    Se o subtexto for "começando", diga sim.
[516]    Se o subtexto for "começando", diga sim.
[517]    Se o subtexto for "iniciando", diga sim.
[518]    Se o subtexto for "usando", diga sim.
[519]    Se o subtexto for "via", diga sim.
[520]    Se o subtexto for "com", diga sim.
[521]    Se o subtexto for "aproada", diga sim.
[522]    Se o subtexto for "aproado", diga sim.
[523]    Se o subtexto for "aproando", diga sim.
[524]    Se o subtexto for "orientada", diga sim.
[525]    Se o subtexto for "orientado", diga sim.
[526]    Se o subtexto for "orientando", diga sim.
[527]    Se o subtexto for "orientando-se", diga sim.
[528]    Se o subtexto for "voltada", diga sim.
[529]    Se o subtexto for "voltado", diga sim.
[530]    Se o subtexto for "virada", diga sim.
[531]    Se o subtexto for "virado", diga sim.
[532]    Se o subtexto for "virando", diga sim.
[533]    Se o subtexto for "virando-se", diga sim.
[534]    Se o subtexto for "tão", diga sim.
[535]    Se o subtexto for "tanto", diga sim.
[536]    Se o subtexto for "quanto", diga sim.
[537]    Se o subtexto for "quão", diga sim.
[538]    Se o subtexto for "qual", diga sim.
[539]    Se o subtexto for "after", diga sim.
[540]    Se o subtexto for "regressivamente", diga sim.
[541]    Se o subtexto for "dentro de", diga sim.
[542]    Se o subtexto for "dentro", diga sim.
[543]    Se o subtexto for "parecida", diga sim.
[544]    Se o subtexto for "parecido", diga sim.
[545]    Se o subtexto for "semelhante", diga sim.
[546]    Se o subtexto for "similar", diga sim.
[547]    Se o subtexto for "em comprimento", diga sim.
[548]    Se o subtexto for "d'", diga sim.
[549]    Se o subtexto for "d'", diga sim.
[550]    Se o subtexto for "só", diga sim.
[551]    Se o subtexto for "somente", diga sim.
[552]    Se o subtexto for "unicamente", diga sim.
[553]    Se o subtexto for "exclusivamente", diga sim.
[554]    Se o subtexto for "apenas", diga sim.
[555]    Se o subtexto for "fora", diga sim.
[556]    Se o subtexto for "menores", diga sim.
[557]    Se o subtexto for "alta", diga sim.
[558]    Se o subtexto for "alto", diga sim.
[559]    Se o subtexto for "comprido", diga sim.
[560]    Se o subtexto for "comprida", diga sim.
[561]    Se o subtexto for "largo", diga sim.
[562]    Se o subtexto for "larga", diga sim.
[563]    Diga não.

[565]  Função para que se determine se uma string é algum qualificador:
[566]    Se a string estiver em branco, diga não.
[567]    Se o conteúdo deste caractere inicial desta string for o parênteses esquerdo, diga sim.
[568]    Diga não.

[570]  Função para que se determine se uma string é algum valor literal:
[571]    Se a string for algum ponteiro literal, diga sim.
[572]    Se a string for algum valor numérico literal, diga sim.
[573]    Se a string for algum string literal, diga sim.
[574]    \Se a string for algum sinalizador literal, diga sim. ***
[575]    Se a string for algum valor hexadecimal literal, diga sim.
[576]    Diga não.

[578]  Função para que se determine se uma string é algum ponteiro literal:
[579]    Se a string for "nulo", diga sim.
[580]    Se a string for "nula", diga sim.
[581]    Se a string for "nulos", diga sim.
[582]    Se a string for "nulas", diga sim.
[583]    Se a string for "inexistente", diga sim.
[584]    Se a string for "inexistentes", diga sim.
[585]    Se a string for "zerado", diga sim.
[586]    \CAL
[587]    Se a string for "nil", diga sim.
[588]    Diga não.

[590]  Função para que se determine se uma string é algum valor numérico literal:
[591]    Se a string estiver em branco, diga não.
[592]    Se o conteúdo deste caractere inicial desta string não for algum indicador numérico, diga não.
[593]    Se a string for algum número inteiro, diga sim.
[594]    Se a string for alguma fração literal, diga sim.
[595]    Se a string for algum numeral misto literal, diga sim.
[596]    Diga não.

[598]  Função para que se determine se uma string é alguma string literal;
[599]  Função para que se determine se uma string é algum string literal:
[600]    Se a string estiver em branco, diga não.
[601]    Se o conteúdo deste caractere inicial desta string for as aspas duplas, diga sim.
[602]    Diga não.

[604]  Função para que se determine se uma string é algum valor hexadecimal literal:
[605]    Se a string estiver em branco, diga não.
[606]    Se o conteúdo deste caractere inicial desta string for o cifrão, diga sim.
[607]    Diga não.

[609]  Função para que se determine se uma string é uma palavra-chave de designação:
[610]    Se a string for "chamado", diga sim.
[611]    Se a string for "chamados", diga sim.
[612]    Se a string for "chamada", diga sim.
[613]    Se a string for "chamadas", diga sim.
[614]    Se a string for "denominado", diga sim.
[615]    Se a string for "denominados", diga sim.
[616]    Se a string for "denominada", diga sim.
[617]    Se a string for "denominadas", diga sim.
[618]    Diga não.

[620]  Função para que se determine se uma string é algum operador de atribuição composto:
[621]    Se a string for "igual", diga sim.
[622]    Diga não.

[630]  Função para que se determine se um percorredor está sobre algum indicador de fim de variável:
[631]    \ compare com indicador de início de variável
[632]    Se o segmento inicial deste percorredor for algum sinal de pontuação, diga sim.
[633]    Se o segmento inicial deste percorredor for algum símbolo, diga sim.
[634]    Se o segmento inicial deste percorredor for algum artigo, diga sim.
[635]    Se o segmento inicial deste percorredor for alguma conjunção, diga sim.
[636]    Se o segmento inicial deste percorredor for algum possessivo inglês, diga sim.
[637]    Se o percorredor estiver sobre algum possessivo reverso, diga sim. \
[638]    Se o segmento inicial deste percorredor for algum verbo, diga sim.
[639]    Se o segmento inicial deste percorredor for algum operador aritmético, diga sim.
[640]    Se o percorredor estiver sobre alguma preposição, diga sim.
[641]    Se o segmento inicial deste percorredor for algum qualificador, diga sim.
[642]    Se o segmento inicial deste percorredor for algum valor literal, diga sim.
[643]    Se o segmento inicial deste percorredor for uma palavra-chave de designação, diga sim.
[644]    Se o segmento inicial deste percorredor for "então", diga sim.
[645]    Se o segmento inicial deste percorredor for algum operador de atribuição composto, diga sim.
[646]    Se o segmento inicial deste percorredor estiver em branco, diga sim.
[647]    Se o segmento inicial deste percorredor for algum advérbio de negação, diga sim.
[648]    Diga não.

[650]  Função para que se determine se um percorredor está sobre algum possessivo reverso:
[651]    Preserve o percorredor.
[652]    Se o segmento inicial deste percorredor não for "de", diga não.
[653]    Mova o percorredor (usando diretrizes de compilação).
[654]    Se o segmento inicial deste percorredor for algum pronome demonstrativo, diga sim.
[655]    Diga não.

[657]  Função para que se determine se uma string é algum advérbio de negação:
[658]    Se a string for "não", diga sim.
[659]    Diga não.

[1133]  Função para que se determine se uma string é algum operador de atribuição de estruturas compostas:
[1134]    Se a string for "tem", diga sim.
[1135]    Se a string for "têm", diga sim.
[1136]    Se a string for "contém", diga sim.
[1137]    Se a string for "contêm", diga sim.
[1138]    \Se a string for "possui", diga sim.
[1139]    Diga não.

[1250]  Função para que se determine se uma string é uma palavra-chave de referenciamento:
[1251]    Se a string for "(referência)", diga sim.
[1252]    Diga não.

[1254]  Rotina para que se examine um campo usando um percorredor (cláusula de referência):
[1255]    Se existir algum problema de compilação, retorne.
[1256]    Mova o percorredor (usando diretrizes de compilação).
[1257]    Ative o sinalizador de referência deste campo.

[1259]  Função para que se determine se uma string é alguma pausa:
[1260]    Se a string for "e", diga sim.
[1261]    Se a string for "ou", diga sim.
[1262]    \default
[1263]    Se a string for ",", diga sim.
[1264]    Se a string for ";", diga sim.
[1265]    Diga não.

[1295]  Função para que se determine se uma string é algum operador de atribuição simples:
[1296]    Se a string for "é", diga sim.
[1297]    Se a string for "está", diga sim.
[1298]    Se a string for "são", diga sim.
[1299]    Se a string for "estão", diga sim.
[1300]    Se a string for "estamos", diga sim.
[1301]    Se a string for "for", diga sim.
[1302]    Se a string for "forem", diga sim.
[1303]    Se a string for "estiverem", diga sim.
[1304]    Se a string for "estarem", diga sim.
[1305]    Se a string for "possui", diga sim.
[1306]    \Se a string for "tem", diga sim. \records
[1307]    Diga não.

[1350]  Função para que se determine se uma string é alguma palavra-chave de complementação:
[1351]    Se a string for "com", diga sim.
[1352]    Se a string for "contendo", diga sim.
[1353]    Diga não.

[1363]  Função para que se determine se uma string é o início de alguma variável global:
[1364]    Se a string for algum artigo definido, diga sim.
[1365]    Diga não.

[1454]  Função para que se determine se uma string é o início de algum dado complementar:
[1455]    \PAL
[1456]    Se a string for "com", diga sim.
[1457]    Se a string for "contendo", diga sim.
[1458]    Diga não.

[1492]  Função para que se determine se uma string é algum termo de equivalência: \ igual a
[1493]    Se a string for "a", diga sim.
[1494]    Se a string for "para", diga sim.
[1495]    \Se a string for "que", diga sim.
[1496]    Diga não.

[1509]  Função para que se determine se uma string é o início de alguma rotina:
[1510]    Se a string for "Para", diga sim.
[1511]    Se a string for "Procedimento", diga sim.
[1512]    Se a string for "Rotina", diga sim.
[1513]    Se a string for "Função", diga sim.
[1514]    \ Se a string for "Passos", diga sim.
[1515]    \ Se a string for "Etapas", diga sim.
[1516]    \ Se a string for "Instruções", diga sim.
[1517]    \ Se a string for "Diretrizes", diga sim.
[1518]    \ Se a string for "Método", diga sim.
[1519]    \ Se a string for "Roteiro", diga sim.
[1520]    \ Se a string for "Descrição", diga sim.
[1521]    \ Se a string for "Processo", diga sim.
[1522]    \ Se a string for "Ações", diga sim.
[1523]    \ Se a string for "Caminho", diga sim.
[1524]    \ Se a string for "Guia", diga sim.

[1568]  Função para que se determine se uma string é açúcar sintático:
[1569]    \PAL
[1570]    \Se a string for "Passos", diga sim.
[1571]    \Se a string for "Etapas", diga sim.
[1572]    Se a string for "Procedimento", diga sim.
[1573]    Se a string for "Rotina", diga sim.
[1574]    Se a string for "Função", diga sim.
[1575]    Diga não.

[1624]  Função para que se determine se uma string é o enunciado de alguma rotina ou variável:
[1625]    Se a string for açúcar sintático, diga sim.
[1626]    Se a string for algum artigo indefinido, diga sim.
[1627]    Se a string for algum artigo definido, diga sim.
[1628]    Diga não.

[05 - Identificação de variáveis globais.pop](<..\Código-Fonte\05 - Identificação de variáveis globais.pop> "05 - Identificação de variáveis # globais.pop")
[140]  Função para que se determine se um percorredor está acompanhado por alguma unidade de medida:
[141]    Preserve o percorredor.
[142]    Mova o percorredor (usando diretrizes de compilação).
[143]    Se o percorredor não estiver sobre algum indicador de início de variável, diga não.
[144]    Examine um nome usando o percorredor.
[145]    Encontre um tipo usando o nome e o catálogo de tipos.
[146]    Se o tipo for inexistente, diga não.
[147]    \Se o nome for "vezes", diga talvez.
[148]    Se o nome não for algum operador de multiplicação, diga sim. \ para lidar com o vezes
[149]    Se o segmento inicial deste percorredor for o início de alguma expressão matemática, diga não.
[150]    Diga sim.

[152]  Função para que se determine se uma string é algum operador de multiplicação:
[153]    Se a string for "vezes", diga sim.
[154]    Se a string for "multiplicado", diga sim.
[155]    Diga não.

[157]  Função para que se determine se uma string é o início de alguma expressão matemática:
[158]    Se a string for algum sinal aritmético, diga sim.
[159]    Se a string for algum artigo indefinido, diga sim.
[160]    Se a string for algum artigo definido, diga sim.
[161]    Se a string for algum valor literal, diga sim.
[162]    Diga não.

[06 - Compilação dos cabeçalhos de rotina.pop](<..\Código-Fonte\06 - Compilação dos cabeçalhos de rotina.pop> "06 - Compilação dos cabeçalhos de # rotina.pop")
[38]  Função para que se determine se uma string é algum comando de deliberação:
[39]    \Se a string for "decida", diga sim.
[40]    Se a string for "determine", diga sim.
[41]    \Se a string for "esclareça", diga sim.
[42]    Diga não.

[67]  Função para que se determine se uma string é algum comando condicional:
[68]    Se a string for "se", diga sim.
[69]    Se a string for "quando", diga sim.
[70]    Diga não.

[238]  Função para que se determine se um percorredor está sobre algum artigo indefinido:
[239]    Se o percorredor estiver sobre alguma preposição conectiva, diga não.
[240]    Se o segmento inicial deste percorredor não for algum artigo indefinido, diga não.
[241]    Diga sim.

[243]  Função para que se determine se um percorredor está sobre alguma preposição conectiva:
[244]    Se o segmento inicial deste percorredor não for alguma preposição especial, diga não.
[245]    Preserve o percorredor.
[246]    Mova o percorredor (usando diretrizes de compilação).
[247]    Se o segmento inicial deste percorredor for algum artigo, diga sim.
[248]    Se o segmento inicial deste percorredor for algum número literal, diga sim.
[249]    Diga não.

[251]  Função para que se determine se uma string é alguma preposição especial:
[252]    Se a string for "a", diga sim.
[253]    Se a string for "de", diga sim.
[254]    Diga não.

[256]  Função para que se determine se uma string é algum número literal:
[257]    Se a string for algum valor numérico literal, diga sim.
[258]    Se a string for algum ponteiro literal, diga sim.
[259]    Se a string for algum valor hexadecimal literal, diga sim.
[260]    Diga não.

[393]  Função para que se determine se um percorredor é o início de alguma função possessiva reversa:
[394]    Se o sinalizador de erros deste compilador estiver ativo, diga não.
[395]    Se o segmento inicial deste percorredor não for algum comando de atribuição, diga não.
[396]    Preserve o percorredor.
[397]    Mova o percorredor (usando diretrizes de compilação).
[398]    Se o segmento inicial deste percorredor não for algum artigo definido, diga não.
[399]    Mova o percorredor (usando diretrizes de compilação).
[400]    Examine um nome usando o percorredor.
[401]    Se o percorredor não estiver sobre algum possessivo reverso, diga não.
[402]    Diga sim.

[404]  Função para que se determine se uma string é algum comando de atribuição:
[405]    \"Rotina para que se acrescente uma string para uma segunda string usando uma terceira string (para expandir contrações)"
[406]    Se a string for "atribua", diga sim.
[407]    Diga não.

[456]  Função para que se determine se uma string é alguma preposição de atribuição:
[457]    Se a string for "em", diga sim.
[458]    Se a string for "para", diga sim.
[459]    Diga não.

[461]  Função para que se determine se um percorredor é o início de alguma função:
[462]    Se existir algum problema de compilação, diga não.
[463]    \Se o segmento inicial deste percorredor não for algum comando de atribuição, diga não.
[464]    Se o segmento inicial deste percorredor não for "atribua", diga não.
[465]    Preserve o percorredor.
[466]    Mova o percorredor (usando diretrizes de compilação).
[467]    Se o segmento inicial deste percorredor não for algum artigo, diga não.
[468]    Mova o percorredor (usando diretrizes de compilação).
[469]    Examine um nome usando o percorredor.
[470]    Se o segmento inicial deste percorredor for algum possessivo inglês, diga sim.
[4 71]    Diga não. de Funções Léxicas

```

## [10 - Rotinas pré e pós execução.pop](<..\Código-Fonte\10 - Rotinas pré e pós execução.pop> "10 - Rotinas pré e pós execução.pop")

```pop
[565]  Função para que se determine se uma string é o início de alguma variável:
[566]    Se a string for algum artigo definido, diga sim.
[567]    \Se a string for "do", diga sim. \ para reverse-possessives
[568]    \Se a string for "cada", diga sim.
[569]    Diga não.

[597]  Função para que se determine se uma string é o início de alguma variável local:
[598]    Se a string for algum artigo indefinido, diga sim.
[599]    Diga não.
[600]  

[929]  Função para que se determine se um percorredor está sobre alguma conjunção modificadora:
[930]    \ adicionado para as rotinas de frágico de tartatuga ***
[931]    Preserve o percorredor.
[932]    Se o segmento inicial deste percorredor for "like", diga sim.
[933]    \Se o segmento inicial deste percorredor for "tal qual", diga sim.
[934]    Se o segmento inicial deste percorredor não for "as", diga não.
[935]    Mova o percorredor (usando diretrizes de compilação).
[936]    Se o segmento inicial deste percorredor for algum artigo indefinido, diga não.
[937]    Diga sim.

[1025]  Função para que se determine se uma string é algum operador de divisão:
[1026]    Se a string for "dividido", diga sim.
[1027]    Diga não.

[1068]  Função para que se determine se uma string é algum objeto indireto:
[1069]    Se a string for "via", diga sim.
[1070]    Se a string for "por", diga sim. \ TODO: Testar a compatibilidade
[1071]    Diga não.

[1073]  Função para que se determine se uma string é algum operador de subtração:
[1074]    Se a string for "menos", diga sim.
[1075]    Diga não.

[1111]  Função para que se determine se uma string é algum operador de adição:
[1112]    Se a string for "mais", diga sim.
[1113]    Diga não.

[1192]  Função para que se determine se uma string é alguma palavra de concatenação:
[1193]    Se a string for "com", diga sim.
[1194]    Se a string for "de", diga sim.
[1195]    Se a string for "a", diga sim. \ junto à
[1196]    Se a string for "seguida", diga sim.
[1197]    Diga não.

[1431]  Função para que se determine se uma string é algum comando de retorno de rotina:
[1432]    Se a string for "Retorne", diga sim.
[1433]    Diga não.

[1443]  Função para que se determine se uma string é algum comando de repetição:
[1444]    \Se a string for "recomece", diga sim.
[1445]    \Se a string for "repita", diga sim.
[1446]    Se a string for "reitere", diga sim.
[1447]    \Se a string for "reinicie", diga sim.
[1448]    Diga não.

[1454]  Função para que se determine se uma string é algum comando de interrupção de repetições:
[1455]    Se a string for "pare", diga sim.
[1456]    Diga não.

[1462]  Função para que se determine se uma string é algum comando de confirmação ou negação:
[1463]    Se a string for "diga", diga sim.
[1464]    \Se a string for "responda", diga sim.
[1465]    Diga não.

[1524]  Função para que se determine se uma string é algum comando de deliberação literal:
[1525]    Se a string for "sim", diga sim.
[1526]    \Se a string for "positivo", diga sim.
[1527]    \Se a string for "positivamente", diga sim.
[1528]    \Se a string for "afirmativamente", diga sim.
[1529]    Se a string for "não", diga sim.
[1530]    \Se a string for "negativo", diga sim.
[1531]    \Se a string for "negativamente", diga sim.
[1532]    \Se a string for "no", diga sim.
[1533]    Diga não.

[1535]  Função para que se determine se uma string é algum decisor literal afirmativo:
[1536]    Se a string for "sim", diga sim.
[1537]    \Se a string for "positivo", diga sim.
[1538]    \Se a string for "positivamente", diga sim.
[1539]    \Se a string for "afirmativamente", diga sim.
[1540]    Diga não.

[1580]  Função para que se determine se um tipo é valor empilhável:
[1581]    Se o tipo for inexistente, diga não.
[1582]    Se a quantidade de caracteres deste tipo for 4, diga sim.
[1583]    Se a quantidade de caracteres deste tipo for 2, diga sim.
[1584]    Se a quantidade de caracteres deste tipo for 1, diga sim.
[1585]    Diga não.

[1587]  Função para que se determine se uma string é alguma chamada de biblioteca externa:
[1588]    \Se a string for "chame", diga sim.
[1589]    Se a string for "invoque", diga sim.
[1590]    \Se a string for "acione", diga sim.
[1591]    Se a string for "processe", diga sim.
[1592]    \Se a string for "informe", diga sim.
[1593]    \ no caso de comandos como "repasse os parâmetros x e y e z para a função "FunctionName" da biblioteca "MyLibrary.dll"
[1594]    Diga não.

[1698]  Função para que se determine se uma string é algum operador de continuidade:
[1699]    Se a string for "e", diga sim.
[1700]    Diga não.

[1702]  Função para que se determine se uma string é alguma palavra-chave de devolução:
[1703]    Se a string for "retornando", diga sim.
[1704]    Se a string for "recebendo", diga sim.
[1705]    Se a string for "obtendo", diga sim.
[1706]    Diga não.

[1759]  Função para que se determine se uma string é algum point:
[1760]    Se a string for "aponte", diga sim.
[1761]    Se a string for "direcione", diga sim.
[1762]    Se a string for "redirecione", diga sim.
[1763]    Diga não.

[1910]  Função para que se determine se uma string é algum comando de proteção:
[1911]    Se a string for "isole", diga sim.
[1912]    Se a string for "conserve", diga sim.
[1913]    Se a string for "preserve", diga sim.
[1914]    \Se a string for "derive", diga sim.
[1915]    Diga não.

[1949]  Função para que se determine se uma string é algum comando de percorrimento:
[1950]    \Se a string for "percorra", diga sim.
[1951]    \Se a string for "comece", diga sim.
[1952]    Se a string for "itere", diga sim.
[1953]    Diga não.

[1955]  Função para que se determine se uma string é uma palavra-chave de reutilização de rotina:
[1956]    \ Funcionalidade obsoleta desde a implantação da sobrecarga de cabeçalhos de rotina
[1957]    Se a string for "empregue", diga sim.
[1958]    Diga não.

[1960]  Função para que se determine se uma string é o início de alguma declaração:
[1961]    Se a string for o enunciado de alguma rotina ou variável, diga não.
[1962]    Se a string for algum valor literal, diga não.
[1963]    Se a string for algum sinal de pontuação, diga não.
[1964]    Se a string  estiver em branco, diga não. de Funções Léxicas
[1965]    Diga sim.
```

## [16 - Etapa Final.pop](<..\Código-Fonte\16 - Etapa Final.pop> "16 - Etapa Final.pop")

```pop
[440]  Função para que se determine se uma string é algum decisor literal negativo:
[441]    Se a string for "não", diga sim.
[442]    Se a string for "negativo", diga sim.
[443]    Se a string for "negativamente", diga sim.
[444]    Diga não.

[446]  Função para que se determine se uma string é algum número ordinal:
[447]    Se a string estiver em branco, diga não.
[448]    Se o conteúdo deste caractere final desta string for o indicador ordinal masculino, diga sim.
[449]    Se o conteúdo deste caractere final desta string for o indicador ordinal feminino, diga sim.
[450]    Diga não.

[452]  Função para que se determine se uma string é algum pronome demonstrativo:
[453]    Se a string for algum pronome demonstrativo adjacente, diga sim.
[454]    Se a string for algum pronome demonstrativo abrangente, diga sim.
[455]    Diga não.

[457]  Função para que se determine se uma string é alguma preposição:
[458]    Se a string for "partir", diga sim.
[459]    Se a string for "partindo", diga sim.
[460]    Se a string for "aproximadamente", diga sim.
[461]    Se a string for "através", diga sim.
[462]    Se a string for "after", diga sim.
[463]    \Se a string for "all", diga sim.
[464]    Se a string for "alone", diga sim.
[465]    Se a string for "algum", diga sim.
[466]    \Se a string for "as", diga sim.
[467]    Se a string for "sob", diga sim.
[468]    Se a string for "backward", diga sim.
[469]    Se a string for "regressivamente", diga sim.
[470]    Se a string for "backwards", diga sim.
[471]    Se a string for "entre", diga sim.
[472]    Se a string for "aproada", diga sim.
[473]    Se a string for "aproado", diga sim.
[474]    Se a string for "aproando", diga sim.
[475]    Se a string for "orientada", diga sim.
[476]    Se a string for "orientado", diga sim.
[477]    Se a string for "orientando", diga sim.
[478]    Se a string for "orientando-se", diga sim.
[479]    Se a string for "virada", diga sim.
[480]    Se a string for "virado", diga sim.
[481]    Se a string for "virando", diga sim.
[482]    Se a string for "virando-se", diga sim.
[483]    \Se a string for "for", diga sim.
[484]    Se a string for "por", diga sim.
[485]    Se a string for "usando", diga sim.
[486]    Se a string for "tão", diga sim.
[487]    Se a string for "quão", diga sim.
[488]    Se a string for "tanto", diga sim.
[489]    Se a string for "quanto", diga sim.
[490]    Se a string for "dentro", diga sim.
[491]    Se a string for "em comprimento", diga sim.
[492]    Se a string for "d'", diga sim.
[493]    Se a string for "d'", diga sim.
[494]    Se a string for "referente", diga sim.
[495]    Se a string for "pertencente", diga sim.
[496]    Se a string for "pertinente", diga sim.
[497]    Se a string for "somente", diga sim.
[498]    Se a string for "apenas", diga sim.
[499]    Se a string for "só", diga sim.
[500]    Se a string for "exclusivamente", diga sim.
[501]    Se a string for "fora", diga sim.
[502]    \Se a string for "sobre", diga sim.
[503]    Se a string for "pointing", diga sim.
[504]    Se a string for "retornando", diga sim.
[505]    Se a string for "retornando", diga sim.
[506]    Se a string for "começando", diga sim.
[507]    Se o subtexto for "começando", diga sim.
[508]    Se o subtexto for "iniciando", diga sim.
[509]    Se a string for "usando", diga sim.
[510]    Se a string for "via", diga sim.
[511]    Se a string for "com", diga sim.
[512]    Se a string for "dentre", diga sim.
[513]    Se a string for "depois", diga sim. \ depois de
[514]    Se a string for "desde", diga sim.
[515]    Se a string for "aproximadamente", diga sim.
[516]    Se a string for "cerca", diga sim.
[517]    Diga não.

[457]  Função para que se determine se uma string é alguma preposição:
[458]    Se a string for "partir", diga sim.
[459]    Se a string for "partindo", diga sim.
[460]    Se a string for "aproximadamente", diga sim.
[461]    Se a string for "através", diga sim.
[462]    Se a string for "after", diga sim.
[463]    \Se a string for "all", diga sim.
[464]    Se a string for "alone", diga sim.
[465]    Se a string for "algum", diga sim.
[466]    \Se a string for "as", diga sim.
[467]    Se a string for "sob", diga sim.
[468]    Se a string for "backward", diga sim.
[469]    Se a string for "regressivamente", diga sim.
[470]    Se a string for "backwards", diga sim.
[471]    Se a string for "entre", diga sim.
[472]    Se a string for "aproada", diga sim.
[473]    Se a string for "aproado", diga sim.
[474]    Se a string for "aproando", diga sim.
[475]    Se a string for "orientada", diga sim.
[476]    Se a string for "orientado", diga sim.
[477]    Se a string for "orientando", diga sim.
[478]    Se a string for "orientando-se", diga sim.
[479]    Se a string for "virada", diga sim.
[480]    Se a string for "virado", diga sim.
[481]    Se a string for "virando", diga sim.
[482]    Se a string for "virando-se", diga sim.
[483]    \Se a string for "for", diga sim.
[484]    Se a string for "por", diga sim.
[485]    Se a string for "usando", diga sim.
[486]    Se a string for "tão", diga sim.
[487]    Se a string for "quão", diga sim.
[488]    Se a string for "tanto", diga sim.
[489]    Se a string for "quanto", diga sim.
[490]    Se a string for "dentro", diga sim.
[491]    Se a string for "em comprimento", diga sim.
[492]    Se a string for "d'", diga sim.
[493]    Se a string for "d'", diga sim.
[494]    Se a string for "referente", diga sim.
[495]    Se a string for "pertencente", diga sim.
[496]    Se a string for "pertinente", diga sim.
[497]    Se a string for "somente", diga sim.
[498]    Se a string for "apenas", diga sim.
[499]    Se a string for "só", diga sim.
[500]    Se a string for "exclusivamente", diga sim.
[501]    Se a string for "fora", diga sim.
[502]    \Se a string for "sobre", diga sim.
[503]    Se a string for "pointing", diga sim.
[504]    Se a string for "retornando", diga sim.
[505]    Se a string for "retornando", diga sim.
[506]    Se a string for "começando", diga sim.
[507]    Se o subtexto for "começando", diga sim.
[508]    Se o subtexto for "iniciando", diga sim.
[509]    Se a string for "usando", diga sim.
[510]    Se a string for "via", diga sim.
[511]    Se a string for "com", diga sim.
[512]    Se a string for "dentre", diga sim.
[513]    Se a string for "depois", diga sim. \ depois de
[514]    Se a string for "desde", diga sim.
[515]    Se a string for "aproximadamente", diga sim.
[516]    Se a string for "cerca", diga sim.
[517]    Diga não.

[519]  Função para que se determine se uma string é algum possessivo reverso:
[520]    Se a string for "de", diga sim.
[521]    \Se a string for "do", diga sim. \ short por "de o", expanded em "compile um termo usando um percorredor e um campo nome (possessivo reverso)"
[522]    Diga não.

[524]  Função para que se determine se um percorredor está sobre ("de" como preposição):
[525]    Preserve o percorredor.
[526]    Se o segmento inicial deste percorredor não for "de", diga não.
[527]    Mova o percorredor (usando diretrizes de compilação).
[528]    Se o segmento inicial deste percorredor for algum artigo, diga sim.
[529]    Diga não.

[531]  Função para que se determine se um percorredor está sobre alguma locução prepositiva:
[532]    Preserve o percorredor.
[533]    Se o segmento inicial deste percorredor não for alguma locução prepositiva diga não.
[534]    Mova o percorredor (usando diretrizes de compilação).
[535]    Se o segmento inicial deste percorredor for "de", diga sim.
[536]    Se o segmento inicial deste percorredor for "do", diga sim.\ Se o segmento inicial deste percorredor for "do", atribua "o" para o segmento inicial deste percorredor original; diga sim.
[537]    Se o segmento inicial deste percorredor for "dos", diga sim.
[538]    Se o segmento inicial deste percorredor for "da", diga sim.
[539]    Se o segmento inicial deste percorredor for "das", diga sim.
[540]    Diga não.

[542]  Função para que se determine se uma string é alguma locução prepositiva:
[543]    Se a string for alguma preposição, diga sim.
[544]    Diga não.

[546]  Função para que se determine se uma string é alguma palavra ignorável:
[547]    Se a string for "já", diga sim.
[548]    Se a string for "ainda", diga sim.
[549]    \Se a string for "que", diga sim.
[550]    \Se a string for "se", diga sim.
[551]    Diga não.

[553]  Função para que se determine se um byte é alguma vogal acentuada:
[554]    Se o byte estiver em "áãâàéèêëíîìïóõôöúùüûý", diga sim.
[555]    Diga não.
```
