// Sample data
const announcements = [
  {
    id: 1,
    title: "Water Supply Maintenance",
    content:
      "Water supply will be interrupted on Saturday, Jan 27th from 10 AM to 2 PM for routine maintenance of the overhead tank.",
    date: "2025-06-25",
    priority: "high",
  },
  {
    id: 2,
    title: "Monthly Society Meeting",
    content:
      "All residents are invited to attend the monthly society meeting on Feb 3rd at 7 PM in the community hall. Agenda includes budget discussion and new security measures.",
    date: "2025-06-30",
    priority: "medium",
  },
  {
    id: 3,
    title: "Parking Guidelines Reminder",
    content:
      "Please ensure vehicles are parked only in designated spots. Unauthorized parking in visitor areas will result in towing.",
    date: "2025-06-20",
    priority: "low",
  },
]

const events = [
  {
    id: 1,
    title: "Independence Day",
    date: "2025-08-15",
    time: "8:00 AM",
    location: "Society Garden",
    description: "Join us for flag hoisting ceremony followed by cultural programs and refreshments.",
  },
  {
    id: 2,
    title: "Kids Art & Craft Workshop",
    date: "2025-07-01",
    time: "4:00 PM",
    location: "Community Hall",
    description: "Fun art and craft session for children aged 5-12. Materials will be provided.",
  },
  {
    id: 3,
    title: "Yoga Classes Resume",
    date: "2025-02-07",
    time: "6:30 AM",
    location: "Terrace Garden",
    description: "Morning yoga sessions resume after winter break. Open to all residents.",
  },
]

const marketplace = [
  {
    id: 1,
    type: "sell",
    title: "Dining Table Set",
    description: "6-seater wooden dining table with chairs in excellent condition. Moving sale.",
    price: "₹15,000",
    contact: "Mrs. Sharma - 9876543210",
    flat: "A-304",
    
  },
  {
    id: 2,
    image: "ampartment.jpeg",
    type: "rent",
   
    description: "Fully furnished 2BHK on 5th floor. Family preferred. Immediate possession.",
    price: "₹25,000/month",
    contact: "Mr. Patel - 9876543211",
    flat: "B-502",
    image: "ampartment.jpeg",
  },
  {
    id: 3,
    type: "buy",
    title: "Looking for Refrigerator",
    description: "Need a good condition double door refrigerator. Budget up to ₹20,000.",
    price: "Up to ₹20,000",
    contact: "Ms. Gupta - 9876543212",
    flat: "C-201",
    
  },
]

const contacts = [
  {
    category: "Emergency",
    items: [
      { name: "Police", number: "100" },
      { name: "Fire Brigade", number: "101" },
      { name: "Ambulance", number: "108" },
      { name: "Society Security", number: "9876543200" },
    ],
  },
  {
    category: "Society Management",
    items: [
      { name: "Society Secretary", number: "9876543201" },
      { name: "Maintenance Office", number: "9876543202" },
      { name: "Watchman (Gate 1)", number: "9876543203" },
      { name: "Watchman (Gate 2)", number: "9876543204" },
    ],
  },
  {
    category: "Utilities & Services",
    items: [
      { name: "Electricity Board", number: "1912" },
      { name: "Water Department", number: "1916" },
      { name: "Gas Agency", number: "9876543205" },
      { name: "Internet Support", number: "9876543206" },
    ],
  },
]

// Utility functions
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

function toggleAdmin() {
  const adminPanel = document.getElementById("adminPanel")
  adminPanel.classList.toggle("hidden")
}

function formatDate(dateString) {
  const options = { year: "numeric", month: "short", day: "numeric" }
  return new Date(dateString).toLocaleDateString("en-US", options)
}

// Render functions
function renderAnnouncements() {
  const grid = document.getElementById("announcementsGrid")
  grid.innerHTML = announcements
    .map(
      (announcement) => `
        <div class="card">
            <div class="card-header">
                <div class="card-title">
                    <span>${announcement.title}</span>
                    <span class="badge badge-${announcement.priority}">${announcement.priority}</span>
                </div>
                <p style="font-size: 0.875rem; color: #6b7280; margin: 0;">${formatDate(announcement.date)}</p>
            </div>
            <div class="card-content">
                <p class="card-text">${announcement.content}</p>
            </div>
        </div>
    `,
    )
    .join("")
}

function renderEvents() {
  const grid = document.getElementById("eventsGrid")
  grid.innerHTML = events
    .map(
      (event) => `
        <div class="card">
            <div class="card-header">
                <div class="card-title">
                    <span>${event.title}</span>
                </div>
                <div class="card-meta">
                    <div class="meta-item">
                        <span>📅</span>
                        <span>${formatDate(event.date)}</span>
                    </div>
                    <div class="meta-item">
                        <span>🕐</span>
                        <span>${event.time}</span>
                    </div>
                </div>
            </div>
            <div class="card-content">
                <div class="meta-item" style="margin-bottom: 0.75rem;">
                    <span>📍</span>
                    <span style="font-size: 0.875rem; color: #6b7280;">${event.location}</span>
                </div>
                <p class="card-text">${event.description}</p>
            </div>
        </div>
    `,
    )
    .join("")
}

function renderMarketplace() {
  const grid = document.getElementById("marketplaceGrid")
  grid.innerHTML = marketplace
    .map(
      (item) => `
        <div class="card">
            <div class="card-header">
                <div class="card-title">
                    <span>${item.title}</span>
                    <span class="badge badge-${item.type}">${item.type}</span>
                </div>
                <p class="card-price">${item.price}</p>
            </div>
            <div class="card-content">
                <p class="card-text">${item.description}</p>
                <div class="card-separator"></div>
                <div class="contact-info">
                    <span>👤</span>
                    <span>${item.contact}</span>
                </div>
                <p class="flat-info">Flat: ${item.flat}</p>
            </div>
        </div>
    `,
    )
    .join("")
}

function renderContacts() {
  const grid = document.getElementById("contactsGrid")
  grid.innerHTML = contacts
    .map(
      (category) => `
        <div class="card">
            <div class="card-header">
                <h3 style="font-size: 1.125rem; font-weight: 600; color: #1e40af; margin: 0;">${category.category}</h3>
            </div>
            <div class="card-content">
                ${category.items
                  .map(
                    (contact) => `
                    <div class="contact-item">
                        <span class="contact-name">${contact.name}</span>
                        <a href="tel:${contact.number}" class="contact-number">${contact.number}</a>
                    </div>
                `,
                  )
                  .join("")}
            </div>
        </div>
    `,
    )
    .join("")
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  renderAnnouncements()
  renderEvents()
  renderMarketplace()
  renderContacts()
})

// Add smooth scrolling for mobile navigation
document.querySelectorAll(".mobile-nav-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    // Add active state visual feedback
    document.querySelectorAll(".mobile-nav-btn").forEach((b) => (b.style.color = "#6b7280"))
    this.style.color = "#2563eb"

    // Reset color after animation
    setTimeout(() => {
      this.style.color = "#6b7280"
    }, 300)
  })
})
