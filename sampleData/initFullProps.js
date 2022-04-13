export const apiKey = 'p7vmiv8da1soybd9u3z1dyss7gpn8biz21uurpkbxbwsilr4'
export const initFullProps = {
  height: 680,
  menubar: false,
  file_picker_callback: function (cb, value, meta) {
    let input = document.createElement('input')
    if (meta.filetype === 'image') {
      input.setAttribute('type', 'file')
      input.setAttribute('accept', 'image/*')
    } else {
      input.setAttribute('type', 'file')
      input.setAttribute('accept', 'video/*')
    }
    input.onchange = function () {
      let file = this.files[0]
      let reader = new FileReader()
      reader.onload = function () {
        let id = 'blobid' + new Date().getTime()
        let blobCache = tinymce.activeEditor.editorUpload.blobCache
        let base64 = reader.result.split(',')[1]
        let blobInfo = blobCache.create(id, file, base64)
        blobCache.add(blobInfo)
        cb(blobInfo.blobUri(), { title: file.name })
      }
      reader.readAsDataURL(file)
    }
    input.click()
  },
  automatic_uploads: true,
  images_upload_url: 'http://10.1.4.246/api/v1/media',
  images_reuse_filename: true,
  plugins: [
    'advlist autolink lists link image charmap print preview anchor',
    'searchreplace visualblocks code fullscreen',
    'insertdatetime media table paste code help wordcount'
  ],
  menubar: 'file edit view insert format tools table help',
  toolbar:
    'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | ' +
    'alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | ' +
    'pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
  branding: false,
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
}
