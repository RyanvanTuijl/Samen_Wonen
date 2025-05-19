'use client';

import React, { useState } from 'react';
import { useTranslation } from '../../i18n/client'; // Client-side hook for interactive elements
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import PageHeader from '../../components/PageHeader';
import AnimatedSection from '../../components/AnimatedSection';
import ImageWithAnimation from '../../components/ImageWithAnimation';
import ButtonLink from '../../components/ButtonLink';

// Dynamic import of Map component with no SSR to avoid hydration issues
const Map = dynamic(() => import('../../components/Map'), { ssr: false });

export default function ContactPage() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'nl';
  const { t } = useTranslation(locale, 'contact');

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    role: 'general' // Default role
  });
  
  // Form submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) errors.name = t('error_name_required') || 'Name is required';
    
    if (!formData.email.trim()) {
      errors.email = t('error_email_required') || 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = t('error_email_invalid') || 'Email is invalid';
    }
    
    if (!formData.subject.trim()) errors.subject = t('error_subject_required') || 'Subject is required';
    if (!formData.message.trim()) errors.message = t('error_message_required') || 'Message is required';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call with delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          role: 'general'
        });
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  // Office location for the map
  const officeLocation = { lat: 51.560596, lng: 5.083730 }; // Tilburg coordinates
  
  // Create a location object for the Map component
  const contactLocations = [
    {
      id: 999, // Unique ID for the contact location
      name: "Samenwonen Office",
      city: "Tilburg",
      type: "active",
      coordinates: officeLocation,
      description: "Our main office in Tilburg",
      rooms: 0, // Not relevant for office
      amenities: []
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header with Background Image */}
      <PageHeader
        title={t('page_title')}
        subtitle={t('page_subtitle')}
        tagline={t('get_in_touch') || 'Get in touch with our team'}
        backgroundImage="/images/headers/contact-header.png"
      />

      {/* Contact Cards Section */}
      <section className="py-12 bg-gray-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary-100 rounded-full opacity-40 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">{t('reach_us') || 'Ways to Reach Us'}</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">{t('reach_us_desc') || 'Choose the most convenient way to get in touch with our team. We\'re always here to help.'}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 border border-gray-100 group hover:shadow-xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-50 rounded-full group-hover:scale-110 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mb-4 mx-auto relative z-10 shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 relative z-10">{t('email_us') || 'Email Us'}</h3>
              <p className="text-center text-gray-600 relative z-10">info@siteship.org</p>
              <div className="text-center mt-4 relative z-10">
                <a href="mailto:info@siteship.org" className="text-primary-500 hover:text-primary-700 font-medium transition-colors inline-flex items-center">
                  {t('send_email') || 'Send an email'} 
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Phone Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 border border-gray-100 group hover:shadow-xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary-50 rounded-full group-hover:scale-110 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mb-4 mx-auto relative z-10 shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 relative z-10">{t('call_us') || 'Call Us'}</h3>
              <p className="text-center text-gray-600 relative z-10">+31 123 456 789</p>
              <div className="text-center mt-4 relative z-10">
                <a href="tel:+31123456789" className="text-secondary-500 hover:text-secondary-700 font-medium transition-colors inline-flex items-center">
                  {t('call_now') || 'Call Now'} 
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Visit Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 border border-gray-100 group hover:shadow-xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-50 rounded-full group-hover:scale-110 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mb-4 mx-auto relative z-10 shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 relative z-10">{t('visit_us') || 'Visit Us'}</h3>
              <p className="text-center text-gray-600 relative z-10">Tilburg, Netherlands</p>
              <div className="text-center mt-4 relative z-10">
                <a href="https://maps.google.com/?q=Tilburg,Netherlands" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:text-accent-800 font-medium transition-colors inline-flex items-center">
                  {t('get_directions') || 'Get directions'} 
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section - Two Columns */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Column 1: Contact Form */}
            <AnimatedSection animation="fade-in-up" delay={100}>
              <div id="contact-form" className="bg-white rounded-xl shadow-xl p-8 border border-gray-100 transition-all duration-300 hover:shadow-2xl">
                <div className="inline-block p-2 px-5 bg-primary-50 text-primary-500 rounded-full mb-4">
                  <span className="text-sm font-medium">{t('form_animate_title') || 'Let\'s Start a Conversation'}</span>
                </div>
                <h2 className="text-3xl font-bold mb-2 text-gray-800">{t('form_title') || 'Send us a message'}</h2>
                <p className="text-gray-600 mb-8">{t('form_description') || 'Fill out the form below and we will get back to you as soon as possible.'}</p>
              
                {submitSuccess ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center animate-fade-in">
                    <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">{t('success_title') || 'Message Sent!'}</h3>
                    <p className="text-green-600">{t('success_message') || 'Thank you for contacting us. We will respond to your message as soon as possible.'}</p>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t('form_name') || 'Your Name'}</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full p-3 border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-primary-500 focus:border-primary-500`}
                          placeholder=""
                        />
                        {formErrors.name && <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t('form_email') || 'Your Email'}</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full p-3 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-primary-500 focus:border-primary-500`}
                          placeholder=""
                        />
                        {formErrors.email && <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">{t('form_role') || 'I am a'}</label>
                      <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white"
                      >
                        <option value="general">{t('role_general') || 'General Inquiry'}</option>
                        <option value="senior">{t('role_senior') || 'Senior looking to share my home'}</option>
                        <option value="student">{t('role_student') || 'Student looking for accommodation'}</option>
                        <option value="facility">{t('role_facility') || 'Representative from a care facility'}</option>
                        <option value="municipality">{t('role_municipality') || 'Representative from a municipality'}</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">{t('form_subject') || 'Subject'}</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full p-3 border ${formErrors.subject ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-primary-500 focus:border-primary-500`}
                        placeholder=""
                      />
                      {formErrors.subject && <p className="mt-1 text-sm text-red-500">{formErrors.subject}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t('form_message') || 'Your Message'}</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className={`w-full p-3 border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-primary-500 focus:border-primary-500`}
                        placeholder=""
                      ></textarea>
                      {formErrors.message && <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>}
                    </div>
                    
                    <div>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className={`w-full rounded-lg font-medium px-6 py-4 bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            {t('form_submitting') || 'Sending...'}
                          </div>
                        ) : (
                          t('form_submit') || 'Send Message'
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </AnimatedSection>
            
            {/* Column 2: Location & Additional Info */}
            <div>
              {/* Map */}
              <AnimatedSection animation="fade-in-left" delay={150}>
                <div className="rounded-xl overflow-hidden border border-gray-200 shadow-xl mb-8 hover:shadow-2xl transition-all duration-300" style={{ height: "480px" }}>
                  <div className="absolute top-0 left-0 w-full z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-white opacity-90">
                      <path fill="currentColor" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,186.7C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                    </svg>
                  </div>
                  {/* Using the Map component in the format it expects */}
                  <Map />
                </div>
              </AnimatedSection>
                {/* Office Info */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-full -mt-12 -mr-12 z-0 group-hover:scale-125 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary-50 rounded-full -mb-16 -ml-16 z-0 group-hover:scale-125 transition-transform duration-500"></div>
                
                {/* Office Image */}                <div className="mb-6 relative rounded-xl overflow-hidden shadow-lg" style={{ height: "200px" }}>
                  <Image 
                    src="/images/contact/office-alt.png" 
                    alt="Our Office" 
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                </div>
                
                <div className="relative z-10">
                  <AnimatedSection animation="fade-in-up" delay={200}>
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">{t('office_info') || 'Our Office'}</h3>
                    </div>
                    
                    <div className="ml-16 space-y-4">                      <p className="text-gray-600">
                        <strong className="font-medium text-gray-800">{t('address') || 'Address'}:</strong><br />
                        Tilburg, Netherlands
                      </p>
                      
                      <p className="text-gray-600">
                        <strong className="font-medium text-gray-800">{t('opening_hours') || 'Opening Hours'}:</strong>
                      </p>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-2 border-b border-gray-100 hover:bg-gray-50 transition-colors rounded-lg px-2">
                          <span className="text-gray-600 flex items-center">
                            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            Monday - Friday
                          </span>
                          <span className="font-medium bg-primary-50 text-primary-700 py-1 px-3 rounded-full text-sm shadow-sm">9:00 AM - 5:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-100 hover:bg-gray-50 transition-colors rounded-lg px-2">
                          <span className="text-gray-600 flex items-center">
                            <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                            Saturday
                          </span>
                          <span className="font-medium bg-secondary-50 text-secondary-700 py-1 px-3 rounded-full text-sm shadow-sm">By appointment</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-100 hover:bg-gray-50 transition-colors rounded-lg px-2">
                          <span className="text-gray-600 flex items-center">
                            <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                            Sunday
                          </span>
                          <span className="font-medium bg-gray-100 text-gray-700 py-1 px-3 rounded-full text-sm shadow-sm">Closed</span>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                  
                  <hr className="my-6 border-gray-200" />
                  
                  <AnimatedSection animation="fade-in-up" delay={300}>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                      <svg className="w-6 h-6 mr-2 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                      </svg>
                      {t('social_title') || 'Follow Us'}
                    </h3>
                    
                    <div className="flex space-x-4">
                      <a href="#" className="bg-blue-600 text-white h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-blue-700">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                        </svg>
                      </a>
                      <a href="#" className="bg-pink-600 text-white h-10 w-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 hover:shadow-lg">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                        </svg>
                      </a>
                      <a href="#" className="bg-blue-400 text-white h-10 w-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 hover:shadow-lg">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                      <a href="#" className="bg-blue-700 text-white h-10 w-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 hover:shadow-lg">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section id="newsletter-section" className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-700 opacity-90"></div>
        <div className="absolute inset-0">
          <Image            
            src="/images/contact/newsletter/newsletter-bg.png" 
            alt="Newsletter Background" 
            fill 
            className="object-cover mix-blend-overlay"
          />
        </div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-in-up" delay={100}>
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('newsletter_title') || 'Stay Updated'}</h2>
              <p className="text-lg mb-8 opacity-90">{t('newsletter_subtitle') || 'Subscribe to our newsletter to get the latest news and updates about our home sharing opportunities'}</p>
              
              <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
                <input 
                  type="email" 
                  placeholder=""
                  className="flex-1 px-6 py-4 rounded-lg border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="px-8 py-4 bg-white text-primary-600 font-medium rounded-lg hover:bg-white/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform">
                  {t('newsletter_button') || 'Subscribe'}
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials-section" className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Add decorative wave shape */}
        <div className="absolute top-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-white">
            <path fill="currentColor" fillOpacity="1" d="M0,224L48,229.3C96,235,192,245,288,229.3C384,213,480,171,576,165.3C672,160,768,192,864,197.3C960,203,1056,181,1152,170.7C1248,160,1344,160,1392,160L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-in-up" delay={100}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">{t('testimonials_title') || 'What People Say About Us'}</h2>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">{t('testimonials_subtitle') || 'Here\'s what students and seniors are saying about their experiences with our home sharing program'}</p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <AnimatedSection animation="fade-in-left" delay={200}>
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 flex flex-col md:flex-row gap-6 items-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-32 h-32 rounded-full overflow-hidden shrink-0 border-4 border-primary-100 relative">
                  <div className="absolute inset-0 bg-primary-50 opacity-0 hover:opacity-20 transition-opacity"></div>
                  <div className="relative w-full h-full">                    <Image 
                      src="/images/contact/testimonials/testimonial1-alt.png" 
                      alt="Student testimonial" 
                      fill
                      sizes="(max-width: 768px) 100vw, 128px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">"{t('testimonial1_text') || 'Finding affordable housing as a student was so difficult until I discovered SiteShip. They matched me with the kindest homeowner, and I couldn\'t be happier with my living situation!'}"</p>
                  <h3 className="text-xl font-bold text-gray-800">{t('testimonial1_name') || 'Emma Johnson'}</h3>
                  <p className="text-primary-600 font-medium">{t('testimonial1_role') || 'Student'}</p>
                </div>
              </div>
            </AnimatedSection>
            
            {/* Testimonial 2 */}
            <AnimatedSection animation="fade-in-right" delay={300}>
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 flex flex-col md:flex-row gap-6 items-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-32 h-32 rounded-full overflow-hidden shrink-0 border-4 border-secondary-100 relative">
                  <div className="absolute inset-0 bg-secondary-50 opacity-0 hover:opacity-20 transition-opacity"></div>
                  <div className="relative w-full h-full">                    <Image 
                      src="/images/contact/testimonials/testimonial2.png" 
                      alt="Senior testimonial" 
                      fill
                      sizes="(max-width: 768px) 100vw, 128px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">"{t('testimonial2_text') || 'After my wife passed away, the house felt too empty. Through SiteShip, I now share my home with a wonderful student who brings life back into my home and helps me stay connected.'}"</p>
                  <h3 className="text-xl font-bold text-gray-800">{t('testimonial2_name') || 'Robert van der Berg'}</h3>
                  <p className="text-secondary-600 font-medium">{t('testimonial2_role') || 'Senior Homeowner'}</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 relative">
        {/* Add decorative wave shape at the top */}
        <div className="absolute top-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#f9fafb" fillOpacity="1" d="M0,96L40,112C80,128,160,160,240,176C320,192,400,192,480,170.7C560,149,640,107,720,96C800,85,880,107,960,128C1040,149,1120,171,1200,165.3C1280,160,1360,128,1400,112L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <AnimatedSection animation="fade-in-up" delay={100}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">{t('faq_title') || 'Frequently Asked Questions'}</h2>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">{t('faq_description') || 'Get answers to the most common questions about our home sharing program.'}</p>
            </div>
          </AnimatedSection>
          
          <div className="space-y-8">
            {/* FAQ Row 1 */}
            <AnimatedSection animation="fade-in-up" delay={200}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* FAQ Item 1 */}
                <div className="lg:col-span-7 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                      <h3 className="text-lg font-medium">{t('faq_q1') || 'How does the home sharing program work?'}</h3>
                      <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600 border-t border-gray-100 pt-4 bg-white">
                      <p>{t('faq_a1') || 'Our home sharing program connects students looking for affordable housing with seniors who have extra space in their homes. The program benefits both parties: students get affordable housing while seniors receive additional income, companionship, and sometimes help around the house.'}</p>
                    </div>
                  </details>
                </div>
                
                {/* FAQ Image */}                <div className="lg:col-span-5">
                  <div className="relative rounded-xl overflow-hidden shadow-lg" style={{ height: "400px" }}><ImageWithAnimation
                      src="/images/contact/student-senior.png"
                      alt="Student and senior sharing a home"
                      fill={true}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      animation="zoom"
                      className="object-cover"
                      decorationPosition="top-right"
                      decorationColor="primary"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            {/* FAQ Row 2 */}
            <AnimatedSection animation="fade-in-up" delay={300}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mt-12">
                {/* FAQ Image */}
                <div className="lg:col-span-5 lg:order-1 order-2">
                  <div className="relative rounded-xl overflow-hidden shadow-lg" style={{ height: "400px" }}>                <ImageWithAnimation
                      src="/images/contact/matching.png"
                      alt="Matching process"
                      fill={true}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      animation="float"
                      className="object-cover"
                      decorationPosition="bottom-left"
                      decorationColor="secondary"
                    />
                  </div>
                </div>
                
                {/* FAQ Items */}
                <div className="lg:col-span-7 lg:order-2 order-1 space-y-6">
                  {/* FAQ Item 2 */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                    <details className="group">
                      <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                        <h3 className="text-lg font-medium">{t('faq_q2') || 'Is there a screening process for participants?'}</h3>
                        <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </summary>
                      <div className="px-6 pb-6 text-gray-600 border-t border-gray-100 pt-4 bg-white">
                        <p>{t('faq_a2') || 'Yes, we conduct thorough background checks for all participants to ensure safety and compatibility. This includes verification of identity, references, and sometimes criminal background checks.'}</p>
                      </div>
                    </details>
                  </div>
                  
                  {/* FAQ Item 3 */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                    <details className="group">
                      <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                        <h3 className="text-lg font-medium">{t('faq_q3') || 'How are matches made between students and seniors?'}</h3>
                        <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </summary>
                      <div className="px-6 pb-6 text-gray-600 border-t border-gray-100 pt-4 bg-white">
                        <p>{t('faq_a3') || 'We use a careful matching process that considers lifestyle preferences, location, interests, and living requirements. Both parties are introduced to each other before making any commitments, and must mutually agree to the arrangement.'}</p>
                      </div>
                    </details>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            {/* Call to Action */}
            <AnimatedSection animation="fade-in-up" delay={400}>
              <div className="mt-12 bg-white rounded-xl shadow-xl p-8 text-center border border-gray-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-primary-50 rounded-full -translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary-50 rounded-full translate-x-20 translate-y-20 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{t('more_questions') || 'Have more questions?'}</h3>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">{t('more_questions_desc') || 'If you have more questions about our home sharing program, feel free to contact us directly. Our team is ready to help.'}</p>
                  <ButtonLink 
                    href="#contact-form" 
                    variant="primary"
                    size="lg"
                    className="px-10"
                  >
                    {t('contact_us_btn') || 'Contact Us'}
                  </ButtonLink>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}