import * as fs from 'fs';

fs.writeFileSync(
    'src/generated/mml2tex-sef-json.ts',
    `export default ${
        JSON.stringify(fs.readFileSync('src/generated/mml2tex.sef.json', 'utf8'))
    };`
);
