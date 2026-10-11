export default function PrivacyPolicy() {
  return (
    <div className="layout-container pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="content-container max-w-3xl">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = '';
          }}
          className="text-small text-muted hover:text-text-primary transition-colors no-underline mb-12 inline-block"
        >
          &larr; Back to Home
        </a>

        <h1 className="text-h2 text-text-primary mb-12">Privacy Policy</h1>

        <div className="space-y-10 text-body">
          <div>
            <h2 className="text-h3 text-text-primary mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              When you book an appointment through our website, we collect the following
              personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Preferred appointment date and time</li>
              <li>Any notes you include with your booking request</li>
            </ul>
          </div>

          <div>
            <h2 className="text-h3 text-text-primary mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the information you provide to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Confirm and manage your salon appointments</li>
              <li>Contact you about your booking</li>
              <li>Send appointment reminders</li>
              <li>Respond to your questions or requests</li>
            </ul>
            <p className="mt-4">
              We do not sell, rent, or share your personal information with third parties
              for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-h3 text-text-primary mb-4">3. Data Storage and Security</h2>
            <p>
              Your personal information is stored securely and accessed only by authorized
              staff at Astra Salon. We take reasonable precautions to protect your data,
              but no method of electronic storage is completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-h3 text-text-primary mb-4">4. Cookies</h2>
            <p>
              This website does not use tracking cookies or third-party analytics. We do
              not serve advertisements.
            </p>
          </div>

          <div>
            <h2 className="text-h3 text-text-primary mb-4">5. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Withdraw your consent to data processing at any time</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:hello@astrasalon.com" className="text-text-primary underline">
                hello@astrasalon.com
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-h3 text-text-primary mb-4">6. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. Changes will be posted on this
              page with an updated effective date.
            </p>
          </div>

          <div className="border-t border-border-light pt-8 mt-12">
            <p className="text-small text-muted normal-case tracking-normal font-normal">
              Last updated: October 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
