import { beforeAll, describe, expect, test } from "vitest";
import { createPortuguesPuroServices } from "../src/pop-module.js";
import { EmptyFileSystem } from "langium";
import { parseHelper } from "langium/test";
import type { Programa } from "../src/generated/ast.js";

let services: ReturnType<typeof createPortuguesPuroServices>;
let parse: ReturnType<typeof parseHelper<Programa>>;

beforeAll(async () => {
    services = createPortuguesPuroServices(EmptyFileSystem);
    parse = parseHelper<Programa>(services.PortuguesPuro);
});

describe('Parsing tests', () => {

    test('Parse simple program', async () => {
        const input = `
            Rotina para que se execute o programa:
                Escreva "Olá Mundo" para StdOut.
        `;
        const document = await parse(input);
        expect(document.parseResult.parserErrors).toHaveLength(0);
        expect(document.parseResult.value.elementos).toHaveLength(1);
    });
});
