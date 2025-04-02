'use client'

import { useState, useEffect } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

export default function ContactPage() {

  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script')
    script.src = 'https://www.instagram.com/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitResult(null)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitResult({
        success: true,
        message: 'Your message has been sent. I\'ll get back to you soon!'
      })

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }, 1500)



    // In a real application, you would send the form data to your backend or a form service
    // Example with fetch:
    /*
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const data = await response.json()
      
      setIsSubmitting(false)
      if (response.ok) {
        setSubmitResult({
          success: true,
          message: data.message || 'Your message has been sent. I\'ll get back to you soon!'
        })
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        setSubmitResult({
          success: false,
          message: data.message || 'Something went wrong. Please try again.'
        })
      }
    } catch (error) {
      setIsSubmitting(false)
      setSubmitResult({
        success: false,
        message: 'An error occurred. Please try again later.'
      })
    }
    */
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero section */}
      <section className="py-20 px-4 bg-gradient-to-b from-indigo-950 to-black">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? Send me a message!
          </p>
        </div>
      </section>

      {/* Contact form and info */}
      <section className="py-16 px-4">
        <div className="container mx-auto">

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact information */}
            <div className="w-full lg:w-1/3">
              <div className="bg-gray-900 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-purple-400 mt-1 mr-4" />
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <a
                        href="mailto:contact@yourname.com"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        contact@yourname.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-purple-400 mt-1 mr-4" />
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <a
                        href="tel:+11234567890"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        +1 (123) 456-7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-purple-400 mt-1 mr-4" />
                    <div>
                      <h3 className="font-medium mb-1">Based in</h3>
                      <p className="text-gray-300">
                        Atlanta, Georgia
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="font-medium mb-4">Connect with me</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://instagram.com/jeetzingh"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                  {/* <div className="flex justify-center">
                    <blockquote
                      className="instagram-media"
                      data-instgrm-permalink="https://www.instagram.com/jeetzingh/"
                      data-instgrm-version="14"
                      style={{
                        background: '#FFF',
                        borderRadius: '12px',
                        border: '1px solid #dbdbdb',
                        boxShadow: 'none',
                        display: 'block',
                        margin: '0 auto',
                        minWidth: '326px',
                        padding: '0',
                        maxWidth: '540px',
                        width: '100%'
                      }}
                    ></blockquote>
                  </div> */}
                </div>
              </div>

            </div>

            {/* Contact form */}
            <div className="w-full lg:w-2/3">
              <div className="bg-gray-900 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Send me a message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="collaboration">Collaboration Proposal</option>
                      <option value="press">Press/Media Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center bg-purple-600 text-white py-3 px-8 rounded-full font-medium hover:bg-purple-700 transition-colors disabled:bg-purple-800 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>

                  {/* Form submission result */}
                  {submitResult && (
                    <div className={`rounded-lg p-4 ${submitResult.success ? 'bg-green-900/50' : 'bg-red-900/50'}`}>
                      <p className={submitResult.success ? 'text-green-200' : 'text-red-200'}>
                        {submitResult.message}
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      {/* <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-black p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Do you offer music lessons?</h3>
              <p className="text-gray-300">
                Yes, I offer private lessons for beginners and intermediate students. Please use the contact form to inquire about availability and rates.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Can I license your music?</h3>
              <p className="text-gray-300">
                Absolutely! My music is available for licensing for various projects. Please provide details about your project in your inquiry.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">How can I book you for an event?</h3>
              <p className="text-gray-300">
                You can use the contact form or email booking@yourname.com directly with the event details, date, and location.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Do you collaborate with other artists?</h3>
              <p className="text-gray-300">
                Yes, I&#39;m open to collaborations. Send me a message with links to your work and we can discuss potential projects.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}