import {readFile,writeFile,access} from 'node:fs/promises';
const p=JSON.parse(await readFile('projects.json','utf8'));
for(const x of p){for(const im of x.images)await access(im);if(x.logo)await access(x.logo);}
await writeFile('projects.js','window.PORTFOLIO_PROJECTS = '+JSON.stringify(p,null,2)+';\n');
console.log('Portfolio ready: '+p.length+' projects');
