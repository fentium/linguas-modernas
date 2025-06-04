import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CourseCard from '@/components/CourseCard';
import TestimonialCard from '@/components/TestimonialCard';
import ContactForm from '@/components/ContactForm';
import AnimatedCounter from '@/components/AnimatedCounter';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock, GraduationCap, Languages, FileText } from 'lucide-react';

const Index = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  const scrollToCourses = (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const coursesSection = document.getElementById('cursos');
    if (coursesSection) {
      coursesSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section id="inicio" className="pt-28 pb-16 md:pt-40 md:pb-24 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 opacity-0 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-lm-blue leading-tight">
                Aprenda Línguas com <span className="text-lm-red">Confiança</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700">
                Cursos online para todo o Brasil e presenciais em Copacabana!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-lm-red hover:bg-red-700 text-white px-6 py-6" onClick={scrollToContact}>
                  Agende uma Aula Grátis
                </Button>
                <Button variant="outline" className="border-lm-blue text-lm-blue hover:bg-lm-blue hover:text-white px-6 py-6" onClick={scrollToCourses}>
                  Conheça os Cursos
                </Button>
              </div>
            </div>
            <div className="relative opacity-0 animate-fade-in animate-delay-300">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img alt="Estudantes aprendendo inglês" className="w-full h-auto" src="/lovable-uploads/fcdd813d-6ec1-4cfa-8cd9-dcb1227049bf.jpg" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-lm-blue text-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="font-bold">Desde 2008</p>
                <p>em Copacabana</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 opacity-0 animate-fade-in">
              <p className="text-3xl md:text-4xl font-bold text-lm-blue">
                <AnimatedCounter end={1200} duration={2000} />
              </p>
              <p className="text-gray-600">Alunos Formados</p>
            </div>
            <div className="text-center p-4 opacity-0 animate-fade-in animate-delay-300">
              <p className="text-3xl md:text-4xl font-bold text-lm-blue">
                <AnimatedCounter end={15} duration={1500} suffix="+" />
              </p>
              <p className="text-gray-600">Anos de Experiência</p>
            </div>
            <div className="text-center p-4 opacity-0 animate-fade-in animate-delay-500">
              <p className="text-3xl md:text-4xl font-bold text-lm-blue">
                <AnimatedCounter end={98} duration={1800} suffix="%" />
              </p>
              <p className="text-gray-600">Satisfação</p>
            </div>
            <div className="text-center p-4 opacity-0 animate-fade-in animate-delay-700">
              <p className="text-3xl md:text-4xl font-bold text-lm-blue">
                <AnimatedCounter end={80} duration={1600} suffix="%" />
              </p>
              <p className="text-gray-600">Cursos Online</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quem Somos Section */}
      <section id="quem-somos" className="section-padding bg-gradient-to-r from-blue-600 to-lm-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quem Somos</h2>
            <div className="w-20 h-1 bg-lm-yellow mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Nossa Missão</h3>
              <p className="text-blue-100">
                Na Línguas Modernas, acreditamos que aprender inglês deve ser uma jornada enriquecedora e personalizada. 
                Desde 2008, temos ajudado nossos alunos a conquistarem fluência no idioma através de uma 
                Desde 2008, temos ajudado nossos alunos a conquistarem fluência no idioma através de uma 
                metodologia única e professores qualificadosxxxx.                
              </p>
              <p className="text-blue-100">
                Fundada pela Diretora Alessia Traversa, nosso objetivo é proporcionar um ambiente acolhedor onde cada estudante possa desenvolver suas 
                habilidades linguísticas no seu próprio ritmo, com conteúdos relevantes para suas necessidades pessoais 
                e profissionais.
              </p>
              
              <h3 className="text-2xl font-semibold pt-4">Nossa Abordagem</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="text-lm-yellow mr-2 mt-1 flex-shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.25 4.25L6 11.5L2.75 8.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Professores nativos e brasileiros com certificação internacional</span>
                </li>
                <li className="flex items-start">
                  <svg className="text-lm-yellow mr-2 mt-1 flex-shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.25 4.25L6 11.5L2.75 8.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Metodologia comunicativa com foco na fluência</span>
                </li>
                <li className="flex items-start">
                  <svg className="text-lm-yellow mr-2 mt-1 flex-shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.25 4.25L6 11.5L2.75 8.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Turmas reduzidas para atendimento personalizado</span>
                </li>
                <li className="flex items-start">
                  <svg className="text-lm-yellow mr-2 mt-1 flex-shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.25 4.25L6 11.5L2.75 8.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Plataforma online exclusiva para prática complementar</span>
                </li>
                <li className="flex items-start">
                  <svg className="text-lm-yellow mr-2 mt-1 flex-shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.25 4.25L6 11.5L2.75 8.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Maioria dos cursos disponíveis online para todo o Brasil</span>
                </li>
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Estudantes em sala de aula" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg mt-6">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="Estudante utilizando laptop" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Grupo de estudos" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg mt-6">
                <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" alt="Aula online" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Cursos Section */}
      <section id="cursos" className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <a href="#cursos" onClick={scrollToCourses}>
              <h2 className="text-3xl md:text-4xl font-bold text-lm-blue mb-4 hover:text-lm-red transition-colors">Nossos Cursos</h2>
            </a>
            <div className="w-20 h-1 bg-lm-red mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos cursos para todos os níveis e objetivos, com metodologia moderna e focada em resultados. A maioria dos cursos disponíveis 100% online!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CourseCard title="Inglês Conversacional" description="Desenvolva sua fluência para comunicação cotidiana" icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                  <path d="M8 9H16M8 13H14M21 12C21 16.9706 16.9706 21 12 21C9.69494 21 7.59227 20.1334 6 18.7083L3 19L4.3 16.7C3.4 15.3 3 13.7 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>} features={["Foco em situações do dia a dia", "Prática intensiva de conversação", "Professores nativos e brasileiros", "Turmas de no máximo 6 alunos"]} isOnline={true} onSaibaMaisClick={scrollToContact} />
            
            <CourseCard title="Inglês para Negócios" description="Aprimore suas habilidades para o ambiente corporativo" icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                  <path d="M21 13.2554C21 16.4166 21 18 18 18M3 13.2554C3 16.4166 3 18 6 18M18 8.8H6C4.89543 8.8 4 9.69543 4 10.8V18H20V10.8C20 9.69543 19.1046 8.8 18 8.8ZM14 18V20H10V18H14ZM12 3L14.5 7H9.5L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>} features={["Vocabulário corporativo", "Reuniões e apresentações em inglês", "Redação de emails e relatórios", "Simulações de situações reais"]} isOnline={true} onSaibaMaisClick={scrollToContact} />
            
            <CourseCard title="Preparação para Exames" description="Prepare-se para exames de proficiência internacionais" icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                  <path d="M9 3V1M15 3V1M9 22V20M15 22V20M16 3H8C6.89543 3 6 3.89543 6 5V16C6 17.1046 6.89543 18 8 18H16C17.1046 18 18 17.1046 18 16V5C18 3.89543 17.1046 3 16 3ZM12 9H9V12H12V9ZM15 9H12V12H15V9ZM9 12H6V15H9V12ZM9 15H6V18H9V15ZM12 12H9V15H12V12ZM12 15H9V18H12V15ZM15 12H12V15H15V12ZM15 15H12V18H15V15ZM18 9H15V12H18V9ZM18 12H15V15H18V12ZM18 15H15V18H18V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>} features={["TOEFL, IELTS, Cambridge e mais", "Simulados e material exclusivo", "Técnicas específicas para cada exame", "Alto índice de aprovação"]} isOnline={true} onSaibaMaisClick={scrollToContact} />
            
            <CourseCard title="Preparação para Entrevista" description="Tenha confiança para encarar entrevistas em inglês com segurança" 
                icon={<GraduationCap className="w-8 h-8" />} 
                features={[
                  "Prática de respostas comuns e perguntas desafiadoras", 
                  "Técnicas para destacar suas habilidades e experiências", 
                  "Simulações realistas com feedback personalizado", 
                  "Orientações culturais e linguísticas para entrevistas internacionais"
                ]} 
                isOnline={true} 
                onSaibaMaisClick={scrollToContact} />
            
            <CourseCard title="Italiano Conversacional" description="Fale com naturalidade e se conecte com a cultura italiana" 
                icon={<Languages className="w-8 h-8" />} 
                features={[
                  "Foco em situações cotidianas na Itália", 
                  "Vocabulário e expressões regionais", 
                  "Aulas com professores nativos e fluentes", 
                  "Turmas reduzidas para máxima interação"
                ]} 
                isOnline={true} 
                onSaibaMaisClick={scrollToContact} />
            
            <CourseCard title="Preparação do Cidadão – Italiano" description="Domine o italiano necessário para o processo de cidadania" 
                icon={<FileText className="w-8 h-8" />} 
                features={[
                  "Conteúdo voltado para exames de cidadania (B1 e outros)", 
                  "Prática de compreensão oral e escrita", 
                  "Simulados de entrevistas e provas oficiais", 
                  "Aulas focadas em história, cultura e vocabulário jurídico"
                ]} 
                isOnline={true} 
                onSaibaMaisClick={scrollToContact} />
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-lm-blue hover:bg-blue-800 text-white px-6" onClick={scrollToContact}>
              Saiba Mais
            </Button>
          </div>
        </div>
      </section>
      
      {/* Online Learning CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" alt="Estudante em aula online" className="rounded-lg shadow-lg" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-lm-blue">Estude de Onde Estiver</h2>
              <p className="text-lg text-gray-700">
                A maioria dos nossos cursos está disponível 100% online, permitindo que você aprenda inglês de qualquer lugar do Brasil, com a mesma qualidade e atenção personalizada que oferecemos presencialmente em Copacabana.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="text-lm-blue mr-2 mt-1 flex-shrink-0" width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.25 4.25L6 11.5L2.75 8.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Material didático digital completo</span>
                </li>
                <li className="flex items-start">
                  <svg className="text-lm-blue mr-2 mt-1 flex-shrink-0" width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.25 4.25L6 11.5L2.75 8.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Turmas reduzidas para máxima interação</span>
                </li>
                <li className="flex items-start">
                  <svg className="text-lm-blue mr-2 mt-1 flex-shrink-0" width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.25 4.25L6 11.5L2.75 8.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Horários flexíveis para maior conveniência</span>
                </li>
              </ul>
              <Button className="bg-lm-blue hover:bg-blue-700 text-white px-6 py-4" onClick={scrollToContact}>
                Conheça Nossos Cursos Online
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-lm-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Pronto para começar sua jornada de aprendizado?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Agende uma aula experimental gratuita online ou presencial e descubra como podemos ajudá-lo a alcançar fluência em inglês.
          </p>
          <Button className="bg-white text-lm-red hover:bg-gray-100 hover:text-red-700 px-6 py-6 text-lg" onClick={scrollToContact}>
            Agende sua Aula Grátis
          </Button>
        </div>
      </section>
      
      {/* Depoimentos Section */}
      <section id="depoimentos" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-lm-blue mb-4">Depoimentos</h2>
            <div className="w-20 h-1 bg-lm-red mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Veja o que nossos alunos dizem sobre a experiência de aprender inglês na Línguas Modernas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard name="Ana Oliveira" role="Estudante de Inglês Conversacional" testimonial="As aulas são dinâmicas e os professores sempre nos incentivam a falar. Em poucos meses, ganhei confiança para me comunicar em inglês." />
            
            <TestimonialCard name="Rafael Santos" role="Aluno de Inglês para Negócios" testimonial="O curso de Business English foi fundamental para minha promoção. Agora consigo participar de reuniões internacionais com confiança." />
            
            <TestimonialCard name="Mariana Costa" role="Aprovada no TOEFL" testimonial="Graças à preparação na Línguas Modernas, consegui a pontuação necessária no TOEFL para meu intercâmbio. Os simulados fizeram toda a diferença!" />
          </div>
        </div>
      </section>
      
      {/* Contato Section */}
      <section id="contato" className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-lm-blue mb-4">Entre em Contato</h2>
            <div className="w-20 h-1 bg-lm-red mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estamos à disposição para esclarecer suas dúvidas e ajudá-lo a encontrar o curso ideal para você, seja online ou presencial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-lm-blue">Informações de Contato</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-lm-blue rounded-full p-3 mr-4">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lm-blue">Nosso Endereço</h4>
                    <p className="text-gray-600">Copacabana, Rio de Janeiro - RJ</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-lm-blue rounded-full p-3 mr-4">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lm-blue">Telefone</h4>
                    <a href="tel:+5521981730250" className="text-gray-600 hover:text-lm-blue transition-colors">(21) 98173-0250</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-lm-blue rounded-full p-3 mr-4">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lm-blue">Email</h4>
                    <a href="mailto:contato@linguasmodernas.com.br" className="text-gray-600 hover:text-lm-blue transition-colors">contato@linguasmodernas.com.br</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-lm-blue rounded-full p-3 mr-4">
                    <Clock size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lm-blue">Horário de Funcionamento</h4>
                    <p className="text-gray-600">Segunda a Sexta: 8:00 - 20:00</p>
                    <p className="text-gray-600">Sábados: 9:00 - 14:00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.3719129992714!2d-43.18724382475373!3d-22.968459544573975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd5a475bc28a1%3A0xd5b9a582849c16cb!2sL%C3%ADnguas%20Modernas!5e0!3m2!1spt-BR!2sbr!4v1662566604691!5m2!1spt-BR!2sbr" width="100%" height="300" style={{
                border: 0
              }} allowFullScreen loading="lazy" title="Localização Línguas Modernas" className="rounded-lg shadow-md" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-lm-blue mb-6">Envie-nos uma Mensagem</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default Index;
