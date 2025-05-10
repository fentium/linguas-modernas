
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you'd handle form submission here
    // For demo purposes, we'll just show a success toast
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve.",
    });
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Nome</Label>
        <Input 
          id="name" 
          placeholder="Seu nome completo" 
          required 
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input 
          id="email" 
          type="email" 
          placeholder="seu@email.com" 
          required 
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone">Telefone</Label>
        <Input 
          id="phone" 
          placeholder="(21) 00000-0000" 
          required 
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="course">Curso de Interesse</Label>
        <select 
          id="course" 
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lm-blue"
          required
        >
          <option value="">Selecione um curso</option>
          <option value="conversacional">Inglês Conversacional</option>
          <option value="negocios">Inglês para Negócios</option>
          <option value="exames">Preparação para Exames</option>
          <option value="viagem">Inglês para Viagem</option>
          <option value="outro">Outro</option>
        </select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Mensagem</Label>
        <Textarea 
          id="message" 
          placeholder="Como podemos ajudar você?" 
          className="min-h-[120px]"
          required 
        />
      </div>
      
      <Button type="submit" className="bg-lm-red hover:bg-red-700 text-white w-full">
        Enviar Mensagem
      </Button>
    </form>
  );
};

export default ContactForm;
