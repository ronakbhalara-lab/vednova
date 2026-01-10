export const TAWK_TO_CONFIG = {
  // Get these from your Tawk.to dashboard
  // 1. Go to https://www.tawk.to/
  // 2. Sign up/login
  // 3. Create a new property
  // 4. Go to Administration > Channels > Chat Widget
  // 5. Copy the Property ID and Widget ID
  
  // Example: "65a1b2c3d4e5f6789012345" (from your Tawk.to dashboard)
  PROPERTY_ID: process.env.REACT_APP_TAWK_PROPERTY_ID || 'YOUR_PROPERTY_ID',
  
  // Example: "1h2i3j4k5l6m7n8o9p0q1r2" (from your Tawk.to dashboard)
  WIDGET_ID: process.env.REACT_APP_TAWK_WIDGET_ID || 'YOUR_WIDGET_ID',
  
  // Customization options
  CUSTOMIZATION: {
    // Widget position
    position: 'bottom-right', // 'bottom-right', 'bottom-left'
    
    // Widget colors
    primaryColor: '#654321', // Your brand color
    secondaryColor: '#FFFBF0', // Your secondary color
    
    // Widget size
    size: 'medium', // 'small', 'medium', 'large'
    
    // Show/hide widget on mobile
    showOnMobile: true,
    
    // Show/hide widget on desktop
    showOnDesktop: true,
    
    // Auto-open after X seconds (0 = disabled)
    autoOpen: 0,
    
    // Show welcome message
    welcomeMessage: 'Hello! How can we help you today?',
    
    // Agent name
    agentName: 'VedNova Support',
    
    // Agent avatar (optional)
    agentAvatar: '', // URL to avatar image
    
    // Department (if you have multiple departments)
    department: '', // Leave empty for default
    
    // Language
    language: 'en', // 'en', 'es', 'fr', 'de', etc.
    
    // Custom CSS (optional)
    customCSS: `
      /* Custom styles for Tawk.to widget */
      .tawk-custom-style {
        /* Your custom styles here */
      }
    `
  },
  
  // Visitor tracking
  VISITOR_TRACKING: {
    // Track page views
    trackPageViews: true,
    
    // Track user engagement
    trackEngagement: true,
    
    // Custom visitor attributes
    customAttributes: {
      source: 'website',
      platform: 'vednova-website'
    }
  },
  
  // Chat behavior
  CHAT_BEHAVIOR: {
    // Enable sound notifications
    soundNotifications: true,
    
    // Show typing indicators
    showTypingIndicators: true,
    
    // Enable file sharing
    enableFileSharing: true,
    
    // Enable emoji reactions
    enableEmojiReactions: true,
    
    // Chat rating system
    enableRating: true,
    
    // Offline form
    enableOfflineForm: true,
    
    // Pre-chat form
    enablePreChatForm: false,
    
    // Post-chat survey
    enablePostChatSurvey: true
  }
};
