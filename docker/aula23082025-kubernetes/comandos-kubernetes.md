## PS C:\Users\igori\Documents\ECM516> kubectl get pods -o go-template='{{.apiversion}}'
<no value>
## PS C:\Users\igori\Documents\ECM516> kubectl get pods
NAME                                              READY   STATUS    RESTARTS   AGE                                                               ecm516-meu-primeiro-deployment-7f5bd5c886-db5d8   1/1     Running   0          14m                                                               ## PS C:\Users\igori\Documents\ECM516> set POD_NAME=ecm516-meu-primeiro-deployment-7f5bd5c886-db5d8                                                 ## PS C:\Users\igori\Documents\ECM516> echo POD_NAME                                                                                                
POD_NAME
## PS C:\Users\igori\Documents\ECM516> echo %POD_NAME%
%POD_NAME%
## PS C:\Users\igori\Documents\ECM516> setx POD_NAME=ecm516-meu-primeiro-deployment-7f5bd5c886-db5d8
ERRO: sintaxe inválida.
Digite "SETX /?" para obter detalhes sobre o uso.
## PS C:\Users\igori\Documents\ECM516> $Env:POD_NAME = "ecm516-meu-primeiro-deployment-7f5bd5c886-db5d8"
## PS C:\Users\igori\Documents\ECM516> echo %POD_NAME%                                                  
%POD_NAME%
## PS C:\Users\igori\Documents\ECM516>    $env:POD_NAME
ecm516-meu-primeiro-deployment-7f5bd5c886-db5d8
## PS C:\Users\igori\Documents\ECM516> curl http://localhost:8001/api/v1/namespaces/default/pods/$env:POD_NAME


