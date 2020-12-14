export class Environment {
  public static SOCKET_URL = window.location.href.includes('acm-web')
    ? 'wss://acm-microservice-prod.herokuapp.com/api/web-notification-app/websocket'
    : window.location.href.includes('localhost')
    ? 'ws://localhost:8080/api/web-notification-app/websocket'
    : 'wss://acm-microservice-dev.herokuapp.com/api/web-notification-app/websocket';

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
