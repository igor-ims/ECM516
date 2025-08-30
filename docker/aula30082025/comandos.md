PS C:\Users\igori\Documents\ECM516> cd .\microsservicos\
PS C:\Users\igori\Documents\ECM516\microsservicos> cd .\lembretes\
PS C:\Users\igori\Documents\ECM516\microsservicos\lembretes> docker build -t igorims/ecm516-lembretes:0.0.1 .
[+] Building 30.1s (11/11) FINISHED                                                                                                  docker:desktop-linux
 => [internal] load build definition from Dockerfile                                                                                                 0.1s
 => => transferring dockerfile: 174B                                                                                                                 0.0s
 => [internal] load metadata for docker.io/library/node:24-alpine3.21                                                                                1.4s
 => [auth] library/node:pull token for registry-1.docker.io                                                                                          0.0s
 => [internal] load .dockerignore                                                                                                                    0.1s
 => => transferring context: 52B                                                                                                                     0.0s
 => [1/5] FROM docker.io/library/node:24-alpine3.21@sha256:e275c1abbeebd84e663569f4caed3cfc19c7cedf190be63b2d328ad92bca28c7                          9.1s
 => => resolve docker.io/library/node:24-alpine3.21@sha256:e275c1abbeebd84e663569f4caed3cfc19c7cedf190be63b2d328ad92bca28c7                          0.0s
 => => sha256:1a2589eacc47bee36ccc063aa640ce4f3175e71be614991e73293ec9775d71e7 1.26MB / 1.26MB                                                       0.9s
 => => sha256:e275c1abbeebd84e663569f4caed3cfc19c7cedf190be63b2d328ad92bca28c7 3.88kB / 3.88kB                                                       0.0s
 => => sha256:aacff0d39df18b09585911a4cc285e78311e08f1486576536d4b04e67140f1a7 1.72kB / 1.72kB                                                       0.0s
 => => sha256:e928329ddd687ae3e2ba51fa91aad1daa4baea053a94bac8c0d4ac757cce664b 6.42kB / 6.42kB                                                       0.0s
 => => sha256:0368fd46e3c6d237d81390ff086f93aee216df5cfa814041a491453fb0932a12 3.64MB / 3.64MB                                                       1.7s
 => => sha256:75acf4e6f1c51810f95abba11377218041581a5119757797efe4a3d9c50e07c7 53.50MB / 53.50MB                                                     6.5s
 => => sha256:632953d25715f7c7b440573c7a90b1b2ed86f8050652422c2bdbbe3ca1f761d0 444B / 444B                                                           1.7s
 => => extracting sha256:0368fd46e3c6d237d81390ff086f93aee216df5cfa814041a491453fb0932a12                                                            0.2s
 => => extracting sha256:75acf4e6f1c51810f95abba11377218041581a5119757797efe4a3d9c50e07c7                                                            2.2s
 => => extracting sha256:1a2589eacc47bee36ccc063aa640ce4f3175e71be614991e73293ec9775d71e7                                                            0.1s
 => => extracting sha256:632953d25715f7c7b440573c7a90b1b2ed86f8050652422c2bdbbe3ca1f761d0                                                            0.0s
 => [internal] load build context                                                                                                                    0.1s 
 => => transferring context: 35.15kB                                                                                                                 0.1s 
 => [2/5] WORKDIR /app                                                                                                                               4.0s 
 => [3/5] COPY package*.json .                                                                                                                       0.3s 
 => [4/5] RUN npm install                                                                                                                           14.6s 
 => [5/5] COPY . .                                                                                                                                   0.1s 
 => exporting to image                                                                                                                               0.4s 
 => => exporting layers                                                                                                                              0.3s 
 => => writing image sha256:59c9e24286bf35b55380614448d2dace16b9a2d30e3aaf8950bf19592ce62ec5                                                         0.0s 
 => => naming to docker.io/igorims/ecm516-lembretes:0.0.1                                                                                            0.0s 

What's next:
    View a summary of image vulnerabilities and recommendations → docker scout quickview 

