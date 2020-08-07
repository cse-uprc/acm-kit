var Environment = /** @class */ (function () {
    function Environment() {
    }
    Environment.API_URL = window.location.href.includes('acm-web')
        ? 'https://acm-microservice-prod.herokuapp.com'
        : 'https://acm-microservice-dev.herokuapp.com';
    Environment.AUTH = window.location.href.includes('acm-web')
        ? 'https://acm-microservice-prod.herokuapp.com/authenticate'
        : 'https://acm-microservice-dev.herokuapp.com/authenticate';
    Environment.ENV = window.location.href.includes('acm-web')
        ? 'app prod'
        : window.location.href.includes('localhost')
            ? 'app local'
            : 'app dev';
    return Environment;
}());
export { Environment };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FjbWtpdC1saWIvIiwic291cmNlcyI6WyJsaWIvYXNzZXRzL2dsb2JhbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFBQTtJQWNBLENBQUM7SUFiZSxtQkFBTyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFDOUQsQ0FBQyxDQUFDLDZDQUE2QztRQUMvQyxDQUFDLENBQUMsNENBQTRDLENBQUM7SUFFbkMsZ0JBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBQzNELENBQUMsQ0FBQywwREFBMEQ7UUFDNUQsQ0FBQyxDQUFDLHlEQUF5RCxDQUFDO0lBRWhELGVBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBQzFELENBQUMsQ0FBQyxVQUFVO1FBQ1osQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7WUFDNUMsQ0FBQyxDQUFDLFdBQVc7WUFDYixDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2hCLGtCQUFDO0NBQUEsQUFkRCxJQWNDO1NBZFksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCB7XHJcbiAgcHVibGljIHN0YXRpYyBBUElfVVJMID0gd2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJ2FjbS13ZWInKVxyXG4gICAgPyAnaHR0cHM6Ly9hY20tbWljcm9zZXJ2aWNlLXByb2QuaGVyb2t1YXBwLmNvbSdcclxuICAgIDogJ2h0dHBzOi8vYWNtLW1pY3Jvc2VydmljZS1kZXYuaGVyb2t1YXBwLmNvbSc7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgQVVUSCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCdhY20td2ViJylcclxuICAgID8gJ2h0dHBzOi8vYWNtLW1pY3Jvc2VydmljZS1wcm9kLmhlcm9rdWFwcC5jb20vYXV0aGVudGljYXRlJ1xyXG4gICAgOiAnaHR0cHM6Ly9hY20tbWljcm9zZXJ2aWNlLWRldi5oZXJva3VhcHAuY29tL2F1dGhlbnRpY2F0ZSc7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgRU5WID0gd2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJ2FjbS13ZWInKVxyXG4gICAgPyAnYXBwIHByb2QnXHJcbiAgICA6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCdsb2NhbGhvc3QnKVxyXG4gICAgPyAnYXBwIGxvY2FsJ1xyXG4gICAgOiAnYXBwIGRldic7XHJcbn1cclxuIl19