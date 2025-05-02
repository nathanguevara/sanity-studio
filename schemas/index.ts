import page from '/sanity-studio/schemas/page.js'
import post from '/sanity-studio/schemas/post.js'
import menu from '/sanity-studio/schemas/menu.js'
import form from '/sanity-studio/schemas/form.js'
import siteSettings from '/sanity-studio/schemas/siteSettings.js'

import author from '/sanity-studio/schemas/author.js'
import category from '/sanity-studio/schemas/category.js'
import color from '/sanity-studio/schemas/color.js'

// Object types
import seo from '/sanity-studio/schemas/objects/seo.js'
import heroSection from '/sanity-studio/schemas/objects/heroSection'
import textBlock from '/sanity-studio/schemas/objects/textBlock'
import featureGrid from '/sanity-studio/schemas/objects/featureGrid'
import gallery from '/sanity-studio/schemas/objects/gallery'
import testimonialSection from '/sanity-studio/schemas/objects/testimonialSection'
import pricingTable from '/sanity-studio/schemas/objects/pricingTable'
import faqSection from '/sanity-studio/schemas/objects/faqSection'
import formEmbedSection from '/sanity-studio/schemas/objects/formEmbedSection'
import menuItem from '/sanity-studio/schemas/objects/menuItem'
import socialLink from '/sanity-studio/schemas/objects/socialLink'
import link from '/sanity-studio/schemas/objects/link'

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