
import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2, MinusCircle, Bot, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

type Message = {
  role: 'system' | 'user' | 'assistant';
  content: string;
};

type UserProfile = {
  gender: string;
  state: string;
  age: string;
  occupation: string | null;
  income: string | null;
};

type SchemeResult = {
  name: string;
  description: string;
  eligibility: string;
  link: string;
};

// Mock OpenAI response function
const mockOpenAIResponse = async (messages: Message[], userProfile: UserProfile): Promise<string> => {
  // This is where you'd make a real API call to OpenAI
  // For now, we'll simulate a response based on the user's profile
  
  await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
  
  let schemes: SchemeResult[] = [];
  
  // Basic logic for scheme recommendations based on user profile
  if (userProfile.state === 'Gujarat') {
    schemes.push({
      name: "Chief Minister's Apprenticeship Scheme",
      description: 'Provides apprenticeship opportunities to youth with a monthly stipend of INR 3,000.',
      eligibility: 'Age: 18-35 years, Residents of Gujarat',
      link: 'https://apprentice.gujarat.gov.in/'
    });
  }
  
  if (userProfile.gender === 'Female') {
    schemes.push({
      name: 'Pradhan Mantri Matru Vandana Yojana (PMMVY)',
      description: 'Maternity benefit program providing partial compensation for wage loss to women during pregnancy and after delivery.',
      eligibility: 'Pregnant women and lactating mothers',
      link: 'https://wcd.nic.in/schemes/pradhan-mantri-matru-vandana-yojana'
    });
  }
  
  // Age-based scheme
  if (parseInt(userProfile.age) >= 60) {
    schemes.push({
      name: 'Pradhan Mantri Vaya Vandana Yojana (PMVVY)',
      description: 'Pension scheme for senior citizens providing assured return of 8% per annum.',
      eligibility: 'Senior citizens aged 60 years and above',
      link: 'https://www.licindia.in/Products/Pension-Plans/Pradhan-Mantri-Vaya-Vandana-Yojana'
    });
  }
  
  // Generic schemes for everyone
  schemes.push({
    name: 'Pradhan Mantri Jan Dhan Yojana',
    description: 'Financial inclusion program offering bank accounts with zero balance facility, accident insurance, and more.',
    eligibility: 'All Indian citizens',
    link: 'https://www.pmjdy.gov.in/'
  });
  
  // Format the response
  let response = `Based on your profile (${userProfile.gender}, ${userProfile.state}, Age: ${userProfile.age}), here are some schemes you may be eligible for:\n\n`;
  
  schemes.forEach((scheme, index) => {
    response += `**${scheme.name}**\n`;
    response += `${scheme.description}\n`;
    response += `**Eligibility:** ${scheme.eligibility}\n`;
    response += `**Official Link:** ${scheme.link}\n\n`;
  });
  
  response += "Is there any specific category of schemes you're interested in learning more about?";
  
  return response;
};

