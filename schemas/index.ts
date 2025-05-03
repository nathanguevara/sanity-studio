import page from './page.js'
import post from './post.js'
import menu from './menu.js'
import form from './form.js'
import siteSettings from './siteSettings.js'

import author from './author.js'
import category from './category.js'
import color from './color.js'

// Object types
import seo from './objects/seo.js'
import heroSection from './objects/heroSection'
import textBlock from './objects/textBlock'
import featureGrid from './objects/featureGrid'
import gallery from './objects/gallery'
import testimonialSection from './objects/testimonialSection'
import pricingTable from './objects/pricingTable'
import faqSection from './objects/faqSection'
import formEmbedSection from './objects/formEmbedSection'
import menuItem from './objects/menuItem'
import socialLink from './objects/socialLink'
import link from './objects/link'

export const schemaTypes = [
  // Documents
  page,
  post,
  menu,
  form,
  siteSettings,
  author,
  category,
  color,

  // Objects
  seo,
  heroSection,
  textBlock,
  featureGrid,
  gallery,
  testimonialSection,
  pricingTable,
  faqSection,
  formEmbedSection,
  menuItem,
  socialLink,
  link,
]