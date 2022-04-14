import {post} from '../api/BaseRequest'
export const apiKey = 'p7vmiv8da1soybd9u3z1dyss7gpn8biz21uurpkbxbwsilr4'
export const initFullProps = {
  height: 680,
  images_upload_handler: (blobInfo, success, failure) => {
    setTimeout(async () => {
      const formData = new FormData();
      formData.append('file', blobInfo.blob(), blobInfo.filename());
      const {location} = await post('media', formData);
      success(`http://${location}`);
    }, 2000);
  },
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
