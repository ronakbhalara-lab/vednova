# WhatsApp Integration Configuration

## Setup Instructions

1. **Update WhatsApp Number**
   Edit `src/config/whatsapp.ts` and replace the `PHONE_NUMBER` with your actual WhatsApp business number.

   ```typescript
   PHONE_NUMBER: '919876543210', // Replace with your number
   ```

   **Important:**
   - Include country code without `+` or spaces
   - Example: `919876543210` for India, `15551234567` for USA

2. **Customize Messages**
   You can also customize the default message and business name in the same file.

## How It Works

The WhatsApp chat button uses WhatsApp's "Click to Chat" feature:
- Users click the green WhatsApp button (bottom-left)
- A chat widget opens where they can type their message
- When they send, it opens WhatsApp with the pre-filled message
- No backend API required - uses WhatsApp's official URL scheme

## Features

- ✅ Clean, modern chat widget interface
- ✅ Responsive design for mobile and desktop
- ✅ Keyboard shortcuts (Enter to send, Shift+Enter for new line)
- ✅ Smooth animations and transitions
- ✅ Positioned to avoid overlap with other UI elements
- ✅ Opens WhatsApp in new tab (doesn't interrupt user flow)

## Testing

To test the integration:
1. Update the phone number in the config
2. Start your development server
3. Click the WhatsApp button
4. Type a message and send
5. It should open WhatsApp with your message pre-filled
