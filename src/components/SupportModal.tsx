import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'

interface SupportModalProps {
  open: boolean
  onClose: () => void
}

const supportOptions = [
  {
    key: 'existing',
    icon: '/v7/images/webapp/icons/calendar-black.svg',
    title: 'Existing Booking Support',
    description:
      'Call us for rescheduling, updates, groomer questions, or help with your current appointment.',
    phone: '+18883967170',
    displayPhone: '+1(888) 396 7170',
  },
  {
    key: 'new',
    icon: '/v7/images/webapp/icons/call-black.svg',
    title: 'New Booking by Phone',
    description:
      'Prefer to book by phone? Call now for instant booking and fast confirmation.',
    phone: '+16467185360',
    displayPhone: '+1(646) 718 5360',
  },
]

export function SupportModal({ open, onClose }: SupportModalProps) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ pb: 1 }}>
        <Typography variant="h6" className="font-semibold leading-tight text-[#2E2E2E]">
          Need help with your
          <br />
          booking?
        </Typography>
        <IconButton
          onClick={onClose}
          aria-label="close"
          sx={{ position: 'absolute', right: 12, top: 12 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent className="flex flex-col gap-3 pb-6">
        {supportOptions.map((opt) => (
          <a key={opt.key} href={`tel:${opt.phone}`} className="no-underline">
            <div className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-5 cursor-pointer hover:shadow-sm transition-shadow">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F4F4F6]">
                <img src={opt.icon} className="h-6 w-6" alt="" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-[#2E2E2E]">{opt.title}</span>
                <p className="text-sm text-[#4A5565]">{opt.description}</p>
                <span className="mt-1 font-semibold text-[#FF314A]">
                  {opt.displayPhone}
                </span>
              </div>
            </div>
          </a>
        ))}
      </DialogContent>
    </Dialog>
  )
}
