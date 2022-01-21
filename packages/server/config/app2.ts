import { registerAs } from '@nestjs/config';

export default registerAs('APP2', () => ({
  name: process.env.APP2 || 'APP2',
}));
