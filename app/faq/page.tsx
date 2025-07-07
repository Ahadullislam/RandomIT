import React from 'react';

const FaqPage = () => {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-2">What services do you offer?</h2>
          <p className="text-gray-700 dark:text-gray-300">We offer a wide range of IT solutions including DMS, EHR, LIS, ERP, HMS, Inventory, and OMR Scanner. (Replace with your own FAQ content.)</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-2">How can I contact support?</h2>
          <p className="text-gray-700 dark:text-gray-300">You can reach us via the contact form or email. (Replace with your own FAQ content.)</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Where are you located?</h2>
          <p className="text-gray-700 dark:text-gray-300">We are based in [Your Location]. (Replace with your own FAQ content.)</p>
        </div>
      </div>
    </main>
  );
};

export default FaqPage;
