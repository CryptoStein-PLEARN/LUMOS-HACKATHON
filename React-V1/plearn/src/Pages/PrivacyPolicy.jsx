import React from "react";
import styled from "styled-components";
export default function PrivacyPolicy() {
  return (
    <Container>
      <div className="blog">
        <h1>Privacy Policy for Cryptostein S.r.l. Waitlist Contact Form</h1>
        <p>
          {" "}
          At Cryptostein S.r.l., we are committed to protecting the privacy of
          our customers and users. This Privacy Policy outlines how we collect,
          use, disclose, and safeguard personal information obtained through the
          waitlist contact form.
        </p>
        <h4> Information We Collect</h4>
        <p>
          {" "}
          When you submit your information through our waitlist contact form, we
          may collect the following personal information:
        </p>
        <ul>
          <li>
            <p>Name</p>
          </li>
          <li>
            <p>Email address</p>
          </li>
          <li>
            <p>How We Use Your Information</p>
          </li>
        </ul>
        <p>
          We may use the information we collect from you through the waitlist
          contact form to:
        </p>
        <ul>
          <li>
            <p>Send you email updates about our products and services</p>
          </li>
          <li>
            <p>Provide you with customer support</p>
          </li>
          <li>
            <p>Respond to your inquiries and requests</p>
          </li>
          <li>
            <p>Disclosure of Your Information</p>
          </li>
        </ul>
        <p>
          We do not sell, trade, or rent your personal information to third
          parties. We may, however, share your information with trusted
          third-party service providers who assist us in operating our website,
          conducting our business, or servicing you, as long as those parties
          agree to keep this information confidential. We may also disclose your
          information as required by law or to protect our rights or the rights
          of others.
        </p>

        <h4>Security of Your Information</h4>
        <p>
          We take reasonable measures to protect the personal information we
          collect through the waitlist contact form. However, no data
          transmission over the internet or any wireless network can be
          guaranteed to be 100% secure. As a result, while we strive to protect
          your personal information, you acknowledge that there are security and
          privacy limitations inherent to the internet, and we cannot guarantee
          the security, integrity, or privacy of any information transmitted
          through the internet.
        </p>
        <p>
          Changes to This Privacy Policy We reserve the right to update or
          modify this Privacy Policy at any time and without prior notice. Any
          changes to this Privacy Policy will be effective immediately upon
          posting on this page.
        </p>

        <h4>Contact Us</h4>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at social@cryptostein.org
        </p>
      </div>
    </Container>
  );
}
const Container = styled.div`
  background: black;
  color: white;
  h1 {
    margin-top: 0;
    margin-bottom: 2rem;
  }
  .blog {
    padding: 10rem;
    padding-top: 4rem;
    padding-bottom: 2rem;
  }
  p {
    font-size: 18px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    line-height: 1.714;
  }
`;
