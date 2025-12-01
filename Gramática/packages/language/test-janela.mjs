import { createPortuguesPuroServices } from './src/language/portugues-puro-module.js';
import { EmptyFileSystem } from 'langium';
import { parseDocument } from 'langium/test';
import * as fs from 'fs';
import * as path from 'path';

const services = createPortuguesPuroServices(EmptyFileSystem);

// Lê o arquivo de exemplo
const filePath = path.resolve('../../Exemplos/Janela/Janela.pop');
const content = fs.readFileSync(filePath, 'utf-8');

console.log('Testando parsing do arquivo Janela.pop...\n');

// Faz o parsing
const document = await parseDocument(services, content);

// Verifica erros
const errors = document.parseResult.lexerErrors.concat(document.parseResult.parserErrors);

if (errors.length === 0) {
    console.log('✅ SUCESSO! O arquivo foi parseado sem erros.');
    console.log(`\nEstatísticas:`);
    console.log(`- Linhas: ${content.split('\n').length}`);
    console.log(`- Caracteres: ${content.length}`);
} else {
    console.log('❌ Erros encontrados:\n');
    errors.forEach((error, index) => {
        console.log(`Erro ${index + 1}:`);
        console.log(`  Linha ${error.line}: ${error.message}`);
    });
}
