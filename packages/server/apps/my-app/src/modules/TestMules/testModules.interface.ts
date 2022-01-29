export interface InterToUnifyLoginIPayload<T> {
  URL: string;
  Payload: {
    appID: string;
    enableGuestCheckout: boolean;
    regionCode: 'USA' | 'CNA';
    userState: T;
    NVTC: string;
  };
  X_Nvtc: string;
  LoginTicket?: string;
  ConfigPath?: string;
  WRedisPath?: string;
}
