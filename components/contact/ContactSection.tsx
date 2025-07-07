import React from 'react';

export default function ContactSection() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
        <form className="grid gap-6" action="https://formspree.io/f/your-form-id" method="POST">
          <div className="grid md:grid-cols-2 gap-6">
            <input name="name" type="text" required placeholder="Name" className="input input-bordered" />
            <input name="email" type="email" required placeholder="Email" className="input input-bordered" />
          </div>
          <input name="phone" type="tel" placeholder="Phone" className="input input-bordered" />
          <select name="service" className="input input-bordered">
            <option value="">Service Interested In</option>
            <option value="dms">Diagnostic Management System</option>
            <option value="ehr">Electronic Health Records</option>
            <option value="lis">Lab Investigation System</option>
            <option value="erp">ERP</option>
            <option value="hms">Health Management System</option>
            <option value="inventory">Inventory Management</option>
            <option value="omr">OMR Scanner System</option>
          </select>
          <textarea name="message" required placeholder="Message" className="input input-bordered min-h-[100px]" />
          <button type="submit" className="btn-primary w-full">Send Message</button>
        </form>
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-between mb-8">
        <div className="space-y-2">
          <div><span className="font-semibold">Address:</span> House:232/a, Road 60 Feet West Agargaon, Dhaka 1207</div>
          <div><span className="font-semibold">Phone:</span> <a href="tel:+8801336191848" className="text-primary-600">+8801336191848</a></div>
          <div><span className="font-semibold">Email:</span> <a href="mailto:ceo@logicandpixel.com" className="text-primary-600">ceo@logicandpixel.com</a></div>
        </div>
        <div className="w-full md:w-1/2 h-64">
          <iframe
            src="https://maps.google.com/maps?q=House:232/a, Road 60 Feet West Agargaon, Dhaka 1207&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
      <div className="flex gap-4 justify-center mt-4">
        <a href="mailto:ceo@logicandpixel.com" className="btn-secondary">Email</a>
        <a href="tel:+8801336191848" className="btn-secondary">Phone</a>
        <a href="https://wa.me/8801336191848" className="btn-secondary">WhatsApp</a>
      </div>
    </section>
  );
}
