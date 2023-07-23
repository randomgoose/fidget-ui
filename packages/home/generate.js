const fs = require('fs');

const inlineScript = fs.readFileSync('html.js');

console.log(`
      <body>
        <script>
          ${inlineScript};
        </script>
      </body>
`);
