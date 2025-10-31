# Quiz Funnel Flow - Visual Reference

## User Journey Map

```
┌──────────────────────────────────────────────────────────────────┐
│                     TRAFFIC SOURCES                              │
│  Google Search → Facebook Ads → Referral → Content Marketing    │
└────────────────────┬─────────────────────────────────────────────┘
                     │
                     ↓
┌──────────────────────────────────────────────────────────────────┐
│                       HOMEPAGE                                    │
│  • Hero: "Protect Your Family in 3 Simple Steps"                │
│  • Trust Bar: Credentials, testimonials                          │
│  • Primary CTA: [TAKE FREE QUIZ] ← 60% click-through goal       │
└────────────────────┬─────────────────────────────────────────────┘
                     │
                     ↓
┌──────────────────────────────────────────────────────────────────┐
│                   QUIZ LANDING PAGE                              │
│  • What you'll discover                                          │
│  • Time commitment (2 minutes)                                   │
│  • Privacy assurance                                             │
│  • [START QUIZ] ← 80% start rate goal                          │
└────────────────────┬─────────────────────────────────────────────┘
                     │
                     ↓
┌──────────────────────────────────────────────────────────────────┐
│                    QUIZ QUESTIONS (7)                            │
│  Q1: Family Status → Q2: Primary Concern → Q3: Current Status   │
│  Q4: Emotional Driver → Q5: Asset Complexity → Q6: Timeline     │
│  Q7: Budget                                                      │
│  ← Progress Bar Visible → Save & Continue Option                │
└────────────────────┬─────────────────────────────────────────────┘
                     │
                     ↓
┌──────────────────────────────────────────────────────────────────┐
│                    EMAIL CAPTURE                                 │
│  "Get your personalized estate planning roadmap"                │
│  [Name] [Email] [SUBMIT] ← 70% completion goal                 │
└────────────────────┬─────────────────────────────────────────────┘
                     │
                     ↓
           ┌─────────┴─────────┐
           │  PERSONA ENGINE   │
           │  (Algorithm runs) │
           └─────────┬─────────┘
                     │
         ┌───────────┼───────────┬───────────┬───────────┐
         │           │           │           │           │
         ↓           ↓           ↓           ↓           ↓
    ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐
    │Persona │  │Persona │  │Persona │  │Persona │  │Persona │
    │   A    │  │   B    │  │   C    │  │   D    │  │   E    │
    │Overwhel│  │Procrast│  │Business│  │Family  │  │Knowled-│
    │-med    │  │-inating│  │Owner   │  │Conflict│  │ge      │
    │Parent  │  │Pro     │  │        │  │Avoider │  │Seeker  │
    └───┬────┘  └───┬────┘  └───┬────┘  └───┬────┘  └───┬────┘
        │           │           │           │           │
        └───────────┴───────────┴───────────┴───────────┘
                              │
                              ↓
┌──────────────────────────────────────────────────────────────────┐
│              PERSONALIZED RESULTS PAGE                           │
│  • Headline: Custom to persona                                   │
│  • Insights: Based on their answers                             │
│  • Recommendations: Specific to needs                           │
│  • Free Resource: Download PDF/Video                            │
│  • Primary CTA: [BOOK CONSULTATION] ← 20% conversion goal      │
│  • Secondary: Join community, read resources                    │
└────────────────────┬─────────────────────────────────────────────┘
                     │
                     ↓
┌──────────────────────────────────────────────────────────────────┐
│                EMAIL AUTOMATION TRIGGERED                        │
│  Persona-specific sequence begins:                              │
│  • Email 1 (Immediate): Welcome + Resource delivery             │
│  • Email 2 (Day 2-3): Case study or story                      │
│  • Email 3 (Day 5-7): Offer or next value                      │
│  • Email 4+ (Day 10+): Continue nurture                        │
└────────────────────┬─────────────────────────────────────────────┘
                     │
         ┌───────────┼───────────┬───────────┬───────────┐
         │           │           │           │           │
         ↓           ↓           ↓           ↓           ↓
    ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐
    │ Book   │  │Download│  │ Join   │  │Nurture │  │ Exit & │
    │Consult │  │Resource│  │Commun. │  │ Path   │  │Retarget│
    └───┬────┘  └───┬────┘  └───┬────┘  └───┬────┘  └───┬────┘
        │           │           │           │           │
        └───────────┴───────────┴───────────┴───────────┘
                              │
                              ↓
┌──────────────────────────────────────────────────────────────────┐
│                     CONSULTATION BOOKED                          │
│  • Calendar confirmation                                         │
│  • Pre-call questionnaire                                       │
│  • Reminder emails                                              │
└────────────────────┬─────────────────────────────────────────────┘
                     │
                     ↓
┌──────────────────────────────────────────────────────────────────┐
│                  CONSULTATION CALL                               │
│  • Understand needs deeply                                       │
│  • Present solution                                             │
│  • Send proposal                                                │
└────────────────────┬─────────────────────────────────────────────┘
                     │
                     ↓
┌──────────────────────────────────────────────────────────────────┐
│                     CLIENT CONVERSION                            │
│  • Sign agreement                                               │
│  • Begin estate planning process                                │
│  • Become testimonial/referral source                          │
└──────────────────────────────────────────────────────────────────┘
```

