# Trabalhando com Instruções Hexadecimais

Você pode incorporar código de máquina diretamente no código da sua aplicação, utilizando a palavra-chave <mark style="color:blue;">`Decodifique`</mark>. Exemplos:

`Rotina para que se esvazie um ponteiro:`&#x20;

&#x20;<mark style="color:blue;">`Decodifique`</mark><mark style="color:red;">`$8B8508000000`</mark>`.`-> salva o ponteiro (\[ebp+8]) no registrador EAX

&#x20;<mark style="color:blue;">`Decodifique`</mark><mark style="color:red;">`$C70000000000`</mark>`.` -> zera o registrador EAX

As duas instruções hexadecimais acima são equivalentes ao código assembly abaixo:&#x20;

<mark style="color:green;">`MOV EAX,[EBP+8]`</mark>` `<mark style="color:blue;">`;`</mark> -> salva ponteiro no registrador eax

<mark style="color:green;">`MOV [EAX],0 ;`</mark> -> zera o registrador eax