import { useState } from "react";
import { Mail, Linkedin, Github, SquareChevronRight, Send, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const contactInfo = [
  {
    icon: Mail,
    label: "email",
    value: "vinaydattarao@gmail.com",
    href: "mailto:vinaydattarao@gmail.com",
    color: "primary"
  },
  {
    icon: Linkedin,
    label: "linkedin",
    value: "/in/vinay-datta",
    href: "https://www.linkedin.com/in/vinay-datta-rao-gandra-2a32612a5/",
    color: "secondary"
  },
  {
    icon: Github,
    label: "github",
    value: "@vinaydattarao",
    href: "https://github.com/VinayDattarao",
    color: "accent"
  },
  {
    icon: SquareChevronRight,
    label: "hackerrank",
    value: "@vinay_datta",
    href: "https://www.hackerrank.com/profile/vinaydattarao",
    color: "primary"
  }
];

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center glow-text font-mono" data-testid="contact-title">
            contact.init()
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 font-mono text-primary">
                  let's_connect() {'{'}
                </h3>
                <p className="text-lg text-muted-foreground mb-6" data-testid="contact-description">
                  Ready to collaborate on something amazing? , 
                  I'm always excited to connect with fellow developers and innovators.
                </p>
                <div className="font-mono text-muted-foreground">{'}'}</div>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center space-x-4 group cursor-pointer transition-all hover:translate-x-2"
                    data-testid={`contact-info-${info.label}`}
                  >
                    <div className={`w-12 h-12 bg-${info.color}/20 rounded-lg flex items-center justify-center group-hover:bg-${info.color}/30 transition-colors`}>
                      <info.icon className={`text-${info.color} h-5 w-5`} />
                    </div>
                    <div>
                      <div className="font-mono text-sm text-muted-foreground">{info.label}</div>
                      <div className="font-mono">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="glow-border rounded-lg p-6 bg-card/50">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-sm text-muted-foreground">name:</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            placeholder="your_name"
                            className="bg-input border-border focus:ring-primary"
                            data-testid="input-name"
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
                      <FormItem>
                        <FormLabel className="font-mono text-sm text-muted-foreground">email:</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            type="email"
                            placeholder="your@email.com"
                            className="bg-input border-border focus:ring-primary"
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-sm text-muted-foreground">subject:</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            placeholder="project_collaboration"
                            className="bg-input border-border focus:ring-primary"
                            data-testid="input-subject"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-sm text-muted-foreground">message:</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field}
                            rows={5}
                            placeholder="let's build something amazing together..."
                            className="bg-input border-border focus:ring-primary resize-none"
                            data-testid="textarea-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <button 
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full neon-button font-mono flex items-center justify-center"
                    data-testid="button-send-message"
                  >
                    {contactMutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        send_message()
                      </>
                    )}
                  </button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
