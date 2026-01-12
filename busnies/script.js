// Sample profiles data
let profiles = [
    {
        id: 1,
        name: "Alex",
        age: 24,
        lookingFor: "girlfriend",
        funFact: "I can juggle while riding a unicycle! 🤹‍♂️"
    },
    {
        id: 2,
        name: "Sam",
        age: 22,
        lookingFor: "boyfriend",
        funFact: "I collect vintage postcards from around the world 📮"
    },
    {
        id: 3,
        name: "Jordan",
        age: 26,
        lookingFor: "friend",
        funFact: "I've watched every Marvel movie 3 times! 🦸‍♀️"
    },
    {
        id: 4,
        name: "Casey",
        age: 23,
        lookingFor: "girlfriend",
        funFact: "I make the world's best chocolate chip cookies 🍪"
    },
    {
        id: 5,
        name: "Riley",
        age: 25,
        lookingFor: "boyfriend",
        funFact: "I speak 4 languages and learning my 5th! 🌍"
    },
    {
        id: 6,
        name: "Morgan",
        age: 27,
        lookingFor: "friend",
        funFact: "I've been to 15 countries and counting ✈️"
    }
];

// Show signup form
function showSignup() {
    document.getElementById('home').classList.add('hidden');
    document.getElementById('browse').classList.add('hidden');
    document.getElementById('signup').classList.remove('hidden');
}

// Show browse section
function showBrowse() {
    document.getElementById('home').classList.add('hidden');
    document.getElementById('signup').classList.add('hidden');
    document.getElementById('browse').classList.remove('hidden');
    displayProfiles(profiles);
}

// Show home section
function showHome() {
    document.getElementById('signup').classList.add('hidden');
    document.getElementById('browse').classList.add('hidden');
    document.getElementById('home').classList.remove('hidden');
}

// Handle profile form submission
document.getElementById('profileForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const newProfile = {
        id: profiles.length + 1,
        name: document.getElementById('name').value,
        age: parseInt(document.getElementById('age').value),
        lookingFor: document.getElementById('lookingFor').value,
        funFact: document.getElementById('funFact').value || "Just here for fun! 😊"
    };
    
    profiles.push(newProfile);
    
    // Show success message
    alert('🎉 Profile created successfully! Welcome to TempLove!');
    
    // Reset form and show browse section
    document.getElementById('profileForm').reset();
    showBrowse();
});

// Display profiles
function displayProfiles(profilesToShow) {
    const grid = document.getElementById('profilesGrid');
    grid.innerHTML = '';
    
    if (profilesToShow.length === 0) {
        grid.innerHTML = '<p style="text-align: center; color: #666;">No profiles found. Be the first to join! 🌟</p>';
        return;
    }
    
    profilesToShow.forEach(profile => {
        const card = document.createElement('div');
        card.className = 'profile-card';
        card.innerHTML = `
            <h3>${profile.name}</h3>
            <div class="age">${profile.age} years old</div>
            <div class="looking-for">Looking for: ${profile.lookingFor}</div>
            <div class="fun-fact">"${profile.funFact}"</div>
            <button class="connect-btn" onclick="connectWith('${profile.name}')">
                Say Hi! 👋
            </button>
        `;
        grid.appendChild(card);
    });
}

// Filter profiles
function filterProfiles(filter) {
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    let filteredProfiles;
    if (filter === 'all') {
        filteredProfiles = profiles;
    } else {
        filteredProfiles = profiles.filter(profile => profile.lookingFor === filter);
    }
    
    displayProfiles(filteredProfiles);
}

// Connect with someone
function connectWith(name) {
    const messages = [
        `🎉 You've sent a fun message to ${name}!`,
        `💫 ${name} has been notified of your interest!`,
        `🌟 Great choice! ${name} seems awesome!`,
        `💕 Your connection request has been sent to ${name}!`
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage + '\n\nRemember: This is just for fun! Be respectful and enjoy making new connections! 😊');
}

// Navigation
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers for navigation
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href').substring(1);
            
            if (target === 'home') {
                showHome();
            } else if (target === 'browse') {
                showBrowse();
            } else if (target === 'about') {
                alert('💕 TempLove is a fun, temporary dating site for casual connections!\n\n🌟 Features:\n• Create fun profiles\n• Browse interesting people\n• Make temporary connections\n• No pressure, just fun!\n\n⚠️ Remember: Always be respectful, stay safe, and have fun!');
            }
        });
    });
    
    // Add some fun animations
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add some fun interactive elements
document.addEventListener('mousemove', function(e) {
    if (Math.random() > 0.99) {
        createFloatingHeart(e.clientX, e.clientY);
    }
});

function createFloatingHeart(x, y) {
    const heart = document.createElement('div');
    heart.innerHTML = '💕';
    heart.style.position = 'fixed';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.pointerEvents = 'none';
    heart.style.fontSize = '20px';
    heart.style.zIndex = '9999';
    heart.style.animation = 'floatUp 2s ease-out forwards';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 2000);
}

// Add CSS animation for floating hearts
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-100px) scale(0.5);
        }
    }
`;
document.head.appendChild(style);