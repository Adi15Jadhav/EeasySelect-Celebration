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
    font_family: "Arimo",
    font_size: 16
};

const productData = {
    pumps: [   
    { icon: "💧", name: "Baseplate Pumps", description: "Durable pumps mounted on a baseplate for heavy-duty industrial applications" },
    { icon: "🔐", name: "Closed-Coupled Pumps", description: "Compact design with motor and pump directly connected for space-saving installations" },
    { icon: "➡️", name: "Inline Pumps", description: "Ideal for pipeline systems, ensuring smooth flow without altering pipe layout" },
    { icon: "🚢", name: "Submersible Pumps", description: "Reliable underwater operation for wells, boreholes, and drainage systems" },
    { icon: "⚡", name: "Split Case Pumps", description: "High-capacity pumps with easy maintenance for large-scale water transfer" },
    { icon: "🔄", name: "Multistage Pumps", description: "Delivers high pressure through multiple impellers for demanding applications" },
    { icon: "🌊", name: "Wastewater Pumps", description: "Robust design for handling sewage, sludge, and contaminated liquids" },
    { icon: "🏭", name: "Sealless Pumps", description: "Leak-proof pumping solutions for hazardous or sensitive industrial fluids" },
    { icon: "🔥", name: "Hot Water Pumps", description: "Engineered for safe circulation of high-temperature liquids in heating systems" },
    { icon: "🎚️", name: "Vertical Pumps", description: "Space-efficient pumps for deep sumps and high-capacity vertical installations" },
    { icon: "➖", name: "Pipe Shaft Pumps", description: "Ideal for pumping large volumes from reservoirs or cooling towers" },
    { icon: "⚙️", name: "Booster Systems", description: "Enhances water pressure for consistent supply in commercial and industrial setups" }
    ],
    valves: [
        { icon: "🎚️", name: "Control Valves", description: "Precision flow regulation for process control" },
        { icon: "🔒", name: "Shut-off Valves", description: "Complete isolation for safety and maintenance" },
        { icon: "✔️", name: "Check Valves", description: "Prevents reverse flow to protect equipment" },
        { icon: "🔧", name: "Ball Valves", description: "Quick quarter-turn operation for reliable shut-off" },
        { icon: "🦋", name: "Butterfly Valves", description: "Compact solution for large-diameter flow control" },
        { icon: "🚪", name: "Gate Valves", description: "Full bore design for unrestricted flow" },
        { icon: "🌡️", name: "Temperature Control", description: "Maintains thermal stability in critical systems" },
        { icon: "💨", name: "Pressure Relief", description: "Protects systems from overpressure conditions" },
        { icon: "❄️", name: "Cryogenic Valves", description: "Handles extremely low-temperature fluids safely" },
        { icon: "🌐", name: "Globe Valves", description: "Precise throttling for accurate flow control" }
    ],
    automation: [
        { icon: "📱", name: "Level Control", description: "Electronic unit for monitoring and controlling liquid levels in tanks or systems" },
        { icon: "🎛️", name: "Pump Drive", description: "Variable frequency drive for precise pump speed control and energy optimization" },
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
    ],
    supportingTools:[
         { icon: "📛", name: "Nameplate Generator", description: "Tool that helps create precise, customized nameplates with technical specs, model numbers, serial details, and other key information. It enables users to design and print nameplates using laser engraving or adhesive labels" },
         { icon: "📊", name: "MasterData Downloader", description: "It is a replication tool that fetches motor and pricing data from SAP and updates the Easy Select database. It reduces replication time, offers clear error messages, and provides a user-friendly interface with a progress bar and history tracking" },
         { icon: "⌚", name: "Delivery Time Tool", description: "Delivery Time Tool is used by product managers to update manufacturing time, quantity, and dates in the database. It supports bulk updates through Excel import/export and includes a logging tab to track all changes. With multiple filters, sorting and managing data becomes quick and easy" },
         { icon: "🦾", name: "EasySelect Deployment Tool", description: "Tool is a specialized software used for EasySelect Qual deployment, including KIF and database deployment. It is fully automated, enabling seamless and effortless end-to-end deployment" },
         { icon: "ℹ️", name: "EasySelect Database Update Tool", description: "Tool is a utility designed to update and manage EasySelect application data directly in the database. It automates data updates to ensure accuracy, consistency, and faster maintenance" }
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
        valveAutomation: '🖥️ Valve Automations Solutions',
        valveActuators: '⚓ Valve Actuators',
        supportingTools: '🛠️ Supporting Tools'
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

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

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

function applyConfig(config) {
    const container = document.querySelector('.celebration-container');

    const gradient = `linear-gradient(135deg, ${config.background_color || defaultConfig.background_color} 0%, ${config.secondary_action_color || defaultConfig.secondary_action_color} 100%)`;
    container.style.background = gradient;

    const descBox = document.querySelector('.description-box');
    descBox.style.background = config.surface_color || defaultConfig.surface_color;

    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.style.background = config.surface_color || defaultConfig.surface_color;
    });

    const mainTitle = document.getElementById('main-title');
    mainTitle.style.color = config.text_color || defaultConfig.text_color;

}

// Create confetti animation
function createConfetti() {
    const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#bef034ff','#da3434ff'];

    for (let i = 0; i < 100; i++) {
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


document.addEventListener('DOMContentLoaded', () => {
    createConfetti();
    setInterval(createConfetti, 8000);

    applyConfig(defaultConfig);
});

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        applyConfig,
        createConfetti,
        defaultConfig
    };
}