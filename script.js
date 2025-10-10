var div_logo = document.getElementById('logo');
var div_note = document.getElementById('note');
var div_projects = document.getElementById('projects');
var div_footer = document.getElementById('footer');
var skip_header = document.getElementById('skip_header');

//screen
async function initScreen() {
    let logoType = 1;
    let projectType = 1;
    if(window.innerWidth > 600){
        logoType = 3;
    }else if(window.innerWidth > 400){
        logoType = 2;
    }

    if(window.innerWidth > 675){
        projectType = 3;
    }else if(window.innerWidth > 445){
        projectType = 2;
    }
    return {
        logoType: logoType,
        projectType: projectType,
    }
}

//LOGO
var char_logo = ``;
async function initLogo(logoType) {
if(logoType == 3){
char_logo = `
 ███▄ ▄███▓▓█████  ███▄    █   ▄████      ▒███████▒ ██▓ ██▓███  
▓██▒▀█▀ ██▒▓█   ▀  ██ ▀█   █  ██▒ ▀█▒     ▒ ▒ ▒ ▄▀░▓██▒▓██░  ██▒
▓██    ▓██░▒███   ▓██  ▀█ ██▒▒██░▄▄▄░     ░ ▒ ▄▀▒░ ▒██▒▓██░ ██▓▒
▒██    ▒██ ▒▓█  ▄ ▓██▒  ▐▌██▒░▓█  ██▓       ▄▀▒   ░░██░▒██▄█▓▒ ▒
▒██▒   ░██▒░▒████▒▒██░   ▓██░░▒▓███▀▒ ██▓ ▒███████▒░██░▒██▒ ░  ░
░ ▒░   ░  ░░░ ▒░ ░░ ▒░   ▒ ▒  ░▒   ░  ▒▓▒ ░▒▒ ▓░▒░▒░▓  ▒▓▒░ ░  ░
░  ░      ░ ░ ░  ░░ ░░   ░ ▒░  ░   ░  ░▒  ░░▒ ▒ ░ ▒ ▒ ░░▒ ░     
░      ░      ░      ░   ░ ░ ░ ░   ░  ░   ░ ░ ░ ░ ░ ▒ ░░░       
       ░      ░  ░         ░       ░   ░    ░ ░     ░           
                                       ░  ░                   
`;
}else if(logoType == 2){
char_logo = `
• ▌ ▄ ·. ▄▄▄ . ▐ ▄  ▄▄ •    ·▄▄▄▄•▪   ▄▄▄·
·██ ▐███▪▀▄.▀·•█▌▐█▐█ ▀ ▪   ▪▀·.█▌██ ▐█ ▄█
▐█ ▌▐▌▐█·▐▀▀▪▄▐█▐▐▌▄█ ▀█▄   ▄█▀▀▀•▐█· ██▀·
██ ██▌▐█▌▐█▄▄▌██▐█▌▐█▄▪▐█   █▌▪▄█▀▐█▌▐█▪·•
▀▀  █▪▀▀▀ ▀▀▀ ▀▀ █▪·▀▀▀▀  ▀ ·▀▀▀ •▀▀▀.▀   
`;
}else{
char_logo = `
┳┳┓┏┓┳┓┏┓ ┏┓┳┏┓
┃┃┃┣ ┃┃┃┓ ┏┛┃┃┃
┛ ┗┗┛┛┗┗┛•┗┛┻┣┛
`;
}
}

//PROJECTS
var char_projects = ``;

const arr_projects = [`
+--------------------+
|   .deb Packages    |
|                    |
|                    |
|                    |
|      fynedesk      |
|                    |
|                    |
+--------------------+
`,
`
+--------------------+
|   Mazarin Proxy    |
|                    |
|                    |
|   github.mazarin   |
|                    |
|   proxy.meng.zip   |
|                    |
+--------------------+
`,
`
+--------------------+
|     LXD-Marina     |
|                    |
|                    |
|                    |
|   github.marina    |
|                    |
|                    |
+--------------------+
`,
`
+--------------------+
|  Sleipnir SSH Gen  |
|                    |
|                    |
|                    |
|  github.sleipnir   |
|                    |
|                    |
+--------------------+
`,
`
+--------------------+
|    Meng Script     |
|                    |
|                    |
|                    |
|   github.script    |
|                    |
|                    |
+--------------------+
`,
`
+--------------------+
|    ai.meng.zip     |
|                    |
|                    |
|                    |
|     github.ai      |
|                    |
|                    |
+--------------------+
`,
`
+--------------------+
|       KEYS         |
|                    |
|                    |
|                    |
|   meng.zip/keys    |
|                    |
|                    |
+--------------------+
`,
`
+--------------------+
|      Contact       |
|                    |
|                    |
|                    |
|   hello@meng.zip   |
|                    |
|                    |
+--------------------+
`];

async function initProjects(projCard) {
    const projectLines = arr_projects.map(project => project.split('\n'));
    const maxLines = Math.max(...projectLines.map(p => p.length));
    const arrLeng = arr_projects.length;
    const arrLoops = Math.ceil(arrLeng/projCard);
    
    for (let arrLoop = 0; arrLoop < arrLoops; arrLoop++) {
        for (let row = 0; row < maxLines; row++) {
            let currentRow = '';
            for (let proj = 0; proj < projCard; proj++) {
                let projOffset = 0;
                if (arrLoop >= 1) {
                    projOffset = arrLoop * projCard
                }
                const actualProj = proj + projOffset;
                
                if (actualProj > arrLeng - 1){
                    continue;
                }

                const line = projectLines[actualProj][row] || '';
                currentRow += line;

                const nextProj = actualProj + 1;
                if (nextProj < arrLeng) {
                    currentRow += '  ';
                } else{
                    currentRow += ' ';
                }
            }
            char_projects += currentRow + '\n';
        }
    }
}

