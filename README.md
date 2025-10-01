# wed1447

asdasd

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![pnpm](https://img.shields.io/badge/pnpm-9.0-FF6C37)](https://pnpm.io/)

## 🚀 Quick Start

```bash
# Install pnpm if you don't have it
npm install -g pnpm

# Install dependencies
pnpm install

# Setup the project (installs components)
pnpm run setup

# Start development server
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your design system.

## ✨ What's Included

### Core Framework
- **Next.js 15** with App Router
- **React 18** with TypeScript
- **pnpm** for fast package management
- **Tailwind CSS** for styling

### Design System Features

### Development Tools
- **ESLint** for code quality
- **TypeScript** for type safety

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm run dev` | Start development server |
| `pnpm run build` | Build for production |
| `pnpm run start` | Start production server |
| `pnpm run lint` | Run ESLint |
| `pnpm run setup` | Install components |

## 📁 Project Structure

```
wed1447/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   └── ui/                # ShadCN UI components
├── lib/                   # Utility functions
│   └── utils.ts           # Utility functions
├── scripts/               # Build and setup scripts
├── components.json        # ShadCN UI configuration
└── package.json           # Dependencies and scripts
```

## 🔧 Setup Details

### Component Installation
No specific components were selected. You can add ShadCN UI components using:

```bash
pnpm dlx shadcn@latest add [component-name]
```

### Design Tokens
Design tokens are not included in this project. To add them, re-run the project generator and select "Style Dictionary" as your token management system.

### Documentation
Storybook is not included in this project. To add it, re-run the project generator and select "Storybook" in the documentation options.



## 🔄 Development Workflow

### First Time Setup
1. **Install dependencies:** `pnpm install`
2. **Setup project:** `pnpm run setup` (installs components)
3. **Start development:** `pnpm run dev`

### Daily Development
1. **Start dev server:** `pnpm run dev`
2. **Make changes** to components in `components/`
3. **View changes** at [http://localhost:3000](http://localhost:3000)

### Before Committing
1. **Run linting:** `pnpm run lint`
2. **Build project:** `pnpm run build`

## 🆘 Troubleshooting

### Common Issues

**Components not showing correctly?**
```bash
# Re-run setup to ensure components are properly installed
pnpm run setup
```

**TypeScript errors?**
```bash
# Ensure all dependencies are installed
pnpm install
# Check TypeScript configuration
pnpm run lint
```

**Port already in use?**
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use a different port
pnpm run dev -- -p 3001
```

### Getting Help
- Check the [Next.js documentation](https://nextjs.org/docs)
- Review [Tailwind CSS docs](https://tailwindcss.com/docs)

