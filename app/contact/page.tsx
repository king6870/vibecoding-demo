'use client';

import { useState } from 'react';
import { ContactFormData } from '@/lib/types';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic to be implemented
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 transition-colors">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/30 p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent
                           placeholder:text-gray-400 dark:placeholder:text-gray-500
                           transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent
                           placeholder:text-gray-400 dark:placeholder:text-gray-500
                           transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent
                           placeholder:text-gray-400 dark:placeholder:text-gray-500
                           transition-colors"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent
                           placeholder:text-gray-400 dark:placeholder:text-gray-500
                           resize-none transition-colors"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <Button type="submit" variant="primary" className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/30 p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="mr-2">📍</span> Our Location
              </h3>
              <address className="not-italic text-gray-600 dark:text-gray-400">
                <p className="mb-1">123 Business Street</p>
                <p className="mb-1">Suite 100</p>
                <p>City, State 12345</p>
                <p>United States</p>
              </address>
            </div>

            {/* Contact Details */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/30 p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="mr-2">📞</span> Contact Details
              </h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-400">
                <p>
                  <span className="font-medium">Phone:</span>{' '}
                  <a href="tel:+15551234567" className="text-blue-600 dark:text-blue-400 hover:underline transition-colors">
                    +1 (555) 123-4567
                  </a>
                </p>
                <p>
                  <span className="font-medium">Email:</span>{' '}
                  <a href="mailto:info@business.com" className="text-blue-600 dark:text-blue-400 hover:underline transition-colors">
                    info@business.com
                  </a>
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/30 p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="mr-2">🕒</span> Business Hours
              </h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/30 p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="mr-2">🌐</span> Follow Us
              </h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-700 dark:hover:bg-blue-600 transition-all hover:scale-110"
                  aria-label="Facebook"
                >
                  f
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-blue-400 dark:bg-blue-300 text-white rounded-full flex items-center justify-center hover:bg-blue-500 dark:hover:bg-blue-400 transition-all hover:scale-110"
                  aria-label="Twitter"
                >
                  𝕏
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-blue-700 dark:bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-800 dark:hover:bg-blue-700 transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  in
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-pink-600 dark:bg-pink-500 text-white rounded-full flex items-center justify-center hover:bg-pink-700 dark:hover:bg-pink-600 transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  📷
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
