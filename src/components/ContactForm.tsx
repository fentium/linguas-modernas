
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Nome precisa ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Email inválido." }),
  phone: z.string().min(10, { message: "Telefone inválido." }),
  course: z.string().min(1, { message: "Selecione um curso." }),
  message: z.string().min(5, { message: "Mensagem precisa ter pelo menos 5 caracteres." }),
  subject: z.string().optional(),
});

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
      subject: "",
    },
  });

  // Update the subject whenever the name changes
  const watchName = form.watch("name");
  
  useEffect(() => {
    if (watchName) {
      form.setValue("subject", `Message from ${watchName} from Webpage`);
    } else {
      form.setValue("subject", "Message from Website");
    }
  }, [watchName, form]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Using the verified access key for Web3Forms provided by the user
      // This is a public API key for Web3Forms and can be included in the code
      const accessKey = "0f13cba3-f682-4839-8ef8-bff475bc569e";
      
      const formData = {
        access_key: accessKey,
        subject: values.subject || `Message from ${values.name} from Webpage`,
        from_name: "Formulário Línguas Modernas",
        // Removed the from_email field
        reply_to: values.email, // Ensures replies go to the user
        to_email: "contato@linguasmodernas.com.br",
        message: `
          Nome: ${values.name}
          Email: ${values.email}
          Telefone: ${values.phone}
          Curso: ${values.course}
          Mensagem: ${values.message}
        `,
        // Include individual fields for better organization in Web3Forms dashboard
        name: values.name,
        email: values.email,
        phone: values.phone,
        course: values.course,
      };
      
      console.log("Sending form data:", formData);
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      console.log("Form submission result:", result);
      
      if (result.success) {
        form.reset();
        toast({
          title: "Mensagem enviada com sucesso!",
          description: "Entraremos em contato em breve.",
        });
      } else {
        console.error("Error submitting form:", result);
        throw new Error(result.message || "Falha ao enviar formulário");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Hidden subject field that is automatically populated */}
        <input 
          type="hidden" 
          {...form.register("subject")} 
        />
        
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Seu nome completo"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input 
                  type="email"
                  placeholder="seu@email.com"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Telefone</FormLabel>
              <FormControl>
                <Input 
                  placeholder="(21) 00000-0000"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="course"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Curso de Interesse</FormLabel>
              <FormControl>
                <select 
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lm-blue"
                  {...field}
                >
                  <option value="">Selecione um curso</option>
                  <option value="ingles_conversacional">Inglês Conversacional</option>
                  <option value="ingles_negocios">Inglês para Negócios</option>
                  <option value="ingles_exames">Preparação para Exames</option>
                  <option value="ingles_viagem">Inglês para Viagem</option>
                  <option value="ingles_entrevista">Preparação para Entrevista</option>
                  <option value="italiano_conversacional">Italiano Conversacional</option>
                  <option value="italiano_cidadania">Preparação para Cidadania - Italiano</option>
                  <option value="outro">Outro</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Mensagem</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Como podemos ajudar você?" 
                  className="min-h-[120px]"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="bg-lm-red hover:bg-red-700 text-white w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
