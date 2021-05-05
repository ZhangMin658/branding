import { localize, extend } from 'vee-validate'

import * as rules from 'vee-validate/dist/rules'

import en from 'vee-validate/dist/locale/en.json'
import fr from 'vee-validate/dist/locale/fr.json'
import tr from 'vee-validate/dist/locale/tr.json'

Object.keys(rules).forEach((rule) => {
  // eslint-disable-next-line import/namespace
  extend(rule, rules[rule])
})

localize({
  en,
  tr,
  fr,
})
