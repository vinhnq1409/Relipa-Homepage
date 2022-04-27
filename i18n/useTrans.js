import { useRouter } from 'next/router'

import en from './locales/en/language'
// import vi from './locales/vi/language'
import japan from './locales/japan/language'

// the translations

const useTrans = () => {
  const { locale } = useRouter()

  const trans = locale === 'japan' ? japan : en

  return trans
}
export default useTrans
