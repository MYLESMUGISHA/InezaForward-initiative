# Refugee Global Tech 🌍💻

> **From Refugee to Tech Leader** - Transforming lives through comprehensive tech education, mentorship, and sustainable career pathways.

## 📋 Table of Contents 
- [About](#about)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Technologies Used](#technologies-used)
- [Donation System](#donation-system)
- [Legal Documentation](#legal-documentation)
- [Responsive Design](#responsive-design)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🎯 About

**Refugee Global Tech** is a comprehensive nonprofit website dedicated to empowering young refugees through technology education, mentorship, and career pathways. As part of the RiseWithThem Initiative, this platform serves as the digital foundation for transforming refugee lives through innovative tech programs.

### Our Mission
To transform refugee lives through comprehensive technology education, mentorship, and career pathways that restore dignity, build community, and create lasting economic independence.

### Our Vision
A world where refugee talent drives technological innovation, with every refugee having the opportunity to leverage their skills in the technology sector.

## ✨ Features

### 🏠 Core Website Features
- **Responsive Design**: Mobile-first approach optimized for all devices
- **Modern UI/UX**: Professional design with smooth animations and transitions
- **Interactive Navigation**: Fixed navbar with smooth scrolling between sections
- **Mobile Menu**: Hamburger menu for mobile devices with smooth animations

### 💳 Advanced Donation System
- **Multiple Payment Methods**:
  - Credit/Debit Cards with real-time validation
  - PayPal integration
  - Bank transfer options
- **Flexible Donation Options**:
  - Preset amounts ($25, $50, $150, $500, $1,000, $2,500)
  - Custom amount input
  - One-time, monthly, or yearly donations
- **Real-time Processing Fee Calculation**
- **Comprehensive Form Validation**:
  - Credit card number validation
  - Expiry date verification
  - CVV security checks
  - Email format validation
- **Auto-formatting Inputs**:
  - Credit card numbers (XXXX XXXX XXXX XXXX)
  - Phone numbers ((XXX) XXX-XXXX)
  - Expiry dates (MM/YY)

### 📄 Legal Compliance
- **Terms of Service**: Comprehensive legal document covering donations, volunteers, and services
- **Privacy Policy**: Detailed privacy protection and data handling policies
- **Modal Integration**: Professional modal displays for legal documents
- **GDPR Compliance**: Data protection and user rights coverage

### 🎨 User Experience
- **Loading States**: Professional loading animations for form submissions
- **Success Feedback**: Confirmation modals for donations and form submissions
- **Error Handling**: Clear error messages with visual indicators
- **Accessibility**: Keyboard navigation and screen reader support
- **Cross-browser Compatibility**: Works on all modern browsers

## 🌐 Demo

The website includes the following main sections:

1. **Hero Section**: Compelling call-to-action with donation and volunteer buttons
2. **Vision**: Mission, vision, and values presentation
3. **About**: Organization story and impact statistics
4. **Program**: Comprehensive 15-month program details
5. **Volunteer**: Mentoring and volunteer opportunities
6. **Donation**: Full-featured donation system
7. **Contact**: Contact information and inquiry form

## 🚀 Installation

### Prerequisites
- Web server (Apache, Nginx, or local development server)
- Modern web browser
- Internet connection (for external fonts and icons)

### Quick Setup

1. **Clone or Download** the project files:
```bash
git clone https://github.com/yourusername/refugee-global-tech.git
cd refugee-global-tech
```

2. **File Structure**:
```
refugee-global-tech/
├── index.html
├── styles.css
├── script.js
├── terms-of-service.html
├── privacy-policy.html
└── README.md
```

3. **External Dependencies** (automatically loaded via CDN):
   - Google Fonts (Inter & Poppins)
   - Font Awesome 6.4.0
   - No additional downloads required

4. **Launch**:
   - Open `index.html` in your web browser, or
   - Serve from a web server for full functionality

## 📁 File Structure

```
refugee-global-tech/
│
├── 📄 index.html              # Main website file
├── 🎨 styles.css              # Complete CSS styling
├── ⚡ script.js               # JavaScript functionality
├── 📋 terms-of-service.html   # Standalone Terms of Service
├── 🔒 privacy-policy.html     # Standalone Privacy Policy
└── 📖 README.md               # Project documentation
```

### Key Components

#### HTML Structure
- Semantic HTML5 structure
- Accessibility-compliant markup
- SEO-optimized meta tags
- Modal structures for legal documents

#### CSS Features
- CSS Custom Properties (variables)
- Flexbox and CSS Grid layouts
- Advanced animations and transitions
- Mobile-first responsive design
- Professional form styling

#### JavaScript Functionality
- ES6+ modern JavaScript
- Event-driven architecture
- Form validation system
- Modal management
- Smooth scrolling navigation

## 💰 Donation System

### Payment Processing
```javascript
// Payment methods supported
const paymentMethods = {
  creditCard: 'Credit/Debit Cards',
  paypal: 'PayPal',
  bankTransfer: 'Bank Transfer'
};

// Donation frequencies
const frequencies = ['one-time', 'monthly', 'yearly'];

// Processing fee calculation (2.9% + $0.30)
function calculateProcessingFee(amount) {
  return Math.round((amount * 0.029 + 0.30) * 100) / 100;
}
```

### Form Validation
- **Real-time validation** for all form fields
- **Credit card validation** using industry standards
- **Email format verification**
- **Required field enforcement**
- **Visual error indicators** with helpful messages

### Security Features
- **No card data storage** - all processing through secure third parties
- **PCI DSS compliance** mentioned in privacy policy
- **SSL encryption** for all data transmission
- **Input sanitization** and validation

## 📜 Legal Documentation

### Terms of Service
Comprehensive coverage including:
- Donation policies and tax deductibility
- Volunteer guidelines and requirements
- Intellectual property protection
- Liability limitations
- Governing law (Kentucky, United States)

### Privacy Policy
Detailed privacy protection covering:
- Data collection practices
- Information usage policies
- Third-party sharing limitations
- Security measures implementation
- User rights and controls
- GDPR compliance for international users

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile First Approach */
@media (max-width: 480px) { /* Extra small devices */ }
@media (max-width: 768px) { /* Small devices */ }
@media (max-width: 968px) { /* Medium devices */ }
/* Default styles for desktop */
```

### Mobile Features
- **Touch-friendly** interface elements
- **Optimized navigation** with hamburger menu
- **Readable fonts** and appropriate sizing
- **Fast loading** with optimized images
- **Gesture support** for smooth interactions

## 🛠 Technologies Used

### Frontend
- **HTML5**: Semantic markup and accessibility
- **CSS3**: Modern styling with Grid and Flexbox
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Professional icons
- **Google Fonts**: Typography (Inter & Poppins)

### Features
- **CSS Custom Properties**: Maintainable color scheme
- **CSS Grid & Flexbox**: Modern layouts
- **Intersection Observer API**: Smooth scroll animations
- **Form Validation API**: Enhanced form checking
- **Local Storage**: Session management (where applicable)

### External Services
- **Font CDN**: Google Fonts
- **Icon CDN**: Font Awesome via cdnjs
- **Payment Processing**: Ready for Stripe/PayPal integration

## 🤝 Contributing

We welcome contributions to improve Refugee Global Tech! Here's how you can help:

### Development
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Areas for Contribution
- **Accessibility improvements**
- **Performance optimizations**
- **Additional payment methods**
- **Internationalization (i18n)**
- **SEO enhancements**
- **Security improvements**

### Code Style
- Use **semantic HTML5** elements
- Follow **BEM CSS methodology** where applicable
- Write **clean, documented JavaScript**
- Ensure **mobile-first responsive design**
- Test across **multiple browsers**

## 🎯 Deployment

### Static Hosting
Perfect for platforms like:
- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployments
- **GitHub Pages**: Free hosting for repositories
- **AWS S3**: Scalable static hosting

### Configuration
1. **Upload files** to your hosting platform
2. **Set index.html** as the default page
3. **Configure SSL** for secure donations
4. **Test payment forms** in staging environment

## 🔧 Customization

### Branding
Update CSS variables in `styles.css`:
```css
:root {
  --primary-color: #2563eb;      /* Main brand color */
  --secondary-color: #10b981;    /* Accent color */
  --accent-color: #f59e0b;       /* Highlight color */
}
```

### Content
- **Update text** in `index.html` sections
- **Modify donation amounts** in preset options
- **Change contact information** throughout
- **Update legal documents** as needed

### Functionality
- **Add payment processors** in `script.js`
- **Integrate email services** for form submissions
- **Connect analytics** tracking
- **Add CRM integration** for donor management

## 📞 Contact

### Organization
**Refugee Global Tech**  
*A RiseWithThem Initiative*

- **Email**: info@refugeeglobaltech.org
- **Phone**: (555) 123-RISE (7473)
- **Address**: 123 Innovation Drive, Tech Hub Center, Suite 456, Louisville, KY 40202

### Development Team
- **General Inquiries**: info@refugeeglobaltech.org
- **Volunteer Opportunities**: volunteer@refugeeglobaltech.org
- **Corporate Partnerships**: partnerships@refugeeglobaltech.org
- **Technical Support**: tech@refugeeglobaltech.org

### Social Media
- **Website**: https://refugeeglobaltech.org
- **LinkedIn**: [Refugee Global Tech](https://linkedin.com/company/refugee-global-tech)
- **Twitter**: [@RefugeeGlobalTech](https://twitter.com/refugeeglobaltech)
- **Facebook**: [Refugee Global Tech](https://facebook.com/refugeeglobaltech)

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### Attribution
When using this code, please maintain attribution to Refugee Global Tech and consider supporting our mission to transform refugee lives through technology education.

---

## 🙏 Acknowledgments

- **RiseWithThem Initiative** for the foundational mission
- **Refugee communities** for inspiring this work
- **Tech industry mentors** who volunteer their time
- **Donors and supporters** who make our programs possible
- **Open source community** for tools and resources

---

**"Together, we rise. Together, we code. Together, we transform communities."**

*Built with ❤️ for refugee empowerment through technology*
