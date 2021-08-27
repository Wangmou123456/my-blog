import { backRequest } from '@/serve'

import { IAccount, ILoginResult } from './type'

import { IDataType } from '@/serve/types'

enum LoginAPI {
  AccountLogin = '/login'
}

export function accountLoginRequest(account: IAccount) {
  return backRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: { ...account }
  })
}