PS C:\Users\igori\Documents\ECM516> kubectl get pods -l versao=v1
NAME                                              READY   STATUS    RESTARTS      AGE
ecm516-meu-primeiro-deployment-7f5bd5c886-db5d8   1/1     Running   1 (59m ago)   7d
PS C:\Users\igori\Documents\ECM516> kubectl get services
NAME                             TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
ecm516-meu-primeiro-deployment   NodePort    10.98.231.116   <none>        8080:32162/TCP   23m
kubernetes                       ClusterIP   10.96.0.1       <none>        443/TCP          7d
PS C:\Users\igori\Documents\ECM516> kubectl describe services
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
PS C:\Users\igori\Documents\ECM516> kubectl delete pod $env:POD_NAME
pod "ecm516-meu-primeiro-deployment-7f5bd5c886-db5d8" deleted
PS C:\Users\igori\Documents\ECM516> kubectl get pods
NAME                                              READY   STATUS    RESTARTS   AGE
ecm516-meu-primeiro-deployment-7f5bd5c886-p8cn2   1/1     Running   0          66s
PS C:\Users\igori\Documents\ECM516> kubectl delete service -l app=ecm516-meu-primeiro-deployment
service "ecm516-meu-primeiro-deployment" deleted
PS C:\Users\igori\Documents\ECM516> kubectl get services
NAME         TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   7d
PS C:\Users\igori\Documents\ECM516> kubectl get deployments
NAME                             READY   UP-TO-DATE   AVAILABLE   AGE
ecm516-meu-primeiro-deployment   1/1     1            1           7d
PS C:\Users\igori\Documents\ECM516> kubectl delete deployment -l app=ecm516-meu-primeiro-deployment
deployment.apps "ecm516-meu-primeiro-deployment" deleted
PS C:\Users\igori\Documents\ECM516> get deployments
get : O termo 'get' não é reconhecido como nome de cmdlet, função, arquivo de script ou programa operável. Verifique a grafia do nome ou, se um caminho 
tiver sido incluído, veja se o caminho está correto e tente novamente.
No linha:1 caractere:1
+ get deployments
+ ~~~
    + CategoryInfo          : ObjectNotFound: (get:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException

PS C:\Users\igori\Documents\ECM516> kubectl get deployments
No resources found in default namespace.
PS C:\Users\igori\Documents\ECM516> 
 *  Histórico restaurado 

PS C:\Users\igori\Documents\ECM516> cd .\microsservicos\implantacao\k8s\

PS C:\Users\igori\Documents\ECM516\microsservicos\implantacao\k8s> kubectl apply -f lembretes.yaml
pod/ecm516-lembretes created
PS C:\Users\igori\Documents\ECM516\microsservicos\implantacao\k8s> kubectl get pods
NAME                                              READY   STATUS             RESTARTS   AGE
ecm516-lembretes                                  1/1     Running            0          2m10s
ecm516-meu-primeiro-deployment-7687d78b64-r9lfv   0/1     ImagePullBackOff   0          25m
ecm516-meu-primeiro-deployment-7c8bc65768-g7kw9   1/1     Running            0          28m
ecm516-meu-primeiro-deployment-7c8bc65768-zbx27   1/1     Running            0          28m

PS C:\Users\igori\Documents\ECM516\microsservicos\implantacao\k8s> kubectl apply -f lembretes.yaml
The Pod "ecm516-lembretes" is invalid: spec: Forbidden: pod updates may not change fields other than `spec.containers[*].image`,`spec.initContainers[*].image`,`spec.activeDeadlineSeconds`,`spec.tolerations` (only additions to existing tolerations),`spec.terminationGracePeriodSeconds` (allow it to be set to 1 if it was previously negative)
  core.PodSpec{
        Volumes:        {{Name: "kube-api-access-qv7xr", VolumeSource: {Projected: &{Sources: {{ServiceAccountToken: &{ExpirationSeconds: 3607, Path: "token"}}, {ConfigMap: &{LocalObjectReference: {Name: "kube-root-ca.crt"}, Items: {{Key: "ca.crt", Path: "ca.crt"}}}}, {DownwardAPI: &{Items: {{Path: "namespace", FieldRef: &{APIVersion: "v1", FieldPath: "metadata.namespace"}}}}}}, DefaultMode: &420}}}},
        InitContainers: nil,
        Containers: []core.Container{
                {
                        ... // 6 identical fields
                        EnvFrom: nil,
                        Env:     nil,
                        Resources: core.ResourceRequirements{
                                Limits: core.ResourceList{
-                                       s"cpu":    {i: resource.int64Amount{value: 1}, s: "1", Format: "DecimalSI"},
+                                       s"cpu":    {i: resource.int64Amount{value: 2}, s: "2", Format: "DecimalSI"},
                                        s"memory": {i: {...}, Format: "BinarySI"},
                                },
                                Requests: {s"cpu": {i: {...}, s: "1", Format: "DecimalSI"}, s"memory": {i: {...}, Format: "BinarySI"}},
                                Claims:   nil,
                        },
                        ResizePolicy:  nil,
                        RestartPolicy: nil,
                        ... // 13 identical fields
                },
        },
        EphemeralContainers: nil,
        RestartPolicy:       "Always",
        ... // 29 identical fields
  }

PS C:\Users\igori\Documents\ECM516\microsservicos\implantacao\k8s> kubectl delete -f lembretes.yaml
pod "ecm516-lembretes" deleted

PS C:\Users\igori\Documents\ECM516\microsservicos\implantacao\k8s> kubectl apply -f lembretes.yaml 
pod/ecm516-lembretes created