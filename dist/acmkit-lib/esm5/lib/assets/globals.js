var Environment = /** @class */ (function () {
    function Environment() {
    }
    Environment.RAW_URL = window.location.href.includes('acm-web')
        ? 'acm-microservice-prod.herokuapp.com'
        : window.location.href.includes('localhost')
            ? 'localhost:8080'
            : 'acm-microservice-dev.herokuapp.com';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FjbWtpdC1saWIvIiwic291cmNlcyI6WyJsaWIvYXNzZXRzL2dsb2JhbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFBQTtJQW9CQSxDQUFDO0lBbkJlLG1CQUFPLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUM5RCxDQUFDLENBQUMscUNBQXFDO1FBQ3ZDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxnQkFBZ0I7WUFDbEIsQ0FBQyxDQUFDLG9DQUFvQyxDQUFDO0lBRTNCLG1CQUFPLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUM5RCxDQUFDLENBQUMsNkNBQTZDO1FBQy9DLENBQUMsQ0FBQyw0Q0FBNEMsQ0FBQztJQUVuQyxnQkFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFDM0QsQ0FBQyxDQUFDLDBEQUEwRDtRQUM1RCxDQUFDLENBQUMseURBQXlELENBQUM7SUFFaEQsZUFBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFDMUQsQ0FBQyxDQUFDLFVBQVU7UUFDWixDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztZQUM1QyxDQUFDLENBQUMsV0FBVztZQUNiLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDaEIsa0JBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQXBCWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IHtcclxuICBwdWJsaWMgc3RhdGljIFJBV19VUkwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcygnYWNtLXdlYicpXHJcbiAgICA/ICdhY20tbWljcm9zZXJ2aWNlLXByb2QuaGVyb2t1YXBwLmNvbSdcclxuICAgIDogd2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJ2xvY2FsaG9zdCcpXHJcbiAgICA/ICdsb2NhbGhvc3Q6ODA4MCdcclxuICAgIDogJ2FjbS1taWNyb3NlcnZpY2UtZGV2Lmhlcm9rdWFwcC5jb20nO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIEFQSV9VUkwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcygnYWNtLXdlYicpXHJcbiAgICA/ICdodHRwczovL2FjbS1taWNyb3NlcnZpY2UtcHJvZC5oZXJva3VhcHAuY29tJ1xyXG4gICAgOiAnaHR0cHM6Ly9hY20tbWljcm9zZXJ2aWNlLWRldi5oZXJva3VhcHAuY29tJztcclxuXHJcbiAgcHVibGljIHN0YXRpYyBBVVRIID0gd2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJ2FjbS13ZWInKVxyXG4gICAgPyAnaHR0cHM6Ly9hY20tbWljcm9zZXJ2aWNlLXByb2QuaGVyb2t1YXBwLmNvbS9hdXRoZW50aWNhdGUnXHJcbiAgICA6ICdodHRwczovL2FjbS1taWNyb3NlcnZpY2UtZGV2Lmhlcm9rdWFwcC5jb20vYXV0aGVudGljYXRlJztcclxuXHJcbiAgcHVibGljIHN0YXRpYyBFTlYgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcygnYWNtLXdlYicpXHJcbiAgICA/ICdhcHAgcHJvZCdcclxuICAgIDogd2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJ2xvY2FsaG9zdCcpXHJcbiAgICA/ICdhcHAgbG9jYWwnXHJcbiAgICA6ICdhcHAgZGV2JztcclxufVxyXG4iXX0=