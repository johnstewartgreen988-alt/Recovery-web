export type ScamDetail = {
  intro: string;
  /** Real photo path, or null to show the icon-on-gradient card instead. */
  image: string | null;
  whatIsIt: string;
  howItWorks: string[];
  warningSigns: string[];
  protectYourself: string[];
  ifItHappened: string;
  faqs: { question: string; answer: string }[];
};

export const SCAM_DETAILS: Record<string, ScamDetail> = {
  "investment-scam": {
    intro:
      "Fake or fraudulent investment opportunities that promise unrealistic returns, then disappear with your money.",
    image: "/investment.jpg",
    whatIsIt:
      "An investment scam is any scheme that convinces you to hand over money based on a false promise of returns, whether that's a fake trading platform, a fraudulent crypto or forex 'signals' service, or a Ponzi-style scheme paying early investors with money from new ones. What makes these scams so effective is how professional they look: branded apps, real-time dashboards, and customer support that answers within minutes.",
    howItWorks: [
      "You're approached through social media, a messaging app, or an online ad, often by someone posing as a successful trader or 'senior analyst.'",
      "You're shown screenshots or a live dashboard of impressive returns, and encouraged to start with a small deposit.",
      "Early withdrawals are approved quickly, sometimes even before you ask, to prove the platform 'works.'",
      "As your balance grows, you're encouraged to invest more, often with pressure or a sense of urgency.",
      "When you try to withdraw the full amount, you're told you first need to pay a fee, tax, or commission, and the requests keep coming.",
    ],
    warningSigns: [
      "Guaranteed or unusually high returns with little or no risk",
      "Contact that started on social media or a dating app, not a regulated channel",
      "Pressure to deposit quickly, or to refer others to 'lock in' a rate",
      "A platform or advisor you can't find on any official regulatory register",
      "Any request to pay a fee, tax, or commission before you can withdraw your own money",
    ],
    protectYourself: [
      "Independently verify any platform or advisor's registration with the relevant financial regulator before depositing anything",
      "Be skeptical of guaranteed returns. Every legitimate investment carries risk",
      "Never pay an additional fee to 'release' funds that are already yours",
      "Take your time. Genuine opportunities don't disappear overnight",
      "Talk to someone you trust before making a significant transfer",
    ],
    ifItHappened:
      "Stop making any further payments immediately, even if you're told it's the last one. Save every message, screenshot, and transaction record you have, then contact your bank to ask about a chargeback or recall. From there, a free eligibility check with us will tell you honestly whether there's a realistic path to recovering what you paid in.",
    faqs: [
      {
        question: "How can I verify if a trading platform is legitimate?",
        answer:
          "Independently search the relevant financial regulator's public register for the company and its registration number, rather than trusting a badge or logo shown on the platform itself.",
      },
      {
        question: "I already paid a 'release fee.' Should I pay another one?",
        answer:
          "No. Stop immediately, even if you're told it's the very last payment required. Further fees are a sign of continued extraction, not a genuine path to withdrawal.",
      },
      {
        question: "Can money sent to a crypto wallet be recovered?",
        answer:
          "It's harder than a bank transfer, but not always impossible. Tracing wallet activity and where funds moved on to is part of what our investigation team does.",
      },
      {
        question: "What if I referred friends or family to the platform?",
        answer:
          "You're not responsible for being deceived by a convincing scheme, and it doesn't affect whether we can help with your own case.",
      },
    ],
  },
  "romance-scam": {
    intro:
      "A fabricated online relationship, built over weeks or months, designed to manipulate you into sending money.",
    image: "/romance.jpg",
    whatIsIt:
      "A romance scam starts like any online connection: a match on a dating app, a friend request, a direct message. But the person behind the profile isn't who their photos suggest. Over time, they build real emotional intimacy, only to use it to ask for money, sometimes for a single 'emergency,' sometimes by drawing you into a fake investment alongside the relationship.",
    howItWorks: [
      "A profile, often using stolen photos of an attractive, successful-looking person, reaches out or matches with you.",
      "The relationship moves quickly: daily messages, declarations of affection, and plans for a future together.",
      "Video calls and in-person meetings are always just out of reach, blamed on work, travel, or unreliable internet.",
      "A crisis eventually appears: a medical emergency, a stuck shipment, a frozen account, anything that requires money urgently.",
      "Once you've sent money once, further requests tend to follow, sometimes shifting into 'let's invest together' territory.",
    ],
    warningSigns: [
      "They profess strong feelings very quickly, often within days or weeks",
      "They consistently avoid video calls or meeting in person",
      "Their story has small inconsistencies that don't quite add up",
      "They have a sudden, urgent need for money, and a reason you shouldn't discuss it with anyone else",
      "They ask for payment via gift cards, cryptocurrency, or wire transfer rather than traceable methods",
    ],
    protectYourself: [
      "Reverse image search their profile photos before you invest emotionally",
      "Be cautious of anyone who won't get on a video call",
      "Never send money to someone you haven't met in person, no matter how long you've spoken",
      "Talk to a friend or family member before sending money to someone you've met online",
      "Treat any mention of 'investing together' as a serious red flag",
    ],
    ifItHappened:
      "However it happened, you're not the first, and it's not your fault. Stop all contact and payments, keep every message and transaction record, and report the profile to the platform it was on. Then reach out to us. Our team has helped people recover money lost this way before, and we'll tell you honestly what's realistic in your case.",
    faqs: [
      {
        question: "I'm too embarrassed to explain this to my bank. Do I have to?",
        answer:
          "Being honest about what happened genuinely helps your case, and our team has heard it before. Small omissions can weaken a case later during escalation.",
      },
      {
        question: "What if I never met them in person or know their real name?",
        answer:
          "That's extremely common, and it doesn't stop us from investigating. We focus on tracing where the money actually went.",
      },
      {
        question: "Can I still get help if this has been going on for over a year?",
        answer:
          "Often, yes. Older cases can be harder to trace, but it's always worth a free eligibility check rather than assuming too much time has passed.",
      },
      {
        question: "What if I'm still not sure it was a scam?",
        answer:
          "That's exactly what an eligibility check is for. Tell us what happened, and we'll give you an honest read on it.",
      },
    ],
  },
  "job-task-scam": {
    intro:
      "Fake work-from-home job offers that ask you to pay in before you're ever paid out.",
    image: "/job.jpg",
    whatIsIt:
      "A job or task scam offers flexible, easy work, rating products, 'boosting' online listings, or completing simple micro-tasks, usually through a messaging app rather than a real job board. The work itself is fake. It exists only to convince you to keep paying in small 'deposits' or 'unlock fees' that are never returned.",
    howItWorks: [
      "You receive an unsolicited message offering flexible, well-paid remote work, often for a job you never applied for.",
      "You're guided to install an app or join a group, and given a handful of simple starter tasks.",
      "The first few tasks pay out quickly and genuinely, building trust in the platform.",
      "You're then offered a 'premium' task with a much bigger payout, but it requires a deposit to unlock.",
      "Each deposit unlocks a bigger balance you still can't withdraw, with a new fee required each time.",
    ],
    warningSigns: [
      "You're contacted out of the blue about a job you never applied for",
      "Communication happens entirely over WhatsApp, Telegram, or similar apps rather than official channels",
      "You're asked to pay any amount of money to unlock work or earnings",
      "The pay is significantly higher than similar legitimate roles for very little effort",
      "There's no verifiable company, business registration, or real office behind the offer",
    ],
    protectYourself: [
      "Never pay money to receive a job or unlock your own earnings",
      "Research any company independently before engaging, and be wary if you can't find one",
      "Be cautious of unsolicited job offers that arrive by text or messaging app",
      "If it sounds too easy and too well paid for the effort involved, it probably is",
    ],
    ifItHappened:
      "Stop paying in immediately, no matter how close you feel to unlocking your balance. Gather your payment records and any messages from the recruiter or platform, then contact your bank. From there, a free eligibility check with us will tell you honestly whether there's a case worth pursuing.",
    faqs: [
      {
        question: "I still have a 'balance' showing on the platform. Can I withdraw it?",
        answer:
          "No. That balance isn't real money, it's a number designed to keep you paying in. Stop making any further deposits, regardless of what the app shows.",
      },
      {
        question: "The recruiter has blocked me. Does that stop the investigation?",
        answer:
          "No. Losing contact with the recruiter doesn't prevent us from tracing the payment trail and building your case.",
      },
      {
        question: "Is it worth reporting if I only lost a small amount?",
        answer:
          "Yes. Smaller individual amounts are often part of a much larger scheme, and reporting can matter for group action even when a single case is modest.",
      },
      {
        question: "Can money sent through a mobile payment app be recovered?",
        answer:
          "It depends on how quickly it's reported and the provider's own policies, but it's always worth a free eligibility check.",
      },
    ],
  },
  "safe-account-scam": {
    intro:
      "A caller posing as your bank convinces you your money is at risk, and talks you into moving it to a 'safe' account they control.",
    image: "/safe-account.jpg",
    whatIsIt:
      "A safe account scam usually begins with a phone call from someone claiming to be your bank's fraud department. They tell you your account has been compromised, and that the only way to protect your money is to move it immediately to a new 'safe' account. In reality, that account belongs to the scammer, and once the transfer is made, the money is gone.",
    howItWorks: [
      "You receive a call, sometimes from a number that appears to match your real bank's, warning of suspicious activity on your account.",
      "The caller creates urgency, telling you your money is at immediate risk and time is limited.",
      "You're instructed to move your funds to a new account described as 'safe' or 'protected' while the issue is investigated.",
      "You may be told not to discuss the call with branch staff, who are falsely described as potentially compromised too.",
      "Once the transfer is made, the account and the money disappear.",
    ],
    warningSigns: [
      "An unsolicited call claiming to be your bank's fraud or security team",
      "Pressure to act immediately, without time to think or verify",
      "Any instruction to move money to a different account for 'safekeeping'",
      "Being told not to discuss the situation with your bank or anyone else",
      "Being asked to call back on a number the caller provides, rather than the number on your card",
    ],
    protectYourself: [
      "Remember: your bank will never ask you to move money to a 'safe account.' No legitimate institution does this",
      "Hang up and call your bank directly, using the number on the back of your card, not one given to you on the call",
      "Never act on financial instructions given to you under pressure",
      "If in doubt, visit a branch in person",
    ],
    ifItHappened:
      "Contact your bank immediately. This is the single most time-sensitive step, since some transfers can still be recalled if reported quickly. Report the incident to the relevant authorities, and keep a record of the call and any messages. Then speak with us. We'll assess your case and tell you honestly what options are available.",
    faqs: [
      {
        question: "The transfer was 'authorized' by me under pressure. Does that mean I can't get it back?",
        answer:
          "Not necessarily. Many banks have provisions for scam-induced transfers even when the customer technically authorized the payment. It's always worth a free eligibility check.",
      },
      {
        question: "What if my bank already told me they can't help?",
        answer:
          "A bank's initial response isn't always the final word. Escalation, with the right evidence, can change the outcome.",
      },
      {
        question: "How fast do I need to act?",
        answer:
          "Immediately. Recall requests are far more effective when reported within hours or days rather than weeks.",
      },
      {
        question: "Could the scammer's account be at the same bank as mine?",
        answer:
          "Sometimes, and it can actually make recovery faster in certain cases. Either way, reporting quickly is what matters most.",
      },
    ],
  },
  "impersonation-scam": {
    intro:
      "Fraudsters posing as police, tax authorities, or other trusted organizations, pressuring you to pay immediately.",
    image: "/impersonation.jpg",
    whatIsIt:
      "An impersonation scam involves someone posing as a figure of authority, a police officer, a tax official, a courier, a utility company, to create fear or urgency and pressure you into paying money or handing over personal information. These scams rely on the assumption that you won't question someone who sounds official.",
    howItWorks: [
      "You receive a call, email, or text claiming to be from a government agency, law enforcement, or a well-known company.",
      "You're told there's an urgent problem: an unpaid fine, a tax debt, a held parcel, or a compromised account.",
      "You're pressured to resolve it immediately, often with a threat of arrest, legal action, or additional charges if you delay.",
      "You're asked to pay via an unusual method, gift cards, cryptocurrency, or a wire transfer, or to grant remote access to your device.",
      "Once payment is made or access is granted, the scammer disappears, or continues to extract more.",
    ],
    warningSigns: [
      "Threats of arrest or legal action for non-payment over the phone",
      "Requests for payment via gift cards, cryptocurrency, or wire transfer",
      "Requests for remote access to your computer or phone",
      "Refusal to let you call back through an official, independently verified number",
      "Pressure to act within minutes, with no room to think it over",
    ],
    protectYourself: [
      "Remember: government agencies do not demand instant payment by gift card or cryptocurrency",
      "Hang up and contact the organization directly using their official published contact details",
      "Never give remote access to your device to someone who contacted you unsolicited",
      "Take your time. Genuine legal or tax issues come with proper written notice, not a single urgent phone call",
    ],
    ifItHappened:
      "Stop all contact and don't make any further payments. If you've shared financial details, contact your bank immediately. Report the incident to the relevant authorities, and keep any messages, call logs, or payment records. Then get in touch with us for a free, honest assessment of your options.",
    faqs: [
      {
        question: "I gave them remote access to my computer. What should I do first?",
        answer:
          "Disconnect from the internet, run a security scan, and change your passwords, starting with email and banking. Then contact your bank if any financial information was exposed.",
      },
      {
        question: "They already had some personal details about me. Is my identity at risk?",
        answer:
          "Possibly, and it's worth taking seriously. Monitor your accounts closely and consider a fraud alert with the relevant credit bureaus.",
      },
      {
        question: "Is it still worth reporting if they didn't ask for money, just information?",
        answer:
          "Yes. Information alone can be used for further fraud, and reporting it early can help limit the damage.",
      },
      {
        question: "Can you help even if no money has changed hands yet?",
        answer:
          "Our focus is recovery, but reaching out early is still worthwhile, both to get honest guidance and to help prevent a loss before it happens.",
      },
    ],
  },
  "purchase-scam": {
    intro:
      "Paying for goods, vehicles, or bookings online that never arrive, and never existed.",
    image: "/purchase-scam.jpg",
    whatIsIt:
      "A purchase scam happens when you pay for something online, a car, a rental property, concert tickets, electronics, that turns out not to exist, or never arrives. The listing looks genuine, the price is attractive, and the seller is often responsive right up until the payment clears.",
    howItWorks: [
      "You find a listing, on a marketplace, social media, or a standalone website, at a price that seems like a great deal.",
      "The seller responds quickly and is happy to answer questions, building your confidence.",
      "You're asked to pay directly by bank transfer, or to move the conversation off the platform where buyer protection applies.",
      "Reasons are given for why a viewing, inspection, or meeting in person isn't possible right now.",
      "Once payment is sent, the seller stops responding, and the item or property was never real.",
    ],
    warningSigns: [
      "A price that's noticeably lower than similar genuine listings",
      "A seller who insists on bank transfer rather than a protected payment method",
      "Reluctance to meet in person, allow an inspection, or use a platform's built-in payment system",
      "A listing or seller account that's very new, with little or no history",
      "Generic, templated responses that don't quite answer your specific questions",
    ],
    protectYourself: [
      "Use platforms with built-in buyer protection, and avoid moving payment off-platform",
      "Avoid direct bank transfers to individuals you don't know",
      "Insist on inspecting goods, or viewing a property, before paying anything",
      "Search the listing's photos and text online. They're sometimes copied from other legitimate ads",
    ],
    ifItHappened:
      "Contact your bank or card provider as soon as possible. Payments made by card often have far stronger chargeback protection than bank transfers. Report the listing to the platform it appeared on, and keep every message and payment record. Then reach out to us for a free eligibility check.",
    faqs: [
      {
        question: "I paid by bank transfer, not card. Is recovery still possible?",
        answer:
          "It's harder than with a card payment, but not always impossible. We'll assess your case honestly and let you know what's realistic.",
      },
      {
        question: "The seller has disappeared or blocked me. Now what?",
        answer:
          "That doesn't prevent an investigation. Report the listing and seller to the platform and your bank regardless, and keep every message you still have.",
      },
      {
        question: "What if I already left negative feedback or reported the listing?",
        answer:
          "That's useful. Keep records of it, it can serve as supporting evidence for your case.",
      },
      {
        question: "Can you help with large purchase scams, like vehicles or property?",
        answer:
          "Yes. Larger purchase scams are exactly the kind of case worth a free eligibility check.",
      },
    ],
  },
};
