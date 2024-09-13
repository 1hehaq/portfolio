var email = "mailto:1hehaq@gmail.com";
var twitter = "https://x.com/1hehaq/";
var linkedin = "https://www.linkedin.com/in/1hehaq";
var instagram = "https://www.instagram.com/1hehaq";
var github = "https://github.com/1hehaq";
var facebook = "https://www.facebook.com/1hehaq";

whoami = [
    "<br>",
    "Hi, My name is Mohammed Misbahul Haq.",
    "I'm a Self-Educated Ethical Hacker with over 1.5+ years of security experience and also a web developer, without any years of corporate experience.",
    "I have expertise in advanced Web/Network/API testing with major industry tools like Burp Suite Pro, Metasploit, Nmap, Nessus, Wireshark.",
    "<br>",
    "Skills",
    "   - Web/Network/API pentesting",
    "   - Vulnerability assessment",
    "   - Web App pentesting",
    "   - Bash Automation",
    "   - OWASP top 10",
    "   - Web Application Development",
    "   - Linux (Most of the Distros)",
    "   - Bash",
    "   - RegEx",
    "   - Programming knowledge: Bash, Python, C, C++, Java, Ruby, HTML, CSS, JavaScript, MongoDB, ExpressJS, React, NodeJS",
    "<br>",
    "Tools",
    "   - Burp Suite",
    "   - Metasploit",
    "   - Nmap",
    "   - Wireshark",
    "   - Tenable Nessus",
    "   - Docker",
    "   - Kali Linux",
    "   - Nuclei",
    "<br>",
    "Achievements",
    "   - Secured companies like NASA, Upwork, Drexel, Taxdoo, etc.",
    "   - Developed a fast and powerful XSS Scanner for security professionals.",
    "<br>",
    "Attended Conferences",
    "   - HackTheBox Security Conference Kerala (2024)",
    "   - Brototype Developers Conference Kerala (2024)",
    "<br>",
    "Interests",
    "   - Bug hunting",
    "   - Automation script creation",
    "   - Travelling",
    "   - Martial Arts",
    "   - Cooking",
    "   - Gym",
    "   - Songs",
    "   - Painting",
    "   - IoT Projects (Time Pass)",
    "   - Reading Books",
    "   - Anime",
    "<br>",
    "Other Skills",
    "   - MERN Stack Development",
    "   - Robotics, Electronics",
    "   - Taekwondo (11+ years), Muay Thai",
    "   - Calisthenics",
    "   - Arts",
    "   - Video + Photo editing",
    "   - Adobe tools: Photoshop, Premiere Pro, Lightroom, After Effects, Generative Fill",
    "<br>",
    "Hands on Operating Systems",
    "   - Windows",
    "   - Mac",
    "   - Linux",
    "   - Android",
    "   - iOS",
    "<br>"
];

social = [
    "<br>",
    "<span style='color: #33f8ff;'>Connect with me on social media!</span>",
    "<div class='social-links-container'>",
    `<span class="social-link" style="color: #E1306C; cursor: pointer;" onclick="window.open('${instagram}', '_blank')"><box-icon name='instagram' type='logo' color="#E1306C"></box-icon><span class="social-link-text">Instagram: @1hehaq</span></span>`,
    `<span class="social-link" style="color: #1DA1F2; cursor: pointer;" onclick="window.open('${twitter}', '_blank')"><box-icon name='twitter' type='logo' color="#1DA1F2"></box-icon><span class="social-link-text">Twitter: @1hehaq</span></span>`,
    `<span class="social-link" style="color: #0077B5; cursor: pointer;" onclick="window.open('${linkedin}', '_blank')"><box-icon name='linkedin-square' type='logo' color="#0077B5"></box-icon><span class="social-link-text">LinkedIn: @1hehaq</span></span>`,
    `<span class="social-link" style="color: #6e5494; cursor: pointer;" onclick="window.open('${github}', '_blank')"><box-icon name='github' type='logo' color="#6e5494"></box-icon><span class="social-link-text">GitHub: @1hehaq</span></span>`,
    `<span class="social-link" style="color: #4267B2; cursor: pointer;" onclick="window.open('${facebook}', '_blank')"><box-icon type='logo' name='facebook-square' color="#4267B2"></box-icon><span class="social-link-text">Facebook: @1hehaq</span></span>`,
    "</div>",
    "<br>"
];

systemctl = [
    "<br>",
    "Update: As of September 2024",
    "────────────────────────────",
    "<br>",
    " • Developing an all-in-one application for all the Security Researchers.",
    " • Contributing my custom security tools written in Bash and Python to open-source communities.",
    " • Leveraging my web application testing experience, I'm excited to expand my skill set into App Sec.",
    "<br>",
    "─────────────────────────────────────────────────────────────────────────────────────────────────",
    "<br>",
    "By acquiring this knowledge,",
    "I'll be equipped to design secure computer architectures, develop detailed cybersecurity plans, and implement effective security measures to safeguard information.",
    "<br>"
];

projects = [
    "<br>",
    '<span class="social-link" style="color: #6e5494; font-weight: bold; font-size: 1.2em; text-shadow: 0 0 5px #6e5494; cursor: pointer;" onclick="window.open(\'' + github + '\', \'_blank\')"><box-icon type=\'logo\' name=\'github\' color="#6e5494"></box-icon><span class="social-link-text">Click me to explore my GitHub Projects</span></span>',
    "<br>"
];

help = [
    "<br>",
    '<span class="command neon-command">help - </span>           Help means help',
    '<span class="command neon-command">whoami - </span>         Know about haq',
    '<span class="command neon-command">resume/cv - </span>      Want to hire me? view/download my CV',
    '<span class="command neon-command">cert - </span>           View all certificates',
    '<span class="command neon-command">social - </span>         My socials OR type \'linkedin\'',
    '<span class="command neon-command">projects - </span>       Some security tools',
    '<span class="command neon-command">systemctl - </span>      Development in progress',
    '<span class="command neon-command">email - </span>          Let\'s connect',
    '<span class="command neon-command">banner - </span>         Display the header',
    '<span class="command neon-command">clear - </span>          Breathe out',
    '<span class="command neon-command">history - </span>        Let\'s see what you\'ve been up to',
    "<br>"
];

banner = [
    '<span id="welcome-message" class="subtitle">Welcome to my Portfolio - Mohammed Misbahul Haq</span>',
    "<br>",
    'Type <span class="highlight">help</span> command to reveal a list of available commands.',
    'The cursor is waiting for your input.',
    "<br>"
];

function openResume() {
    window.open('#', '_blank');
}

function showCertificates() {
    return [
        "<br>",
        "Certificates are currently being updated.",
        "Check back soon for a list of my certifications!",
        "<br>"
    ];
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = {
        email, twitter, linkedin, instagram, github, facebook,
        whoami, social, systemctl, projects, help, banner,
        openResume, showCertificates
    };
}
