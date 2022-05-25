import React from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'
import styled from '../../../styles/user/Error.module.css'
import { post } from '../../../api/BaseRequest'
import { useMutation } from 'react-query'
import useTrans from '../../../i18n/useTrans'

const BlockForm = ({ onNotification }) => {
  const trans = useTrans()
  const language = trans.contact
  const postContact = async (data) => {
    return await post('contact', data)
  }

  const defaultValues = {
    name: '',
    company_name: '',
    email: '',
    phone: '',
    content: '',
    inquiry_type: '0',
    your_source: '0',
    is_agree: true,
  }

  const { mutate: postInfoContactAPI, isLoading: isPostingInfoContactAPI } = useMutation(postContact, {
    onSuccess: () => {
      onNotification(true)
      reset({
        ...defaultValues,
      })
    },
    onError: () => {
      onNotification(false)
    },
  })

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(language.error),
    company_name: Yup.string().required(language.error),
    email: Yup.string().required(language.error).email('The email address you entered is invalid'),
    phone: Yup.string()
      .required(language.error)
      .test('Phone', 'The phone number is invalid', (value) => {
        if (value) {
          const result = value.match(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g)
          return result
        }
      }),
    content: Yup.string().required(language.error),
    inquiry_type: Yup.string().test('Inquiry type', language.error, (value) => +value),
    your_source: Yup.string().test('Yoursource', language.error, (value) => +value),
    is_agree: Yup.boolean().oneOf([true], 'You must agree to the privacy policy'),
  })

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({ defaultValues, resolver: yupResolver(validationSchema) })

  const onSend = (data) => {
    const { is_agree, ...newData } = data
    postInfoContactAPI(newData)
  }

  return (
    <section className="section section-aos" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-md-8 ms-auto me-auto">
            <div className="contact-text text-center">
              <strong>
                {language.contentone}
                <br />
                {language.contenttwo}
              </strong>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 ms-auto me-auto">
            <form className="forms">
              <div className="form-group">
                <label className="form-label required">{language.name}</label>
                <input className="form-control" type="text" placeholder={language.name} {...register('name')} />
                {errors.name && <p className={styled.error}>{errors.name.message}</p>}
              </div>
              <div className="form-group">
                <label className="form-label required">{language.conpanyname}</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder={language.conpanyname}
                  {...register('company_name')}
                />
                {errors.company_name && <p className={styled.error}>{errors.company_name.message}</p>}
              </div>
              <div className="form-group">
                <label className="form-label required">{language.email}</label>
                <input className="form-control" type="text" placeholder={language.email} {...register('email')} />
                {errors.email && <p className={styled.error}>{errors.email.message}</p>}
              </div>
              <div className="form-group">
                <label className="form-label required">{language.phone}</label>
                <input className="form-control" type="text" placeholder={language.phone} {...register('phone')} />
                {errors.phone && <p className={styled.error}>{errors.phone.message}</p>}
              </div>
              <div className="form-group">
                <label className="form-label required">{language.inquirytype.title}</label>
                <select className="form-select" {...register('inquiry_type')}>
                  <option value="0">---{language.pleaseSelect}---</option>
                  <option value="1">{language.inquirytype.select.one}</option>
                  <option value="2">{language.inquirytype.select.two}</option>
                  <option value="3">{language.inquirytype.select.three}</option>
                  <option value="4">{language.inquirytype.select.four}</option>
                  <option value="5">{language.inquirytype.select.five}</option>
                  <option value="6">{language.inquirytype.select.six}</option>
                  <option value="7">{language.inquirytype.select.seven}</option>
                  <option value="8">{language.inquirytype.select.eigth}</option>
                </select>
                {errors.inquiry_type && <p className={styled.error}>{errors.inquiry_type.message}</p>}
              </div>
              <div className="form-group">
                <label className="form-label required">{language.howdid.title}</label>
                <select className="form-select" {...register('your_source')}>
                  <option value="0">---{language.pleaseSelect}---</option>
                  <option value="1">{language.howdid.select.one}</option>
                  <option value="2">{language.howdid.select.two}</option>
                  <option value="3">{language.howdid.select.three}</option>
                  <option value="4">{language.howdid.select.fource}</option>
                  <option value="5">{language.howdid.select.five}</option>
                  <option value="6">{language.howdid.select.six}</option>
                  <option value="7">{language.howdid.select.seven}</option>
                  <option value="8">{language.howdid.select.eight}</option>
                  <option value="9">{language.howdid.select.nine}</option>
                  <option value="10">{language.howdid.select.ten}</option>
                  <option value="11">{language.howdid.select.eleven}</option>
                  <option value="12">{language.howdid.select.twelve}</option>
                  <option value="13">{language.howdid.select.thirthteen}</option>
                </select>
                {errors.your_source && <p className={styled.error}>{errors.your_source.message}</p>}
              </div>
              <div className="form-group">
                <label className="form-label required">{language.contentsOfInquiry}</label>
                <textarea
                  className="form-control"
                  type="text"
                  cols="30"
                  rows="5"
                  placeholder={language.contentsOfInquiry}
                  {...register('content')}
                ></textarea>
                {errors.content && <p className={styled.error}>{errors.content.message}</p>}
              </div>
              <div className="form-group text-center">
                <div className="inline-flex ms-auto me-auto">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                      {...register('is_agree')}
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      {language.agress}
                    </label>
                    {errors.is_agree && <p className={styled.error}>{errors.is_agree.message}</p>}
                  </div>
                </div>
                <Link href="/privacy">
                  <a className="text-secondary">{language.clickhere}</a>
                </Link>
              </div>
              <div className="d-grid d-md-block text-center pt-3">
                <button
                  onClick={handleSubmit(onSend)}
                  className="btn btn-outline-greyish btn-lg rounded-0 px-5"
                  disabled={isPostingInfoContactAPI}
                >
                  {isPostingInfoContactAPI && (
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  )}{' '}
                  {language.sendwidth}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlockForm
