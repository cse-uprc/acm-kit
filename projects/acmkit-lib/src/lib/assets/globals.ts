export class Environment {
  public static API_URL = window.location.href.includes('acm-web')
    ? 'https://acm-microservice-prod.herokuapp.com'
    : 'https://acm-microservice-dev.herokuapp.com';

  public static AUTH = window.location.href.includes('acm-web')
    ? 'https://acm-microservice-prod.herokuapp.com/authenticate'
    : 'https://acm-microservice-dev.herokuapp.com/authenticate';

  public static ENV = window.location.href.includes('acm-web')
    ? 'app prod'
    : window.location.href.includes('localhost')
    ? 'app local'
    : 'app dev';
}
