'use client';

import emailjs from "@emailjs/browser";
import Button from "@/app/components/button/button";
import { useEffect, useRef, useState } from "react";

// EmailJS keys
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;

declare global {
    interface Window {
        grecaptcha: {
            ready: (callback: () => void) => void;
            execute: (siteKey: string, options: { action: string }) => Promise<string>;
        }
    }
}

interface ContactFormProps {
  translations: {
    name: string;
    email: string;
    message: string;
    button: string;
    buttonLoading: string;
    successMessage: string;
    errorMessage: string;
  }
}

export default function ContactForm({ translations }: ContactFormProps) {
    const formRef = useRef<HTMLFormElement | null>(null);

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadRecaptcha = () => {
            const script = document.createElement('script');
            script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
            script.async = true;
            document.body.appendChild(script);
        };
        loadRecaptcha();
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        window.grecaptcha.ready(() => {
            window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {action: 'submit'}).then((token) => {
                emailjs.send(
                    EMAILJS_SERVICE_ID,
                    EMAILJS_TEMPLATE_ID,
                    {
                        from_name: form.name,
                        from_email: form.email,
                        message: form.message,
                        'g-recaptcha-response': token,
                    },
                    EMAILJS_PUBLIC_KEY
                )
                .then(() => {
                    setLoading(false);
                    alert(translations.successMessage);
                    setForm({ name: '', email: '', message: '' });
                },
                () => {
                    setLoading(false);
                    alert(translations.errorMessage);
                })
            });
        });

    };


  return (
    <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-8 pb-6 w-full lg:w-3/4"

    >
      <div className="flex flex-col gap-2">
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          placeholder={translations.name}
          className="border border-[#767471] border-opacity-30 p-2 bg-transparent text-black"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          placeholder={translations.email}
          className="border border-[#767471] border-opacity-30 p-2 bg-transparent text-black"
          onChange={handleChange}
          required
        />
        <textarea
          id="message"
          name="message"
          value={form.message}
          placeholder={translations.message}
          className="h-20 border border-[#767471] border-opacity-30 p-2 bg-transparent text-black"
          onChange={handleChange}
          required
        />
        <Button
            className="self-center mt-4"
            type="submit"
        >
          {loading ? translations.buttonLoading : translations.button}
        </Button>
      </div>
    </form>
  );
}