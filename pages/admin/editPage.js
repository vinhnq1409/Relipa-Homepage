import React, { useRef, useState } from 'react'
import Admin from 'layouts/Admin.js'
import { TextField, Button } from '@material-ui/core'
import { Editor } from '@tinymce/tinymce-react'
import { initMCE } from '../../variables/initMCE'
import '../../assets/css/editPage.css'
export default function EditPage() {
  const editorRef = useRef(null)
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent())
    }
  }
  return (
    <>
      <form>
        <TextField
          label='Tiêu đề'
          id='outlined-required'
          variant='outlined'
          placeholder='Nhập tên tiêu đề'
          className='input'
          required
        />
        <TextField
          label='Mô tả'
          id='outlined-required'
          variant='outlined'
          placeholder='Nhập tên mô tả tiêu đề'
          className='input'
          multiline
          minRows={5}
        />
        <div className='mtb_15'>
          <TextField
            label='Đường dẫn URL'
            id='outlined-required'
            variant='outlined'
            className='w_60'
            placeholder='Nhập đường dẫn URL'
            required
          />
          <Button variant='outlined' color='primary' className='buttonAuth'>
            Authorial
          </Button>
        </div>
      </form>
      <br />
      <Editor id='editor' onInit={(evt, editor) => (editorRef.current = editor)} init={initMCE} />
      <button onClick={log}>Log editor content</button>
    </>
  )
}

EditPage.layout = Admin