---

## Persona Branching Logic

```
Quiz Answers → Scoring Algorithm → Persona Assignment

PERSONA A: "Overwhelmed Parent"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Triggers:
✓ Has young children (Q1)
✓ Primary concern: Protecting kids (Q2)
✓ Little/no plan in place (Q3)
✓ Emotional: Terrified/worried (Q4)

Results Page:
├─ Headline: "Your Top Priority: Protecting Your Children"
├─ Insight 1: "Without a will, court decides guardians"
├─ Insight 2: "EPF may not go directly to kids"
├─ Insight 3: "Simple steps can give you peace of mind"
├─ Resource: "5-Step Parent Protection Checklist" [PDF]
└─ CTA: [Book Free 15-Min Guardian Planning Call]

Email Sequence:
Day 1 → Welcome + Resource + Personal story
Day 3 → Case study of parent who protected kids
Day 5 → Special "New Parent Will Package" offer
Day 7 → Webinar invite "Estate Planning for Families"


PERSONA B: "Procrastinating Professional"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Triggers:
✓ Mid-career, stable income (Q1)
✓ Knows they need planning but delays (Q3)
✓ Emotional: Frustrated, keeps putting off (Q4)
✓ Timeline: Soon or planning ahead (Q6)

Results Page:
├─ Headline: "Stop Procrastinating - Let's Make This Easy"
├─ Insight 1: "80% of Malaysians have no will"
├─ Insight 2: "Takes 2 meetings, not months"
├─ Insight 3: "We handle all paperwork"
├─ Resource: Video "Estate Planning in 30 Days"
└─ CTA: [Reserve Your Fast-Track Spot]

Email Sequence:
Day 1 → "Why smart people delay (and how to stop)"
Day 4 → Time-sensitive offer
Day 7 → "See how [Name] completed in 2 weeks"
Day 10 → SMS reminder


PERSONA C: "Business Owner"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Triggers:
✓ Business owner selected (Q1)
✓ Complex assets (Q5)
✓ Primary concern: Business continuity (Q2)
✓ Budget not a concern (Q7)

Results Page:
├─ Headline: "Protect Your Business Legacy"
├─ Insight 1: "Business = biggest asset & risk"
├─ Insight 2: "Without succession: 40% value loss"
├─ Insight 3: "Business trusts protect ops & heirs"
├─ Resource: "Business Owner's Estate Guide" [20pg PDF]
└─ CTA: [Book Confidential Business Estate Review]

Email Sequence:
Day 1 → Personal CEO-to-CEO message
Day 3 → Business succession disaster case
Day 5 → Advanced protection white paper
Day 7 → Phone call from consultant
Day 10 → Exclusive round-table invite


PERSONA D: "Family Conflict Avoider"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Triggers:
✓ Primary concern: Avoiding conflicts (Q2)
✓ Emotional: Worried about disputes (Q4)
✓ Complex family situation implied

Results Page:
├─ Headline: "Create Clarity, Prevent Conflict"
├─ Insight 1: "70% disputes = no clear plan"
├─ Insight 2: "Wishes can be legally protected"
├─ Insight 3: "Trusts prevent asset fights"
├─ Resource: "Preventing Inheritance Battles Guide"
└─ CTA: [Book Confidential Family Planning Session]

Email Sequence:
Day 1 → "Your situation is common"
Day 3 → Story: How [Name] prevented disputes
Day 6 → Video on Malaysian inheritance laws
Day 9 → "Conflict-Proof Estate Plan" offer


PERSONA E: "Knowledge Seeker"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Triggers:
✓ Timeline: Just researching (Q6)
✓ Emotional: Not sure where to start (Q4)
✓ Early in planning phase (Q3)

Results Page:
├─ Headline: "Smart Planning Starts with Knowledge"
├─ Insight 1: "You're in research phase - wise"
├─ Insight 2: "Understanding = better decisions"
├─ Insight 3: "Knowledge prevents mistakes"
├─ Resource: 7-Day Email Course "Estate Planning Masterclass"
└─ CTA: [Join Our Education Community]

Email Sequence:
Day 1-7 → Daily educational content
Day 10 → Quarterly webinar invite
Day 15 → "Top 10 Mistakes" checklist
Day 20 → Soft offer: "Ready to plan?"
Ongoing → Monthly newsletter
```

