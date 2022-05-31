import { useRouter } from 'next/router'

import en from './locales/en'
import vi from './locales/vi'
import japan from './locales/japan'

// the translations

const useTrans = () => {
  const { locale } = useRouter()

  const trans = locale === 'en' ? en : vi

  return trans
}
export default useTrans
