import React from 'react'
import Nav from './Nav'
import './Style/Privacy.css'

const PrivacyPolicy = () => {
    return (
        <>
            <Nav />
            <div className="privacy-main">
                <h1>Privacy Policy</h1>
                <div className="privacy-container">
                    <h3>At Connect and Collabs, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or utilize our services.
                    </h3> <br /><br />
                    <div className="policy">
                        <h4>1. Information We Collect:</h4>
                        <p>
                            We may collect personal information directly from you when you interact with our website or engage with our services. This may include:
                            - Contact information (such as name, email address, phone number)
                            - Demographic information
                            - Payment information (if applicable)
                            - Information provided when you communicate with us or submit inquiries
                        </p>
                    </div>
                    <br />
                    <div className="policy">
                        <h4>2. Use of Information: </h4>
                        <p>
                            We use the information we collect for various purposes, including but not limited to:
                            - Providing and personalizing our services
                            - Communicating with you about our services, updates, and promotions
                            - Processing transactions and fulfilling orders
                            - Analyzing trends and user behavior to improve our website and services
                            - Responding to inquiries and providing customer support
                            - Complying with legal obligations
                        </p>
                    </div><br />
                    <div className="policy">
                        <h4>3. Disclosure of Information:</h4>
                        <p>
                            We may share your personal information with third parties in the following circumstances:
                            - With service providers who assist us in operating our website and providing our services - To comply with legal obligations or in response to lawful requests
                            - In connection with a merger, acquisition, or sale of assets
                        </p>
                    </div> <br />
                    <div className="policy">
                        <h4>4. Data Security:</h4>
                        <p>
                            We employ industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </div> <br />
                    <div className="policy">
                        <h4>5. Your Choices:</h4>
                        <p>
                            You have the right to access, update, or delete your personal information. You may also choose to opt-out of receiving marketing communications from us by following the unsubscribe instructions included in such communications.
                        </p>
                    </div> <br />
                    <div className="policy">
                        <h4>6. Cookies:
                        </h4>
                        <p>
                            We may use cookies and similar tracking technologies to enhance your browsing experience and analyze usage patterns on our website. You can set your browser to refuse cookies or alert you when cookies are being sent, but this may affect certain features and functionality of our website.
                        </p>

                    </div><br />
                    <div className="policy">
                        <h4>7. Children's Privacy:</h4>
                        <p>
                            Our website and services are not directed to children under the age of 13, and we do not knowingly collect personal information from children. If you believe that we have inadvertently collected information from a child, please contact us immediately.
                        </p>
                    </div><br />
                    <div className="policy">
                        <h4>8. Changes to This Policy:</h4>
                        <p>
                            We may update this Privacy Policy from time to time, and any changes will be effective upon posting the revised policy on our website. We encourage you to review this Privacy Policy periodically for any updates.
                        </p>
                    </div><br />
                    <div className="policy">
                        <h4>9. Contact Us:
                        </h4>
                        <p>
                            if you have any questions or concerns about this Privacy Policy or our data practices, please contact us at connectandcollabs@gmail.com
                        </p>
                    </div><br />
                </div>
                <h5>By using our website or services, you consent to the terms of this Privacy Policy.</h5>
            </div>
        </>
    )
}

export default PrivacyPolicy
