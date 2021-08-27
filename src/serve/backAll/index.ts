import { backRequest } from '@/serve'

export function deletePageData(url: string) {
  return backRequest.delete({
    url
  })
}

export function editPageData(url: string, editData: any) {
  return backRequest.patch({
    url,
    data: editData
  })
}

export function createPageData(url: string, newData: any) {
  return backRequest.post({
    url,
    data: newData
  })
}

export function editBlogLabelsById(url: string, labels: any[]) {
  return backRequest.post({
    url,
    data: {
      labels
    }
  })
}
