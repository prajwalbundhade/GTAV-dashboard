import React from "react";
import { Container, Card } from "react-bootstrap";
import "./TermsAndCondition.css";

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <Container>
        <Card
          className="terms-card"
          style={{ backgroundColor: "#444", color: "#fff" }}
        >
          <Card.Body>
            <h2 className="terms-title" style={{ color: "#33cc33" }}>
              Terms and Conditions
            </h2>
            <p className="terms-intro">
              Welcome to Craftify Productions! Before you proceed with any
              purchase or use of our services, please carefully read the
              following terms and conditions. By accessing or using our website,
              products, or services, you agree to be bound by these terms and
              conditions. If you do not agree with any part of these terms and
              conditions, you should not use our website or purchase our
              products.
            </p>
            <ol className="terms-list">
              <li>
                <strong>Ownership and Rights:</strong>The mods, plugins, and
                datapacks offered on this website are not the original creations
                of Craftify Productions. We have taken inspiration from various
                creators including Caylus, Jelly & etc. Craftify Productions
                collaborates with developers to create and sell these mods, and
                we hold all rights to distribute and sell them. Redistribution
                of mods purchased from Craftify Productions is strictly
                prohibited. Youtubers or content creators who purchase our mods
                are permitted to create videos featuring the purchased product.
                However, sharing or distributing the mods themselves without
                explicit permission is not allowed.
              </li>
              <li>
                <strong>Developer Compensation:</strong> Craftify Productions
                compensates developers for each sale of their mods. By
                purchasing our products, users acknowledge and support the
                developers who contribute to the creation of these mods.
              </li>
              <li>
                <strong>Video Recording and Redistribution:</strong> You are
                permitted to record videos showcasing our mods, plugins, and
                datapacks on platforms such as YouTube. However, redistribution
                of our mods or plugins without explicit permission is strictly
                prohibited. Craftify Productions reserves the right to take
                legal action against any unauthorized redistribution, including
                issuing copyright strikes.
              </li>
              <li>
                <strong>Additional Fees:</strong> All products sold on this
                website are subject to an additional 8% fee, which covers PayPal
                charges and operational costs for maintaining the website and
                mods.
              </li>
              <li>
                <strong>Refunds and Replacements:</strong> Refunds or
                replacements will be processed only under the following
                circumstances:
                <ul>
                  <li>The product is not functioning as described.</li>
                  <li>The product does not match the description provided.</li>
                  <li>The product is not delivered.</li>
                  <li>The product is experiencing technical issues or bugs.</li>
                  <li>
                    Any other genuine reason deemed valid by Craftify
                    Productions.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Privacy:</strong> We respect your privacy and do not
                share any personal information, including email addresses and IP
                addresses, with third parties.
              </li>
              <li>
                <strong>Fair Treatment of Content Creators:</strong> Craftify
                Productions does not prioritize any particular YouTuber or
                content creator over others. All users who purchase our products
                are treated equally, and we encourage fair competition and
                creativity in content creation.
              </li>
              <li>
                <strong>Agreement to Terms:</strong> By placing an order on our
                website, you acknowledge and agree to these terms and
                conditions. If you do not agree to these terms, you are free to
                refrain from using our services.
              </li>
              <li>
                <strong>Prohibited Activities:</strong> Misuse of our services,
                including but not limited to fraudulent activities, hacking, or
                any other unauthorized use, is strictly prohibited and may
                result in legal action.
              </li>
              <li>
                <strong>Changes to Terms and Conditions:</strong> Craftify
                Productions reserves the right to update or modify these terms
                and conditions at any time without prior notice. It is your
                responsibility to review these terms periodically for any
                changes. Continued use of our website or services after any such
                modifications constitutes your acceptance of the updated terms
                and conditions.
              </li>
              <li>
                <strong>Dispute Resolution:</strong> In the event of a dispute
                between Craftify Productions and a user, we encourage open
                communication and dialogue to resolve the issue amicably. Users
                can reach out to us via chat or email to address any concerns.
                If Craftify Productions is found to be at fault, we will provide
                a refund or replacement as appropriate.
              </li>
              <li>
                <strong>Contact Us:</strong> For any inquiries, assistance, or
                business-related matters, please feel free to contact us via
                email at:
                <ul>
                  <li>contact@craftifyproductions.com</li>
                  <li>techthunderz443@gmail.com</li>
                </ul>
              </li>
            </ol>
            <p className="terms-thankyou">
              Thank you for choosing Craftify Productions!
            </p>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default TermsAndConditions;
