import { nextTick } from 'vue'
import type { Router } from 'vue-router'

/**
 * 解决首次载入页面时，hash的中文描点报错的问题
 */
export default function fixScrollIntoViewBug(router: Router) {
  router.isReady().then(() => {
    nextTick(() => {
      setTimeout(() => {
        const { hash } = document.location
        if (hash.length > 1) {
          const id = decodeURIComponent(hash.substring(1))
          const element = document.getElementById(id)
          if (element) {
            element.scrollIntoView()
          }
        }
      }, 500)
    })
  })
}
