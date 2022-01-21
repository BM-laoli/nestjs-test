import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  name: process.env.APP_NAME || 'Newegg Seller',
  env: process.env.APP_ENV || 'gdev',
  port: +process.env.APP_PORT || 3000,
  url: process.env.APP_API_URL || 'http://172.16.168.84:3000', // 需要NVTC (main site host)
  ecurl: process.env.APP_EC_HOST_URL || 'http://secure.newegg.com.qa', //ec login site host
  api: process.env.INTERNAL_API || 'http://172.16.168.84:3000', //api host
  apikey:
    process.env.OAUTH || 'Bearer H7iYlnrzzw4UDO2jtaOkpwUYE2rdgTfBjEMVyYpo',
}));
