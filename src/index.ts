import * as SaxonJS from 'saxon-js';
import mml2texSef from './generated/mml2tex-sef-json';

export default function mml2tex(mml: string): string {
    const { principalResult } = SaxonJS.transform({
        stylesheetText: mml2texSef,
        sourceText: mml,
        destination: 'serialized',
    });
    return removeStub(principalResult);
}

function removeStub(resultText: string): string {
    const start = /^<\?xml version="1.0" encoding="UTF-8"\?><\?mml2tex\s?/;
    const end = /\s?\?>$/;
    return resultText.replace(start, '').replace(end, '');
}

console.log(mml2tex(`
    <math xmlns="http://www.w3.org/1998/Math/MathML">
        <msqrt>
            <mn>2</mn>
        </msqrt>
    </math>
`));
