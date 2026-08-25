import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { sendVastuQuery } from '../services/geminiService';
import { ChatMessage } from '../types';
import Button from './Button';

const VastuChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Namaste! I am the VastuCraft AI Assistant. Ask me about Vastu directions or our smart construction services.', isError: false }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!query.trim()) return;

    const userMsg = query;
    setQuery('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await sendVastuQuery(userMsg);

    setMessages(prev => [...prev, { 
      role: 'model', 
      text: response.text, 
      isError: response.isError 
    }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-72 sm:w-80 h-[400px] bg-white rounded-xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="bg-primary p-3 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-accent" />
              <h3 className="font-medium text-sm">Vastu AI Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-slate-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-2.5 rounded-lg text-xs sm:text-sm ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white rounded-br-none' 
                    : msg.isError
                      ? 'bg-red-50 border border-red-200 text-red-800 rounded-bl-none shadow-sm flex items-start gap-2'
                      : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-sm'
                }`}>
                  {msg.isError && <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />}
                  <span>{msg.text}</span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 p-2.5 rounded-lg rounded-bl-none shadow-sm">
                  <Loader2 className="h-4 w-4 animate-spin text-secondary" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-slate-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about Vastu..."
                className="flex-1 border border-slate-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:border-primary disabled:bg-slate-50 disabled:text-slate-500"
                disabled={isLoading}
              />
              <Button size="sm" onClick={handleSend} disabled={isLoading || !query.trim()} className="px-3">
                <Send size={14} />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 bg-secondary hover:bg-amber-700 text-white rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-amber-300"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};

export default VastuChatWidget;