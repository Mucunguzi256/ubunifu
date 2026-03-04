import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

/* export default defineUserConfig({
  lang: 'en-US',

  title: 'VuePress',
  description: 'My first VuePress Site',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: ['/', '/get-started'],
  }),

  bundler: viteBundler(),
})
*/

module.exports = {
  title: 'UBUNIFU SACCO Documentation',
  description: 'Comprehensive documentation for the UBUNIFU SACCO project',
  themeConfig: {
    sidebar: [
      {
        text: 'About UBUNIFU SACCO',
        children: [
          '/about/profile',
          '/about/vision-mission',
          '/about/core-services',
          '/about/objectives',
          '/about/contact',
        ],
      },
      {
        text: 'Project Overview',
        children: [
          '/project-overview/introduction',
          '/project-overview/problem-statement',
          '/project-overview/concept-note',
        ],
      },
      {
        text: 'Methodology',
        children: [
          '/methodology/literature-review',
          '/methodology/feasibility-study',
          '/methodology/needs-assessment',
          '/methodology/stakeholder-analysis',
          '/methodology/data-collection',
        ],
      },
      {
        text: 'Implementation Plan',
        children: [
          '/implementation/phases',
          '/implementation/activities',
          '/implementation/deliverables',
          '/implementation/schedule',
        ],
      },
      {
        text: 'Beneficiaries & Stakeholders',
        children: ['/beneficiaries/specification', '/beneficiaries/stakeholders'],
      },
      {
        text: 'Products & Business Model',
        children: [
          '/products/financial-products',
          '/products/value-proposition',
          '/products/customer-segments',
          '/products/channels',
          '/products/revenue-streams',
          '/products/key-resources',
          '/products/impact-metrics',
        ],
      },
      {
        text: 'Strategy & Expected Results',
        children: ['/strategy/pillars', '/strategy/expected-results'],
      },
      {
        text: 'Risk Management',
        children: ['/risk/management-plan'],
      },
      {
        text: 'Human Resource Management',
        children: ['/hr/staffing', '/hr/organogram', '/hr/motivation'],
      },
      {
        text: 'Budget & Financials',
        children: ['/budget/fixed-capital', '/budget/operational'],
      },
      {
        text: 'Sustainability Strategy',
        children: ['/sustainability/strategy'],
      },
      {
        text: 'References',
        link: '/references',
      },
    ],
  },
};