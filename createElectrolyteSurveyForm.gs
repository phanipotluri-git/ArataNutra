// ============================================================
// SPORT ELECTROLYTES INDIA — CONSUMER MARKET SURVEY
// Google Apps Script — Auto Form Creator
// Paste this entire script in Extensions > Apps Script
// Then click Run > createElectrolyteSurveyForm
// ============================================================

function createElectrolyteSurveyForm() {

  // ── Create the Form ──────────────────────────────────────
  var form = FormApp.create('SPORT ELECTROLYTES INDIA — CONSUMER MARKET SURVEY');

  form.setDescription(
    'Initiated by Dr. Giridhar Rahul Gaddipati · Physician & Endurance Athlete\n' +
    'A doctor who has been passionate about sports since childhood and has been actively ' +
    'competing in endurance sports for the past 5 years — now on a mission to create a ' +
    'science-backed, Made-in-India sports electrolyte brand.\n\n' +
    'This survey is a personal research initiative — not a commercial study. Your honest ' +
    'responses will directly help shape an electrolyte brand built by an athlete, for athletes. ' +
    'All information shared is strictly confidential and used only for product development ' +
    'purposes. Thank you for your support! 🙏'
  );

  form.setCollectEmail(false);
  form.setAllowResponseEdits(true);
  form.setShowLinkToRespondAgain(false);
  form.setConfirmationMessage(
    'Thank you for your time! ⚡ Your responses will directly shape a science-backed, ' +
    'India-made electrolyte brand built for serious athletes.'
  );

  // ════════════════════════════════════════════════════════
  // SECTION 0 — RESPONDENT DETAILS
  // ════════════════════════════════════════════════════════
  form.addSectionHeaderItem()
    .setTitle('SECTION 0 — RESPONDENT DETAILS')
    .setHelpText('Please fill in your basic details before starting the survey.');

  form.addTextItem()
    .setTitle('Full Name')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Age')
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Sex')
    .setChoiceValues(['Male', 'Female', 'Prefer not to say'])
    .showOtherOption(true)
    .setRequired(false);

  form.addTextItem()
    .setTitle('Contact Number')
    .setRequired(false);

  form.addTextItem()
    .setTitle('Email Address')
    .setRequired(false);

  form.addTextItem()
    .setTitle('City / Location')
    .setRequired(true);

  // ════════════════════════════════════════════════════════
  // SECTION 1 — DEMOGRAPHICS & LIFESTYLE
  // ════════════════════════════════════════════════════════
  form.addPageBreakItem()
    .setTitle('SECTION 1 — DEMOGRAPHICS & LIFESTYLE');

  // Q1
  form.addMultipleChoiceItem()
    .setTitle('Q1.  What is your age group?')
    .setChoiceValues(['Under 25', '25 – 40', '40 – 60', 'Above 60'])
    .setRequired(true);

  // Q2
  form.addMultipleChoiceItem()
    .setTitle('Q2.  How often do you work out / train per week?')
    .setChoiceValues([
      'Less than 3 times a week',
      '3 – 5 times a week',
      'More than 5 times a week'
    ])
    .setRequired(true);

  // Q3 — checkbox / multi-select
  form.addCheckboxItem()
    .setTitle('Q3.  Which sports or physical activities do you regularly participate in?')
    .setHelpText('Select all that apply.')
    .setChoiceValues([
      'Cycling', 'Running', 'Swimming', 'Triathlon',
      'CrossFit', 'Gym / Weightlifting', 'Hyrox'
    ])
    .showOtherOption(true)
    .setRequired(true);

  // Q4
  form.addMultipleChoiceItem()
    .setTitle('Q4.  How long is a typical single training session for you?')
    .setChoiceValues([
      '< 30 minutes',
      '30 – 60 minutes',
      '60 – 90 minutes',
      '90 – 120 minutes',
      'More than 2 hours'
    ])
    .setRequired(true);

  // ════════════════════════════════════════════════════════
  // SECTION 2 — ELECTROLYTE USAGE HABITS
  // ════════════════════════════════════════════════════════
  form.addPageBreakItem()
    .setTitle('SECTION 2 — ELECTROLYTE USAGE HABITS');

  // Q5
  form.addMultipleChoiceItem()
    .setTitle('Q5.  Do you currently use electrolytes / hydration supplements?')
    .setChoiceValues([
      'Yes, regularly',
      'Yes, occasionally',
      'No, but I\'m interested',
      'No, and I\'m not interested'
    ])
    .setRequired(true);

  // Q6 — checkbox
  form.addCheckboxItem()
    .setTitle('Q6.  When do you typically consume electrolytes?')
    .setHelpText('Select all that apply.')
    .setChoiceValues([
      'Before training',
      'During training',
      'After training / recovery',
      'Throughout the day (general hydration)',
      'On race / event days only'
    ])
    .showOtherOption(true)
    .setRequired(false);

  // Q7
  form.addMultipleChoiceItem()
    .setTitle('Q7.  How many electrolyte sachets / servings do you use per week?')
    .setChoiceValues([
      'Fewer than 5',
      '5 – 10',
      'More than 10'
    ])
    .showOtherOption(true)
    .setRequired(false);

  // Q8 — checkbox
  form.addCheckboxItem()
    .setTitle('Q8.  In what form do you prefer to consume electrolytes?')
    .setHelpText('Select all that apply.')
    .setChoiceValues([
      'Single-use sachet / powder',
      'Effervescent tablet',
      'Ready-to-drink bottle',
      'Electrolyte capsule / pill',
      'Electrolyte gel',
      'No preference'
    ])
    .showOtherOption(true)
    .setRequired(false);

  // Q9
  form.addMultipleChoiceItem()
    .setTitle('Q9.  Do you also use electrolytes during non-training days (e.g., hot weather, travel, illness)?')
    .setChoiceValues(['Yes, frequently', 'Yes, occasionally', 'No'])
    .setRequired(false);

  // ════════════════════════════════════════════════════════
  // SECTION 3 — BRAND AWARENESS & CURRENT USAGE
  // ════════════════════════════════════════════════════════
  form.addPageBreakItem()
    .setTitle('SECTION 3 — BRAND AWARENESS & CURRENT USAGE');

  // Q10 — checkbox
  form.addCheckboxItem()
    .setTitle('Q10.  Which electrolyte brands are you currently using or have used in the past 6 months?')
    .setHelpText('Select all that apply.')
    .setChoiceValues([
      'Unived (India)',
      'Fast&Up (India)',
      'Enerzal (India)',
      'ORS / Electral (India)',
      'Nuun (International)',
      'LMNT (International)',
      'Precision Hydration (International)',
      'SIS – Science in Sport (International)',
      'Liquid IV (International)',
      'Gatorade / Powerade',
      'None'
    ])
    .showOtherOption(true)
    .setRequired(false);

  // Q11
  form.addMultipleChoiceItem()
    .setTitle('Q11.  How would you rate your overall satisfaction with the electrolyte brand(s) you currently use?')
    .setChoiceValues([
      'Very satisfied',
      'Satisfied',
      'Neutral',
      'Dissatisfied',
      'Very dissatisfied'
    ])
    .setRequired(false);

  // Q12
  form.addMultipleChoiceItem()
    .setTitle('Q12.  Have you tried international electrolyte brands not available in Indian retail stores (e.g., imported or ordered online)?')
    .setChoiceValues([
      'Yes, I actively seek them out',
      'Yes, but only occasionally',
      'No – too expensive / hard to find',
      'No – I prefer Indian brands'
    ])
    .setRequired(false);

  // Q13
  form.addMultipleChoiceItem()
    .setTitle('Q13.  What is your primary channel for purchasing electrolytes?')
    .setChoiceValues([
      'Online (Amazon, Flipkart, brand website)',
      'Sports specialty store',
      'Pharmacy / chemist',
      'Supermarket / grocery',
      'Subscription box / direct-from-brand'
    ])
    .showOtherOption(true)
    .setRequired(false);

  // ════════════════════════════════════════════════════════
  // SECTION 4 — INGREDIENT & FORMULATION PREFERENCES
  // ════════════════════════════════════════════════════════
  form.addPageBreakItem()
    .setTitle('SECTION 4 — INGREDIENT & FORMULATION PREFERENCES');

  // Q14
  form.addMultipleChoiceItem()
    .setTitle('Q14.  Do you prefer your electrolytes with or without sugar?')
    .setChoiceValues([
      'With sugar (for quick energy during endurance)',
      'No sugar / zero-carb',
      'Low sugar (< 5 g per serving)',
      'No preference'
    ])
    .setRequired(false);

  // Q15
  form.addMultipleChoiceItem()
    .setTitle('Q15.  If sweetener is used, which do you prefer?')
    .setChoiceValues([
      'Natural sweetener – Stevia leaf extract',
      'Natural sweetener – Monk fruit extract',
      'Natural sweetener – Coconut sugar',
      'Artificial sweetener (sucralose, aspartame, etc.)',
      'No sweetener at all',
      'No preference'
    ])
    .setRequired(false);

  // Q16
  form.addMultipleChoiceItem()
    .setTitle('Q16.  How important is the absence of artificial colours in your electrolyte?')
    .setChoiceValues([
      'Very important – I only buy naturally coloured / clear products',
      'Somewhat important',
      'Not important – colour does not affect my choice'
    ])
    .setRequired(false);

  // Q17
  form.addMultipleChoiceItem()
    .setTitle('Q17.  Do you prefer electrolytes free from artificial preservatives?')
    .setChoiceValues([
      'Yes, preservative-free is a must',
      'I prefer it, but not a deal-breaker',
      'No preference'
    ])
    .setRequired(false);

  // Q18
  form.addMultipleChoiceItem()
    .setTitle('Q18.  What is your ideal sodium content per serving?')
    .setChoiceValues([
      'Less than 300 mg',
      '300 – 500 mg',
      '500 – 750 mg',
      '750 – 1,000 mg',
      'Above 1,000 mg',
      'Not sure / I don\'t track sodium'
    ])
    .setRequired(false);

  // Q19 — checkbox
  form.addCheckboxItem()
    .setTitle('Q19.  Which electrolyte minerals do you actively look for on the label?')
    .setHelpText('Select all that apply.')
    .setChoiceValues([
      'Sodium',
      'Potassium',
      'Magnesium',
      'Calcium',
      'Chloride',
      'Phosphorus',
      'I don\'t check the label'
    ])
    .setRequired(false);

  // Q20 — checkbox
  form.addCheckboxItem()
    .setTitle('Q20.  Do you prefer your electrolytes to also contain performance / functional ingredients?')
    .setHelpText('Select all that apply.')
    .setChoiceValues([
      'Caffeine',
      'BCAAs / amino acids',
      'Vitamin C',
      'B-vitamins',
      'Antioxidants',
      'Adaptogens (e.g., Ashwagandha)',
      'No – I prefer a pure electrolyte only'
    ])
    .showOtherOption(true)
    .setRequired(false);

  // ════════════════════════════════════════════════════════
  // SECTION 5 — FLAVOUR PREFERENCES
  // ════════════════════════════════════════════════════════
  form.addPageBreakItem()
    .setTitle('SECTION 5 — FLAVOUR PREFERENCES');

  // Q21 — checkbox
  form.addCheckboxItem()
    .setTitle('Q21.  Which natural fruit flavours would you most be interested in?')
    .setHelpText('Select your top 3.')
    .setChoiceValues([
      'Unflavoured / Unsweetened',
      'Lemon & Lime',
      'Berry Mix',
      'Orange',
      'Raspberry',
      'Lemonade',
      'Watermelon',
      'Mango',
      'Coconut',
      'Guava',
      'Amla (Indian Gooseberry)'
    ])
    .showOtherOption(true)
    .setRequired(false);

  // Q22
  form.addMultipleChoiceItem()
    .setTitle('Q22.  How important is taste / flavour to your purchasing decision?')
    .setChoiceValues([
      'Extremely important – I won\'t repurchase if it tastes bad',
      'Important – one of my top 3 criteria',
      'Somewhat important',
      'Not important – I care only about function'
    ])
    .setRequired(false);

  // ════════════════════════════════════════════════════════
  // SECTION 6 — PRICING, VALUE & SPENDING
  // ════════════════════════════════════════════════════════
  form.addPageBreakItem()
    .setTitle('SECTION 6 — PRICING, VALUE & SPENDING');

  // Q23
  form.addMultipleChoiceItem()
    .setTitle('Q23.  What is the maximum you are willing to pay for a single-use electrolyte sachet?')
    .setChoiceValues([
      'Up to ₹50',
      '₹50 – ₹70',
      '₹70 – ₹100',
      'Above ₹100'
    ])
    .showOtherOption(true)
    .setRequired(false);

  // Q24
  form.addMultipleChoiceItem()
    .setTitle('Q24.  What is your approximate monthly spending on electrolytes?')
    .setChoiceValues([
      'Less than ₹1,500',
      '₹1,500 – ₹3,000',
      'Above ₹3,000'
    ])
    .setRequired(false);

  // Q25
  form.addMultipleChoiceItem()
    .setTitle('Q25.  Which best describes your buying philosophy when it comes to electrolytes?')
    .setChoiceValues([
      'Quality first – I\'ll pay a premium for superior ingredients',
      'Value-for-money – best quality at a fair price',
      'Cost first – I always go for the most affordable option',
      'Brand loyalty – I stick with brands I trust regardless of price'
    ])
    .setRequired(false);

  // Q26
  form.addMultipleChoiceItem()
    .setTitle('Q26.  Would you be interested in a subscription / bundle model that offers a discount on electrolytes?')
    .setChoiceValues(['Yes, definitely', 'Maybe – depends on the discount', 'No'])
    .setRequired(false);

  // ════════════════════════════════════════════════════════
  // SECTION 7 — WHAT MATTERS MOST TO YOU?
  // Implemented as a Multiple Choice Grid (rows = attributes, cols = 1–8)
  // ════════════════════════════════════════════════════════
  form.addPageBreakItem()
    .setTitle('SECTION 7 — WHAT MATTERS MOST TO YOU?')
    .setHelpText('Rank the following attributes from 1 (most important) to 8 (least important). Each rank should ideally be used once.');

  var rankGrid = form.addGridItem()
    .setTitle('Rank each attribute by importance')
    .setHelpText('1 = Most important, 8 = Least important')
    .setRows([
      'Sodium / electrolyte content & balance',
      'No artificial additives (colours, preservatives, sweeteners)',
      'Taste / flavour',
      'Price per sachet',
      'Brand reputation & trust',
      'Convenience of packaging',
      'Sustainability / eco-friendly packaging',
      'Availability (online & offline)'
    ])
    .setColumns(['1', '2', '3', '4', '5', '6', '7', '8'])
    .setRequired(false);

  // ════════════════════════════════════════════════════════
  // SECTION 8 — MARKET GAPS & SPECIAL INTERESTS
  // ════════════════════════════════════════════════════════
  form.addPageBreakItem()
    .setTitle('SECTION 8 — MARKET GAPS & SPECIAL INTERESTS');

  // Q27
  form.addMultipleChoiceItem()
    .setTitle('Q27.  Are you interested in a dedicated sports / hydration electrolyte product specifically formulated for children?')
    .setChoiceValues([
      'Yes – I have children who are active in sports',
      'Yes – even though I don\'t have children, I see the market need',
      'No',
      'Maybe – would need more information'
    ])
    .setRequired(false);

  // Q28 — checkbox
  form.addCheckboxItem()
    .setTitle('Q28.  Would you be interested in electrolytes tailored for specific conditions?')
    .setHelpText('Select all that apply.')
    .setChoiceValues([
      'Heat / summer training',
      'High-altitude endurance events',
      'Post-illness rehydration (clean / medical-grade)',
      'Travel hydration',
      'Women-specific formulation (hormone-cycle aware)',
      'No – one-size-fits-all is fine'
    ])
    .setRequired(false);

  // Q29
  form.addMultipleChoiceItem()
    .setTitle('Q29.  How important is sustainable / eco-friendly packaging to you?')
    .setChoiceValues([
      'Very important – I actively avoid excess plastic',
      'Somewhat important',
      'Not a deciding factor'
    ])
    .setRequired(false);

  // Q30
  form.addMultipleChoiceItem()
    .setTitle('Q30.  Would you be willing to share your experience / feedback during a product trial / beta phase?')
    .setChoiceValues(['Yes – sign me up!', 'Maybe', 'No'])
    .setRequired(false);

  // Q31 — checkbox
  form.addCheckboxItem()
    .setTitle('Q31.  How do you currently learn about new sports nutrition products?')
    .setHelpText('Select all that apply.')
    .setChoiceValues([
      'Instagram / social media influencers',
      'Recommendations from coaches / trainers',
      'Strava / fitness community groups',
      'Podcast / YouTube',
      'Running / cycling clubs',
      'Online reviews / Reddit',
      'Brand websites'
    ])
    .showOtherOption(true)
    .setRequired(false);

  // ════════════════════════════════════════════════════════
  // SECTION 9 — OPEN FEEDBACK
  // ════════════════════════════════════════════════════════
  form.addPageBreakItem()
    .setTitle('SECTION 9 — OPEN FEEDBACK');

  // Q32
  form.addParagraphTextItem()
    .setTitle('Q32.  What is the biggest frustration or gap you experience with electrolyte products currently available in India?')
    .setRequired(false);

  // Q33
  form.addParagraphTextItem()
    .setTitle('Q33.  If you could design your ideal Indian electrolyte brand, what would make it stand out from the rest?')
    .setRequired(false);

  // Q34
  form.addParagraphTextItem()
    .setTitle('Q34.  Is there anything else you\'d like to share with us?')
    .setRequired(false);

  // ── Done — log URLs ──────────────────────────────────────
  var editUrl    = form.getEditUrl();
  var publishUrl = form.getPublishedUrl();

  Logger.log('✅ Form created!');
  Logger.log('Edit URL  : ' + editUrl);
  Logger.log('Share URL : ' + publishUrl);

  SpreadsheetApp.getUi().alert(
    '✅  Google Form Created Successfully!\n\n' +
    '📝  Edit / design URL (for you):\n' + editUrl +
    '\n\n🔗  Respondent URL (share this):\n' + publishUrl
  );
}