export default function SchemeChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'system',
      content: "Welcome to SchemeSaathi! I'm your assistant for finding government schemes you may be eligible for. Please provide your details to get personalized recommendations."
    }
  ]);
  
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isChatMinimized, setIsChatMinimized] = useState(true);
  const [step, setStep] = useState<'intro' | 'profile' | 'chat'>('intro');
  
  const [userProfile, setUserProfile] = useState<UserProfile>({
    gender: '',
    state: '',
    age: '',
    occupation: null,
    income: null
  });
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  
  const handleProfileChange = (field: keyof UserProfile, value: string) => {
    setUserProfile(prev => ({ ...prev, [field]: value }));
  };
  
  const handleSendMessage = async () => {
    if (input.trim() === '') return;
    
    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      const response = await mockOpenAIResponse(
        [...messages, userMessage], 
        userProfile
      );
      
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: response }
      ]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get a response. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSubmitProfile = async () => {
    if (!userProfile.gender || !userProfile.state || !userProfile.age) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setStep('chat');
    setMessages(prev => [
      ...prev,
      { 
        role: 'user', 
        content: `My profile: Gender: ${userProfile.gender}, State: ${userProfile.state}, Age: ${userProfile.age}${userProfile.occupation ? ', Occupation: ' + userProfile.occupation : ''}${userProfile.income ? ', Income range: ' + userProfile.income : ''}` 
      }
    ]);
    setIsLoading(true);
    
    try {
      const response = await mockOpenAIResponse(
        messages,
        userProfile
      );
      
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: response }
      ]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get scheme recommendations. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleStartChat = () => {
    setStep('profile');
    setIsChatMinimized(false);
  };
  
  const renderMessageContent = (content: string) => {
    // Simple markdown-like rendering
    return content.split('\n').map((line, i) => {
      if (line.startsWith('**') && line.endsWith('**')) {
        return <strong key={i} className="block">{line.slice(2, -2)}</strong>;
      }
      
      if (line.startsWith('**Official Link:**')) {
        const parts = line.split('https://');
        if (parts.length > 1) {
          const url = 'https://' + parts[1].trim();
          return (
            <p key={i}>
              <strong>Official Link: </strong>
              <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gov-blue underline hover:text-gov-blue-light"
              >
                {url}
              </a>
            </p>
          );
        }
      }
      
      return line ? <p key={i} className="mb-1">{line}</p> : <br key={i} />;
    });
  };

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end">
      {/* Chat Header/Button */}
      <button 
        onClick={() => setIsChatMinimized(!isChatMinimized)}
        className="flex items-center bg-gov-blue text-white py-3 px-4 rounded-t-lg shadow-lg"
      >
        <Bot className="mr-2 h-5 w-5" />
        <span className="font-medium">Scheme Eligibility Assistant</span>
        <MinusCircle className="ml-2 h-4 w-4" />
      </button>
      
      {/* Chat Window */}
      {!isChatMinimized && (
        <Card className="w-full sm:w-96 h-[500px] flex flex-col shadow-xl rounded-tl-lg rounded-b-lg">
          <CardContent className="p-0 flex flex-col h-full">
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4">
              {step === 'intro' && (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-16 h-16 bg-gov-blue rounded-full flex items-center justify-center mb-4">
                    <Bot className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">SchemeSaathi Assistant</h3>
                  <p className="text-gray-600 mb-6">
                    Find government schemes tailored to your profile. Get personalized recommendations in minutes.
                  </p>
                  <Button onClick={handleStartChat} className="official-btn">
                    Find Eligible Schemes
                  </Button>
                </div>
              )}
              
              {step === 'profile' && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Your Profile</h3>
                  <p className="text-sm text-gray-500">
                    Fill in your details to get personalized scheme recommendations.
                    <span className="text-red-500">*</span> indicates required fields.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="gender">Gender <span className="text-red-500">*</span></Label>
                      <RadioGroup 
                        value={userProfile.gender}
                        onValueChange={(value) => handleProfileChange('gender', value)}
                        className="flex space-x-4 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Male" id="gender-male" />
                          <Label htmlFor="gender-male">Male</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Female" id="gender-female" />
                          <Label htmlFor="gender-female">Female</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Other" id="gender-other" />
                          <Label htmlFor="gender-other">Other</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div>
                      <Label htmlFor="state">State <span className="text-red-500">*</span></Label>
                      <Select value={userProfile.state} onValueChange={(value) => handleProfileChange('state', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Andhra Pradesh">Andhra Pradesh</SelectItem>
                          <SelectItem value="Arunachal Pradesh">Arunachal Pradesh</SelectItem>
                          <SelectItem value="Assam">Assam</SelectItem>
                          <SelectItem value="Bihar">Bihar</SelectItem>
                          <SelectItem value="Chhattisgarh">Chhattisgarh</SelectItem>
                          <SelectItem value="Goa">Goa</SelectItem>
                          <SelectItem value="Gujarat">Gujarat</SelectItem>
                          <SelectItem value="Haryana">Haryana</SelectItem>
                          <SelectItem value="Himachal Pradesh">Himachal Pradesh</SelectItem>
                          <SelectItem value="Jharkhand">Jharkhand</SelectItem>
                          <SelectItem value="Karnataka">Karnataka</SelectItem>
                          <SelectItem value="Kerala">Kerala</SelectItem>
                          <SelectItem value="Madhya Pradesh">Madhya Pradesh</SelectItem>
                          <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                          <SelectItem value="Manipur">Manipur</SelectItem>
                          <SelectItem value="Meghalaya">Meghalaya</SelectItem>
                          <SelectItem value="Mizoram">Mizoram</SelectItem>
                          <SelectItem value="Nagaland">Nagaland</SelectItem>
                          <SelectItem value="Odisha">Odisha</SelectItem>
                          <SelectItem value="Punjab">Punjab</SelectItem>
                          <SelectItem value="Rajasthan">Rajasthan</SelectItem>
                          <SelectItem value="Sikkim">Sikkim</SelectItem>
                          <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                          <SelectItem value="Telangana">Telangana</SelectItem>
                          <SelectItem value="Tripura">Tripura</SelectItem>
                          <SelectItem value="Uttar Pradesh">Uttar Pradesh</SelectItem>
                          <SelectItem value="Uttarakhand">Uttarakhand</SelectItem>
                          <SelectItem value="West Bengal">West Bengal</SelectItem>
                          <SelectItem value="Delhi">Delhi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="age">Age <span className="text-red-500">*</span></Label>
                      <Input 
                        id="age" 
                        type="number" 
                        placeholder="Enter your age" 
                        value={userProfile.age}
                        onChange={(e) => handleProfileChange('age', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    
                    <Button onClick={handleSubmitProfile} className="w-full official-btn">
                      Get Recommendations
                    </Button>
                  </div>
                </div>
              )}
              
              {step === 'chat' && (
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    message.role !== 'system' && (
                      <div 
                        key={index} 
                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div 
                          className={`max-w-[80%] rounded-lg p-3 ${
                            message.role === 'user' 
                              ? 'bg-gov-blue text-white rounded-tr-none' 
                              : 'bg-gray-100 text-gray-800 rounded-tl-none'
                          }`}
                        >
                          <div className="flex items-center mb-1">
                            {message.role === 'assistant' ? (
                              <>
                                <Bot size={16} className="mr-1" />
                                <span className="text-xs font-medium">SchemeSaathi</span>
                              </>
                            ) : (
                              <>
                                <User size={16} className="mr-1" />
                                <span className="text-xs font-medium">You</span>
                              </>
                            )}
                          </div>
                          <div className={`text-sm ${message.role === 'assistant' ? 'text-gray-800' : ''}`}>
                            {renderMessageContent(message.content)}
                          </div>
                        </div>
                      </div>
                    )
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 rounded-lg p-4 max-w-[80%] flex items-center">
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                        <p className="text-sm text-gray-800">Finding schemes for you...</p>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>
            
            {/* Input Area */}
            {step === 'chat' && (
              <div className="p-3 border-t">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Ask about government schemes..."
                    value={input}
                    onChange={handleInputChange}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    disabled={isLoading}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={isLoading || !input.trim()}
                    size="icon"
                    className="bg-gov-blue hover:bg-gov-blue-dark"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
