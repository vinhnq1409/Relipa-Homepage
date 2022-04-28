import { useRouter } from 'next/router'

import en from './locales/en'
// import vi from './locales/vi/language'
import japan from './locales/japan'

// the translations

const useTrans = () => {
  const { locale } = useRouter()

  const trans = locale === 'ja' ? japan : en

  return trans
}
export default useTrans
