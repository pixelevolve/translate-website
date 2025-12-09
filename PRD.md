# Shopify AI Translator Landing Page PRD

**Product Name**: Shopify AI Translator Landing Page  
**Domain**: translate.pixel-evolve.com  
**Version**: 1.0  
**Date**: December 2025  
**Status**: Design Phase

---

## 1. Project Overview

### 1.1 Background

PixelEvolve AB is developing a Shopify AI translation app to help merchants quickly translate their stores into multiple languages. This PRD defines the detailed design specifications for the product landing page, aiming to create a high-converting marketing page.

### 1.2 Goals

| Goal | Metric | Priority |
|------|--------|----------|
| Drive app installs | Install conversion rate > 5% | P0 |
| Clearly communicate product value | Page dwell time > 2 minutes | P0 |
| Build brand trust | Bounce rate < 40% | P1 |
| Present pricing options | Pricing section click rate > 10% | P1 |

### 1.3 Target Users

| User Type | Characteristics | Pain Points | Our Solution |
|-----------|-----------------|-------------|--------------|
| **Small Store Owners** | Solo operation, monthly sales < $10K | No time for manual translation | One-click AI translation |
| **Growing Merchants** | 2-5 person team, multi-market sales | Inconsistent quality, brand terms mistranslated | Glossary protection + quality validation |
| **Agency Partners** | Manage multiple stores | Need batch processing efficiency | Batch translation + API |

### 1.4 Competitive Analysis

| Competitor | Price | Strengths | Weaknesses | Our Differentiation |
|------------|-------|-----------|------------|---------------------|
| Langify | $17.50/mo | Established, feature-rich | Complex UI, expensive | Simpler, AI-driven |
| Weglot | $15-79/mo | Instant translation | Per-word pricing, costly | Fixed pricing, transparent |
| T Lab | $9.99/mo | Cheap | Poor translation quality | GPT-4 high quality |

---

## 2. Page Structure

### 2.1 Information Architecture

```
translate.pixel-evolve.com/
│
├── Homepage (/)
│   ├── Header - Fixed navigation
│   ├── Hero Section - Main visual + core value proposition + CTA
│   ├── Social Proof - Trust badges (optional, V2)
│   ├── Features Section - 6 core features
│   ├── How It Works - 3-step process
│   ├── Pricing Section - 3-tier pricing
│   ├── FAQ Section - 7 common questions
│   ├── Final CTA - Final conversion
│   └── Footer - Footer information
│
├── /privacy - Privacy Policy
└── /terms - Terms of Service
```

### 2.2 User Journey

```
Enter page
    ↓
Hero: See value proposition → Click "Install Free" (quick conversion)
    ↓ or continue browsing
Features: Learn specific features → Build interest
    ↓
How It Works: Understand usage flow → Reduce concerns
    ↓
Pricing: Choose suitable plan → Ready to act
    ↓
FAQ: Answer questions → Eliminate doubts
    ↓
Final CTA: Final conversion point → Click install
```

---

## 3. Detailed Design Specifications

### 3.1 Header

#### 3.1.1 Layout

```
Desktop (≥1024px):
┌─────────────────────────────────────────────────────────────────────┐
│  [Logo] Shopify AI Translator   Features  Pricing  FAQ    [Install] │
│         by PixelEvolve                                    Free      │
└─────────────────────────────────────────────────────────────────────┘

Mobile (<768px):
┌─────────────────────────────────────────────────────────────────────┐
│  [Logo] Shopify AI Translator                              [☰]     │
└─────────────────────────────────────────────────────────────────────┘
```

#### 3.1.2 Specifications

