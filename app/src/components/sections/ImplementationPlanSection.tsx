import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/contexts/LanguageContext';

interface ImplementationPlanSectionProps {
  activeSubsection: string;
}

export function ImplementationPlanSection({ activeSubsection }: ImplementationPlanSectionProps) {
  const { language, t } = useLanguage();
  const isZh = language === 'zh';

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">{isZh ? '实施计划' : 'Implementation Plan'}</h1>
        <p className="text-muted-foreground text-lg">
          {isZh
            ? '6 个阶段的详细开发计划，每个阶段包含具体任务与交付物'
            : 'Detailed development plan with 6 phases, each containing specific tasks and deliverables'}
        </p>
      </div>

      <Phase0Content isZh={isZh} />
      <Separator />
      <Phase1Content isZh={isZh} />
      <Separator />
      <Phase2Content isZh={isZh} />
      <Separator />
      <Phase3Content isZh={isZh} />
      <Separator />
      <Phase4Content isZh={isZh} />
      <Separator />
      <Phase5Content isZh={isZh} />
    </div>
  );
}

function Phase0Content({ isZh }: { isZh: boolean }) {
  const tasks = [
    { title: isZh ? '初始化 Monorepo' : 'Initialize Monorepo', desc: isZh ? 'pnpm-workspace.yaml + turbo.json + package.json' : 'pnpm-workspace.yaml + turbo.json + package.json' },
    { title: isZh ? '迁移前端代码' : 'Migrate Frontend', desc: isZh ? '将现有前端迁移到 apps/web/' : 'Migrate existing frontend to apps/web/' },
    { title: isZh ? '创建 NestJS 骨架' : 'Create NestJS Skeleton', desc: isZh ? 'apps/api/ 项目骨架 + 基础配置' : 'apps/api/ project skeleton + base config' },
    { title: isZh ? '创建共享包' : 'Create Shared Packages', desc: isZh ? 'packages/shared, database, ai-sdk' : 'packages/shared, database, ai-sdk' },
    { title: isZh ? 'Docker Compose 配置' : 'Docker Compose', desc: isZh ? 'PostgreSQL + Redis 开发环境' : 'PostgreSQL + Redis dev environment' },
    { title: isZh ? 'TypeScript 配置' : 'TypeScript Config', desc: isZh ? 'tsconfig.base.json + 路径别名 @/' : 'tsconfig.base.json + path aliases @/' },
    { title: isZh ? '环境变量模板' : 'Environment Template', desc: isZh ? '.env.example' : '.env.example' },
    { title: isZh ? '前端样式文档' : 'Frontend Style Guide', desc: isZh ? 'frontend-style-guide.md (75+ 规则)' : 'frontend-style-guide.md (75+ rules)' },
  ];

  const deliverables = [
    isZh ? 'Monorepo 脚手架可运行' : 'Runnable Monorepo scaffold',
    isZh ? '前端可通过 pnpm dev 启动' : 'Frontend can start via pnpm dev',
    isZh ? '后端可通过 pnpm dev:api 启动' : 'Backend can start via pnpm dev:api',
    isZh ? 'Docker 容器可正常启动' : 'Docker containers can start',
  ];

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Badge className="text-lg px-3 py-1">Phase 0</Badge>
          <CardTitle className="text-xl">{isZh ? '基础设施搭建' : 'Infrastructure Setup'}</CardTitle>
        </div>
        <CardDescription>
          {isZh ? '搭建项目骨架，配置开发环境' : 'Build project skeleton, configure development environment'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-3">{isZh ? '任务清单' : 'Task List'}</h4>
            <div className="grid gap-3 md:grid-cols-2">
              {tasks.map((task, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium shrink-0">{i + 1}</div>
                  <div>
                    <p className="font-medium text-sm">{task.title}</p>
                    <p className="text-xs text-muted-foreground">{task.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-3">{isZh ? '交付物' : 'Deliverables'}</h4>
            <ul className="space-y-2">
              {deliverables.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function Phase1Content({ isZh }: { isZh: boolean }) {
  const tasks = [
    { title: isZh ? 'AuthModule 开发' : 'AuthModule Development', desc: isZh ? 'JWT 签发/验证、Token 刷新、退出登录' : 'JWT issuance/validation, token refresh, logout' },
    { title: isZh ? 'OAuth 集成' : 'OAuth Integration', desc: isZh ? 'GitHub OAuth 登录完整流程' : 'GitHub OAuth login flow' },
    { title: isZh ? 'UserModule 开发' : 'UserModule Development', desc: isZh ? '用户 CRUD、偏好设置' : 'User CRUD, preferences' },
    { title: isZh ? '全局守卫配置' : 'Global Guards', desc: isZh ? 'JwtAuthGuard、RolesGuard、ThrottlerGuard' : 'JwtAuthGuard, RolesGuard, ThrottlerGuard' },
    { title: isZh ? '全局拦截器' : 'Global Interceptors', desc: isZh ? 'TransformInterceptor、TimeoutInterceptor' : 'TransformInterceptor, TimeoutInterceptor' },
    { title: isZh ? '前端登录页' : 'Frontend Login', desc: isZh ? '登录页面 + 认证状态管理' : 'Login page + auth state' },
    { title: isZh ? 'API 调用层' : 'API Layer', desc: isZh ? 'Axios 实例 + TanStack Query' : 'Axios instance + TanStack Query' },
  ];

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Badge className="text-lg px-3 py-1">Phase 1</Badge>
          <CardTitle className="text-xl">{isZh ? '认证与用户系统' : 'Authentication & User System'}</CardTitle>
        </div>
        <CardDescription>
          {isZh ? '实现用户注册、登录、认证授权' : 'Implement user registration, login, authentication and authorization'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid gap-3 md:grid-cols-2">
            {tasks.map((task, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium shrink-0">{i + 1}</div>
                <div>
                  <p className="font-medium text-sm">{task.title}</p>
                  <p className="text-xs text-muted-foreground">{task.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
            <h4 className="font-medium text-blue-600 dark:text-blue-400 mb-2">{isZh ? '关键检查点' : 'Key Checkpoints'}</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• {isZh ? '用户可使用 GitHub 账号登录' : 'User can login with GitHub account'}</li>
              <li>• {isZh ? 'JWT Token 正确签发和验证' : 'JWT Token issued and verified correctly'}</li>
              <li>• {isZh ? '前端登录状态正确管理' : 'Frontend login state managed correctly'}</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function Phase2Content({ isZh }: { isZh: boolean }) {
  const tasks = [
    { title: isZh ? 'RepositoryModule 开发' : 'RepositoryModule', desc: isZh ? 'GitHub/GitLab API 集成、仓库绑定' : 'GitHub/GitLab API integration, repo binding' },
    { title: isZh ? 'WebhookModule 开发' : 'WebhookModule', desc: isZh ? 'Webhook 接收与签名验证' : 'Webhook receiving and signature validation' },
    { title: isZh ? 'EventModule 开发' : 'EventModule', desc: isZh ? '事件标准化、存储、查询' : 'Event standardization, storage, query' },
    { title: isZh ? 'BullMQ 队列配置' : 'BullMQ Queue', desc: isZh ? 'webhook-events 队列配置' : 'webhook-events queue config' },
    { title: isZh ? '前端仓库管理页' : 'Frontend Repo Page', desc: isZh ? '仓库列表、绑定、同步状态' : 'Repo list, binding, sync status' },
    { title: isZh ? '仓库事件列表' : 'Event List Page', desc: isZh ? '前端事件列表与筛选' : 'Frontend event list and filtering' },
  ];

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Badge className="text-lg px-3 py-1">Phase 2</Badge>
          <CardTitle className="text-xl">{isZh ? '仓库集成与事件监听' : 'Repository Integration & Event Listening'}</CardTitle>
        </div>
        <CardDescription>
          {isZh ? '实现 Git 仓库绑定、Webhook 接收与事件处理' : 'Implement Git repository binding, Webhook receiving and event processing'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid gap-3 md:grid-cols-2">
            {tasks.map((task, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium shrink-0">{i + 1}</div>
                <div>
                  <p className="font-medium text-sm">{task.title}</p>
                  <p className="text-xs text-muted-foreground">{task.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
            <h4 className="font-medium text-blue-600 dark:text-blue-400 mb-2">{isZh ? '支持的事件类型' : 'Supported Event Types'}</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">PUSH</Badge>
              <Badge variant="outline">PR_OPENED</Badge>
              <Badge variant="outline">PR_MERGED</Badge>
              <Badge variant="outline">PR_CLOSED</Badge>
              <Badge variant="outline">PR_REVIEW</Badge>
              <Badge variant="outline">ISSUE_OPENED</Badge>
              <Badge variant="outline">ISSUE_CLOSED</Badge>
              <Badge variant="outline">ISSUE_COMMENT</Badge>
              <Badge variant="outline">RELEASE</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function Phase3Content({ isZh }: { isZh: boolean }) {
  const tasks = [
    { title: isZh ? 'AI SDK 开发' : 'AI SDK', desc: isZh ? 'packages/ai-sdk 多模型抽象层' : 'packages/ai-sdk multi-model abstraction' },
    { title: isZh ? 'AIModule 开发' : 'AIModule', desc: isZh ? '分析调度、流式输出' : 'Analysis scheduling, streaming output' },
    { title: isZh ? 'AI 分析队列' : 'AI Analysis Queue', desc: isZh ? 'BullMQ ai-analysis 队列' : 'BullMQ ai-analysis queue' },
    { title: isZh ? 'SSE 接口实现' : 'SSE Interface', desc: isZh ? 'GET /ai/stream/:taskId' : 'GET /ai/stream/:taskId' },
    { title: isZh ? '前端分析展示' : 'Frontend Analysis', desc: isZh ? 'AI 分析结果 + 流式渲染' : 'AI analysis result + streaming render' },
    { title: isZh ? '模型切换功能' : 'Model Switching', desc: isZh ? '设置页模型选择' : 'Settings page model selection' },
  ];

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Badge className="text-lg px-3 py-1">Phase 3</Badge>
          <CardTitle className="text-xl">{isZh ? 'AI 分析引擎' : 'AI Analysis Engine'}</CardTitle>
        </div>
        <CardDescription>
          {isZh ? '实现 AI 智能分析、流式输出、多模型支持' : 'Implement AI intelligent analysis, streaming output, multi-model support'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid gap-3 md:grid-cols-2">
            {tasks.map((task, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium shrink-0">{i + 1}</div>
                <div>
                  <p className="font-medium text-sm">{task.title}</p>
                  <p className="text-xs text-muted-foreground">{task.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
            <h4 className="font-medium text-purple-600 dark:text-purple-400 mb-2">{isZh ? '分析输出' : 'Analysis Output'}</h4>
            <div className="grid gap-2 text-sm text-muted-foreground">
              <p>• summary: {isZh ? '事件摘要' : 'Event summary'}</p>
              <p>• riskLevel: LOW / MEDIUM / HIGH / CRITICAL</p>
              <p>• categories: bug-fix, feature, refactor, docs...</p>
              <p>• keyChanges: {isZh ? '关键变更列表' : 'Key changes list'}</p>
              <p>• suggestions: {isZh ? '改进建议' : 'Improvement suggestions'}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function Phase4Content({ isZh }: { isZh: boolean }) {
  const tasks = [
    { title: isZh ? 'FilterModule 开发' : 'FilterModule', desc: isZh ? '过滤规则 CRUD、规则引擎' : 'Filter rules CRUD, rule engine' },
    { title: isZh ? 'ApprovalModule 开发' : 'ApprovalModule', desc: isZh ? '审批工作流、审批/拒绝' : 'Approval workflow, approve/reject' },
    { title: isZh ? 'NotificationModule 开发' : 'NotificationModule', desc: isZh ? '多渠道通知（邮件/应用内）' : 'Multi-channel notifications (email/in-app)' },
    { title: isZh ? 'WebSocket 实时推送' : 'WebSocket Push', desc: isZh ? 'Socket.io Gateway' : 'Socket.io Gateway' },
    { title: isZh ? '前端过滤配置' : 'Frontend Filters', desc: isZh ? '过滤规则配置页面' : 'Filter rules config page' },
    { title: isZh ? '前端审批队列' : 'Frontend Approvals', desc: isZh ? '审批队列页面' : 'Approval queue page' },
    { title: isZh ? '前端通知中心' : 'Frontend Notifications', desc: isZh ? '通知中心页面' : 'Notification center page' },
  ];

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Badge className="text-lg px-3 py-1">Phase 4</Badge>
          <CardTitle className="text-xl">{isZh ? '过滤、审批与通知' : 'Filtering, Approval & Notification'}</CardTitle>
        </div>
        <CardDescription>
          {isZh ? '实现智能过滤、审批工作流、多渠道通知' : 'Implement intelligent filtering, approval workflow, multi-channel notifications'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid gap-3 md:grid-cols-2">
            {tasks.map((task, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium shrink-0">{i + 1}</div>
                <div>
                  <p className="font-medium text-sm">{task.title}</p>
                  <p className="text-xs text-muted-foreground">{task.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
              <h4 className="font-medium text-green-600 dark:text-green-400 mb-2">{isZh ? '过滤动作' : 'Filter Actions'}</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">INCLUDE</Badge>
                <Badge variant="outline">EXCLUDE</Badge>
                <Badge variant="outline">TAG</Badge>
              </div>
            </div>
            <div className="p-4 bg-orange-500/10 rounded-lg border border-orange-500/20">
              <h4 className="font-medium text-orange-600 dark:text-orange-400 mb-2">{isZh ? '审批状态' : 'Approval Status'}</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">PENDING</Badge>
                <Badge variant="outline">APPROVED</Badge>
                <Badge variant="outline">REJECTED</Badge>
                <Badge variant="outline">EDITED</Badge>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function Phase5Content({ isZh }: { isZh: boolean }) {
  const tasks = [
    { title: isZh ? 'DashboardModule 开发' : 'DashboardModule', desc: isZh ? '聚合指标、DORA 指标' : 'Aggregated metrics, DORA metrics' },
    { title: isZh ? 'ReportModule 开发' : 'ReportModule', desc: isZh ? '报告生成、导出' : 'Report generation, export' },
    { title: isZh ? '前端仪表板' : 'Frontend Dashboard', desc: isZh ? 'Recharts 可视化图表' : 'Recharts visualization' },
    { title: isZh ? '前端报告页' : 'Frontend Reports', desc: isZh ? '报告查看与导出' : 'Report viewing and export' },
    { title: isZh ? '工作空间功能' : 'Workspace', desc: isZh ? '可拖拽仪表板布局' : 'Draggable dashboard layout' },
    { title: isZh ? 'Electron 桌面端' : 'Electron Desktop', desc: isZh ? '打包与分发' : 'Packaging and distribution' },
  ];

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Badge className="text-lg px-3 py-1">Phase 5</Badge>
          <CardTitle className="text-xl">{isZh ? '仪表板与报告 + 增强功能' : 'Dashboard & Reports + Enhancements'}</CardTitle>
        </div>
        <CardDescription>
          {isZh ? '实现可视化仪表板、自动报告、桌面端' : 'Implement visualization dashboard, auto-reports, desktop client'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid gap-3 md:grid-cols-2">
            {tasks.map((task, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium shrink-0">{i + 1}</div>
                <div>
                  <p className="font-medium text-sm">{task.title}</p>
                  <p className="text-xs text-muted-foreground">{task.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
            <h4 className="font-medium text-blue-600 dark:text-blue-400 mb-2">DORA {isZh ? '指标' : 'Metrics'}</h4>
            <div className="grid gap-2 text-sm text-muted-foreground md:grid-cols-2">
              <p>• {isZh ? '部署频率 (Deployment Frequency)' : 'Deployment Frequency'}</p>
              <p>• {isZh ? '变更前置时间 (Lead Time for Changes)' : 'Lead Time for Changes'}</p>
              <p>• {isZh ? '变更失败率 (Change Failure Rate)' : 'Change Failure Rate'}</p>
              <p>• {isZh ? '平均恢复时间 (Mean Time to Recovery)' : 'Mean Time to Recovery'}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
