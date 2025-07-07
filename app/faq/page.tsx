import React from 'react';

const FaqPage = () => {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-8 text-center text-4xl font-bold">Frequently Asked Questions</h1>
      <div className="space-y-6">
        <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-900">
          <h2 className="mb-2 text-xl font-semibold">What services do you offer?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We offer a wide range of IT solutions including DMS, EHR, LIS, ERP, HMS, Inventory, and
            OMR Scanner. (Replace with your own FAQ content.)
          </p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-900">
          <h2 className="mb-2 text-xl font-semibold">How can I contact support?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            You can reach us via the contact form or email. (Replace with your own FAQ content.)
          </p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-900">
          <h2 className="mb-2 text-xl font-semibold">Where are you located?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We are based in [Your Location]. (Replace with your own FAQ content.)
          </p>
        </div>
      </div>
    </main>
  );
};

export default FaqPage;
