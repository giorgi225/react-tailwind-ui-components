import * as prettier from 'prettier/standalone';
import prettierPluginEstree from 'prettier/plugins/estree';
import * as parserBabel from 'prettier/plugins/babel';

export const codeUtils = {
    async formatJSX(code: string): Promise<string> {
        try {
            return await prettier.format(code, {
                parser: 'babel-ts',
                plugins: [parserBabel, prettierPluginEstree],
                semi: true,
                singleQuote: true,
                tabWidth: 2,
            });
        } catch (err) {
            console.warn('Prettier formatting failed', err);
            return code;
        }
    },
    generateShowcaseCode: ({ fnTemplate, imports, code, jsx }: { fnTemplate: string, imports?: string, code?: string, jsx?: string }) => {
        return fnTemplate.replace("$$$imports", imports || "")
            .replace("$$$code", code || "")
            .replace("$$$return", jsx || "");
    },
}