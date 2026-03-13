import { DefineComponent, ImgHTMLAttributes } from 'vue'

declare module 'v-lazy-img' {
  // We define the props by extending the standard HTML image attributes
  type LazyImgProps = ImgHTMLAttributes

  // The default export is a Vue component using those props
  const VLazyImg: DefineComponent<LazyImgProps>

  export default VLazyImg
}
