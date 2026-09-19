export type Article = {
  slug: string;
  title: string;
  dek: string;
  category: string;
  publishedDate: string;
  readTime: string;
  /** Real photo path, or null to show a text-only card/header instead. */
  image: string | null;
  sections: { heading?: string; body: string }[];
};

export const ARTICLES: Article[] = [
  {
    slug: "warning-signs-youre-being-scammed-online",
    title: "7 warning signs you're being scammed online",
    dek: "Scams evolve constantly, but the underlying warning signs rarely change. Here's what to watch for, no matter which platform or story is being used against you.",
    category: "Scam Awareness",
    publishedDate: "September 10, 2026",
    readTime: "5 min read",
    image: null,
    sections: [
      {
        body: "Every scam looks different on the surface: a romance, a job offer, a trading app, a call from your bank. But underneath, almost all of them rely on the same small set of tactics. Learning to spot the pattern matters more than memorizing every possible story.",
      },
      {
        heading: "1. Contact you didn't ask for",
        body: "Legitimate opportunities rarely arrive as an unsolicited message from a stranger. If someone reaches out to you first, on social media, by text, or through a cold call, about an investment, a job, or a 'problem' with your account, treat it as a reason to slow down, not speed up.",
      },
      {
        heading: "2. Pressure to act immediately",
        body: "Scammers rely on urgency to stop you from thinking clearly or checking with someone else. Phrases like 'this offer closes today' or 'your account will be locked in the next hour' are designed to short-circuit your judgment. Genuine institutions give you time.",
      },
      {
        heading: "3. Returns or opportunities that sound too good",
        body: "Guaranteed high returns, jobs that pay far above market rate for simple tasks, or deals priced well below market value are the oldest hook in the book, because they still work. If an opportunity sounds unusually generous, ask why nobody else has taken it first.",
      },
      {
        heading: "4. Requests to pay in unusual ways",
        body: "Gift cards, cryptocurrency, and direct bank transfers to a stranger have one thing in common: they're very hard to reverse. Legitimate businesses rarely insist on these specific methods, especially not as the only option.",
      },
      {
        heading: "5. Reluctance to verify, meet, or call",
        body: "Ask for a video call. Ask for a company's registration number. Ask to call back on an official line. A genuine counterpart will accommodate this without hesitation. A scammer will find a reason to avoid it.",
      },
      {
        heading: "6. A story that keeps needing 'one more payment'",
        body: "Whether it's a tax to unlock an investment, a fee to release a job payout, or a deposit to secure a rental, the pattern is the same: each payment is framed as the last one before you finally get what you're owed. It rarely is.",
      },
      {
        heading: "7. You're told to keep it secret",
        body: "If anyone, a romantic partner, an 'advisor,' or someone claiming to be from your bank, tells you not to discuss what's happening with family, friends, or your bank's official staff, that instruction alone is one of the clearest signs something is wrong.",
      },
      {
        heading: "Trust the pattern, not the details",
        body: "You don't need to recognize every scam by name to protect yourself. If something involves unsolicited contact, urgency, an unusually generous offer, unusual payment methods, and resistance to verification, the specific story matters far less than the shape it's taking.",
      },
    ],
  },
  {
    slug: "first-24-hours-after-a-scam",
    title: "The first 24 hours: what to do right after you realize you've been scammed",
    dek: "The steps you take immediately after realizing you've been scammed can make a real difference to what's recoverable. Here's a clear order of operations.",
    category: "Recovery Guidance",
    publishedDate: "September 3, 2026",
    readTime: "6 min read",
    image: null,
    sections: [
      {
        body: "Realizing you've been scammed is disorienting, and often comes with a wave of shame that makes people freeze instead of act. The good news is that the right first steps are simple, and time matters more than perfection. Here's what to prioritize.",
      },
      {
        heading: "1. Stop all further payments immediately",
        body: "If you're still in contact with the scammer, or still able to send money, stop now, even if you're told it's the very last payment needed to unlock your funds. It won't be.",
      },
      {
        heading: "2. Contact your bank or payment provider",
        body: "This is the single most time-sensitive step. Some transfers, particularly recent ones, can still be recalled or flagged if reported quickly. Card payments often carry stronger chargeback protections than bank transfers, so tell your bank exactly how the payment was made.",
      },
      {
        heading: "3. Preserve everything",
        body: "Before you block a number, delete an app, or close a chat, save it. Screenshots of conversations, payment confirmations, the platform or profile in question, and any names or account details you were given are all potential evidence. It's far easier to gather this now than to reconstruct it later.",
      },
      {
        heading: "4. Change your passwords",
        body: "If you shared any login details, or used the same password elsewhere, change them, starting with your email and banking apps. Scammers who've had access to one account sometimes try others.",
      },
      {
        heading: "5. Report it",
        body: "Report the incident to the platform it happened on (the dating app, marketplace, or social media account involved) and to the relevant fraud reporting authority in your country. This won't always lead to immediate recovery, but it creates an official record, and it may help identify a wider pattern affecting others.",
      },
      {
        heading: "6. Get an honest assessment",
        body: "Not every case can be recovered, and it's better to know that early than to spend months chasing a dead end alone. A free eligibility check will tell you, honestly, whether there's a realistic path forward and what the next steps would look like.",
      },
      {
        heading: "You're not the only one",
        body: "It's common to feel embarrassed after realizing you've been scammed, but these schemes are specifically engineered to fool careful, intelligent people. The faster you move past that feeling and into action, the better your position.",
      },
    ],
  },
  {
    slug: "how-to-spot-a-fake-investment-platform",
    title: "How to spot a fake investment platform before you deposit a cent",
    dek: "Fake trading platforms have never looked more convincing. Here's how to check whether one is real before you send any money.",
    category: "Investment Scams",
    publishedDate: "August 22, 2026",
    readTime: "5 min read",
    image: "/investment.jpg",
    sections: [
      {
        body: "Modern investment scams don't look like scams. They look like polished apps, with live charts, customer support chat, and a balance that updates in real time. The interface is rarely the giveaway anymore, so it helps to know what to check instead.",
      },
      {
        heading: "Check the regulator, not just the website",
        body: "Any platform offering investment services should be registered with a recognized financial regulator in the country it claims to operate from. Don't just trust a badge or logo on the site, search the regulator's own public register independently and confirm the company and its registration number appear there.",
      },
      {
        heading: "Look at how you were introduced, not just the platform",
        body: "A well-designed app can still be part of a scam if the way you found it was a cold DM, a dating app match, or a 'signals' group on Telegram. Ask yourself how you were introduced to the opportunity, not just how it looks once you're there.",
      },
      {
        heading: "Test the withdrawal, not just the deposit",
        body: "Scam platforms are usually happy to accept deposits and even approve a small early withdrawal to build trust. The real test is withdrawing a significant amount after your balance has grown. If that's suddenly blocked behind a new fee, tax, or 'compliance check,' that's the platform showing its true function.",
      },
      {
        heading: "Be suspicious of screenshots and unverifiable performance",
        body: "Real investment performance can usually be verified through independent, regulated channels. Screenshots of a dashboard, sent by someone claiming huge returns, prove nothing on their own.",
      },
      {
        heading: "If in doubt, don't deposit",
        body: "There's no urgency in a genuine investment opportunity that requires you to skip due diligence. Taking a day, or a week, to independently verify a platform costs you nothing. Sending money to an unverified one can cost you everything you put in.",
      },
    ],
  },
  {
    slug: "bank-transfer-vs-card-payment",
    title: "Bank transfer vs card payment: why it matters when you've been scammed",
    dek: "How you paid can shape what's realistically recoverable. Here's the difference, and why it's worth knowing before you send money to anyone new.",
    category: "Recovery Guidance",
    publishedDate: "August 14, 2026",
    readTime: "4 min read",
    image: null,
    sections: [
      {
        body: "When people ask us whether their money can be recovered, one of the first questions we ask back is: how was it paid? The payment method matters almost as much as the scam itself, because different payment rails come with very different protections.",
      },
      {
        heading: "Card payments generally offer more protection",
        body: "Payments made by credit or debit card are often eligible for a chargeback: a formal dispute process through your card network that can reverse a payment under certain conditions, particularly where goods or services were never provided as described.",
      },
      {
        heading: "Bank transfers are harder to reverse",
        body: "A direct bank transfer moves money straight from your account to another one, with far fewer built-in dispute mechanisms. Once funds have moved on from the receiving account, particularly across borders or into cryptocurrency, they become significantly harder to trace and recover.",
      },
      {
        heading: "Cryptocurrency and gift cards are the hardest",
        body: "These payment methods are popular with scammers precisely because they're difficult to reverse and can be difficult to trace once converted or spent. This doesn't mean recovery is impossible, but it usually requires a different, more investigative approach.",
      },
      {
        heading: "Why this matters going forward",
        body: "This isn't a reason to avoid bank transfers entirely, they're a normal part of everyday life. But when you're dealing with someone new, especially online, paying by card where possible, and being wary of any request to switch to a bank transfer partway through a transaction, gives you meaningfully more protection if something goes wrong.",
      },
      {
        heading: "Already sent money?",
        body: "Whatever method was used, the first step is the same: contact your bank or card provider as soon as possible and explain exactly what happened. From there, a free eligibility check with us will give you an honest read on what's realistically recoverable in your specific case.",
      },
    ],
  },
];
