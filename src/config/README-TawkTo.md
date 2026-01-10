# Tawk.to Live Chat Setup Guide

## 📋 What is Tawk.to?

Tawk.to is a **FREE live chat application** that lets you:
- 💬 **Chat with website visitors** in real-time
- 👀 **Monitor visitor activity** on your website
- 📊 **Track chat history** and analytics
- 📱 **Mobile apps** for on-the-go support
- 🎨 **Customize** the chat widget appearance
- 🌍 **Multi-language support** for global customers

## 🚀 Setup Instructions

### 1. Create Tawk.to Account
1. Go to [https://www.tawk.to/](https://www.tawk.to/)
2. Click **"Sign up for free"**
3. Fill in your details:
   - **Email**: Your business email
   - **Password**: Create a strong password
   - **Company Name**: "VedNova IT Solution"
4. Verify your email address

### 2. Create a Property
1. After logging in, click **"Add a property"**
2. Fill in property details:
   - **Property Name**: "VedNova IT Solution"
   - **Website URL**: "https://vednova.com" (your actual domain)
   - **Time Zone**: Select your timezone
   - **Language**: Select your preferred language
3. Click **"Next"**
4. Choose your industry and click **"Next"**
5. Select the features you want and click **"Next"**

### 3. Get Your Property ID and Widget ID
1. Go to **Administration** → **Channels** → **Chat Widget**
2. You'll see your **Property ID** (looks like: `65a1b2c3d4e5f6789012345`)
3. You'll see your **Widget ID** (looks like: `1h2i3j4k5l6m7n8o9p0q1r2`)
4. **Copy both IDs** - you'll need them for the configuration

### 4. Configure the Widget
1. In the same **Chat Widget** section:
   - **Position**: Bottom-right (recommended)
   - **Primary Color**: `#654321` (your brand color)
   - **Secondary Color**: `#FFFBF0` (your secondary color)
   - **Widget Size**: Medium
   - **Show on Mobile**: ✅ Enabled
   - **Show on Desktop**: ✅ Enabled

### 5. Update Configuration File
1. Open `src/config/tawkto.ts`
2. Replace the placeholder IDs:
   ```typescript
   PROPERTY_ID: 'YOUR_PROPERTY_ID', // Replace with your actual Property ID
   WIDGET_ID: 'YOUR_WIDGET_ID',     // Replace with your actual Widget ID
   ```

### 6. Environment Variables (Optional)
For better security, you can use environment variables:
1. Create `.env.local` file in your project root
2. Add these variables:
   ```
   REACT_APP_TAWK_PROPERTY_ID=your_actual_property_id
   REACT_APP_TAWK_WIDGET_ID=your_actual_widget_id
   ```

## 🎨 Customization Options

### Widget Appearance
- **Colors**: Match your brand colors
- **Position**: Bottom-right or bottom-left
- **Size**: Small, medium, or large
- **Language**: Multiple languages supported

### Chat Behavior
- **Welcome Message**: Custom greeting for visitors
- **Agent Name**: "VedNova Support"
- **Department**: For different support teams
- **Offline Form**: Collect messages when you're offline
- **File Sharing**: Allow visitors to send files

### Advanced Features
- **Visitor Tracking**: Monitor user behavior
- **Chat Rating**: Get feedback on support quality
- **Typing Indicators**: Show when agent is typing
- **Sound Notifications**: Alert for new messages

## 📱 Mobile App Setup

1. Download **Tawk.to** app from:
   - [App Store](https://apps.apple.com/app/tawk-to-live-chat/id1467353873)
   - [Google Play](https://play.google.com/store/apps/details?id=com.tawk.to)

2. Login with your Tawk.to credentials

3. Enable **Push Notifications** to get alerts when visitors message

## 🛠️ Testing Your Setup

1. **Local Testing**:
   - The chat widget may not work on `localhost`
   - Use `ngrok` or deploy to a staging server for testing

2. **Production Testing**:
   - Deploy your website
   - Visit your website
   - The chat widget should appear in the bottom-right corner
   - Test sending a message

## 📊 Monitoring and Analytics

1. **Dashboard**: View visitor statistics
2. **Chat History**: Review past conversations
3. **Agent Performance**: Track response times
4. **Visitor Analytics**: Understand user behavior

## 🔧 Troubleshooting

### Common Issues:

**Widget Not Showing:**
- Check Property ID and Widget ID are correct
- Ensure no JavaScript errors in console
- Verify domain is added to Tawk.to property

**Chat Not Working:**
- Check internet connection
- Verify Tawk.to service status
- Clear browser cache

**Mobile Issues:**
- Ensure mobile is enabled in widget settings
- Check responsive design
- Test on actual mobile devices

## 📞 Support

- **Tawk.to Documentation**: [https://developer.tawk.to/](https://developer.tawk.to/)
- **Tawk.to Support**: [https://www.tawk.to/support/](https://www.tawk.to/support/)
- **Community Forum**: [https://www.tawk.to/community/](https://www.tawk.to/community/)

## 🎯 Best Practices

1. **Quick Response**: Aim to respond within 1-2 minutes
2. **Professional Tone**: Maintain consistent brand voice
3. **Proactive Chat**: Engage visitors who stay on important pages
4. **Chat Templates**: Create canned responses for common questions
5. **Regular Monitoring**: Check dashboard daily for missed chats

## 🔄 Next Steps

1. ✅ **Complete Tawk.to setup**
2. ✅ **Test chat functionality**
3. ✅ **Train your support team**
4. ✅ **Monitor performance metrics**
5. ✅ **Optimize based on feedback**

---

**Need Help?** If you encounter any issues during setup, feel free to ask for assistance!
