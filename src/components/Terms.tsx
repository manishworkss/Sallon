export default function Terms() {
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

        <h1 className="text-h2 text-text-primary mb-12">Terms &amp; Conditions</h1>

        <div className="space-y-10 text-body">
          <div>
            <h2 className="text-h3 text-text-primary mb-4">1. Appointment Bookings</h2>
            <p className="mb-4">
              Appointment requests submitted through this website are not confirmed until
              a member of our team contacts you. Submitting a booking request does not
              guarantee availability for your preferred date or time.
            </p>
            <p>
              We will do our best to accommodate your preferences and will reach out within
              one business day to confirm or reschedule.
            </p>
          </div>

          <div>
            <h2 className="text-h3 text-text-primary mb-4">2. Cancellations and No-Shows</h2>
            <p className="mb-4">
              We ask that you provide at least 24 hours' notice if you need to cancel or
              reschedule your appointment. Late cancellations or no-shows may be subject
              to a cancellation fee.
            </p>
            <p>
              To cancel or reschedule, call us at{' '}
              <a href="tel:+14169208091" className="text-text-primary underline">
                +1 (416) 920-8091
              </a>{' '}
              or email{' '}
              <a href="mailto:hello@astrasalon.com" className="text-text-primary underline">
                hello@astrasalon.com
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-h3 text-text-primary mb-4">3. Pricing</h2>
            <p>
              Service prices are discussed during your consultation and may vary based on
              hair length, density, and the complexity of the service. Prices are not
              listed on this website because every client's needs are different.
            </p>
          </div>

          <div>
            <h2 className="text-h3 text-text-primary mb-4">4. Consultations</h2>
            <p>
              For colour, bridal, and texture services, we strongly recommend booking a
              consultation before your first appointment. This helps us understand your
              hair history and plan the best approach.
            </p>
          </div>

          <div>
            <h2 className="text-h3 text-text-primary mb-4">5. Liability</h2>
            <p>
              While we take every care to deliver the best results, individual outcomes
              may vary. If you are unsatisfied with a service, please contact us within
              7 days so we can arrange a correction appointment.
            </p>
          </div>

          <div>
            <h2 className="text-h3 text-text-primary mb-4">6. Website Use</h2>
            <p>
              The content on this website is provided for informational purposes. We make
              reasonable efforts to keep information accurate and up to date, but we do
              not guarantee completeness or accuracy.
            </p>
          </div>

          <div>
            <h2 className="text-h3 text-text-primary mb-4">7. Contact</h2>
            <p>
              Questions about these terms can be directed to{' '}
              <a href="mailto:hello@astrasalon.com" className="text-text-primary underline">
                hello@astrasalon.com
              </a>.
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