StatusCode        : 200
StatusDescription : OK
Content           : {
                      "kind": "Pod",
                      "apiVersion": "v1",
                      "metadata": {
                        "name": "ecm516-meu-primeiro-deployment-7f5bd5c886-db5d8",
                        "generateName": "ecm516-meu-primeiro-deployment-7f5bd5c886-",
                        "namespace...
RawContent        : HTTP/1.1 200 OK
                    Audit-Id: 2d5d905c-1005-4bca-befa-9f6ce5bce143
                    X-Kubernetes-Pf-Flowschema-Uid: 82e8b291-335f-4d33-b44e-4254f24cd362
                    X-Kubernetes-Pf-Prioritylevel-Uid: 1ddb5f17-e92e-45fc-a956-10b961...
Forms             : {}
Headers           : {[Audit-Id, 2d5d905c-1005-4bca-befa-9f6ce5bce143], [X-Kubernetes-Pf-Flowschema-Uid, 82e8b291-335f-4d33-b44e-4254f24cd362],   
                    [X-Kubernetes-Pf-Prioritylevel-Uid, 1ddb5f17-e92e-45fc-a956-10b9613ec082], [Transfer-Encoding, chunked]...}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : mshtml.HTMLDocumentClass
RawContentLength  : 7861



## PS C:\Users\igori\Documents\ECM516> kubectl exec -ti $env:POD_NAME --bash
error: unknown flag: --bash
See 'kubectl exec --help' for usage.
## PS C:\Users\igori\Documents\ECM516> kubectl exec -ti $env:POD_NAME --powershell
error: unknown flag: --powershell
See 'kubectl exec --help' for usage.
## PS C:\Users\igori\Documents\ECM516> kubectl exec -ti $env:POD_NAME -- bash     
root@ecm516-meu-primeiro-deployment-7f5bd5c886-db5d8:/# 
 *  Histórico restaurado 

## PS C:\Users\igori\Documents\ECM516> 
 *  Histórico restaurado 

## PS C:\Users\igori\Documents\ECM516> kubectl get services
NAME         TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   7d
## PS C:\Users\igori\Documents\ECM516> kubectl get deployments
NAME                             READY   UP-TO-DATE   AVAILABLE   AGE
ecm516-meu-primeiro-deployment   1/1     1            1           6d23h
## PS C:\Users\igori\Documents\ECM516> kubectl get pods
NAME                                              READY   STATUS    RESTARTS      AGE
ecm516-meu-primeiro-deployment-7f5bd5c886-db5d8   1/1     Running   1 (31m ago)   6d23h
## PS C:\Users\igori\Documents\ECM516> $env:POD_NAME=ecm516-meu-primeiro-deployment-7f5bd5c886-db5d8
ecm516-meu-primeiro-deployment-7f5bd5c886-db5d8 : O termo 'ecm516-meu-primeiro-deployment-7f5bd5c886-db5d8' não é reconhecido como nome de cmdlet, 
função, arquivo de script ou programa operável. Verifique a grafia do nome ou, se um caminho tiver sido incluído, veja se o caminho está correto e tente 
novamente.
No linha:1 caractere:15
+ $env:POD_NAME=ecm516-meu-primeiro-deployment-7f5bd5c886-db5d8
+               ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (ecm516-meu-prim...f5bd5c886-db5d8:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException

## PS C:\Users\igori\Documents\ECM516> $env:POD_NAME="ecm516-meu-primeiro-deployment-7f5bd5c886-db5d8"
## PS C:\Users\igori\Documents\ECM516> echo $env:POD_NAME
ecm516-meu-primeiro-deployment-7f5bd5c886-db5d8
## PS C:\Users\igori\Documents\ECM516> $env:DEPL_NAME="ecm516-meu-primeiro-deployment"
## PS C:\Users\igori\Documents\ECM516> echo $env:DEPL_NAME
ecm516-meu-primeiro-deployment
## PS C:\Users\igori\Documents\ECM516> kubectl get services
NAME         TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   7d
## PS C:\Users\igori\Documents\ECM516> kubectl expose deployment/$env:DEPL_NAME --type="NodePort" --port 8080
service/ecm516-meu-primeiro-deployment exposed
## PS C:\Users\igori\Documents\ECM516> kubectl get services
NAME                             TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
ecm516-meu-primeiro-deployment   NodePort    10.98.231.116   <none>        8080:32162/TCP   8s
kubernetes                       ClusterIP   10.96.0.1       <none>        443/TCP          7d
## PS C:\Users\igori\Documents\ECM516> kubectl  get services/$env:DEPL_NAME -o json
{
    "apiVersion": "v1",
    "kind": "Service",
    "metadata": {
        "creationTimestamp": "2025-08-23T11:33:36Z",
        "labels": {
            "app": "ecm516-meu-primeiro-deployment"
        },
        "name": "ecm516-meu-primeiro-deployment",
        "namespace": "default",
        "resourceVersion": "23489",
        "uid": "fb7bdc5b-fb3e-42d0-bd99-0fd32443df7f"
    },
    "spec": {
        "clusterIP": "10.98.231.116",
        "clusterIPs": [
            "10.98.231.116"
        ],
        "externalTrafficPolicy": "Cluster",
        "internalTrafficPolicy": "Cluster",
        "ipFamilies": [
            "IPv4"
        ],
        "ipFamilyPolicy": "SingleStack",
        "ports": [
            {
                "nodePort": 32162,
                "port": 8080,
                "protocol": "TCP",
                "targetPort": 8080
            }
        ],
        "selector": {
            "app": "ecm516-meu-primeiro-deployment"
        },
        "sessionAffinity": "None",
        "type": "NodePort"
    },
    "status": {
        "loadBalancer": {}
    }
}
## PS C:\Users\igori\Documents\ECM516> kubectl get services/$env:DEPL_NAME -o go-template"{{(index .spec.ports 0).nodePort}}"
error: unable to match a printer suitable for the output format "go-template{{(index .spec.ports 0).nodePort}}", allowed formats are: custom-columns,custom-columns-file,go-template,go-template-file,json,jsonpath,jsonpath-as-json,jsonpath-file,name,template,templatefile,wide,yaml
## PS C:\Users\igori\Documents\ECM516> kubectl get services/$env:DEPL_NAME -o go-template="{{(index .spec.ports 0).nodePort}}"
32162
## PS C:\Users\igori\Documents\ECM516> $env:NODE_PORT=32162
## PS C:\Users\igori\Documents\ECM516> echo $env:NODE_PORT
32162

## PS C:\Users\igori\Documents\ECM516> ipconfig
Adaptador de Rede sem Fio Wi-Fi:

   Sufixo DNS específico de conexão. . . . . . : maua.br
   Endereço IPv6 de link local . . . . . . . . : fe80::f229:2c2c:4e8d:7576%13
   Endereço IPv4. . . . . . . .  . . . . . . . : 10.2.0.40
   Máscara de Sub-rede . . . . . . . . . . . . : 255.255.0.0                                                                                                 
   Gateway Padrão. . . . . . . . . . . . . . . : 10.2.0.1    


## PS C:\Users\igori\Documents\ECM516> curl 10.2.0.40:$env:NODE_PORT


StatusCode        : 200
StatusDescription : OK
Content           : Hello Kubernetes bootcamp! | Running on: ecm516-meu-primeiro-deployment-7f5bd5c886-db5d8 | v=1

RawContent        : HTTP/1.1 200 OK
                    Connection: keep-alive
                    Transfer-Encoding: chunked
                    Content-Type: text/plain
                    Date: Sat, 23 Aug 2025 11:50:15 GMT

                    Hello Kubernetes bootcamp! | Running on: ecm516-meu-primeiro-deplo...
Forms             : {}
Headers           : {[Connection, keep-alive], [Transfer-Encoding, chunked], [Content-Type, text/plain], [Date, Sat, 23 Aug 2025 11:50:15 GMT]}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : mshtml.HTMLDocumentClass
RawContentLength  : 95

## PS C:\Users\igori\Documents\ECM516> kubectl label pod $env:POD_NAME versao=v1
pod/ecm516-meu-primeiro-deployment-7f5bd5c886-db5d8 labeled
## PS C:\Users\igori\Documents\ECM516> kubectl describe pods $env:POD_NAME
Name:             ecm516-meu-primeiro-deployment-7f5bd5c886-db5d8
Namespace:        default
Priority:         0
Service Account:  default
Node:             docker-desktop/192.168.65.3
Start Time:       Sat, 16 Aug 2025 08:33:12 -0300
Labels:           app=ecm516-meu-primeiro-deployment
                  pod-template-hash=7f5bd5c886
                  versao=v1
Annotations:      <none>
Status:           Running
IP:               10.1.0.11
IPs:
  IP:           10.1.0.11
Controlled By:  ReplicaSet/ecm516-meu-primeiro-deployment-7f5bd5c886
Containers:
  kubernetes-bootcamp:
    Container ID:   docker://aea6b51fce3be6ef84627fd45f541d3c199cfaee92d1f83451b64ffb4cb9a340
    Image:          gcr.io/google-samples/kubernetes-bootcamp:v1
    Image ID:       docker-pullable://gcr.io/google-samples/kubernetes-bootcamp@sha256:0d6b8ee63bb57c5f5b6156f446b3bc3b3c143d233037f3a2f00e279c8fcc64af   
    Port:           <none>
    Host Port:      <none>
    State:          Running
      Started:      Sat, 23 Aug 2025 07:58:02 -0300
    Last State:     Terminated
      Reason:       Error
      Exit Code:    255
      Started:      Sat, 16 Aug 2025 08:33:42 -0300
      Finished:     Sat, 23 Aug 2025 07:57:47 -0300
    Ready:          True
    Restart Count:  1
    Environment:    <none>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from kube-api-access-wknd9 (ro)
Conditions:
  Type                        Status
  PodReadyToStartContainers   True
  Initialized                 True
  Ready                       True
  ContainersReady             True
  PodScheduled                True
Volumes:
  kube-api-access-wknd9:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   BestEffort
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason          Age   From     Message
  ----    ------          ----  ----     -------
  Normal  SandboxChanged  58m   kubelet  Pod sandbox changed, it will be killed and re-created.
  Normal  Pulled          58m   kubelet  Container image "gcr.io/google-samples/kubernetes-bootcamp:v1" already present on machine
  Normal  Created         58m   kubelet  Created container: kubernetes-bootcamp
  Normal  Started         58m   kubelet  Started container kubernetes-bootcamp

## PS C:\Users\igori\Documents\ECM516> kubectl get pods -l versao=v1
NAME                                              READY   STATUS    RESTARTS      AGE
ecm516-meu-primeiro-deployment-7f5bd5c886-db5d8   1/1     Running   1 (59m ago)   7d

## PS C:\Users\igori\Documents\ECM516> kubectl get services
NAME                             TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
ecm516-meu-primeiro-deployment   NodePort    10.98.231.116   <none>        8080:32162/TCP   23m
kubernetes                       ClusterIP   10.96.0.1       <none>        443/TCP          7d

## PS C:\Users\igori\Documents\ECM516> kubectl describe services
Name:                     ecm516-meu-primeiro-deployment
Namespace:                default
Labels:                   app=ecm516-meu-primeiro-deployment
Annotations:              <none>
Selector:                 app=ecm516-meu-primeiro-deployment
Type:                     NodePort
IP Family Policy:         SingleStack
IP Families:              IPv4
IP:                       10.98.231.116
IPs:                      10.98.231.116
Port:                     <unset>  8080/TCP
TargetPort:               8080/TCP
NodePort:                 <unset>  32162/TCP
Endpoints:                10.1.0.11:8080
Session Affinity:         None
External Traffic Policy:  Cluster
Internal Traffic Policy:  Cluster
Events:                   <none>


Name:                     kubernetes
Namespace:                default
Labels:                   component=apiserver
                          provider=kubernetes
Annotations:              <none>
Selector:                 <none>
Type:                     ClusterIP
IP Family Policy:         SingleStack
IP Families:              IPv4
IP:                       10.96.0.1
IPs:                      10.96.0.1
Port:                     https  443/TCP
TargetPort:               6443/TCP
Endpoints:                192.168.65.3:6443
Session Affinity:         None
Internal Traffic Policy:  Cluster
Events:                   <none>

## PS C:\Users\igori\Documents\ECM516> kubectl delete pod $env:POD_NAME
pod "ecm516-meu-primeiro-deployment-7f5bd5c886-db5d8" deleted
## PS C:\Users\igori\Documents\ECM516> kubectl get pods
NAME                                              READY   STATUS    RESTARTS   AGE
ecm516-meu-primeiro-deployment-7f5bd5c886-p8cn2   1/1     Running   0          66s

## PS C:\Users\igori\Documents\ECM516> kubectl delete service -l app=ecm516-meu-primeiro-deployment
service "ecm516-meu-primeiro-deployment" deleted
## PS C:\Users\igori\Documents\ECM516> kubectl get services
NAME         TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   7d
## PS C:\Users\igori\Documents\ECM516> kubectl get deployments
NAME                             READY   UP-TO-DATE   AVAILABLE   AGE
ecm516-meu-primeiro-deployment   1/1     1            1           7d

## PS C:\Users\igori\Documents\ECM516> kubectl delete deployment -l app=ecm516-meu-primeiro-deployment
deployment.apps "ecm516-meu-primeiro-deployment" deleted

## PS C:\Users\igori\Documents\ECM516> kubectl scale deployments/ecm516-meu-primeiro-deployment --replicas=4
deployment.apps/ecm516-meu-primeiro-deployment scaled

## PS C:\Users\igori\Documents\ECM516> kubectl get pods
NAME                                              READY   STATUS    RESTARTS   AGE
ecm516-meu-primeiro-deployment-7f5bd5c886-9gjs9   1/1     Running   0          30m
ecm516-meu-primeiro-deployment-7f5bd5c886-j8pp7   1/1     Running   0          11s
ecm516-meu-primeiro-deployment-7f5bd5c886-vtzk5   1/1     Running   0          11s
ecm516-meu-primeiro-deployment-7f5bd5c886-xpsm4   1/1     Running   0          11s

## PS C:\Users\igori\Documents\ECM516> kubectl scale deployments/ecm516-meu-primeiro-deployment --replicas=32
deployment.apps/ecm516-meu-primeiro-deployment scaled

## PS C:\Users\igori\Documents\ECM516> kubectl get pods
NAME                                              READY   STATUS    RESTARTS   AGE
ecm516-meu-primeiro-deployment-7f5bd5c886-2qgzz   1/1     Running   0          14s
ecm516-meu-primeiro-deployment-7f5bd5c886-4jxbh   1/1     Running   0          14s
ecm516-meu-primeiro-deployment-7f5bd5c886-626wd   1/1     Running   0          14s
ecm516-meu-primeiro-deployment-7f5bd5c886-7gj57   1/1     Running   0          14s
ecm516-meu-primeiro-deployment-7f5bd5c886-9gjs9   1/1     Running   0          30m
ecm516-meu-primeiro-deployment-7f5bd5c886-9sznx   1/1     Running   0          14s
ecm516-meu-primeiro-deployment-7f5bd5c886-cwd5x   1/1     Running   0          14s
ecm516-meu-primeiro-deployment-7f5bd5c886-gtbrv   1/1     Running   0          14s
ecm516-meu-primeiro-deployment-7f5bd5c886-h44gv   1/1     Running   0          14s
ecm516-meu-primeiro-deployment-7f5bd5c886-hhvvp   1/1     Running   0          14s
ecm516-meu-primeiro-deployment-7f5bd5c886-hqrsn   1/1     Running   0          14s
ecm516-meu-primeiro-deployment-7f5bd5c886-hv9pj   1/1     Running   0          14s
ecm516-meu-primeiro-deployment-7f5bd5c886-j8pp7   1/1     Running   0          29s
ecm516-meu-primeiro-deployment-7f5bd5c886-jh2f2   1/1     Running   0          14s
ecm516-meu-primeiro-deployment-7f5bd5c886-l5pks   1/1     Running   0          14s
ecm516-meu-primeiro-deployment-7f5bd5c886-lv8bc   1/1     Running   0          14s
ecm516-meu-primeiro-deployment-7f5bd5c886-m2qht   1/1     Running   0          14s
ecm516-meu-primeiro-deployment-7f5bd5c886-m64g6   1/1     Running   0          14s
ecm516-meu-primeiro-deployment-7f5bd5c886-mnpr5   1/1     Running   0          14s
ecm516-meu-primeiro-deployment-7f5bd5c886-nfkbr   1/1     Running   0          14s
ecm516-meu-primeiro-deployment-7f5bd5c886-pm6kv   1/1     Running   0          14s
ecm516-meu-primeiro-deployment-7f5bd5c886-qwlzl   1/1     Running   0          14s
ecm516-meu-primeiro-deployment-7f5bd5c886-tzxmk   1/1     Running   0          14s
ecm516-meu-primeiro-deployment-7f5bd5c886-vtzk5   1/1     Running   0          29s
ecm516-meu-primeiro-deployment-7f5bd5c886-w2wh6   1/1     Running   0          14s
ecm516-meu-primeiro-deployment-7f5bd5c886-wflxp   1/1     Running   0          14s
ecm516-meu-primeiro-deployment-7f5bd5c886-x7xcb   1/1     Running   0          14s
ecm516-meu-primeiro-deployment-7f5bd5c886-xlnq7   1/1     Running   0          14s
ecm516-meu-primeiro-deployment-7f5bd5c886-xpsm4   1/1     Running   0          29s
ecm516-meu-primeiro-deployment-7f5bd5c886-xpwmf   1/1     Running   0          14s
ecm516-meu-primeiro-deployment-7f5bd5c886-xqhhl   1/1     Running   0          14s
ecm516-meu-primeiro-deployment-7f5bd5c886-zbl9b   1/1     Running   0          14s

## PS C:\Users\igori\Documents\ECM516> kubectl get deployments
NAME                             READY   UP-TO-DATE   AVAILABLE   AGE
ecm516-meu-primeiro-deployment   2/2     2            2           40m
## PS C:\Users\igori\Documents\ECM516> kubectl get pods
NAME                                              READY   STATUS    RESTARTS   AGE
ecm516-meu-primeiro-deployment-7f5bd5c886-9gjs9   1/1     Running   0          40m
ecm516-meu-primeiro-deployment-7f5bd5c886-hqrsn   1/1     Running   0          10m

## PS C:\Users\igori\Documents\ECM516> kubectl describe pods
Name:             ecm516-meu-primeiro-deployment-7f5bd5c886-9gjs9
Namespace:        default
Priority:         0
Service Account:  default
Node:             docker-desktop/192.168.65.3
Start Time:       Sat, 30 Aug 2025 08:16:30 -0300
Labels:           app=ecm516-meu-primeiro-deployment
                  pod-template-hash=7f5bd5c886
Annotations:      <none>
Status:           Running
IP:               10.1.0.21
IPs:
  IP:           10.1.0.21
Controlled By:  ReplicaSet/ecm516-meu-primeiro-deployment-7f5bd5c886
Containers:
  kubernetes-bootcamp:
    Container ID:   docker://7ce7895f7519b921cab03e0e847a56a3549b35c0ae3f0a5cc98031e67bb0a6e7
    Image:          gcr.io/google-samples/kubernetes-bootcamp:v1
    Image ID:       docker-pullable://gcr.io/google-samples/kubernetes-bootcamp@sha256:0d6b8ee63bb57c5f5b6156f446b3bc3b3c143d233037f3a2f00e279c8fcc64af   
    Port:           <none>
    Host Port:      <none>
    State:          Running
      Started:      Sat, 30 Aug 2025 08:16:30 -0300
    Ready:          True
    Restart Count:  0
    Environment:    <none>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from kube-api-access-vbt6l (ro)
Conditions:
  Type                        Status
  PodReadyToStartContainers   True
  Initialized                 True
  Ready                       True
  ContainersReady             True
  PodScheduled                True
Volumes:
  kube-api-access-vbt6l:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   BestEffort
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  40m   default-scheduler  Successfully assigned default/ecm516-meu-primeiro-deployment-7f5bd5c886-9gjs9 to docker-desktop
  Normal  Pulled     40m   kubelet            Container image "gcr.io/google-samples/kubernetes-bootcamp:v1" already present on machine
  Normal  Created    40m   kubelet            Created container: kubernetes-bootcamp
  Normal  Started    40m   kubelet            Started container kubernetes-bootcamp


Name:             ecm516-meu-primeiro-deployment-7f5bd5c886-hqrsn
Namespace:        default
Priority:         0
Service Account:  default
Node:             docker-desktop/192.168.65.3
Start Time:       Sat, 30 Aug 2025 08:46:50 -0300
Labels:           app=ecm516-meu-primeiro-deployment
                  pod-template-hash=7f5bd5c886
Annotations:      <none>
Status:           Running
IP:               10.1.0.41
IPs:
  IP:           10.1.0.41
Controlled By:  ReplicaSet/ecm516-meu-primeiro-deployment-7f5bd5c886
Containers:
  kubernetes-bootcamp:
    Container ID:   docker://b6c36d1cc123be184fad19d73d9768bdc92af69feaed6e532461c0c806464ad3
    Image:          gcr.io/google-samples/kubernetes-bootcamp:v1
    Image ID:       docker-pullable://gcr.io/google-samples/kubernetes-bootcamp@sha256:0d6b8ee63bb57c5f5b6156f446b3bc3b3c143d233037f3a2f00e279c8fcc64af   
    Port:           <none>
    Host Port:      <none>
    State:          Running
      Started:      Sat, 30 Aug 2025 08:46:53 -0300
    Ready:          True
    Restart Count:  0
    Environment:    <none>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from kube-api-access-8vzp2 (ro)
Conditions:
  Type                        Status
  PodReadyToStartContainers   True
  Initialized                 True
  Ready                       True
  ContainersReady             True
  PodScheduled                True
Volumes:
  kube-api-access-8vzp2:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   BestEffort
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  10m   default-scheduler  Successfully assigned default/ecm516-meu-primeiro-deployment-7f5bd5c886-hqrsn to docker-desktop
  Normal  Pulled     10m   kubelet            Container image "gcr.io/google-samples/kubernetes-bootcamp:v1" already present on machine
  Normal  Created    10m   kubelet            Created container: kubernetes-bootcamp
  Normal  Started    10m   kubelet            Started container kubernetes-bootcamp
  
## PS C:\Users\igori\Documents\ECM516> kubectl set image deployments ecm516-meu-primeiro-deployment kubernetes-bootcamp=jocatalin/kubernetes-bootcamp:v2
deployment.apps/ecm516-meu-primeiro-deployment image updated

## PS C:\Users\igori\Documents\ECM516> kubectl get pods
NAME                                              READY   STATUS        RESTARTS   AGE
ecm516-meu-primeiro-deployment-7c8bc65768-g7kw9   1/1     Running       0          6s
ecm516-meu-primeiro-deployment-7c8bc65768-zbx27   1/1     Running       0          1s
ecm516-meu-primeiro-deployment-7f5bd5c886-9gjs9   1/1     Terminating   0          43m
ecm516-meu-primeiro-deployment-7f5bd5c886-hqrsn   1/1     Terminating   0          13m

## PS C:\Users\igori\Documents\ECM516> kubectl rollout status deployments/ecm516-meu-primeiro-deployment
deployment "ecm516-meu-primeiro-deployment" successfully rolled out

## PS C:\Users\igori\Documents\ECM516> kubectl set image deployments ecm516-meu-primeiro-deployment kubernetes-bootcamp=gcr.io/google-samples/kubernetes-bootcamp:v10
deployment.apps/ecm516-meu-primeiro-deployment image updated

## PS C:\Users\igori\Documents\ECM516> kubectl get pods                                                                                                      
NAME                                              READY   STATUS              RESTARTS   AGE
ecm516-meu-primeiro-deployment-7687d78b64-r9lfv   0/1     ContainerCreating   0          3s
ecm516-meu-primeiro-deployment-7c8bc65768-g7kw9   1/1     Running             0          3m11s
ecm516-meu-primeiro-deployment-7c8bc65768-zbx27   1/1     Running             0          3m6s

## PS C:\Users\igori\Documents\ECM516> kubectl get pods
NAME                                              READY   STATUS         RESTARTS   AGE
ecm516-meu-primeiro-deployment-7687d78b64-r9lfv   0/1     ErrImagePull   0          8s
ecm516-meu-primeiro-deployment-7c8bc65768-g7kw9   1/1     Running        0          3m16s
ecm516-meu-primeiro-deployment-7c8bc65768-zbx27   1/1     Running        0          3m11s

