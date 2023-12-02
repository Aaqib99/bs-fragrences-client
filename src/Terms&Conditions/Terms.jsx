/* eslint-disable react/no-unescaped-entities */
// import React from 'react';
import "./privacy.css"; // Import your CSS file

const Terms = () => {
  return (
    <div className="terms-container">
      <h1 className="main-headings">
        Terms and Conditions for B&S Fragrances Seller Portal Access
      </h1>

      <div className="section">
        <h1 className="main-headings">1. Introduction</h1>
        <p>
          1.1. The Seller Portal ("Portal") is an online platform provided by
          B&S Fragrances to facilitate wholesale customers' access to product
          offerings, ordering, and account management.
        </p>
        <p>
          1.2. By accessing and using the Portal, you acknowledge and agree to
          comply with the following Terms and Conditions. If you disagree with
          any part of these terms, you must refrain from using the Portal.
        </p>
      </div>

      <div className="section">
        <h1 className="main-headings">2. Access and Use</h1>
        <p>
          2.1. Access to the Portal is granted to registered wholesale
          customers, subject to verification and approval by [Your Company
          Name].
        </p>
        <p>
          2.2. The information, product lists, pricing, and content displayed on
          the Portal are proprietary to B&S Fragrances.
        </p>
        <p>
          2.3. All account and user details must be securely managed by
          customers accessing the Portal.
        </p>
      </div>

      {/* Other sections... */}

      <div className="section">
        <h1 className="main-headings">3. User Obligations</h1>
        <p>
          3.1. Wholesale customers are responsible for maintaining the
          confidentiality of their login information and must not disclose their
          login details to unauthorized parties.
        </p>
        <p>
          3.2. Users must refrain from using any information obtained through
          the Portal in any manner that could be deemed detrimental to [Your
          Company Name].
        </p>
        <p>
          3.3. Any potential security breaches or unauthorized access should be
          immediately reported to B&S Fragrances.
        </p>
      </div>
      <div className="section">
        <h1 className="main-headings">4. Product Information</h1>
        <p>
          4.1. The product information displayed on the Portal is intended for
          reference and informative purposes.
        </p>
        <p>
          4.2. Product pricing, availability, and quantity are subject to change
          without prior notice.
        </p>
        <p>
          4.3. Users can subscribe to receive notifications about product
          updates, including changes in quantity or pricing.
        </p>
      </div>
      <div className="section">
        <h1 className="main-headings">5. Placing Orders and Payments</h1>
        <p>
          5.1. Wholesale customers can place orders through the Portal,
          indicating the required quantities for each product.
        </p>
        <p>
          5.2. All orders will only be processed and confirmed for delivery upon
          receipt of payment.
        </p>
        <p>
          5.3. Payment options include Credit Card (with a 6% transaction fee)
          and Bank Transfer. For Bank Transfers, a confirmation email will be
          sent with payment instructions and details.
        </p>
      </div>

      <div className="section">
        <h1 className="main-headings">6. Privacy and Security</h1>
        <p>
          6.1. B&S Fragrances respects and protects the privacy of user
          information. Please refer to our Privacy Policy for further details.
        </p>
        <p>
          6.2. All user data, including sensitive information, is handled
          securely and in accordance with applicable laws and regulations.
        </p>
      </div>
      <div className="section">
        <h1 className="main-headings">7. Liability Limitation</h1>
        <p>
          7.1. B&S Fragrances holds no liability for indirect, incidental, or
          consequential losses related to the use or inability to use the
          Portal.
        </p>
        <p>
          7.2. B&S Fragrances reserves the right to modify or suspend the Seller
          Portal or any part of its features without prior notice.
        </p>
      </div>
      <div className="section">
        <h1 className="main-headings">8. Dispute Resolution</h1>
        <p>
          8.1. Any dispute arising from the use of the Seller Portal shall be
          resolved through negotiation, and if required, under the jurisdiction
          and laws of [Your Company's Jurisdiction].
        </p>
      </div>
      <div className="section">
        <h1 className="main-headings">9. Contact Information</h1>
        <p>
          9.1. For further inquiries or assistance regarding the Seller Portal,
          please contact [Your Contact Information].
        </p>
      </div>
    </div>
  );
};

export default Terms;
