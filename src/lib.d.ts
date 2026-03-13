declare module 'v-lazy-image' {
  type LazyImgProps = import('vue').ImgHTMLAttributes
  const VLazyImg: import('vue').DefineComponent<LazyImgProps>
  export default VLazyImg
}
