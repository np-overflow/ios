import fs from 'node:fs'
import { marked } from 'marked'

const readme = fs.readFileSync('README.md', { encoding: 'utf8', flag: 'r' })

//language=HTML
function createHTML(md) {
    return [
        '<!DOCTYPE html>',
        '<html lang="en">',
        '<head>',
        '    <title>[Overflow] App Dev with iOS</title>',
        '    <style>',
        '        [un-cloak] {',
        '            display: none;',
        '        }',
        '    </style>',
        '    <meta name="viewport" content="width=device-width, initial-scale=1.0">',
        '    <script src="https://cdn.jsdelivr.net/npm/@unocss/runtime/full.global.js"></script>',
        '    <link rel="preconnect" href="https://fonts.googleapis.com">',
        '    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
        '    <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wdth,wght@8..144,112.5,400;8..144,112.5,700&display=swap" rel="stylesheet">',
        '    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@unocss/reset/tailwind.min.css">',
        '</head>',
        '<body>',
        '<main un-cloak class="container mx-auto text-xl p-5 prose" style="font-family: \'Roboto Flex\', sans-serif;">',
        md,
        '</main>',
        '</body>',
        '</html>',
    ].join('\n')
}

const md = marked.parse(readme)
const html = createHTML(md)

fs.writeFileSync('dist/index.html', html)
