// server/data/tips.js
// Seed data for the "Guide to Starting Your Business" web app.
// Shared attributes: title, text, category, image, submittedBy.
// `slug` powers each tip's unique detail-view endpoint, e.g. /tips/find-your-niche

const tips = [
  {
    id: 1,
    slug: "find-your-niche",
    title: "Find Your Niche Before You Build",
    text: "Don't try to serve everyone. Pick a narrow, specific audience whose problem you understand deeply, then design your first offering around that one pain point. A focused niche makes marketing cheaper, messaging clearer, and early word-of-mouth much stronger.",
    category: "Market Research",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    submittedBy: "Maya Chen",
  },
  {
    id: 2,
    slug: "validate-with-conversations",
    title: "Validate With Conversations, Not Assumptions",
    text: "Before writing a line of code or signing a lease, talk to at least 20 potential customers. Ask about their current habits and frustrations rather than pitching your idea. Real demand shows up when people describe a problem they already pay to solve.",
    category: "Market Research",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
    submittedBy: "Darius Okoye",
  },
  {
    id: 3,
    slug: "choose-a-business-model",
    title: "Choose a Business Model That Fits Your Cash Flow",
    text: "Subscription, one-time sales, marketplace, and freemium models each demand different runway and effort. Map how money actually enters your business and how long customers take to pay, then pick the model your bank account can survive.",
    category: "Business Models",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    submittedBy: "Priya Raman",
  },
  {
    id: 4,
    slug: "build-an-mvp",
    title: "Ship a Minimum Viable Product First",
    text: "Your first version should do one thing well, not ten things poorly. Strip the idea down to its core promise, get it into real users' hands quickly, and let their feedback guide what you build next instead of guessing in isolation.",
    category: "Product Development",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12",
    submittedBy: "Leo Martinez",
  },
  {
    id: 5,
    slug: "find-the-right-co-founder",
    title: "Find a Partner Whose Strengths Cover Your Gaps",
    text: "The best co-founders disagree productively and bring complementary skills, not identical ones. Before committing, work on a small project together, talk openly about equity and roles, and put your expectations in writing while the relationship is still easy.",
    category: "Business Models",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
    submittedBy: "Hana Ito",
  },
  {
    id: 6,
    slug: "make-your-first-sales",
    title: "Sell Before You Feel Ready",
    text: "Early sales teach you more than any plan. Reach out directly to people in your niche, offer to solve their problem, and listen for the objections that come up. Each conversation sharpens your pitch and reveals what customers truly value.",
    category: "Sales",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1",
    submittedBy: "Tomás Rivera",
  },
  {
    id: 7,
    slug: "talk-to-suppliers",
    title: "Negotiate With Suppliers Like a Long-Term Partner",
    text: "Suppliers reward reliability and clear communication. Order in sensible quantities, pay on time, and be transparent about your growth plans. A supplier who trusts you will offer better terms, faster turnaround, and flexibility when you need it most.",
    category: "Product Development",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c",
    submittedBy: "Aisha Bello",
  },
  {
    id: 8,
    slug: "fund-without-giving-away-control",
    title: "Understand Funding Before You Take It",
    text: "Bootstrapping, loans, grants, and equity investment each carry different costs and trade-offs. Raising money too early can mean giving up control before your idea is proven, so learn what each path expects from you before you sign anything.",
    category: "Funding",
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9",
    submittedBy: "Grace Sullivan",
  },
  {
    id: 9,
    slug: "grow-your-team-slowly",
    title: "Hire Slowly, Around Real Bottlenecks",
    text: "Add people only when a specific task is consistently slowing you down. Your first hires shape the culture more than any later ones, so look for adaptable generalists who share your standards and can wear several hats while you are small.",
    category: "Business Models",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    submittedBy: "Nadia Petrova",
  },
  {
    id: 10,
    slug: "track-the-numbers-that-matter",
    title: "Watch a Few Numbers That Actually Matter",
    text: "Vanity metrics like total signups feel good but rarely guide decisions. Focus on cost to acquire a customer, how much they spend over time, and your monthly runway. These three numbers tell you whether the business is genuinely working.",
    category: "Funding",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    submittedBy: "Marcus Lee",
  },
];

export default tips;