| Property | Value |
|----------|-------|
| Height | 64px |
| Background | White (#ffffff) |
| Shadow | On scroll: `0 1px 3px rgba(0,0,0,0.1)` |
| Position | `position: sticky; top: 0;` |
| z-index | 100 |

#### 3.1.3 Logo Specifications

```
[■▢●] Shopify AI Translator
      by PixelEvolve

- Logo icon: 24px
- Product name: 18px, font-weight: 600, color: #111827
- Sub-brand: 12px, font-weight: 400, color: #6b7280
- "by PixelEvolve" links to pixel-evolve.com
```

#### 3.1.4 Navigation Items

| Item | Behavior | Style |
|------|----------|-------|
| Features | Scroll to #features | text-gray-600, hover:text-gray-900 |
| Pricing | Scroll to #pricing | text-gray-600, hover:text-gray-900 |
| FAQ | Scroll to #faq | text-gray-600, hover:text-gray-900 |
| Install Free | Link to Shopify App Store | Primary Button (small) |

#### 3.1.5 Mobile Menu

```
Click hamburger menu → Expand fullscreen menu
┌─────────────────────────────────────────────────────────────────────┐
│                                                              [✕]    │
│                                                                     │
│                           Features                                  │
│                           Pricing                                   │
│                           FAQ                                       │
│                                                                     │
│                      [Install Free]                                 │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

Animation: Slide in from right, 300ms ease
Background: White
```

---

### 3.2 Hero Section

#### 3.2.1 Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                    🌐 Shopify AI Translator                         │
│                                                                     │
│                 Translate your store in minutes,                    │
│                         not days                                    │
│                                                                     │
│        AI-powered translation with smart brand protection           │
│                                                                     │
│                      [Install Free →]                               │
│                                                                     │
│                   Free plan • No credit card                        │
│                                                                     │
│   ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐  │
│   │ ✓ Built for      │  │ 🇸🇪 Engineered in │  │ ⚡ Powered by    │  │
│   │   Shopify        │  │   Stockholm      │  │   GPT-4         │  │
│   └──────────────────┘  └──────────────────┘  └──────────────────┘  │
│                                                                     │
│         ┌─────────────────────────────────────────────┐            │
│         │                                             │            │
│         │        [Product screenshot/preview]         │            │
│         │         (MVP: Use placeholder)              │            │
│         │                                             │            │
│         └─────────────────────────────────────────────┘            │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

#### 3.2.2 Specifications

| Element | Specification |
|---------|---------------|
| Section height | auto, min-height: 90vh |
| Background | Gradient: `linear-gradient(180deg, #f8fafc 0%, #eff6ff 50%, #ecfdf5 100%)` |
| Padding | Desktop: 120px 0 80px; Mobile: 80px 20px 60px |
| Max width | 1200px, centered |

#### 3.2.3 Copy Content

| Element | Content | Style |
|---------|---------|-------|
| Product identifier | 🌐 Shopify AI Translator | 16px, text-gray-500, flex with icon |
| Main headline | Translate your store in minutes, not days | H1, 48px/40px(mobile), font-bold, text-gray-900 |
| Subheadline | AI-powered translation with smart brand protection | 20px/18px(mobile), text-gray-600, max-width: 600px |
| CTA button | Install Free → | Primary Button Large, bg-emerald-500, hover:bg-emerald-600 |
| Trust note | Free plan • No credit card required | 14px, text-gray-500 |

#### 3.2.4 Trust Badges

```css
/* Badge container */
.trust-badges {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 32px;
}

/* Individual badge */
.trust-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 9999px; /* pill shape */
  font-size: 14px;
  color: #374151;
}
```

| Badge | Icon | Text |
|-------|------|------|
| Badge 1 | ✓ (green) | Built for Shopify |
| Badge 2 | 🇸🇪 | Engineered in Stockholm |
| Badge 3 | ⚡ | Powered by GPT-4 |

#### 3.2.5 Product Screenshot

| Property | Value |
|----------|-------|
| Max width | 900px |
| Border radius | 12px |
| Shadow | `0 25px 50px -12px rgba(0, 0, 0, 0.15)` |
| Border | 1px solid #e5e7eb |
| Background | Light gray (#f9fafb) - as placeholder |

**MVP Phase**: Use placeholder image or simple UI mockup  
**After App Launch**: Replace with actual screenshots

---

### 3.3 Features Section

#### 3.3.1 Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                     Why merchants love us                           │
│                                                                     │
│   ┌─────────────┐    ┌─────────────┐    ┌─────────────┐            │
│   │     🚀      │    │     🛡️      │    │     💰      │            │
│   │  Lightning  │    │   Brand     │    │ Transparent │            │
│   │    Fast     │    │ Protection  │    │  Pricing    │            │
│   │             │    │             │    │             │            │
│   │ Translate   │    │ Your brand  │    │ Know exactly│            │
│   │ 50 products │    │ names stay  │    │ what you    │            │
│   │ in under    │    │ untouched.  │    │ pay.        │            │
│   │ 5 minutes.  │    │ Always.     │    │             │            │
│   └─────────────┘    └─────────────┘    └─────────────┘            │
│                                                                     │
│   ┌─────────────┐    ┌─────────────┐    ┌─────────────┐            │
│   │     🎯      │    │     🔄      │    │     💬      │            │
│   │   Quality   │    │    Auto     │    │   Human     │            │
│   │ Translation │    │    Sync     │    │  Support    │            │
│   │             │    │             │    │             │            │
│   │ E-commerce  │    │ Products    │    │ Real humans │            │
│   │ optimized.  │    │ update?     │    │ respond in  │            │
│   │             │    │ Auto-sync.  │    │ <4 hours.   │            │
│   └─────────────┘    └─────────────┘    └─────────────┘            │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

#### 3.3.2 Specifications

| Property | Value |
|----------|-------|
| Background | White (#ffffff) |
| Padding | 80px 0 |
| Grid | 3 columns (Desktop), 2 columns (Tablet), 1 column (Mobile) |
| Grid gap | 32px |
| Max width | 1200px |

#### 3.3.3 Feature Card Specifications

```css
.feature-card {
  text-align: center;
  padding: 32px 24px;
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.feature-title {
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 12px;
}

.feature-description {
  font-size: 16px;
  color: #6b7280;
  line-height: 1.6;
}
```

#### 3.3.4 Feature Content Details

| # | Icon | Title | Description |
|---|------|-------|-------------|
| 1 | 🚀 | Lightning Fast | Translate 50 products in under 5 minutes. No more waiting for manual translations. |
| 2 | 🛡️ | Brand Protection | Your brand names, product lines, and key terms stay untouched. Always. |
| 3 | 💰 | Transparent Pricing | Know exactly what you pay. No per-word fees. No hidden charges. No surprises. |
| 4 | 🎯 | Quality Translation | E-commerce optimized AI prompts deliver natural, conversion-focused copy. |
| 5 | 🔄 | Auto Sync | Products update in your store? Translations sync automatically. Stay current effortlessly. |
| 6 | 💬 | Human Support | Real humans respond to your questions in under 4 hours. We're here for you. |

---

### 3.4 How It Works Section

#### 3.4.1 Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                        How it works                                 │
│                Get started in just 3 simple steps                   │
│                                                                     │
│        ①                    ②                    ③                  │
│     Install              Configure             Translate            │
│                                                                     │
│   ┌─────────┐          ┌─────────┐          ┌─────────┐            │
│   │  [icon] │─────────▶│  [icon] │─────────▶│  [icon] │            │
│   └─────────┘          └─────────┘          └─────────┘            │
│                                                                     │
│   Install our app      Select your          Click translate         │
│   from Shopify         target languages     and watch the           │
│   App Store. Takes     and set up brand     magic happen.           │
│   30 seconds.          term protection.     That's it!              │
│                                                                     │
│                       [Get Started →]                               │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

#### 3.4.2 Specifications

| Property | Value |
|----------|-------|
| Background | Light gray (#f9fafb) |
| Padding | 80px 0 |
| Max width | 1000px |

#### 3.4.3 Step Number Style

```css
.step-number {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
  color: white;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}
```

#### 3.4.4 Connector Line Style

```css
/* Desktop: Horizontal connector */
.step-connector {
  width: 100px;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #10b981);
  position: relative;
}

.step-connector::after {
  content: '▶';
  position: absolute;
  right: -8px;
  top: -8px;
  color: #10b981;
}

/* Mobile: Hide connector */
@media (max-width: 768px) {
  .step-connector {
    display: none;
  }
}
```

#### 3.4.5 Step Content

| Step | Number | Title | Description | Icon Suggestion |
|------|--------|-------|-------------|-----------------|
| 1 | ① | Install | Install our app from Shopify App Store. Takes 30 seconds. | Download/store icon |
| 2 | ② | Configure | Select your target languages and set up brand term protection. | Settings/gear icon |
| 3 | ③ | Translate | Click translate and watch the magic happen. That's it! | Magic wand/lightning icon |

---

### 3.5 Pricing Section

#### 3.5.1 Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                    Simple, transparent pricing                      │
│          No hidden fees. No complicated tiers. Just results.        │
│                                                                     │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐     │
│  │                 │  │  ⭐ BEST VALUE  │  │                 │     │
│  │      Free       │  │                 │  │       Pro       │     │
│  │                 │  │     Basic       │  │                 │     │
│  │     $0/mo       │  │                 │  │     $49/mo      │     │
│  │                 │  │    $19/mo       │  │                 │     │
│  │  Perfect for    │  │                 │  │  For growing    │     │
│  │  trying out     │  │  For starting   │  │  stores         │     │
│  │                 │  │  stores         │  │                 │     │
│  │ ──────────────  │  │                 │  │ ──────────────  │     │
│  │                 │  │ ──────────────  │  │                 │     │
│  │ ✓ 1 language    │  │                 │  │ ✓ 5 languages   │     │
│  │ ✓ 200 products  │  │ ✓ 2 languages   │  │ ✓ Unlimited     │     │
│  │ ✓ Basic glossary│  │ ✓ 500 products  │  │   products      │     │
│  │   (10 terms)    │  │ ✓ Full glossary │  │ ✓ Full glossary │     │
│  │ ✓ Email support │  │   (50 terms)    │  │ ✓ Priority queue│     │
│  │                 │  │ ✓ Email support │  │ ✓ Priority      │     │
│  │ ✗ Batch         │  │ ✓ Batch         │  │   support       │     │
│  │   translation   │  │   translation   │  │ ✓ Batch         │     │
│  │                 │  │                 │  │   translation   │     │
│  │                 │  │                 │  │ ✓ API access    │     │
│  │                 │  │                 │  │                 │     │
│  │  [Start Free]   │  │ [Choose Basic]  │  │ [Go Pro]        │     │
│  │                 │  │                 │  │                 │     │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘     │
│                                                                     │
│           All plans include: AI translation • Brand protection      │
│                 Automatic sync • Quality validation                 │
│                     SEO-friendly hreflang support                   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

#### 3.5.2 Specifications

| Property | Value |
|----------|-------|
| Background | White (#ffffff) |
| Padding | 80px 0 |
| Card grid | 3 columns, gap: 24px |
| Max width | 1100px |

#### 3.5.3 Pricing Card Specifications

**Standard Card (Free, Pro)**
```css
.pricing-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 32px;
  text-align: center;
}

.pricing-card:hover {
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
  transition: all 0.3s ease;
}
```

**Featured Card (Basic - Best Value)**
```css
.pricing-card-featured {
  background: white;
  border: 2px solid #10b981;
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  position: relative;
  box-shadow: 0 8px 30px rgba(16, 185, 129, 0.15);
}

.pricing-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #10b981;
  color: white;
  padding: 4px 16px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}
```

#### 3.5.4 Pricing Details

**Free Plan**

| Property | Value |
|----------|-------|
| Price | $0/mo |
| Tagline | Perfect for trying out |
| Features | ✓ 1 language |
| | ✓ 200 products |
| | ✓ Basic glossary (10 terms) |
| | ✓ Email support |
| | ✗ Batch translation |
| Button | Start Free (Ghost Button) |

**Basic Plan (Recommended)**

| Property | Value |
|----------|-------|
| Price | $19/mo |
| Badge | ⭐ BEST VALUE |
| Tagline | For starting stores |
| Features | ✓ 2 languages |
| | ✓ 500 products |
| | ✓ Full glossary (50 terms) |
| | ✓ Email support |
| | ✓ Batch translation |
| Button | Choose Basic (Primary Emerald) |

**Pro Plan**

| Property | Value |
|----------|-------|
| Price | $49/mo |
| Tagline | For growing stores |
| Features | ✓ 5 languages |
| | ✓ Unlimited products |
| | ✓ Full glossary (unlimited terms) |
| | ✓ Priority queue |
| | ✓ Priority support |
| | ✓ Batch translation |
| | ✓ API access |
| Button | Go Pro (Primary Blue) |

#### 3.5.5 Button Styles

```css
/* Free - Ghost Button */
.btn-ghost {
  background: transparent;
  border: 1px solid #d1d5db;
  color: #374151;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
}
.btn-ghost:hover {
  background: #f9fafb;
  border-color: #9ca3af;
}

/* Basic - Primary Emerald */
.btn-emerald {
  background: #10b981;
  border: none;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
}
.btn-emerald:hover {
  background: #059669;
}

/* Pro - Primary Blue */
.btn-blue {
  background: #3b82f6;
  border: none;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
}
.btn-blue:hover {
  background: #2563eb;
}
```

---

### 3.6 FAQ Section

#### 3.6.1 Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                    Frequently asked questions                       │
│                                                                     │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │ ▸ How does the AI translation work?                         │   │
│   └─────────────────────────────────────────────────────────────┘   │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │ ▾ Will it translate my brand name incorrectly?              │   │
│   │                                                             │   │
│   │   No! Our smart glossary feature protects your brand        │   │
│   │   terms. You can specify which words should never be        │   │
│   │   translated, and we automatically detect brand names       │   │
│   │   from your product vendor field.                           │   │
│   │                                                             │   │
│   └─────────────────────────────────────────────────────────────┘   │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │ ▸ What languages do you support?                            │   │
│   └─────────────────────────────────────────────────────────────┘   │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │ ▸ Will translated pages affect my SEO?                      │   │
│   └─────────────────────────────────────────────────────────────┘   │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │ ▸ How do I enable translated languages in my store?         │   │
│   └─────────────────────────────────────────────────────────────┘   │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │ ▸ What if I'm not satisfied?                                │   │
│   └─────────────────────────────────────────────────────────────┘   │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │ ▸ Do you offer refunds?                                     │   │
│   └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

#### 3.6.2 Specifications

| Property | Value |
|----------|-------|
| Background | Light gray (#f9fafb) |
| Padding | 80px 0 |
| Max width | 800px |
| Card gap | 12px |

#### 3.6.3 Accordion Component Specifications

```css
.faq-item {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
}

.faq-question {
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  color: #111827;
}

.faq-question:hover {
  background: #f9fafb;
}

.faq-icon {
  transition: transform 0.3s ease;
}

.faq-item.open .faq-icon {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 0 24px 20px;
  color: #6b7280;
  line-height: 1.7;
  display: none;
}

.faq-item.open .faq-answer {
  display: block;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
```

#### 3.6.4 FAQ Content Details

| # | Question | Answer |
|---|----------|--------|
| 1 | How does the AI translation work? | We use GPT-4o-mini, specifically optimized for e-commerce content. Our prompts are designed for product titles, descriptions, and SEO content to deliver natural, conversion-focused translations. |
| 2 | Will it translate my brand name incorrectly? | No! Our smart glossary feature protects your brand terms. You can specify which words should never be translated, and we automatically detect brand names from your product vendor field. |
| 3 | What languages do you support? | We support 11 languages: English, French, German, Spanish, Italian, Portuguese, Dutch, Japanese, Korean, Chinese (Simplified), and Chinese (Traditional). More coming soon! |
| 4 | Will translated pages affect my SEO? | Our translations actually boost your SEO! We use Shopify's native Markets feature with proper hreflang tags. Each language version gets indexed separately, expanding your reach in international search results. |
| 5 | How do I enable translated languages in my store? | After translation, enable the language in Shopify Admin → Settings → Markets. We provide step-by-step guidance in the app, and our support team is always happy to help. |
| 6 | What if I'm not satisfied? | Contact us at support@pixel-evolve.com. We offer free re-translation and will work with you until you're happy with the results. |
| 7 | Do you offer refunds? | Yes! If you're not satisfied within 30 days, we'll refund your payment. No questions asked. |

---

### 3.7 Final CTA Section

#### 3.7.1 Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │                                                               │  │
│  │              Ready to go global?                              │  │
│  │                                                               │  │
│  │    Join hundreds of merchants who've expanded their           │  │
│  │    reach with AI-powered translations.                        │  │
│  │                                                               │  │
│  │   ┌─────────────────┐  ┌─────────────────┐                    │  │
│  │   │ 🇸🇪 Engineered in│  │ ✓ Built for    │                    │  │
│  │   │   Stockholm     │  │   Shopify       │                    │  │
│  │   └─────────────────┘  └─────────────────┘                    │  │
│  │                                                               │  │
│  │                   [Install Free →]                            │  │
│  │                                                               │  │
│  │             No credit card required                           │  │
│  │                                                               │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

#### 3.7.2 Specifications

| Property | Value |
|----------|-------|
| Outer background | White |
| Outer padding | 80px 0 |
| Card background | Gradient: `linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #10b981 100%)` |
| Card border radius | 24px |
| Card padding | 64px |
| Card max width | 900px |
| Text color | White |

#### 3.7.3 Content

| Element | Content | Style |
|---------|---------|-------|
| Headline | Ready to go global? | H2, 36px, font-bold, white |
| Subheadline | Join hundreds of merchants who've expanded their reach with AI-powered translations. | 18px, white/80 |
| Trust badges | 🇸🇪 Engineered in Stockholm / ✓ Built for Shopify | White background, dark text |
| CTA button | Install Free → | White background, emerald-600 text |
| Trust note | No credit card required | 14px, white/60 |

---

### 3.8 Footer

#### 3.8.1 Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  [■▢●] Shopify AI Translator          🇸🇪 Engineered in Stockholm   │
│        by PixelEvolve                                               │
│                                                                     │
│  ───────────────────────────────────────────────────────────────    │
│                                                                     │
│  Product              Legal                 Contact                 │
│  • Features           • Privacy Policy      support@pixel-evolve.com│
│  • Pricing            • Terms of Service                            │
│  • FAQ                                                              │
│                                                                     │
│  ───────────────────────────────────────────────────────────────    │
│                                                                     │
│  © 2025 PixelEvolve AB. All rights reserved.                       │
│  Org.nr: 559493-7418 | Stockholm, Sweden                           │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

#### 3.8.2 Specifications

| Property | Value |
|----------|-------|
| Background | Gray 900 (#111827) |
| Padding | 60px 0 40px |
| Text color | Primary: white, Secondary: gray-400 |
| Link hover | white |
| Max width | 1200px |

---

## 4. Responsive Design

### 4.1 Breakpoint Definitions

| Breakpoint Name | Width Range | Device |
|-----------------|-------------|--------|
| Mobile | < 640px | Phone |
| Tablet | 640px - 1023px | Tablet |
| Desktop | ≥ 1024px | Desktop |

### 4.2 Adjustments per Breakpoint

#### Header

| Property | Desktop | Tablet | Mobile |
|----------|---------|--------|--------|
| Navigation | Show all items | Show all items | Hamburger menu |
| Logo text | Full display | Full display | Icon only |

#### Hero

| Property | Desktop | Tablet | Mobile |
|----------|---------|--------|--------|
| Headline size | 48px | 40px | 32px |
| Subheadline size | 20px | 18px | 16px |
| Trust badges | 3 columns | 3 columns | Stacked |
| Product screenshot | Show | Show | Optional hide |

#### Features

| Property | Desktop | Tablet | Mobile |
|----------|---------|--------|--------|
| Grid columns | 3 | 2 | 1 |
| Card padding | 32px | 24px | 20px |

#### Pricing

| Property | Desktop | Tablet | Mobile |
|----------|---------|--------|--------|
| Card layout | 3 side-by-side | 3 side-by-side | Stacked |
| Card order | Free-Basic-Pro | Free-Basic-Pro | Basic-Pro-Free |

#### FAQ

| Property | Desktop | Tablet | Mobile |
|----------|---------|--------|--------|
| Max width | 800px | 100% | 100% |
| Padding | 24px | 20px | 16px |

---

## 5. Interaction Design

### 5.1 Scroll Behavior

```javascript
// Smooth scroll to anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
```

### 5.2 Header Scroll Effect

```javascript
// Add shadow on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 10) {
    header.classList.add('shadow-md');
  } else {
    header.classList.remove('shadow-md');
  }
});
```

### 5.3 FAQ Accordion

```javascript
// Click to expand/collapse
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    const isOpen = item.classList.contains('open');
    
    // Close all other items
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    
    // Toggle current item
    if (!isOpen) {
      item.classList.add('open');
    }
  });
});
```

### 5.4 Button Hover Effects

```css
/* Transition for all buttons */
button, .btn {
  transition: all 0.2s ease;
}

/* Primary Button */
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
}

/* Pricing Card */
.pricing-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}
```

---

## 6. Technical Implementation

### 6.1 Tech Stack

| Layer | Technology | Rationale |
|-------|------------|-----------|
| Framework | Astro 4.x | Static generation, SEO-friendly, fast |
| Styling | Tailwind CSS 3.x | Rapid development, consistency |
| Animation | CSS Transitions | Simple, performant |
| Deployment | Cloudflare Pages | Free, global CDN |

### 6.2 Project Structure

```
translate-website/
├── src/
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── LegalLayout.astro
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   ├── HowItWorks.astro
│   │   ├── Pricing.astro
│   │   ├── FAQ.astro
│   │   ├── FinalCTA.astro
│   │   ├── TrustBadge.astro
│   │   ├── PricingCard.astro
│   │   ├── FAQItem.astro
│   │   ├── Logo.astro
│   │   ├── MobileMenu.astro
│   │   └── CookieBanner.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── privacy.md
│   │   └── terms.md
│   └── styles/
│       └── global.css
├── public/
│   ├── favicon.svg
│   ├── logo.svg
│   ├── og-image.png
│   ├── robots.txt
│   └── screenshot.png (placeholder)
├── astro.config.mjs
├── tailwind.config.cjs
└── package.json
```

### 6.3 SEO Configuration

#### Meta Tags

```html
<head>
  <title>Shopify AI Translator - Translate Your Store in Minutes | PixelEvolve</title>
  <meta name="description" content="AI-powered translation app for Shopify. Translate your store into 11 languages in minutes with smart brand protection. Free plan available." />
  <meta name="keywords" content="Shopify translation, AI translation, multilingual store, e-commerce translation" />
  <link rel="canonical" href="https://translate.pixel-evolve.com/" />
  
  <!-- Open Graph -->
  <meta property="og:title" content="Shopify AI Translator - Translate Your Store in Minutes" />
  <meta property="og:description" content="AI-powered translation with smart brand protection. Start free." />
  <meta property="og:image" content="https://translate.pixel-evolve.com/og-image.png" />
  <meta property="og:url" content="https://translate.pixel-evolve.com/" />
  <meta property="og:type" content="website" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
</head>
```

#### JSON-LD Structured Data

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Shopify AI Translator",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": [
    {
      "@type": "Offer",
      "name": "Free",
      "price": "0",
      "priceCurrency": "USD"
    },
    {
      "@type": "Offer",
      "name": "Basic",
      "price": "19",
      "priceCurrency": "USD"
    },
    {
      "@type": "Offer",
      "name": "Pro",
      "price": "49",
      "priceCurrency": "USD"
    }
  ],
  "author": {
    "@type": "Organization",
    "name": "PixelEvolve AB",
    "url": "https://pixel-evolve.com"
  },
  "description": "AI-powered translation app for Shopify stores with smart brand protection"
}
</script>
```

#### robots.txt

```
User-agent: *
Allow: /

Sitemap: https://translate.pixel-evolve.com/sitemap.xml
```

---

## 7. Content Assets

### 7.1 Required Assets

| Asset | Format | Size | Status |
|-------|--------|------|--------|
| Logo (color) | SVG | - | Reuse from main site |
| Logo (white) | SVG | - | Reuse from main site |
| Favicon | SVG/ICO | 32x32 | Reuse from main site |
| OG Image | PNG | 1200x630 | Need to create |
| Product screenshot | PNG | 1600x900 | After app launch |

### 7.2 OG Image Design

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  [Logo]  Shopify AI Translator                                      │
│                                                                     │
│          Translate your store                                       │
│          in minutes, not days                                       │
│                                                                     │
│          🇸🇪 Engineered in Stockholm                                 │
│                                                                     │
│                                        [Product UI thumbnail]       │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

Background: Gradient (#1e40af → #10b981)
Text: White
Size: 1200x630px
```

---

## 8. Development Checklist

### Phase 1: Project Initialization (30 minutes)

- [ ] Create GitHub repository `pixelevolve/translate-website`
- [ ] Initialize Astro project: `npm create astro@latest`
- [ ] Install Tailwind CSS: `npx astro add tailwind`
- [ ] Configure git config (user.name, user.email)
- [ ] Copy shared assets from main site (Logo SVG, favicon)
- [ ] Create basic directory structure

### Phase 2: Layouts and Components (1 hour)

- [ ] BaseLayout.astro - Base layout
- [ ] Header.astro - Navigation bar
- [ ] Footer.astro - Footer
- [ ] Logo.astro - Logo component
- [ ] TrustBadge.astro - Trust badge component
- [ ] MobileMenu.astro - Mobile menu

### Phase 3: Page Sections (2-3 hours)

- [ ] Hero.astro - Hero section
- [ ] Features.astro - Features display
- [ ] HowItWorks.astro - Usage flow
- [ ] PricingCard.astro - Pricing card component
- [ ] Pricing.astro - Pricing section
- [ ] FAQItem.astro - FAQ item component
- [ ] FAQ.astro - FAQ section
- [ ] FinalCTA.astro - Final conversion section

### Phase 4: Page Assembly and Legal Pages (30 minutes)

- [ ] index.astro - Homepage assembly
- [ ] privacy.md - Privacy Policy
- [ ] terms.md - Terms of Service
- [ ] LegalLayout.astro - Legal page layout

### Phase 5: Optimization and Testing (30 minutes)

- [ ] Responsive testing (Mobile, Tablet, Desktop)
- [ ] Interaction testing (scroll, FAQ expand)
- [ ] SEO check (meta tags, JSON-LD)
- [ ] Performance testing (Lighthouse)
- [ ] Add Cookie Banner (optional)

### Phase 6: Deployment (30 minutes)

- [ ] Push code to GitHub
- [ ] Create Cloudflare Pages project
- [ ] Connect repository, configure build
- [ ] Add custom domain: translate.pixel-evolve.com
- [ ] Verify SSL certificate
- [ ] Test production environment

---

## 9. Future Iterations

### V1.1 Plans

- [ ] Add social proof section (customer testimonials/logo wall)
- [ ] Replace placeholder with real product screenshots
- [ ] Add demo video
- [ ] A/B test CTA copy

### V2.0 Plans

- [ ] Multi-language support (page translations)
- [ ] Live chat support widget
- [ ] Price calculator
- [ ] Blog/resource center

---

**Document Status**: ✅ PRD Complete, Ready for Development

**Estimated Development Time**: 5-6 hours

**Next Step**: After PRD confirmation, start generating project code
