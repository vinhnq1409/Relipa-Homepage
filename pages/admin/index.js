import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Dashboard from './dashboard'
import Admin from '../../layouts/Admin'
export default function index() {
  const router = useRouter()
  useEffect(() => {
    router.push('/admin/dashboard')
  }, [])
  return <></>
}
index.layout = Admin
