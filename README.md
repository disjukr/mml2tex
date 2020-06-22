# mml2tex
convert mathml to tex

used the xsl code from: https://github.com/transpect/mml2tex

## example
```js
import mml2tex from 'mml2tex';

const mml = `
    <math xmlns="http://www.w3.org/1998/Math/MathML">
        <msqrt>
            <mn>2</mn>
        </msqrt>
    </math>
`;
const tex = mml2tex(mml);
console.log(tex); // \sqrt{ 2 }
```
