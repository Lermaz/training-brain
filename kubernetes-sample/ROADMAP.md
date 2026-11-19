# Kubernetes Learning Roadmap

A roadmap to understand Kubernetes end to end. It assumes you already know containers, AWS, and Terraform, so it skips Docker basics and focuses on what's new: the cluster model, how workloads run on it, and how to operate it.

**Duration:** about 10-12 weeks at 5-8 hours per week.

---

## Phase 0: Setup (Week 1)

- Install **kind** or **minikube**, plus `kubectl` and **k9s** (a terminal UI that makes the cluster easier to see).
- Learn the `kubectl` basics: `get`, `describe`, `logs`, `exec`, `apply`, `port-forward`.
- Understand the architecture: control plane (API server, etcd, scheduler, controller manager) vs. nodes (kubelet, kube-proxy, container runtime).
- The key mental shift is declarative desired state plus reconciliation loops.

**Goal:** explain what happens between `kubectl apply` and a running container.

- [ ] Local cluster running
- [ ] `kubectl` basics comfortable
- [ ] Architecture explained in your own words

---

## Phase 1: Core Workloads (Weeks 2-3)

- **Pods**, **ReplicaSets**, **Deployments** (rolling updates, rollbacks)
- **Labels, selectors, namespaces**
- **ConfigMaps and Secrets**
- **Resource requests/limits** and QoS classes
- **Probes** (liveness, readiness, startup)
- **Jobs and CronJobs**

**Project:** deploy a small API (NestJS or FastAPI) with a config, a secret, probes, and a rolling update.

- [ ] Deployment with rolling update and rollback
- [ ] ConfigMap and Secret wired into the app
- [ ] Probes and resource limits configured

---

## Phase 2: Networking and Storage (Weeks 4-5)

- **Services** (ClusterIP, NodePort, LoadBalancer) and cluster DNS
- **Ingress** and an ingress controller (NGINX), plus a look at the Gateway API
- **NetworkPolicies**
- **Volumes, PersistentVolumes, PVCs, StorageClasses**
- **StatefulSets** (databases, ordered pods, stable identity)

**Project:** add Postgres as a StatefulSet with a PVC, expose the API through an Ingress, and restrict traffic with a NetworkPolicy.

- [ ] API exposed through Ingress
- [ ] Postgres running as a StatefulSet with persistent storage
- [ ] NetworkPolicy restricting traffic

---

## Phase 3: Scheduling, Security, and Scaling (Weeks 6-7)

- **Scheduling:** taints/tolerations, node affinity, pod anti-affinity, topology spread
- **RBAC:** ServiceAccounts, Roles, RoleBindings
- **Security:** Pod Security Standards, `securityContext`, secrets handling
- **Autoscaling:** HPA, VPA, and node autoscaling (Cluster Autoscaler or Karpenter)
- **DaemonSets** and **PodDisruptionBudgets**

**Project:** load-test your API and watch the HPA scale it; lock a namespace down with RBAC.

- [ ] HPA scaling under load
- [ ] Namespace locked down with RBAC
- [ ] Scheduling rules tried (affinity, taints)

---

## Phase 4: Packaging and Delivery (Weeks 8-9)

- **Helm:** charts, values, templating, releases
- **Kustomize:** overlays for dev/staging/prod
- **GitOps with Argo CD** (or Flux): Git as the source of truth
- **CI/CD integration:** build, push, and let GitOps deploy

**Project:** package your app as a Helm chart and deploy it through Argo CD from a Git repo.

- [ ] App packaged as a Helm chart
- [ ] Kustomize overlays for multiple environments
- [ ] Argo CD deploying from Git

---

## Phase 5: Managed Kubernetes and Operations (Weeks 10-11)

- **Amazon EKS:** provision it with Terraform (VPC, node groups, IAM roles for service accounts/Pod Identity, the AWS Load Balancer Controller)
- **Observability:** Prometheus + Grafana, Loki or CloudWatch Container Insights, OpenTelemetry
- **Troubleshooting:** CrashLoopBackOff, ImagePullBackOff, Pending pods, OOMKilled, DNS issues, failing probes
- **Upgrades, cost control, multi-tenancy**

**Project:** stand up a small EKS cluster with Terraform and run your full stack on it. Tear it down afterward to avoid costs.

- [ ] EKS cluster provisioned with Terraform
- [ ] Full stack running on EKS
- [ ] Metrics and logs visible
- [ ] Cluster destroyed to avoid costs

---

## Phase 6: Advanced Topics (Week 12+, pick what you need)

- **Operators and CRDs** (and writing a controller)
- **Service mesh** (Istio or Linkerd)
- **Cluster internals:** etcd, certificates, kubeadm, a bare-metal cluster
- **Policy engines:** OPA Gatekeeper or Kyverno
- **Supply chain security:** image signing, scanning, admission control

---

## Resources

- **Docs:** [kubernetes.io/docs](https://kubernetes.io/docs), especially the Concepts and Tasks sections
- **Books:** *Kubernetes in Action* (Marko Lukša); *Kubernetes Patterns* later on
- **Hands-on:** Kelsey Hightower's *Kubernetes the Hard Way* once you're comfortable, to see how the pieces fit
- **Courses and labs:** KodeKloud or Mumshad's CKA course, with killer.sh for exam-style practice
- **Certifications (optional, but they give structure):**
  - **CKAD** after Phases 3-4
  - **CKA** after Phase 5
  - **CKS** if security interests you

---

## How to Get the Most From It

1. **Break things on purpose:** delete pods, set bad probes, misconfigure a Service, then debug.
2. **Learn through `kubectl explain`** and the docs instead of copying YAML blindly.
3. **Keep one evolving project** through all phases, so the pieces connect.
4. **Write down the failure modes** you hit. They're the most useful thing to have when someone asks about Kubernetes in an interview or on the job.