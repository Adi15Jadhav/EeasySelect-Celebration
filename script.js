// Configuration object for customization
const defaultConfig = {
    background_color: "#0f172a",
    surface_color: "rgba(255, 255, 255, 0.05)",
    text_color: "#ffffff",
    primary_action_color: "#3b82f6",
    secondary_action_color: "#8b5cf6",
    main_title: "EasySelect Reaches New Heights",
    subtitle: "25th Iterations of Software Excellence.",
    description: "For 25 releases, EasySelect has been the trusted solution for pump, valve, and automation systems configurations.This milestone celebrates our commitment to innovation, precision, and empowering engineers worldwide to select with confidence.",
    cta_button_text: "Explore More",
    font_family: "Inter",
    font_size: 16
};

const productData = {
    pumps: [
        { icon: "💧", name: "Centrifugal Pumps", description: "High-efficiency water and liquid transfer" },
        { icon: "⚡", name: "Submersible Pumps", description: "Deep well and borehole applications" },
        { icon: "🔄", name: "Multistage Pumps", description: "High-pressure delivery systems" },
        { icon: "🌊", name: "Wastewater Pumps", description: "Heavy-duty sewage handling" },
        { icon: "🏭", name: "Process Pumps", description: "Industrial applications" },
        { icon: "🔥", name: "Hot Water Pumps", description: "High-temperature circulation" },
        { icon: "⚙️", name: "Booster Pumps", description: "Pressure enhancement systems" }
    ],
    valves: [
        { icon: "🎚️", name: "Control Valves", description: "Precise flow regulation" },
        { icon: "🔒", name: "Shut-off Valves", description: "Complete flow isolation" },
        { icon: "✔️", name: "Check Valves", description: "Backflow prevention" },
        { icon: "🔧", name: "Ball Valves", description: "Quick quarter-turn operation" },
        { icon: "🦋", name: "Butterfly Valves", description: "Large diameter applications" },
        { icon: "🚪", name: "Gate Valves", description: "Full bore flow control" },
        { icon: "🌡️", name: "Temperature Control", description: "Thermal regulation valves" },
        { icon: "💨", name: "Pressure Relief", description: "Safety and overpressure protection" },
        { icon: "❄️", name: "Cryogenic Valves", description: "Low-temperature fluid handling" },
        { icon: "🌐", name: "Globe Valves", description: "Low-temperature fluid handling" }
    ],
    automation: [
        { icon: "📱", name: "Level Control", description: "Electronic unit for monitoring and controlling liquid levels in tanks or systems" },
        { icon: "📈", name: "Pump Drive", description: "Variable frequency drive for precise pump speed control and energy optimization" },
        { icon: "📟", name: "Pump Meter", description: "Flow and pressure measurement device for pump performance monitoring" },
    ],
    valveAutomation: [
        { icon: "⏳", name: "Limit Switch Box", description: "Provides position feedback for valves, enabling accurate monitoring and control in automated systems" },
        { icon: "📈", name: "Butterfly Valve Control", description: "Automated control system for butterfly valves, ensuring precise flow regulation and efficient operation" },
    ],
    valveActuators: [
        { icon: "🌊", name: "Hydraulic Valve Actuator", description: "Uses pressurized fluid to operate valves in high-force applications" },
        { icon: "🔌", name: "Electric Valve Actuator", description: "Motor-driven actuator for precise valve positioning and remote control" },
        { icon: "🌪️", name: "Pneumatic Valve Actuator", description: "Compressed air-powered actuator for fast and reliable valve operation" },
        { icon: "🔨", name: "Manual  Valve Actuator", description: "Hand-operated mechanism for simple and cost-effective valve control" },
    ]
}

function openModal(category) {
    const modal = document.getElementById('productModal');
    const modalTitle = document.getElementById('modalTitle');
    const productList = document.getElementById('productList');
    
    // Set title based on category
    const titles = {
        pumps: '⚙️ Pump And System Products',
        valves: '🔧 Valve Products',
        automation: '🤖 Automation Solutions',
        valveAutomation: '🖥️ Valve Automations',
        valveActuators: '🛠️ Valve Actuators'
    };
    
    modalTitle.textContent = titles[category];
    
    // Clear previous products
    productList.innerHTML = '';
    
    // Add products with animation delay
    const products = productData[category];
    products.forEach((product, index) => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`;
        productItem.style.opacity = '0';
        
        productItem.innerHTML = `
            <div class="product-icon">${product.icon}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-description">${product.description}</div>
        `;
        
        productList.appendChild(productItem);
    });
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Add fadeInUp animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

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
    const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#bef034ff','#da3434ff'];

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