var div_logo = document.getElementById('logo');
var div_note = document.getElementById('note');
var div_projects = document.getElementById('projects');
var div_footer = document.getElementById('footer');

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
░ ▒░   ░  ░░░ ▒░ ░░ ▒░   ▒ ▒  ░▒   ▒  ▒▓▒ ░▒▒ ▓░▒░▒░▓  ▒▓▒░ ░  ░
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
//

//PROJECTS
var char_projects = ``;

const arr_projects = [`
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
|       Blog         |
|                    |
|                    |
|                    |
|    coming soon     |
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

/*
┌────────────────────┐
│   Mazarin Proxy    │
│                    │
│                    │
│   github.mazarin   │
│                    │
│   proxy.meng.zip   │
│                    │
└────────────────────┘
*/

async function initProjects(projCard) {

    // Split each project into lines
    const projectLines = arr_projects.map(project => project.split('\n'));
    const maxLines = Math.max(...projectLines.map(p => p.length));
    const arrLeng = arr_projects.length;
    const arrLoops = Math.ceil(arrLeng/projCard);
    

    // For each row, combine all projects side by side
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
                // Skip if we've run out of projects

                const line = projectLines[actualProj][row] || ''; // Handle different heights
                currentRow += line;

                // Add spacing between projects (except last one)
                if (proj < projCard - 1) {
                    currentRow += '  ';
                }
            }
            char_projects += currentRow + '\n';
        }
    }
}
//

//NOTE
const char_note = `
Why you might be here:
`;

//FUNCS
var idle_animation = false;
var idle_stopped = true;

async function processIterable(div, asciArt) {
    for (let i = 0; i < asciArt.length; i++) {
        div.innerHTML += asciArt[i];
        await new Promise(r => setTimeout(r, 1)); //using addCursor for delay here is just simply to slow bcs of DOM Operations
    }
}

async function deleteChars(div) {
    const ogDivLeng = div.innerHTML.length;
    let animationStr = div.innerHTML;
    for (let indexChar = 0; indexChar < ogDivLeng; indexChar++) {
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
    evaluateScreen()
    while (idle_animation) {
        await addCursor(div, 1500)
    }
    idle_stopped = true;
}

async function stopIdle(){
    idle_animation = false;
    while (!idle_stopped) {
        await new Promise(r => setTimeout(r, 2));
    } ;
}

async function addLinks(div) {
    const linkMappings = {
        'proxy.meng.zip': 'https://proxy.meng.zip',
        'github.mazarin': 'https://github.com/mengdotzip/Mazarin',
        'github.marina': 'https://github.com/mengdotzip/LXD-Marina',
        'github.script':  'https://github.com/mengdotzip/Meng-Script',
        'github.sleipnir':      'https://github.com/mengdotzip/sleipnir',
        'github.ai':      'https://github.com/mengdotzip/ai.meng.zip',
        'hello@meng.zip': 'mailto:hello@meng.zip'
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
            await stopIdle()
            char_logo = ``;
            await deleteChars(div_logo);
            let {logoType} = await initScreen(); //call this again to get the latest version of the screen after deleting the chars
            await initLogo(logoType);
            await processIterable(div_logo, char_logo);
            oldLogoType = logoType;
            idleAnimation(div_footer);
        }
        let {projectType} = await initScreen(); //Same here, get the latest version after potentially waiting for the logo
        if (oldProjectsType != projectType){
            drawingBusy = true;
            await stopIdle()
            char_projects = ``;
            await deleteChars(div_projects);
            let {projectType} = await initScreen();
            await initProjects(projectType);
            await processIterable(div_projects, char_projects);
            addLinks(div_projects);
            oldProjectsType = projectType;
            drawingBusy = false; //calling this at the end before idleAnimation is key to get the logo to sync in edge cases
            idleAnimation(div_footer);
        }
        drawingBusy = false;
    }
}

async function start() {
    let {logoType, projectType} = await initScreen();
    await initLogo(logoType);
    await processIterable(div_logo, char_logo);
    await processIterable(div_note, char_note);
    await initProjects(projectType);
    await processIterable(div_projects, char_projects);
    addLinks(div_projects);
    oldLogoType = logoType;
    oldProjectsType = projectType;
    idleAnimation(div_footer);
}

window.addEventListener('resize', evaluateScreen);

document.addEventListener('DOMContentLoaded', () => {
    start();
});
