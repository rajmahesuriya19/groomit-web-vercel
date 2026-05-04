import { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import { Button } from '@/components/Button'
import reactLogo from '@/assets/react.svg'
import viteLogo from '@/assets/vite.svg'

const stack = ['React 19', 'Vite 8', 'TypeScript', 'Tailwind CSS', 'MUI', 'Vercel']

export function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] px-4 py-12">
      <div className="flex gap-6 mb-8">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img
            src={viteLogo}
            alt="Vite"
            className="h-16 p-2 transition-all duration-300 hover:drop-shadow-[0_0_16px_#646cff]"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            alt="React"
            className="h-16 p-2 transition-all duration-300 hover:drop-shadow-[0_0_16px_#61dafb] animate-spin [animation-duration:8s]"
          />
        </a>
      </div>

      <Typography variant="h3" className="font-bold tracking-tight mb-2 text-gray-900 text-center">
        web-app-vercel
      </Typography>
      <Typography variant="subtitle1" className="text-gray-500 mb-8 text-center">
        React + Vite + TypeScript + Tailwind + MUI
      </Typography>

      <Card className="w-full max-w-md shadow-md mb-8">
        <CardContent className="flex flex-col items-center gap-4 p-6">
          <Button onClick={() => setCount((c) => c + 1)}>
            Count is {count}
          </Button>
          <Divider className="w-full" />
          <Typography variant="body2" className="text-gray-500 text-center">
            Edit <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">src/pages/HomePage.tsx</code> and save to test HMR
          </Typography>
        </CardContent>
      </Card>

      <div className="flex flex-wrap justify-center gap-2 max-w-sm">
        {stack.map((tech) => (
          <Chip key={tech} label={tech} variant="outlined" size="small" color="primary" />
        ))}
      </div>
    </div>
  )
}
