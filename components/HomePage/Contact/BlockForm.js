import React from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'
import styled from '../../../styles/user/Error.module.css'
import { post } from '../../../api/BaseRequest'
import { useMutation } from 'react-query'

const BlockForm = ({ onNotification }) => {
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
    name: Yup.string().required('Please fill in the required fields'),
    company_name: Yup.string().required('Please fill in the required fields'),
    email: Yup.string()
      .required('Please fill in the required fields')
      .email('The email address you entered is invalid'),
    phone: Yup.string()
      .required('Please fill in the required fields')
      .test('Phone', 'The phone number is invalid', (value) => {
        if (value) {
          const result = value.match(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g)
          return result
        }
      }),
    content: Yup.string().required('Please fill in the required fields'),
    inquiry_type: Yup.string().test('Inquiry type', 'Please fill in the required fields', (value) => +value),
    your_source: Yup.string().test('Yoursource', 'Please fill in the required fields', (value) => +value),
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
                For inquiries / consultations from customers, please use the form below.
                <br />
                Depending on the content of your inquiry, it may take several days to reply.
              </strong>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 ms-auto me-auto">
            <form className="forms">
              <div className="form-group">
                <label className="form-label required">Name</label>
                <input className="form-control" type="text" placeholder="Name" {...register('name')} />
                {errors.name && <p className={styled.error}>{errors.name.message}</p>}
              </div>
              <div className="form-group">
                <label className="form-label required">Company Name</label>
                <input className="form-control" type="text" placeholder="Company Name" {...register('company_name')} />
                {errors.company_name && <p className={styled.error}>{errors.company_name.message}</p>}
              </div>
              <div className="form-group">
                <label className="form-label required">Email address</label>
                <input className="form-control" type="text" placeholder="Email address" {...register('email')} />
                {errors.email && <p className={styled.error}>{errors.email.message}</p>}
              </div>
              <div className="form-group">
                <label className="form-label required">Phone number</label>
                <input className="form-control" type="text" placeholder="Phone number" {...register('phone')} />
                {errors.phone && <p className={styled.error}>{errors.phone.message}</p>}
              </div>
              <div className="form-group">
                <label className="form-label required">Inquiry type</label>
                <select className="form-select" {...register('inquiry_type')}>
                  <option value="0">---Please select---</option>
                  <option value="1">Consultation on system development</option>
                  <option value="2">Consultation on blockchain development</option>
                  <option value="3">NFT development consultation</option>
                  <option value="4">Consultation on smartphone application development</option>
                  <option value="5">Consultation on business collaboration</option>
                  <option value="6">Request for company introduction materials</option>
                  <option value="7">Inquiries about human resources and recruitment</option>
                  <option value="8">others</option>
                </select>
                {errors.inquiry_type && <p className={styled.error}>{errors.inquiry_type.message}</p>}
              </div>
              <div className="form-group">
                <label className="form-label required">How did you get to know our website?</label>
                <select className="form-select" {...register('your_source')}>
                  <option value="0">---Please select---</option>
                  <option value="1">Google search</option>
                  <option value="2">Yahoo search</option>
                  <option value="3">Google ads</option>
                  <option value="4">Yahoo ads</option>
                  <option value="5">Press article</option>
                  <option value="6">Matching site</option>
                  <option value="7">Social media / SNS</option>
                  <option value="8">Blogs and other websites</option>
                  <option value="9">Exhibitions / seminars</option>
                  <option value="10">Paper materials (business cards, leaflets, etc.) received from us</option>
                  <option value="11">
                    Electronic materials received from us (email, company introduction materials, etc.)
                  </option>
                  <option value="12">Introduction of acquaintances</option>
                  <option value="13">others</option>
                </select>
                {errors.your_source && <p className={styled.error}>{errors.your_source.message}</p>}
              </div>
              <div className="form-group">
                <label className="form-label required">Contents of inquiry</label>
                <textarea
                  className="form-control"
                  type="text"
                  cols="30"
                  rows="5"
                  placeholder="Contents of inquiry"
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
                      I agree to the privacy policy
                    </label>
                    {errors.is_agree && <p className={styled.error}>{errors.is_agree.message}</p>}
                  </div>
                </div>
                <Link href="/privacy">
                  <a className="text-secondary">Click here for our privacy policy</a>
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
                  SEND WITH THIS CONTENT
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