---

## Data Flow Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    FRONTEND (Next.js)                       │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │  Homepage   │  │  Quiz UI    │  │  Results    │        │
│  │  Component  │→ │  Component  │→ │  Component  │        │
│  └─────────────┘  └──────┬──────┘  └─────────────┘        │
│                           │                                 │
└───────────────────────────┼─────────────────────────────────┘
                            │
                            ↓ [Submit Quiz]
┌─────────────────────────────────────────────────────────────┐
│                    BACKEND (API Routes)                     │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  /api/quiz/submit                                    │  │
│  │  • Validate answers                                  │  │
│  │  • Run persona algorithm                            │  │
│  │  • Generate persona ID                              │  │
│  └─────────────────┬────────────────────────────────────┘  │
└────────────────────┼────────────────────────────────────────┘
                     │
         ┌───────────┼───────────┬───────────┐
         │           │           │           │
         ↓           ↓           ↓           ↓
┌─────────────┐ ┌─────────┐ ┌──────────┐ ┌─────────┐
│   Google    │ │Mailchimp│ │  Email   │ │Database │
│   Sheets    │ │   API   │ │ Service  │ │(Future) │
│             │ │         │ │          │ │         │
│Store all    │ │Add to   │ │Send      │ │Store    │
│quiz answers │ │list with│ │immediate │ │long-term│
│& metadata   │ │persona  │ │welcome + │ │         │
│             │ │tag      │ │results   │ │         │
└─────────────┘ └────┬────┘ └──────────┘ └─────────┘
                     │
                     ↓
            ┌────────────────┐
            │  Mailchimp     │
            │  Automation    │
            │                │
            │  Triggers      │
            │  persona-based │
            │  email series  │
            └────────────────┘
```

---

## Component Hierarchy

```
App (Next.js)
│
├─ layout.jsx (Global wrapper)
│  ├─ Header
│  │  ├─ Logo
│  │  ├─ Navigation
│  │  └─ QuizCTA Button
│  ├─ {children} (Page content)
│  └─ Footer
│     ├─ Links
│     ├─ Contact
│     └─ Legal
│
├─ page.jsx (Homepage)
│  ├─ Hero
│  │  ├─ Headline
│  │  ├─ Subheadline
│  │  └─ PrimaryCTA
│  ├─ TrustBar
│  ├─ ProblemSection
│  ├─ QuizPreview
│  ├─ HowItWorks
│  ├─ TestimonialCarousel
│  ├─ ServicesPreview
│  └─ FinalCTA
│
├─ quiz/page.jsx (Quiz System)
│  ├─ QuizProvider (Context)
│  │  ├─ state: answers, currentStep, persona
│  │  └─ functions: nextStep, prevStep, submit
│  ├─ QuizIntro (Landing)
│  ├─ QuizContainer
│  │  ├─ ProgressIndicator
│  │  ├─ QuestionCard
│  │  │  ├─ Question text
│  │  │  ├─ Answer options
│  │  │  └─ Navigation buttons
│  │  └─ EmailCapture (Before results)
│  └─ ResultsPage
│     ├─ PersonaHero
│     ├─ InsightsSection
│     ├─ RecommendationsSection
│     ├─ ResourceDownload
│     ├─ PrimaryCTA
│     └─ SocialProof
│
├─ services/page.jsx
│  ├─ ServicesHero
│  ├─ ServiceGrid
│  │  └─ ServiceCard (x4)
│  └─ CTA
│
├─ about/page.jsx
│  ├─ FounderStory
│  ├─ Credentials
│  └─ WhyNonMuslims
│
└─ contact/page.jsx
   ├─ ContactForm
   ├─ LocationMap
   └─ ContactInfo
