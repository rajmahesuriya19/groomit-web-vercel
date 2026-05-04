import Typography from '@mui/material/Typography'
import { Button } from '@/components/Button'
import { useNavigate } from 'react-router-dom'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'

export function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] gap-4 px-4 text-center">
      <SentimentDissatisfiedIcon className="text-indigo-400" sx={{ fontSize: 80 }} />
      <Typography variant="h2" className="font-bold text-gray-800">
        404
      </Typography>
      <Typography variant="body1" className="text-gray-500 max-w-xs">
        The page you're looking for doesn't exist.
      </Typography>
      <Button onClick={() => navigate('/')}>Go home</Button>
    </div>
  )
}
