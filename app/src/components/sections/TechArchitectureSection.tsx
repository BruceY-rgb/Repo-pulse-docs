import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/contexts/LanguageContext';

interface TechArchitectureSectionProps {
  activeSubsection: string;
}

export function TechArchitectureSection({ activeSubsection }: TechArchitectureSectionProps) {
  const { language, t } = useLanguage();
  const isZh = language === 'zh';

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">{isZh ? '技术架构' : 'Tech Architecture'}</h1>
        <p className="text-muted-foreground text-lg">
          {isZh
            ? 'Repo-Pulse 技术选型、Monorepo 结构设计、核心模块划分与实时通信方案'
            : 'Repo-Pulse tech stack, Monorepo structure, core modules and real-time communication design'}
        </p>
      </div>

      <TechStackContent isZh={isZh} />
      <Separator />
      <MonorepoStructureContent isZh={isZh} />
      <Separator />
      <CoreModulesContent isZh={isZh} />
      <Separator />
      <RealtimeCommunicationContent isZh={isZh} />
      <Separator />
      <InfrastructureContent isZh={isZh} />
    </div>
  );
}

function TechStackContent({ isZh }: { isZh: boolean }) {
  const frontend = [
    { name: 'React 19', desc: isZh ? 'UI 框架' : 'UI Framework' },
    { name: 'TypeScript 5.9', desc: isZh ? '类型安全' : 'Type Safety' },
    { name: 'Vite 7.2', desc: isZh ? '构建工具' : 'Build Tool' },
    { name: 'shadcn/ui', desc: isZh ? 'UI 组件库' : 'Component Library' },
    { name: 'Tailwind CSS 3.4', desc: isZh ? '样式框架' : 'Styling' },
    { name: 'Recharts', desc: isZh ? '图表库' : 'Charts' },
    { name: 'GSAP', desc: isZh ? '动画引擎' : 'Animation' },
    { name: 'TanStack Query', desc: isZh ? '服务端状态' : 'Server State' },
    { name: 'Zustand', desc: isZh ? '客户端状态' : 'Client State' },
  ];

  const backend = [
    { name: 'NestJS', desc: isZh ? 'Node.js 企业级框架' : 'Node.js Framework' },
    { name: 'TypeScript', desc: isZh ? '类型安全' : 'Type Safety' },
    { name: 'Prisma', desc: isZh ? 'ORM 框架' : 'ORM' },
    { name: 'PostgreSQL', desc: isZh ? '主数据库' : 'Primary Database' },
    { name: 'Redis', desc: isZh ? '缓存与消息队列' : 'Cache & Queue' },
    { name: 'BullMQ', desc: isZh ? '异步任务队列' : 'Async Queue' },
    { name: 'Socket.io', desc: isZh ? 'WebSocket 通信' : 'WebSocket' },
  ];

  const ai = [
    { name: 'OpenAI', model: 'GPT-4o / GPT-4o-mini', desc: isZh ? '默认使用' : 'Default' },
    { name: 'Anthropic', model: 'Claude Sonnet / Haiku', desc: isZh ? '备选' : 'Alternative' },
    { name: 'Ollama', model: 'Llama 3 / Qwen', desc: isZh ? '本地部署' : 'Local' },
  ];

  const others = [
    { name: 'Electron', desc: isZh ? '桌面端打包' : 'Desktop' },
    { name: 'pnpm workspaces', desc: isZh ? 'Monorepo 管理' : 'Monorepo' },
    { name: 'Turborepo', desc: isZh ? '构建加速' : 'Build Cache' },
    { name: 'Docker', desc: isZh ? '容器化部署' : 'Containerization' },
  ];

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold">{isZh ? '技术选型' : 'Tech Stack'}</h2>
        <p className="text-muted-foreground mt-1">
          {isZh
            ? '基于成熟开源技术栈，确保稳定性、可扩展性与开发效率'
            : 'Based on mature open-source technologies, ensuring stability, scalability and development efficiency'}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>{isZh ? '前端技术栈' : 'Frontend'}</CardTitle>
            <CardDescription>React 19 + TypeScript + Vite + shadcn/ui</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {frontend.map((item) => (
                <div key={item.name} className="flex flex-col">
                  <Badge variant="secondary" className="w-fit">{item.name}</Badge>
                  <span className="text-xs text-muted-foreground">{item.desc}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{isZh ? '后端技术栈' : 'Backend'}</CardTitle>
            <CardDescription>NestJS + Prisma + PostgreSQL + Redis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {backend.map((item) => (
                <div key={item.name} className="flex flex-col">
                  <Badge variant="secondary" className="w-fit">{item.name}</Badge>
                  <span className="text-xs text-muted-foreground">{item.desc}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AI {isZh ? '服务' : 'Services'}</CardTitle>
            <CardDescription>{isZh ? '多模型抽象层，支持灵活切换' : 'Multi-model abstraction, flexible switching'}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {ai.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <Badge variant="outline" className="w-fit">{item.name}</Badge>
                    <span className="text-xs text-muted-foreground">{item.model}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{item.desc}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{isZh ? '其他技术' : 'Others'}</CardTitle>
            <CardDescription>{isZh ? '桌面端、Monorepo、容器化' : 'Desktop, Monorepo, Containerization'}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {others.map((item) => (
                <div key={item.name} className="flex flex-col">
                  <Badge variant="secondary" className="w-fit">{item.name}</Badge>
                  <span className="text-xs text-muted-foreground">{item.desc}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function MonorepoStructureContent({ isZh }: { isZh: boolean }) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold">Monorepo {isZh ? '结构' : 'Structure'}</h2>
        <p className="text-muted-foreground mt-1">
          {isZh
            ? '使用 pnpm workspaces + Turborepo 管理多包项目，统一构建与依赖管理'
            : 'Using pnpm workspaces + Turborepo for multi-package project management'}
        </p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <pre className="bg-muted p-4 rounded-lg text-sm font-mono overflow-x-auto">
{`repo-pulse/
├── apps/
│   ├── web/                    # React 前端应用
│   │   ├── src/
│   │   │   ├── components/     # UI 组件
│   │   │   │   ├── ui/         # shadcn/ui 基础组件
│   │   │   │   ├── dashboard/  # 仪表板组件
│   │   │   │   ├── repository/ # 仓库管理
│   │   │   │   ├── analysis/   # AI 分析
│   │   │   │   └── notification/ # 通知组件
│   │   │   ├── hooks/          # 自定义 hooks
│   │   │   ├── stores/         # Zustand stores
│   │   │   ├── services/       # API 调用层
│   │   │   ├── contexts/       # React Context
│   │   │   ├── lib/            # 工具函数
│   │   │   ├── types/          # 类型定义
│   │   │   └── locales/        # i18n 翻译
│   │   └── package.json
│   │
│   ├── api/                    # NestJS 后端 API
│   │   ├── src/
│   │   │   ├── modules/        # 12 个核心模块
│   │   │   ├── common/         # 公共模块
│   │   │   ├── config/         # 配置管理
│   │   │   └── main.ts
│   │   ├── prisma/schema.prisma
│   │   └── package.json
│   │
│   └── desktop/                # Electron 桌面端
│       ├── src/
│       │   ├── main/           # 主进程
│       │   ├── preload/        # 预加载脚本
│       │   └── renderer/       # 渲染进程
│       └── package.json
│
├── packages/
│   ├── shared/                 # 前后端共享
│   │   ├── types/              # 共享类型
│   │   ├── constants/          # 共享常量
│   │   └── utils/              # 共享工具
│   │
│   ├── database/               # Prisma 包
│   │   ├── prisma/schema.prisma
│   │   └── src/index.ts
│   │
│   └── ai-sdk/                 # AI 多模型抽象层
│       ├── providers/          # OpenAI/Claude/Ollama
│       ├── interfaces/          # 接口定义
│       └── services/           # 服务实现
│
├── docs/                       # 项目文档
├── .claude/                    # Agent 配置
├── docker-compose.yml          # 开发环境
├── turbo.json                  # Turborepo 配置
└── pnpm-workspace.yaml`}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
}

function CoreModulesContent({ isZh }: { isZh: boolean }) {
  const modules = [
    {
      name: 'AuthModule',
      desc: isZh ? 'JWT 签发/验证、OAuth 登录、Token 刷新' : 'JWT issuance/validation, OAuth login, token refresh',
      endpoints: 'POST /auth/login, POST /auth/github/callback, POST /auth/refresh',
    },
    {
      name: 'UserModule',
      desc: isZh ? '用户 CRUD、偏好设置、工作空间管理' : 'User CRUD, preferences, workspace management',
      endpoints: 'GET /users/me, PATCH /users/preferences',
    },
    {
      name: 'RepositoryModule',
      desc: isZh ? '仓库绑定、同步、Webhook 管理' : 'Repository binding, sync, webhook management',
      endpoints: 'POST /repositories, POST /repositories/:id/sync',
    },
    {
      name: 'WebhookModule',
      desc: isZh ? '接收 GitHub/GitLab Webhook、签名验证' : 'Receive GitHub/GitLab Webhooks, signature validation',
      endpoints: 'POST /webhooks/github, POST /webhooks/gitlab',
    },
    {
      name: 'EventModule',
      desc: isZh ? '事件标准化、存储、查询' : 'Event standardization, storage, query',
      endpoints: 'GET /events, GET /events/:id',
    },
    {
      name: 'AIModule',
      desc: isZh ? 'AI 分析调度、流式输出、模型切换' : 'AI analysis scheduling, streaming, model switching',
      endpoints: 'POST /ai/analyze, GET /ai/stream/:taskId',
    },
    {
      name: 'FilterModule',
      desc: isZh ? '过滤规则 CRUD、规则引擎' : 'Filter rules CRUD, rule engine',
      endpoints: 'POST /filters, GET /filters',
    },
    {
      name: 'ApprovalModule',
      desc: isZh ? '审批队列、审批/拒绝操作' : 'Approval queue, approve/reject operations',
      endpoints: 'GET /approvals/pending, POST /approvals/:id/approve',
    },
    {
      name: 'NotificationModule',
      desc: isZh ? '通知路由、渠道管理、通知历史' : 'Notification routing, channel management, history',
      endpoints: 'POST /notifications/send, GET /notifications',
    },
    {
      name: 'DashboardModule',
      desc: isZh ? '聚合指标、DORA 指标、趋势数据' : 'Aggregated metrics, DORA metrics, trends',
      endpoints: 'GET /dashboard/metrics, GET /dashboard/dora',
    },
    {
      name: 'ReportModule',
      desc: isZh ? '报告生成、模板管理、导出' : 'Report generation, template management, export',
      endpoints: 'POST /reports/generate, GET /reports/:id/export',
    },
    {
      name: 'WorkspaceModule',
      desc: isZh ? '工作空间 CRUD、仪表板布局配置' : 'Workspace CRUD, dashboard layout config',
      endpoints: 'GET /workspaces, PATCH /workspaces/:id',
    },
  ];

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold">{isZh ? '核心模块 (12个)' : 'Core Modules (12)'}</h2>
        <p className="text-muted-foreground mt-1">
          {isZh
            ? 'NestJS 模块化架构，每个功能领域独立模块'
            : 'NestJS modular architecture, independent modules for each feature domain'}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {modules.map((module) => (
          <Card key={module.name}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{module.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{module.desc}</p>
              <code className="text-xs bg-muted px-2 py-1 rounded block">{module.endpoints}</code>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{isZh ? '横切关注点' : 'Cross-cutting Concerns'}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-medium mb-2">{isZh ? '全局守卫' : 'Global Guards'}</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">JwtAuthGuard</Badge>
                <Badge variant="outline">RolesGuard</Badge>
                <Badge variant="outline">ThrottlerGuard</Badge>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">{isZh ? '全局拦截器' : 'Global Interceptors'}</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">TransformInterceptor</Badge>
                <Badge variant="outline">TimeoutInterceptor</Badge>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">{isZh ? '全局管道' : 'Global Pipes'}</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">ValidationPipe</Badge>
                <span className="text-xs text-muted-foreground">{isZh ? '基于 class-validator' : 'Based on class-validator'}</span>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">{isZh ? '日志' : 'Logging'}</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">NestJS Logger</Badge>
                <Badge variant="outline">Winston</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function RealtimeCommunicationContent({ isZh }: { isZh: boolean }) {
  const wsEvents = [
    { name: 'event:new', desc: isZh ? '新仓库事件到达' : 'New repository event arrived' },
    { name: 'analysis:progress', desc: isZh ? 'AI 分析进度更新' : 'AI analysis progress update' },
    { name: 'analysis:complete', desc: isZh ? 'AI 分析完成通知' : 'AI analysis complete notification' },
    { name: 'approval:new', desc: isZh ? '新审批请求' : 'New approval request' },
    { name: 'approval:updated', desc: isZh ? '审批状态变更' : 'Approval status changed' },
    { name: 'notification:new', desc: isZh ? '新通知推送' : 'New notification pushed' },
    { name: 'dashboard:update', desc: isZh ? '仪表板数据更新' : 'Dashboard data updated' },
  ];

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold">{isZh ? '实时通信设计' : 'Real-time Communication'}</h2>
        <p className="text-muted-foreground mt-1">
          {isZh
            ? 'WebSocket 用于实时推送，SSE 用于 AI 流式输出'
            : 'WebSocket for real-time push, SSE for AI streaming output'}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>WebSocket (Socket.io)</CardTitle>
            <CardDescription>{isZh ? '实时双向通信' : 'Real-time bidirectional'}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {wsEvents.map((event) => (
                <div key={event.name} className="flex items-center justify-between">
                  <code className="bg-muted px-2 py-1 rounded text-sm">{event.name}</code>
                  <span className="text-muted-foreground text-sm">{event.desc}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>SSE (Server-Sent Events)</CardTitle>
            <CardDescription>{isZh ? '服务端推送' : 'Server push'}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">{isZh ? '端点' : 'Endpoint'}</h4>
                <code className="bg-muted px-2 py-1 rounded text-sm block">GET /ai/stream/:taskId</code>
              </div>
              <div>
                <h4 className="font-medium mb-2">{isZh ? '用途' : 'Use Case'}</h4>
                <p className="text-sm text-muted-foreground">
                  {isZh
                    ? '用于 AI 流式输出，前端逐字渲染分析结果，提供实时反馈'
                    : 'For AI streaming output, frontend renders characters in real-time for immediate feedback'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function InfrastructureContent({ isZh }: { isZh: boolean }) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold">{isZh ? '基础设施' : 'Infrastructure'}</h2>
        <p className="text-muted-foreground mt-1">
          {isZh
            ? '开发环境配置、Docker Compose、环境变量模板'
            : 'Development environment, Docker Compose, environment variables'}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Docker Compose</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <span>PostgreSQL</span>
                </div>
                <Badge variant="secondary">5432</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <span>Redis</span>
                </div>
                <Badge variant="secondary">6379</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{isZh ? '环境变量' : 'Environment Variables'}</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-3 rounded-lg text-xs font-mono overflow-x-auto">
{`DATABASE_URL=postgresql://...
REDIS_URL=redis://...
JWT_SECRET=...
GITHUB_CLIENT_ID=...
OPENAI_API_KEY=...
ANTHROPIC_API_KEY=...`}
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
