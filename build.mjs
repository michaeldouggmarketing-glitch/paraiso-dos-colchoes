import {mkdir,copyFile,rm,readdir} from 'node:fs/promises';
import path from 'node:path';
const output='dist';
await rm(output,{recursive:true,force:true});await mkdir(output,{recursive:true});
for(const file of ['index.html','styles.css','app.js','motion.js'])await copyFile(file,path.join(output,file));
async function copyAssets(folder){for(const item of await readdir(folder,{withFileTypes:true})){const source=path.join(folder,item.name),target=path.join(output,source);if(item.isDirectory()){await mkdir(target,{recursive:true});await copyAssets(source)}else if(/\.(webp|css|js|woff2|ttf|txt)$/.test(item.name)){await copyFile(source,target)}}}
await mkdir(path.join(output,'assets'),{recursive:true});await copyAssets('assets');
console.log('Static site ready; development documents and provenance excluded.');
