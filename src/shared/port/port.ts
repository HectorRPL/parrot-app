import { environment } from '../../environments/environment';

const develop = 'http://api-staging.parrot.rest/';
const production = 'http://api-staging.parrot.rest/';

export const HOST = environment.production ? production : develop;