```

---

## Tech Stack Layers

```
┌───────────────────────────────────────────────────────────┐
│                      DEPLOYMENT                           │
│  Cloudflare Pages (Production) + Vercel (Optional)       │
└───────────────────────────────────────────────────────────┘
                            ↑
┌───────────────────────────────────────────────────────────┐
│                      HOSTING/CDN                          │
│  Static Assets + Image Optimization + Edge Functions     │
└───────────────────────────────────────────────────────────┘
                            ↑
┌───────────────────────────────────────────────────────────┐
│                   APPLICATION LAYER                       │
│  Next.js 14 App Router                                    │
│  ├─ Server Components (Default)                          │
│  ├─ Client Components (Interactive)                      │
│  ├─ API Routes (Quiz submission, forms)                  │
│  └─ Middleware (Analytics, redirects)                    │
└───────────────────────────────────────────────────────────┘
                            ↑
┌───────────────────────────────────────────────────────────┐
│                   FRAMEWORK LAYER                         │
│  React 18                                                 │
│  ├─ Hooks (useState, useEffect, useContext)              │
│  ├─ Context API (Quiz state management)                  │
│  └─ React Hook Form (Form validation)                    │
└───────────────────────────────────────────────────────────┘
                            ↑
┌───────────────────────────────────────────────────────────┐
│                    STYLING LAYER                          │
│  Tailwind CSS                                             │
│  ├─ Utility classes                                       │
│  ├─ Custom theme (colors, fonts)                         │
│  └─ Responsive breakpoints                               │
└───────────────────────────────────────────────────────────┘
                            ↑
┌───────────────────────────────────────────────────────────┐
│                  UI/ANIMATION LAYER                       │
│  ├─ Framer Motion (Subtle animations)                    │
│  ├─ Headless UI (Accessible components)                  │
│  └─ React Icons (Icon system)                            │
└───────────────────────────────────────────────────────────┘
                            ↑
