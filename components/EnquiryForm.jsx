'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { Mail, AlertCircle, Loader2, Send, CheckCircle2, AlertTriangle, X } from 'lucide-react';

// Form validation schema matching the backend
const formSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters').max(100),
  mobileNumber: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number'),
  email: z.string().email('Please enter a valid email address'),
  organization: z.string().max(150, 'Organization name is too long').optional().or(z.literal('')),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
});

export default function EnquiryForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      mobileNumber: '',
      email: '',
      organization: '',
      message: '',
    },
  });

  const onSubmit = async (data) => {
    if (!executeRecaptcha) {
      setSubmitStatus({ type: 'error', message: 'reCAPTCHA is not ready yet. Please try again.' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // Get reCAPTCHA token
      const token = await executeRecaptcha('enquiry_form');

      // Prepare payload
      const payload = {
        ...data,
        recaptchaToken: token,
      };

      // Send to API
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus({ type: 'success', message: 'Enquiry submitted successfully!' });
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: result.message || 'Something went wrong. Please try again.' 
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    reset();
    setSubmitStatus({ type: '', message: '' });
  };

  return (
    <section id="enquiry" className="py-20 bg-white/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Error Banner */}
        {submitStatus.type === 'error' && (
          <div className="max-w-2xl mx-auto mb-6 bg-red-50/90 backdrop-blur-sm border-l-4 border-red-500 p-4 rounded-md shadow-sm flex items-start justify-between">
            <div className="flex items-center">
              <AlertTriangle className="text-red-500 mr-3" size={24} />
              <p className="text-red-700 font-medium">{submitStatus.message}</p>
            </div>
            <button 
              onClick={() => setSubmitStatus({ type: '', message: '' })}
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        )}

        {/* Main Card */}
        <div className="max-w-2xl mx-auto bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border border-white/50">
          
          {/* Header */}
          <div className="bg-rail-navy/95 p-6 md:p-8 text-white flex items-center justify-center space-x-3">
            <Mail size={32} className="text-rail-saffron" />
            <h2 className="font-poppins text-2xl md:text-3xl font-bold">Submit Your Enquiry</h2>
          </div>

          <div className="p-6 md:p-8">
            {submitStatus.type === 'success' ? (
              // Success State
              <div className="flex flex-col items-center justify-center text-center py-10 animate-fade-in-up">
                <CheckCircle2 size={80} className="text-green-500 mb-6" />
                <h3 className="font-poppins text-2xl font-bold text-rail-navy mb-2">
                  Enquiry Submitted Successfully!
                </h3>
                <p className="text-gray-600 mb-8 max-w-md">
                  Thank you for reaching out to the Indian Railway Department. Our support team will review your message and get back to you within 24 hours.
                </p>
                <button
                  onClick={handleReset}
                  className="bg-rail-navy hover:bg-rail-navyLight text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-sm"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              // Form State
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-rail-navy mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    {...register('fullName')}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-rail-saffron focus:border-transparent transition-shadow`}
                    placeholder="e.g. Amit Lakade"
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-sm text-red-500 flex items-center">
                      <AlertCircle size={14} className="mr-1" />
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Grid for Mobile & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Mobile Number */}
                  <div>
                    <label htmlFor="mobileNumber" className="block text-sm font-medium text-rail-navy mb-1">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-500 font-medium">
                        +91
                      </span>
                      <input
                        id="mobileNumber"
                        type="tel"
                        {...register('mobileNumber')}
                        className={`w-full pl-12 pr-4 py-3 rounded-lg border ${errors.mobileNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-rail-saffron focus:border-transparent transition-shadow`}
                        placeholder="9168830229"
                      />
                    </div>
                    {errors.mobileNumber && (
                      <p className="mt-1.5 text-sm text-red-500 flex items-center">
                        <AlertCircle size={14} className="mr-1" />
                        {errors.mobileNumber.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-rail-navy mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register('email')}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-rail-saffron focus:border-transparent transition-shadow`}
                      placeholder="lakadeamit220@gmail.com"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-sm text-red-500 flex items-center">
                        <AlertCircle size={14} className="mr-1" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Organization */}
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-rail-navy mb-1">
                    Organization / Department <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    id="organization"
                    type="text"
                    {...register('organization')}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.organization ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-rail-saffron focus:border-transparent transition-shadow`}
                    placeholder="e.g. ABC Logistics"
                  />
                  {errors.organization && (
                    <p className="mt-1.5 text-sm text-red-500 flex items-center">
                      <AlertCircle size={14} className="mr-1" />
                      {errors.organization.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-rail-navy mb-1">
                    Message / Query <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    {...register('message')}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-rail-saffron focus:border-transparent transition-shadow resize-y`}
                    placeholder="Please describe your enquiry in detail..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1.5 text-sm text-red-500 flex items-center">
                      <AlertCircle size={14} className="mr-1" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <p className="text-xs text-gray-500">
                  This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" className="text-rail-navy hover:underline" target="_blank" rel="noreferrer">Privacy Policy</a> and <a href="https://policies.google.com/terms" className="text-rail-navy hover:underline" target="_blank" rel="noreferrer">Terms of Service</a> apply.
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-lg font-bold text-lg text-white transition-all shadow-md
                    ${isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-rail-navy hover:bg-rail-navyLight hover:shadow-lg hover:-translate-y-0.5'
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={24} className="animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Enquiry</span>
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
