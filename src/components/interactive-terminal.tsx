'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CommandLineIcon } from '@heroicons/react/24/outline';

interface CommandOutput {
  id: string;
  command: string;
  output: string | React.ReactElement;
  timestamp: string;
}

const InteractiveTerminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands = {
    help: {
      description: 'Show available commands',
      output: (
        <div className="space-y-2 text-green-400">
          <div className="mb-4 text-cyan-400">Available Commands:</div>
          <div><span className="text-yellow-400">about</span> - Learn about Shubham</div>
          <div><span className="text-yellow-400">skills</span> - View technical skills</div>
          <div><span className="text-yellow-400">projects</span> - Show recent projects</div>
          <div><span className="text-yellow-400">experience</span> - Display work experience</div>
          <div><span className="text-yellow-400">contact</span> - Get contact information</div>
          <div><span className="text-yellow-400">github</span> - Open GitHub profile</div>
          <div><span className="text-yellow-400">resume</span> - Download resume</div>
          <div><span className="text-yellow-400">clear</span> - Clear terminal</div>
          <div><span className="text-yellow-400">whoami</span> - Who is this developer?</div>
          <div><span className="text-yellow-400">status</span> - Current availability</div>
        </div>
      )
    },
    about: {
      description: 'Learn about Shubham',
      output: (
        <div className="space-y-3 text-green-400">
          <div className="text-cyan-400">$ cat about.txt</div>
          <div>Name: Shubham Sharma</div>
          <div>Role: Full-Stack Developer</div>
          <div>Experience: 3+ years</div>
          <div>Education: B.Tech Computer Science</div>
          <div>Location: Kolkata, India</div>
          <div>Specialization: React, Next.js, Node.js, TypeScript</div>
          <div className="text-yellow-400">
            &quot;Passionate about creating scalable web applications and contributing to open source&quot;
          </div>
        </div>
      )
    },
    skills: {
      description: 'View technical skills',
      output: (
        <div className="space-y-4 text-green-400">
          <div className="text-cyan-400">$ ls -la skills/</div>
          <div>
            <div className="text-pink-400">Frontend:</div>
            <div className="ml-4">
              ◦ TypeScript/JavaScript ⭐⭐⭐⭐⭐<br/>
              ◦ React.js ⭐⭐⭐⭐⭐<br/>
              ◦ Next.js ⭐⭐⭐⭐⭐<br/>
              ◦ TailwindCSS ⭐⭐⭐⭐⭐
            </div>
          </div>
          <div>
            <div className="text-purple-400">Backend:</div>
            <div className="ml-4">
              ◦ Node.js ⭐⭐⭐⭐⭐<br/>
              ◦ Express.js ⭐⭐⭐⭐⭐<br/>
              ◦ GraphQL ⭐⭐⭐⭐<br/>
              ◦ REST APIs ⭐⭐⭐⭐⭐
            </div>
          </div>
          <div>
            <div className="text-emerald-400">Database:</div>
            <div className="ml-4">
              ◦ PostgreSQL ⭐⭐⭐⭐<br/>
              ◦ MongoDB ⭐⭐⭐⭐⭐<br/>
              ◦ Redis ⭐⭐⭐⭐
            </div>
          </div>
        </div>
      )
    },
    projects: {
      description: 'Show recent projects',
      output: (
        <div className="space-y-3 text-green-400">
          <div className="text-cyan-400">$ git log --oneline --graph</div>
          <div className="space-y-2">
            <div>📄 <span className="text-yellow-400">La Resume</span> - ATS-friendly resume builder (800+ users)</div>
            <div>📊 <span className="text-yellow-400">Sheets Manager</span> - Google Sheets automation tool</div>
            <div>🎨 <span className="text-yellow-400">Miro Board</span> - Real-time collaborative whiteboard</div>
            <div>🍽️ <span className="text-yellow-400">Restaurant API</span> - GoLang REST API system</div>
            <div>⚡ <span className="text-yellow-400">TypoSpeed Tracker</span> - Typing performance analytics</div>
          </div>
          <div className="mt-3 text-purple-400">
            Tech Stack: Next.js, TypeScript, Node.js, GoLang, Docker, AWS
          </div>
        </div>
      )
    },
    experience: {
      description: 'Display work experience',
      output: (
        <div className="space-y-4 text-green-400">
          <div className="text-cyan-400">$ cat experience.log</div>
          <div>
            <div className="text-yellow-400">🏢 Testlify (Oct 2024 - Present)</div>
            <div className="ml-4 text-sm">
              Full Stack Developer<br/>
              • TypeScript migration in Nuxt.js codebase<br/>
              • Multi-monitor proctoring system (2,000+ users)<br/>
              • Optimized image storage with S3 uploads
            </div>
          </div>
          <div>
            <div className="text-yellow-400">🚀 Fable (Nov 2022 - June 2024)</div>
            <div className="ml-4 text-sm">
              Software Engineer Intern (Founding Team)<br/>
              • Built B2B interactive demo platform from inception<br/>
              • Real-time notification service with Slack API<br/>
              • 9,000+ monthly visitors through optimization
            </div>
          </div>
          <div className="text-purple-400">
            💼 Freelance: 50+ clients served on Fiverr & Upwork
          </div>
        </div>
      )
    },
    contact: {
      description: 'Get contact information',
      output: (
        <div className="space-y-2 text-green-400">
          <div className="text-cyan-400">$ cat contact.json</div>
          <div className="text-yellow-400">{'{'}</div>
          <div className="ml-4">
            <div>&quot;email&quot;: &quot;<span className="text-pink-400">shubhamku044@gmail.com</span>&quot;,</div>
            <div>&quot;github&quot;: &quot;<span className="text-pink-400">https://github.com/shubhamku044</span>&quot;,</div>
            <div>&quot;linkedin&quot;: &quot;<span className="text-pink-400">https://linkedin.com/in/shubhamku044</span>&quot;,</div>
            <div>&quot;twitter&quot;: &quot;<span className="text-pink-400">https://x.com/shubhamku044</span>&quot;,</div>
            <div>&quot;location&quot;: &quot;<span className="text-pink-400">Kolkata, India</span>&quot;,</div>
            <div>&quot;availability&quot;: &quot;<span className="text-emerald-400">Open to opportunities</span>&quot;</div>
          </div>
          <div className="text-yellow-400">{'}'}</div>
        </div>
      )
    },
    github: {
      description: 'Open GitHub profile',
      output: 'Opening GitHub profile... 🚀'
    },
    resume: {
      description: 'Download resume',
      output: 'Downloading resume... 📄'
    },
    whoami: {
      description: 'Who is this developer?',
      output: (
        <div className="space-y-2 text-green-400">
          <div className="text-cyan-400">shubham@portfolio:~$ whoami</div>
          <div>🧑‍💻 Shubham Sharma</div>
          <div>🎯 Full-Stack Developer with 3+ years experience</div>
          <div>🌟 Level 2 Seller on Fiverr | 50+ satisfied clients</div>
          <div>🔥 Open source contributor | BTech CSE student</div>
          <div className="text-yellow-400">💡 Currently seeking new opportunities!</div>
        </div>
      )
    },
    status: {
      description: 'Current availability',
      output: (
        <div className="space-y-2 text-green-400">
          <div className="text-cyan-400">$ systemctl status shubham.service</div>
          <div>● shubham.service - Full Stack Developer</div>
          <div className="ml-4">
            Loaded: loaded (/etc/systemd/system/shubham.service; enabled)<br/>
            Active: <span className="text-emerald-400">active (seeking opportunities)</span><br/>
            Since: {new Date().toLocaleDateString()}
          </div>
          <div className="mt-2 text-yellow-400">
            🟢 Available for: Full-time positions, Contract work, Consulting
          </div>
        </div>
      )
    }
  };

  const executeCommand = async (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    const timestamp = new Date().toLocaleTimeString();

    setIsTyping(true);

    if (command === 'clear') {
      setHistory([]);
      setIsTyping(false);
      return;
    }

    if (command === 'github') {
      window.open('https://github.com/shubhamku044', '_blank');
    }

    if (command === 'resume') {
      window.open('https://la-resume.tech/shared/08583c3b-e208-4256-89d9-73ec36a15957', '_blank');
    }

    let output: string | React.ReactElement = 'Command not found. Type "help" for available commands.';

    if (commands[command as keyof typeof commands]) {
      output = commands[command as keyof typeof commands].output;
    }

    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const newEntry: CommandOutput = {
      id: Date.now().toString(),
      command: cmd,
      output,
      timestamp
    };

    setHistory(prev => [...prev, newEntry]);
    setCommandHistory(prev => [...prev, cmd]);
    setIsTyping(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      executeCommand(input);
      setInput('');
      setHistoryIndex(-1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    // Welcome message
    const welcomeMessage: CommandOutput = {
      id: 'welcome',
      command: '',
      output: (
        <div className="space-y-2 text-green-400">
          <div className="text-cyan-400">Welcome to Shubham&apos;s Portfolio Terminal!</div>
          <div>Type <span className="text-yellow-400">&quot;help&quot;</span> to see available commands.</div>
          <div className="text-purple-400">🚀 Ready to explore? Let&apos;s start coding!</div>
        </div>
      ),
      timestamp: new Date().toLocaleTimeString()
    };
    setHistory([welcomeMessage]);
  }, []);

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-black"></div>

      {/* Matrix-like background effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="matrix-bg"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Interactive Terminal
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-white/70">
            Explore my portfolio through a developer-friendly command line interface
          </p>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-lg border border-gray-600 bg-black shadow-2xl"
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between border-b border-gray-600 bg-gray-800 px-4 py-3">
            <div className="flex items-center gap-2">
              <CommandLineIcon className="size-5 text-green-400" />
              <span className="text-sm font-medium text-white">shubham@portfolio:~</span>
            </div>
            <div className="flex gap-2">
              <div className="size-3 rounded-full bg-red-500"></div>
              <div className="size-3 rounded-full bg-yellow-500"></div>
              <div className="size-3 rounded-full bg-green-500"></div>
            </div>
          </div>

          {/* Terminal Content */}
          <div
            ref={terminalRef}
            className="h-96 overflow-y-auto bg-black p-4 font-mono text-sm"
          >
            <AnimatePresence>
              {history.map((entry) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4"
                >
                  {entry.command && (
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-green-400">shubham@portfolio:~$</span>
                      <span className="text-white">{entry.command}</span>
                      <span className="text-xs text-gray-500">[{entry.timestamp}]</span>
                    </div>
                  )}
                  <div className="mb-2 whitespace-pre-wrap">{entry.output}</div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Current Input Line */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <span className="text-green-400">shubham@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-white outline-none"
                placeholder={isTyping ? "Processing..." : "Type a command..."}
                disabled={isTyping}
                autoFocus
              />
              {isTyping && (
                <span className="animate-pulse text-yellow-400">●</span>
              )}
            </form>
          </div>
        </motion.div>

        {/* Quick Command Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {['help', 'about', 'skills', 'projects', 'contact'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => {
                setInput(cmd);
                executeCommand(cmd);
                setInput('');
              }}
              className="rounded-lg border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm text-green-400 transition-all hover:border-green-400/50 hover:bg-green-400/20"
            >
              {cmd}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Matrix animation CSS */}
      <style jsx>{`
        .matrix-bg {
          background-image:
            linear-gradient(90deg, transparent 98%, #00ff4130 100%),
            linear-gradient(transparent 98%, #00ff4130 100%);
          background-size: 20px 20px;
          width: 100%;
          height: 100%;
          animation: matrix 20s linear infinite;
        }
        @keyframes matrix {
          0% { transform: translateY(0); }
          100% { transform: translateY(20px); }
        }
      `}</style>
    </section>
  );
};

export default InteractiveTerminal;
