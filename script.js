// Configuration object for customization
const defaultConfig = {
    background_color: "#0f172a",
    surface_color: "rgba(255, 255, 255, 0.05)",
    text_color: "#ffffff",
    primary_action_color: "#3b82f6",
    secondary_action_color: "#8b5cf6",
    main_title: "EasySelect Reaches New Heights",
    subtitle: "A Quarter Century of Innovation in Configuration Excellence",
    description: "For 25 releases, EasySelect has been the trusted solution for pump, valve, and automation systems configuration. This milestone celebrates our commitment to innovation, precision, and empowering engineers worldwide to design with confidence.",
    cta_button_text: "Explore What's New",
    font_family: "Inter",
    font_size: 16
};

// Apply configuration changes (styles only, preserve HTML content)
function applyConfig(config) {
    const container = document.querySelector('.celebration-container');
    const customFont = config.font_family || defaultConfig.font_family;
    const baseFontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

    // Apply font family
    document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;

    // Apply background gradient
    const gradient = `linear-gradient(135deg, ${config.background_color || defaultConfig.background_color} 0%, ${config.secondary_action_color || defaultConfig.secondary_action_color} 100%)`;
    container.style.background = gradient;

    // Apply surface colors
    const descBox = document.querySelector('.description-box');
    descBox.style.background = config.surface_color || defaultConfig.surface_color;

    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.style.background = config.surface_color || defaultConfig.surface_color;
    });

    // Apply colors only (font sizes come from CSS)
    const mainTitle = document.getElementById('main-title');
    mainTitle.style.color = config.text_color || defaultConfig.text_color;

    // Apply button gradient only (font size comes from CSS)
    const ctaButton = document.getElementById('cta-button');
    const buttonGradient = `linear-gradient(135deg, ${config.primary_action_color || defaultConfig.primary_action_color}, ${config.secondary_action_color || defaultConfig.secondary_action_color})`;
    ctaButton.style.background = buttonGradient;
}

// Create confetti animation
function createConfetti() {
    const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'];

    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.animationDuration = (Math.random() * 3 + 3) + 's';
            
            // Add to body instead of container for full page coverage
            document.body.appendChild(confetti);

            // Remove confetti after animation
            setTimeout(() => confetti.remove(), 7000);
        }, i * 200);
    }
}

// Add click event to CTA button
document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-button');
    
    ctaButton.addEventListener('click', () => {
        alert('Welcome to EasySelect 25th Release! 🎉');
        // Add your custom action here
        // window.location.href = 'your-link-here';
    });

    // Initialize confetti
    createConfetti();
    setInterval(createConfetti, 8000);

    // Apply styling (colors, fonts, backgrounds) but preserve HTML content
    applyConfig(defaultConfig);
});

// Export functions for external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        applyConfig,
        createConfetti,
        defaultConfig
    };
}