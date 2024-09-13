function showMobileWarning() {
    if (window.innerWidth <= 768) {
        const warningDiv = document.createElement('div');
        warningDiv.id = 'mobile-warning';
        warningDiv.innerHTML = `
            <div style="position:fixed;top:0;left:0;right:0;background:rgba(0,0,0,0.9);color:#33ff33;text-align:center;padding:15px;z-index:1000;font-family:'JetBrains Mono',monospace;border-bottom:2px solid #33ff33;box-shadow:0 0 10px #33ff33;">
                <p style="margin:0;font-size:14px;">$ echo "Use desktop for better view"</p>
                <button onclick="this.parentElement.style.display='none'" style="background: linear-gradient(45deg, #33ff33, #00cc00); color: #000; border: none; padding: 8px 15px; margin-top: 10px; cursor: pointer; font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: bold; text-transform: uppercase; border-radius: 5px; box-shadow: 0 0 10px rgba(51, 255, 51, 0.5); transition: all 0.3s ease;">$ close</button>
            </div>
        `;
        document.body.appendChild(warningDiv);
    }
}

window.onerror = function(message, url, line, col, error) {
    console.error("Error:", message, url, line, col, error);
  };

document.addEventListener('DOMContentLoaded', () => {
    showMobileWarning();
    const output = document.getElementById('output');
    const commandInput = document.getElementById('command-input');
    const prompt = document.getElementById('prompt');
    const themeToggle = document.getElementById('theme-toggle');

    let commandHistory = [];
    let historyIndex = -1;
    let commands = ['help', 'whoami', 'social', 'resume', 'cv', 'cert', 'projects', 'systemctl', 'email', 'banner', 'clear', 'history', 'linkedin', 'twitter', 'instagram', 'github', 'facebook'];

    function addLine(text, style = '') {
        const line = document.createElement('p');
        line.className = style;
        
        const parts = text.split('$');
        if (parts.length > 1) {
            const promptSpan = document.createElement('span');
            promptSpan.className = 'prompt-color';
            promptSpan.textContent = parts[0] + '$';
            line.appendChild(promptSpan);
            
            line.innerHTML += parts[1];
        } else {
            line.innerHTML = text;
        }
        
        output.appendChild(line);
        
        output.scrollTop = output.scrollHeight;
    }

    async function executeCommand(cmd) {
        addLine(`${prompt.textContent} ${cmd}`, 'command-echo');
        
        const command = cmd.toLowerCase().trim();
        switch(command) {
            case 'help':
                loopLines(help, 'color2 margin');
                break;
            case 'whoami':
                loopLines(await fetchData('whoami'), 'color2 margin');
                break;
            case 'social':
                loopLines(await fetchData('social'), 'color2 margin');
                break;
            case 'resume':
            case 'cv':
                addLine("Opening resume...", "color2");
                showLoadAnimation(async () => window.open(await fetchData('resume'), "_blank"));
                break;
            case 'cert':
                loopLines(await fetchData('cert'), 'color2 margin');
                break;
            case 'projects':
                loopLines(await fetchData('projects'), 'color2 margin');
                break;
            case 'systemctl':
                loopLines(await fetchData('systemctl'), 'color2 margin');
                break;
            case 'email':
                addLine(await fetchData('email'), "color2");
                break;
            case 'banner':
                loopLines(banner, "");
                break;
            case 'clear':
                output.innerHTML = '';
                break;
            case 'history':
                loopLines(commandHistory.map((cmd, index) => `${index + 1}  ${cmd}`), 'color2');
                break;
            case 'linkedin':
            case 'twitter':
            case 'instagram':
            case 'github':
            case 'facebook':
                addLine(`Opening ${command}...`, "color2");
                showLoadAnimation(async () => window.open(await fetchData(command), "_blank"));
                break;
            default:
                const suggestion = commands.find(c => c.startsWith(command));
                if (suggestion) {
                    addLine(`Command not found. Did you mean '${suggestion}'?`, 'error');
                } else {
                    addLine(`Command not found: ${cmd}. Type 'help' for available commands.`, 'error');
                }
        }
    }

    function loopLines(lines, style) {
        lines.forEach((line, index) => {
            setTimeout(() => addLine(line, style), index * 50);
        });
    }

    function showLoadAnimation(callback) {
        const loadingText = "Loading";
        const loadingElement = document.createElement('p');
        loadingElement.className = 'loading';
        output.appendChild(loadingElement);

        let dots = 0;
        const loadInterval = setInterval(() => {
            loadingElement.textContent = loadingText + '.'.repeat(dots);
            dots = (dots + 1) % 4;
        }, 300);

        setTimeout(() => {
            clearInterval(loadInterval);
            loadingElement.remove();
            callback();
        }, 2000);
    }

    async function fetchData(key) {
        switch(key) {
            case 'whoami':
                return whoami;
            case 'social':
                return social;
            case 'systemctl':
                return systemctl;
            case 'projects':
                return projects;
            case 'resume':
                return resume || "#";
            case 'email':
                return email;
            case 'linkedin':
                return linkedin;
            case 'twitter':
                return twitter;
            case 'github':
                return github;
            case 'instagram':
                return instagram;
            case 'facebook':
                return facebook;
            default:
                return `Data for ${key} not found`;
        }
    }

    function autocomplete(input) {
        return commands.find(cmd => cmd.startsWith(input.toLowerCase())) || input;
    }

    commandInput.addEventListener('input', () => {
        const input = commandInput.value;
        const suggestion = autocomplete(input);
        if (suggestion !== input) {
            commandInput.value = input;
            commandInput.setAttribute('placeholder', suggestion.slice(input.length));
        } else {
            commandInput.setAttribute('placeholder', '');
        }
    });

    commandInput.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const suggestion = autocomplete(commandInput.value);
            commandInput.value = suggestion;
            commandInput.setAttribute('placeholder', '');
        }
    });

    commandInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            const command = commandInput.value;
            commandHistory.push(command);
            historyIndex = commandHistory.length;
            executeCommand(command);
            commandInput.value = '';
            commandInput.setAttribute('placeholder', '');
        } else if (e.key === 'ArrowUp') {
            if (historyIndex > 0) {
                historyIndex--;
                commandInput.value = commandHistory[historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                commandInput.value = commandHistory[historyIndex];
            } else {
                historyIndex = commandHistory.length;
                commandInput.value = '';
            }
        }
    });

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        themeToggle.textContent = document.body.classList.contains('light-mode') ? '🌙' : '☀️';
    });

    loopLines(banner, "");
    initParticleBackground();
});

function initParticleBackground() {
    const canvas = document.createElement('canvas');
    canvas.id = 'particle-bg';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particlesArray = [];
    let hue = 0;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 5 + 1;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.size > 0.2) this.size -= 0.1;
        }
        draw() {
            ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function handleParticles() {
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
            if (particlesArray[i].size <= 0.3) {
                particlesArray.splice(i, 1);
                i--;
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (Math.random() < 0.1) {
            particlesArray.push(new Particle());
        }
        handleParticles();
        hue += 0.5;
        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    window.addEventListener('resize', showMobileWarning);
}