//NOTE
const char_note = `
Why you might be here:
`;

//FUNCS
var idle_animation = false;
var idle_stopped = true;
var skipAnimation = false;

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !idle_animation) {
        skipAnimation = true;
    }
});

function hideSkip() {
    skip_header.style.visibility = "hidden";
}

function showSkip() {
    skip_header.style.visibility = "visible";
}

async function processIterable(div, asciArt, canSkip = false) {
    if (skipAnimation && canSkip) {
        div.innerHTML = asciArt;
        return;
    }
    
    for (let i = 0; i < asciArt.length; i++) {
        if (skipAnimation && canSkip) {
            div.innerHTML += asciArt.substring(i);
            return;
        }
        div.innerHTML += asciArt[i];
        await new Promise(r => setTimeout(r, 1));
    }
}

async function deleteChars(div, canSkip = false) {
    const ogDivLeng = div.innerHTML.length;
    let animationStr = div.innerHTML;
    for (let indexChar = 0; indexChar < ogDivLeng; indexChar++) {
        if (skipAnimation && canSkip) {
            div.innerHTML = '';
            return;
        }
        animationStr = animationStr.substring(0, animationStr.length - 1)
        div.innerHTML = animationStr;
        await new Promise(r => setTimeout(r, 1));
    }
    div.innerHTML = '';
}

async function addCursor(div, milliseconds) {
    div.innerHTML += `█`;
    await new Promise(r => setTimeout(r, milliseconds/2));
    div.innerHTML = div.innerHTML.slice(0, -1);
    await new Promise(r => setTimeout(r, milliseconds/2));
}

async function idleAnimation(div) {
    idle_animation = true;
    idle_stopped = false;
    hideSkip();
    evaluateScreen();
    while (idle_animation) {
        await addCursor(div, 1500);
    }
    idle_stopped = true;
}

async function stopIdle(){
    idle_animation = false;
    while (!idle_stopped) {
        await new Promise(r => setTimeout(r, 2));
    };
}

async function addLinks(div) {
    const linkMappings = {
        'fynedesk': "https://meng.zip/packages/fynedesk/fynedesk_0.4.0-1_amd64.deb",
        'proxy.meng.zip': 'https://proxy.meng.zip',
        'github.mazarin': 'https://github.com/mengdotzip/Mazarin',
        'github.marina': 'https://github.com/mengdotzip/LXD-Marina',
        'github.script':  'https://github.com/mengdotzip/Meng-Script',
        'github.sleipnir': 'https://github.com/mengdotzip/sleipnir',
        'github.ai':      'https://github.com/mengdotzip/ai.meng.zip',
        'meng.zip/keys ': 'https://meng.zip/keys/',
        'hello@meng.zip': 'mailto:hello@meng.zip',
    };

    let html = div.innerHTML;
    
    for (const [text, url] of Object.entries(linkMappings)) {
        const isEmail = url.startsWith('mailto:');
        const target = isEmail ? '' : 'target="_blank"';
        const regex = new RegExp(text, 'g');
        html = html.replace(regex, `<a href="${url}" class="pl" ${target}>${text}</a>`);
    }
    
    div.innerHTML = html;
}

var oldLogoType = 1;
var oldProjectsType = 1;
var drawingBusy = false;

async function evaluateScreen() {
    if(idle_animation && !drawingBusy){
        let {logoType} = await initScreen();
        if (oldLogoType != logoType){
            drawingBusy = true;
            await stopIdle();
            char_logo = ``;
            await deleteChars(div_logo, true); 
            let {logoType} = await initScreen();
            await initLogo(logoType);
            await processIterable(div_logo, char_logo, true); 
            oldLogoType = logoType;
            idleAnimation(div_footer);
        }
        
        let {projectType} = await initScreen();
        if (oldProjectsType != projectType){
            drawingBusy = true;
            skipAnimation = false;
            showSkip();
            await stopIdle();
            char_projects = ``;
            await deleteChars(div_projects, true);
            let {projectType} = await initScreen();
            await initProjects(projectType);
            await processIterable(div_projects, char_projects, true);
            addLinks(div_projects);
            oldProjectsType = projectType;
            drawingBusy = false;
            idleAnimation(div_footer);
        }
        drawingBusy = false;
    }
}

async function start() {
    skipAnimation = false;
    showSkip();
    
    let {logoType, projectType} = await initScreen();
    
    await initLogo(logoType);
    await processIterable(div_logo, char_logo, true);
    
    await processIterable(div_note, char_note, true);
    await initProjects(projectType);
    await processIterable(div_projects, char_projects, true);
    addLinks(div_projects);
    
    oldLogoType = logoType;
    oldProjectsType = projectType;
    
    hideSkip();
    idleAnimation(div_footer);
}

window.addEventListener('resize', evaluateScreen);

document.addEventListener('DOMContentLoaded', () => {
    start();
});
