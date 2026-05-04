import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const features = [
  'Path aliases via @/ prefix',
  'React Router v7 for client-side routing',
  'Material UI components throughout',
  'Tailwind CSS for layout and utility styling',
  'Custom hooks and utility helpers',
  'Vercel SPA rewrite for deep links',
]

export function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] px-4 py-12">
      <Typography variant="h4" className="font-bold tracking-tight mb-2 text-gray-900">
        About
      </Typography>
      <Typography variant="body1" className="text-gray-500 mb-8 text-center max-w-md">
        This project is a production-ready scaffold built with React 19, Vite 8,
        TypeScript, Tailwind CSS v4, and Material UI — ready to deploy on Vercel.
      </Typography>

      <Card className="w-full max-w-md shadow-md">
        <CardContent className="p-2">
          <List dense>
            {features.map((f) => (
              <ListItem key={f}>
                <ListItemIcon className="min-w-9">
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText primary={<Typography variant="body2">{f}</Typography>} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  )
}
