import request from '@/serve/index'

export function getBlogsList(params: any) {
  return request.get<any>({
    url: '/blog',
    params
  })
}

export function getAllLabels(params: any) {
  return request.get<any>({
    url: '/label',
    params
  })
}

export function getPageListData(url: string, queryInfo: any) {
  return request.get<any>({
    url,
    params: queryInfo
  })
}

export function getBlogsListByLabelId(labelId: number, params: any) {
  return request.get<any>({
    url: `/label/${labelId}/blogs`,
    params
  })
}

// 获取所有菜单
export function getLabels(params: { limit: number; offset: number }) {
  return request.get<any>({
    url: '/label',
    params
  })
}

export function getBlogById(blogId: any) {
  return request.get<any>({
    url: `blog/${blogId}`
  })
}
