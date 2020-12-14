var Environment = /** @class */ (function () {
    function Environment() {
    }
    Environment.SOCKET_URL = window.location.href.includes('acm-web')
        ? 'wss://acm-microservice-prod.herokuapp.com/api/web-notification-app/websocket'
        : window.location.href.includes('localhost')
            ? 'ws://localhost:8080/api/web-notification-app/websocket'
            : 'wss://acm-microservice-dev.herokuapp.com/api/web-notification-app/websocket';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FjbWtpdC1saWIvIiwic291cmNlcyI6WyJsaWIvYXNzZXRzL2dsb2JhbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFBQTtJQW9CQSxDQUFDO0lBbkJlLHNCQUFVLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUNqRSxDQUFDLENBQUMsOEVBQThFO1FBQ2hGLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO1lBQzVDLENBQUMsQ0FBQyx3REFBd0Q7WUFDMUQsQ0FBQyxDQUFDLDZFQUE2RSxDQUFDO0lBRXBFLG1CQUFPLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUM5RCxDQUFDLENBQUMsNkNBQTZDO1FBQy9DLENBQUMsQ0FBQyw0Q0FBNEMsQ0FBQztJQUVuQyxnQkFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFDM0QsQ0FBQyxDQUFDLDBEQUEwRDtRQUM1RCxDQUFDLENBQUMseURBQXlELENBQUM7SUFFaEQsZUFBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFDMUQsQ0FBQyxDQUFDLFVBQVU7UUFDWixDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztZQUM1QyxDQUFDLENBQUMsV0FBVztZQUNiLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDaEIsa0JBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQXBCWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IHtcclxuICBwdWJsaWMgc3RhdGljIFNPQ0tFVF9VUkwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcygnYWNtLXdlYicpXHJcbiAgICA/ICd3c3M6Ly9hY20tbWljcm9zZXJ2aWNlLXByb2QuaGVyb2t1YXBwLmNvbS9hcGkvd2ViLW5vdGlmaWNhdGlvbi1hcHAvd2Vic29ja2V0J1xyXG4gICAgOiB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcygnbG9jYWxob3N0JylcclxuICAgID8gJ3dzOi8vbG9jYWxob3N0OjgwODAvYXBpL3dlYi1ub3RpZmljYXRpb24tYXBwL3dlYnNvY2tldCdcclxuICAgIDogJ3dzczovL2FjbS1taWNyb3NlcnZpY2UtZGV2Lmhlcm9rdWFwcC5jb20vYXBpL3dlYi1ub3RpZmljYXRpb24tYXBwL3dlYnNvY2tldCc7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgQVBJX1VSTCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCdhY20td2ViJylcclxuICAgID8gJ2h0dHBzOi8vYWNtLW1pY3Jvc2VydmljZS1wcm9kLmhlcm9rdWFwcC5jb20nXHJcbiAgICA6ICdodHRwczovL2FjbS1taWNyb3NlcnZpY2UtZGV2Lmhlcm9rdWFwcC5jb20nO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIEFVVEggPSB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcygnYWNtLXdlYicpXHJcbiAgICA/ICdodHRwczovL2FjbS1taWNyb3NlcnZpY2UtcHJvZC5oZXJva3VhcHAuY29tL2F1dGhlbnRpY2F0ZSdcclxuICAgIDogJ2h0dHBzOi8vYWNtLW1pY3Jvc2VydmljZS1kZXYuaGVyb2t1YXBwLmNvbS9hdXRoZW50aWNhdGUnO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIEVOViA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCdhY20td2ViJylcclxuICAgID8gJ2FwcCBwcm9kJ1xyXG4gICAgOiB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcygnbG9jYWxob3N0JylcclxuICAgID8gJ2FwcCBsb2NhbCdcclxuICAgIDogJ2FwcCBkZXYnO1xyXG59XHJcbiJdfQ==