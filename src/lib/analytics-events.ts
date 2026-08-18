export const AnalyticsEvents = {
  HERO_PRIMARY_CTA: 'hero_primary_cta',
  HERO_DEMO_CTA: 'hero_demo_cta',
  MISSION_CARD_OPEN: 'mission_card_open',
  MISSION_START_CLICK: 'mission_start_click',
  SIGNUP_START: 'signup_start',
  SIGNUP_COMPLETE: 'signup_complete',
  PRICING_PLAN_CLICK: 'pricing_plan_click',
  DEMO_FORM_START: 'demo_form_start',
  DEMO_FORM_SUBMIT: 'demo_form_submit',
  ACADEMIC_FORM_SUBMIT: 'academic_form_submit',
  THREAT_ARTICLE_TO_MISSION: 'threat_article_to_mission',
  SAMPLE_REPORT_DOWNLOAD: 'sample_report_download',
  VIDEO_PLAY: 'video_play',
  NEWSLETTER_SIGNUP: 'newsletter_signup',
  LOGIN_CLICK: 'login_click',
  RESPONSIBLE_USE_OPEN: 'responsible_use_open',
} as const;

export type AnalyticsEventName = (typeof AnalyticsEvents)[keyof typeof AnalyticsEvents];
