import { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { WHATSAPP_CONFIG } from '../config/whatsapp';

export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  // Check if scroll-to-top button is visible
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mobile keyboard visibility
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    
    const handleResize = () => {
      const viewport = window.visualViewport;
      if (viewport && isMobile) {
        // If viewport height is significantly reduced, keyboard is likely visible
        const keyboardHeight = window.innerHeight - viewport.height;
        setIsKeyboardVisible(keyboardHeight > 150);
        
        // Adjust chat widget position when keyboard is visible (mobile only)
        const chatWidget = document.getElementById('whatsapp-chat-widget');
        if (chatWidget) {
          if (keyboardHeight > 150 && isOpen) {
            // Keyboard is visible - make chat fill exact viewport (mobile only)
            chatWidget.style.height = `${viewport.height}px`;
            chatWidget.style.top = `${viewport.offsetTop}px`;
            chatWidget.style.left = '0';
            chatWidget.style.width = '100%';
            chatWidget.style.position = 'fixed';
            chatWidget.style.zIndex = '9999';
            chatWidget.style.backgroundColor = 'white';
          } else if (isMobile) {
            // Keyboard is hidden - reset to full screen (mobile only)
            chatWidget.style.height = '100vh';
            chatWidget.style.top = '0';
            chatWidget.style.left = '0';
            chatWidget.style.width = '100%';
            chatWidget.style.position = 'fixed';
            chatWidget.style.zIndex = '9999';
            chatWidget.style.backgroundColor = 'white';
          } else {
            // Desktop - reset all styles
            chatWidget.style.height = '';
            chatWidget.style.top = '';
            chatWidget.style.left = '';
            chatWidget.style.width = '';
            chatWidget.style.position = '';
            chatWidget.style.zIndex = '';
            chatWidget.style.backgroundColor = '';
          }
        }
      }
    };

    if (isOpen) {
      window.visualViewport?.addEventListener('resize', handleResize);
      handleResize(); // Check initial state
    }

    return () => {
      window.visualViewport?.removeEventListener('resize', handleResize);
      // Reset widget styles on cleanup
      const chatWidget = document.getElementById('whatsapp-chat-widget');
      if (chatWidget) {
        chatWidget.style.height = '';
        chatWidget.style.top = '';
        chatWidget.style.left = '';
        chatWidget.style.width = '';
        chatWidget.style.position = '';
        chatWidget.style.zIndex = '';
        chatWidget.style.backgroundColor = '';
      }
    };
  }, [isOpen]);
 
  // Lock body scroll when chat is open on mobile
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    
    if (isOpen && isMobile) {
      // Always lock scroll when chat is open on mobile only
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.bottom = '0';
      
      // Also lock html element
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.position = 'fixed';
      
      // Prevent touch move
      const preventTouchMove = (e: TouchEvent) => {
        e.preventDefault();
      };
      document.addEventListener('touchmove', preventTouchMove, { passive: false });
      
      return () => {
        document.removeEventListener('touchmove', preventTouchMove);
      };
    } else {
      // Restore scroll
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.bottom = '';
      
      document.documentElement.style.overflow = '';
      document.documentElement.style.position = '';
      
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      // Cleanup on unmount
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.bottom = '';
      
      document.documentElement.style.overflow = '';
      document.documentElement.style.position = '';
    };
  }, [isOpen]);

  const toggleChat = () => {
    console.log('WhatsApp button clicked! Current state:', isOpen);
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    const finalMessage = message.trim() || WHATSAPP_CONFIG.DEFAULT_MESSAGE;
    const encodedMessage = encodeURIComponent(finalMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.PHONE_NUMBER}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Close the chat widget after sending
    setIsOpen(false);
    setMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && window.innerWidth < 768 && (
        <div 
          className="fixed z-[65]"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      <div className={`
        fixed z-[60] transition-all duration-300
        bottom-6 right-6 md:bottom-8 md:right-8
        ${showScrollTop ? 'translate-y-[-80px]' : ''}
      `}>
      {/* Chat Widget */}
      {isOpen && (
        <div 
          id="whatsapp-chat-widget"
          className={`
            fixed inset-0 md:absolute md:inset-auto md:bottom-16 md:right-0 
            bg-white md:w-80 md:rounded-lg md:shadow-2xl md:border md:border-gray-200 
            md:overflow-hidden animate-in slide-in-from-bottom-2 duration-300 z-[9999] flex flex-col
          `}
          style={{
            position: 'fixed',
            zIndex: 9999,
            backgroundColor: 'white'
          }}
        >
          {/* Header */}
          <div className="bg-green-500 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="font-semibold">{WHATSAPP_CONFIG.BUSINESS_NAME}</h3>
                <p className="text-sm text-green-100">{WHATSAPP_CONFIG.RESPONSE_TIME}</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-green-600 p-1 rounded transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Message Area */}
          <div className="p-4 bg-gray-50 flex-1 md:h-64 overflow-y-auto">
            <p className="text-sm text-gray-600 mb-3">
              Hello! 👋 How can we help you today?
            </p>
          </div>
          
          {/* Input Area */}
          <div className="p-4 border-t border-gray-200 mt-auto sticky bottom-0 bg-white">
            <div className="flex gap-2">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 resize-none border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                rows={2}
              />
              <button
                onClick={handleSendMessage}
                className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors self-end"
                title="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            
          </div>
        </div>
      )}
      
      {/* WhatsApp Button */}
      <button
        onClick={toggleChat}
        className={`bg-green-500 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:bg-green-600 hover:scale-110 pointer-events-auto ${
          isOpen ? 'rotate-45' : ''
        }`}
        aria-label={isOpen ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
        style={{ pointerEvents: 'auto' }}
      >
        <MessageCircle className="w-6 h-6" />
      </button>
      
      {/* Pulse Animation for closed state */}
      {!isOpen && (
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25 pointer-events-none" />
      )}
    </div>
    </>
  );
}
