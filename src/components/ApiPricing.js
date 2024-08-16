import React, { useState } from 'react';

const ApiPricing = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    }
    else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <main className='max-w-5xl mx-auto my-8 py-0 px-4 sm:px-6 lg:px-8'>

      <div className="flex justify-end sm:justify-end">
        <button
          onClick={toggleDarkMode}
          className="py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-gray-200 font-custom">
          {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>

      <section className={`p-4 sm:p-6 lg:p-8 border-custom-border min-h-screen flex flex-col items-center justify-center border border-solid border-separate border-spacing-0 overflow-hidden rounded-lg ${darkMode ? 'dark:bg-custom-dark-blue' : 'bg-gray-100'}`}>

        <div className="container mx-auto px-4">
          <div>
            <h2 className="mt-8 text-2xl sm:text-2xl font-bold text-gray-900 dark:text-custom-heading font-custom leading-tight sm:leading-relaxed text-left">API Pricing</h2>
            <p className="text-gray-600 dark:text-custom-para font-custom leading-6 sm:leading-7 text-left">
              Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="mt-2 border border-solid border-separate border-custom-border w-full border-spacing-0 overflow-hidden rounded-lg table-auto bg-white dark:bg-custom-dark-blue font-custom leading-5">
              <thead>
                <tr className="bg-custom-table-heading text-white uppercase tracking-wide text-xs sm:text-sm">
                  <th className="p-4 text-left">API</th>
                  <th className="p-4 text-left">Model</th>
                  <th className="p-4 text-left">Price Per 1K Tokens</th>
                </tr>
              </thead>
              <tbody className='align-middle leading-relaxed'>
                <tr className='border-b border-custom-border'>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base text-gray-900 dark:text-custom-para">OpenAI</td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base text-gray-900 dark:text-custom-para">GPT-3.5</td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base text-gray-900 dark:text-custom-para">$0.002</td>
                </tr>
                <tr className="border-b border-custom-border">
                  <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base text-gray-900 dark:text-custom-para">OpenAI</td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base text-gray-900 dark:text-custom-para">GPT-4</td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base text-gray-900 dark:text-custom-para">$0.03</td>
                </tr>
                <tr className='border-b border-custom-border'>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base text-gray-900 dark:text-custom-para">Together AI</td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base text-gray-900 dark:text-custom-para">Llama-2-70b</td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base text-gray-900 dark:text-custom-para">$0.0008</td>
                </tr>
                <tr className="border-b border-custom-border">
                  <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base text-gray-900 dark:text-custom-para">Together AI</td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base text-gray-900 dark:text-custom-para">Llama-2-13b</td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base text-gray-900 dark:text-custom-para">$0.0006</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="mt-8 text-lg sm:text-xl font-bold text-gray-900 dark:text-custom-heading font-custom text-left">Token Estimation</h3>
            <p className="text-gray-600 dark:text-custom-para leading-6 sm:leading-7 font-custom text-left">
              On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.
            </p>
            <h3 className="mt-8 text-lg sm:text-xl font-semibold text-gray-900 dark:text-custom-heading font-custom text-left">Billing</h3>
            <p className="text-gray-600 dark:text-custom-para leading-6 sm:leading-7 font-custom text-left">
              You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ApiPricing;