┌───────────────────────────────────────────────────────────┐
│               INTEGRATIONS & SERVICES                     │
│  ├─ Mailchimp API (Email marketing)                      │
│  ├─ Google Sheets API (Data storage)                     │
│  ├─ Calendly (Booking)                                   │
│  ├─ Google Analytics (Tracking)                          │
│  └─ Nodemailer (Transactional emails)                    │
└───────────────────────────────────────────────────────────┘
```

---

## Folder Structure Visual

```
estate-planner-website/
│
├─ 📁 app/                     ← Next.js App Router
│  ├─ 📄 layout.jsx            ← Root layout (Header/Footer)
│  ├─ 📄 page.jsx              ← Homepage
│  ├─ 📄 globals.css           ← Tailwind imports
│  │
│  ├─ 📁 quiz/
│  │  ├─ 📄 page.jsx           ← Quiz main page
│  │  ├─ 📄 layout.jsx         ← Quiz-specific layout
│  │  └─ 📁 results/
│  │     └─ 📄 [persona]/page.jsx  ← Dynamic persona results
│  │
│  ├─ 📁 services/
│  │  ├─ 📄 page.jsx           ← Services overview
│  │  └─ 📁 [slug]/
│  │     └─ 📄 page.jsx        ← Individual service pages
│  │
│  ├─ 📁 about/
│  │  └─ 📄 page.jsx
│  │
│  ├─ 📁 contact/
│  │  └─ 📄 page.jsx
│  │
│  └─ 📁 api/                  ← API Routes
│     ├─ 📁 quiz/
│     │  └─ 📄 submit/route.js
│     ├─ 📁 contact/
│     │  └─ 📄 route.js
│     └─ 📁 newsletter/
│        └─ 📄 route.js
│
├─ 📁 components/              ← Reusable components
│  ├─ 📁 layout/
│  │  ├─ 📄 Header.jsx
│  │  ├─ 📄 Footer.jsx
│  │  └─ 📄 Navigation.jsx
│  │
│  ├─ 📁 quiz/
│  │  ├─ 📄 QuizContainer.jsx
│  │  ├─ 📄 QuestionCard.jsx
│  │  ├─ 📄 ProgressIndicator.jsx
│  │  ├─ 📄 ResultsPage.jsx
│  │  └─ 📄 PersonaCard.jsx
│  │
│  ├─ 📁 sections/
│  │  ├─ 📄 Hero.jsx
│  │  ├─ 📄 TrustBar.jsx
│  │  ├─ 📄 Testimonials.jsx
│  │  ├─ 📄 CTASection.jsx
│  │  └─ 📄 FAQ.jsx
│  │
│  └─ 📁 ui/
│     ├─ 📄 Button.jsx
│     ├─ 📄 Card.jsx
│     ├─ 📄 Input.jsx
│     ├─ 📄 Badge.jsx
│     └─ 📄 Modal.jsx
│
├─ 📁 lib/                     ← Utilities & helpers
│  ├─ 📄 quiz-logic.js         ← Persona algorithm
│  ├─ 📄 email-templates.js    ← Email HTML templates
│  ├─ 📄 google-sheets.js      ← Google Sheets integration
│  ├─ 📄 mailchimp.js          ← Mailchimp API
│  └─ 📄 utils.js              ← General utilities
│
├─ 📁 data/                    ← Static data
│  ├─ 📄 quiz-questions.json   ← All quiz questions
│  ├─ 📄 personas.json         ← Persona definitions
│  └─ 📄 services.json         ← Service information
│
├─ 📁 public/                  ← Static assets
│  ├─ 📁 images/
│  │  ├─ logo.svg
│  │  ├─ hero-image.jpg
│  │  └─ team/
│  ├─ 📁 documents/
│  │  └─ (PDF resources for download)
│  └─ 📄 favicon.ico
│
├─ 📁 styles/                  ← Additional styles
│  └─ 📄 custom.css            ← Custom CSS if needed
│
├─ 📄 .env.local               ← Environment variables
├─ 📄 next.config.js           ← Next.js configuration
├─ 📄 tailwind.config.js       ← Tailwind configuration
├─ 📄 package.json             ← Dependencies
└─ 📄 README.md                ← Project documentation
```

---

## Conversion Optimization Checklist

**Homepage:**
- [ ] Hero CTA above fold
- [ ] Trust indicators visible immediately
- [ ] Quiz preview section with screenshot
- [ ] Mobile-first responsive design
- [ ] Fast loading (<2s)

**Quiz System:**
- [ ] Progress bar always visible
- [ ] Maximum 7 questions
- [ ] Large, easy-to-tap buttons (mobile)
- [ ] Save progress feature
- [ ] Exit intent popup ("Wait! Don't lose your progress")

**Results Page:**
- [ ] Personalized headline with name
- [ ] Visual persona indicator
- [ ] Clear next step CTA
- [ ] Free resource download
- [ ] Social proof specific to persona
- [ ] Secondary CTA options

**Email Sequences:**
- [ ] Welcome email immediate (within 1 min)
- [ ] Resource delivery automated
- [ ] Persona-specific content
- [ ] Clear subject lines
- [ ] Mobile-optimized emails
- [ ] Unsubscribe option visible

**Forms:**
- [ ] Minimal fields (Name + Email only for quiz)
- [ ] Clear privacy statement
- [ ] Inline validation
- [ ] Success message
- [ ] Error handling

**Performance:**
- [ ] Images optimized (WebP)
- [ ] Lazy loading implemented
- [ ] Code splitting active
- [ ] Fonts optimized
- [ ] Analytics script async

---

This visual reference complements the main development plan and provides quick-reference diagrams for understanding the quiz funnel system architecture.
