import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/contexts/LanguageContext';

export function BackendDesignSection() {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">{isZh ? '后端设计' : 'Backend Design'}</h1>
        <p className="text-muted-foreground text-lg">
          {isZh
            ? 'NestJS 模块设计、Prisma 数据模型、AI 抽象层与 BullMQ 队列架构'
            : 'NestJS module design, Prisma data models, AI abstraction layer and BullMQ queue architecture'}
        </p>
      </div>

      <NestJSModulesContent isZh={isZh} />
      <Separator />
      <PrismaSchemaContent isZh={isZh} />
      <Separator />
      <AIProviderContent isZh={isZh} />
      <Separator />
      <QueueArchitectureContent isZh={isZh} />
      <Separator />
      <APIResponseFormatContent isZh={isZh} />
    </div>
  );
}

function NestJSModulesContent({ isZh }: { isZh: boolean }) {
  const modules = [
    {
      name: 'AuthModule',
      desc: isZh ? 'JWT 签发与验证、GitHub/GitLab OAuth 登录、Token 刷新与撤销' : 'JWT issuance/validation, OAuth login, token refresh/revoke',
      endpoints: 'POST /auth/login, POST /auth/github/callback, POST /auth/gitlab/callback, POST /auth/refresh, POST /auth/logout',
      guards: 'JwtAuthGuard',
    },
    {
      name: 'UserModule',
      desc: isZh ? '用户注册/登录/注销、个人信息管理、偏好设置、工作空间管理' : 'User CRUD, profile, preferences, workspace management',
      endpoints: 'GET /users/me, PATCH /users/me, PATCH /users/preferences, GET /users/:id',
      guards: 'JwtAuthGuard',
    },
    {
      name: 'RepositoryModule',
      desc: isZh ? 'GitHub/GitLab 仓库绑定、同步、仓库列表与详情查询' : 'GitHub/GitLab repository binding, sync, list and detail query',
      endpoints: 'GET /repositories, POST /repositories, GET /repositories/:id, DELETE /repositories/:id, POST /repositories/:id/sync',
      guards: 'JwtAuthGuard',
    },
    {
      name: 'WebhookModule',
      desc: isZh ? '接收并验证 GitHub/GitLab Webhook、签名验证、事件分发' : 'Receive and validate GitHub/GitLab Webhooks, signature validation, event distribution',
      endpoints: 'POST /webhooks/github, POST /webhooks/gitlab',
      guards: '',
    },
    {
      name: 'EventModule',
      desc: isZh ? '事件标准化、存储、查询、筛选' : 'Event standardization, storage, query, filtering',
      endpoints: 'GET /events, GET /events/:id, GET /events?type=&repositoryId=&limit=',
      guards: 'JwtAuthGuard',
    },
    {
      name: 'AIModule',
      desc: isZh ? 'AI 分析调度、流式输出、模型切换与分析结果查询' : 'AI analysis scheduling, streaming output, model switching, result query',
      endpoints: 'POST /ai/analyze, GET /ai/stream/:taskId, GET /ai/analyses/:eventId, GET /ai/models',
      guards: 'JwtAuthGuard',
    },
    {
      name: 'FilterModule',
      desc: isZh ? '过滤规则 CRUD、规则引擎执行' : 'Filter rules CRUD, rule engine execution',
      endpoints: 'GET /filters, POST /filters, PATCH /filters/:id, DELETE /filters/:id, POST /filters/test',
      guards: 'JwtAuthGuard',
    },
    {
      name: 'ApprovalModule',
      desc: isZh ? '审批队列查看、审批/拒绝操作、审批历史记录' : 'Approval queue view, approve/reject operations, history',
      endpoints: 'GET /approvals, GET /approvals/pending, POST /approvals/:id/approve, POST /approvals/:id/reject',
      guards: 'JwtAuthGuard, RolesGuard',
    },
    {
      name: 'NotificationModule',
      desc: isZh ? '通知发送、渠道管理（邮件/钉钉/飞书/应用内）、通知历史' : 'Notification sending, channel management (email/dingtalk/feishu/in-app), history',
      endpoints: 'GET /notifications, PATCH /notifications/:id/read, DELETE /notifications/:id, POST /notifications/channels',
      guards: 'JwtAuthGuard',
    },
    {
      name: 'DashboardModule',
      desc: isZh ? '聚合指标查询、DORA 指标、趋势数据、排行榜' : 'Aggregated metrics, DORA metrics, trends, leaderboard',
      endpoints: 'GET /dashboard/metrics, GET /dashboard/dora, GET /dashboard/trends, GET /dashboard/leaderboard',
      guards: 'JwtAuthGuard',
    },
    {
      name: 'ReportModule',
      desc: isZh ? '报告生成（周报/月报）、模板管理、导出（Markdown/PDF）' : 'Report generation (weekly/monthly), template management, export',
      endpoints: 'POST /reports/generate, GET /reports, GET /reports/:id, GET /reports/:id/export',
      guards: 'JwtAuthGuard',
    },
    {
      name: 'WorkspaceModule',
      desc: isZh ? '工作空间 CRUD、仪表板布局配置、组件管理' : 'Workspace CRUD, dashboard layout config, widget management',
      endpoints: 'GET /workspaces, POST /workspaces, PATCH /workspaces/:id, DELETE /workspaces/:id',
      guards: 'JwtAuthGuard',
    },
  ];

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold">NestJS {isZh ? '模块设计' : 'Module Design'}</h2>
        <p className="text-muted-foreground mt-1">
          {isZh
            ? '12 个核心模块，每个模块包含 Controller、Service、DTO、Guard'
            : '12 core modules, each containing Controller, Service, DTO, Guard'}
        </p>
      </div>

      <div className="space-y-4">
        {modules.map((module) => (
          <Card key={module.name}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{module.name}</CardTitle>
                {module.guards && (
                  <div className="flex gap-1">
                    {module.guards.split(', ').map((guard) => (
                      <Badge key={guard} variant="outline" className="text-xs">{guard}</Badge>
                    ))}
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{module.desc}</p>
              <code className="text-xs bg-muted px-2 py-1 rounded block">{module.endpoints}</code>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function PrismaSchemaContent({ isZh }: { isZh: boolean }) {
  const models = [
    {
      name: 'User',
      fields: 'id, email, name, avatar, githubId, gitlabId, role, preferences, createdAt, updatedAt',
      relations: 'repositories, approvals, notifications, workspaces, filterRules',
    },
    {
      name: 'Repository',
      fields: 'id, name, fullName, platform, externalId, url, defaultBranch, webhookId, isActive, lastSyncAt',
      relations: 'users, events',
    },
    {
      name: 'Event',
      fields: 'id, type, action, title, body, author, authorAvatar, externalId, externalUrl, metadata, createdAt',
      relations: 'repository, analyses, approvals, notifications',
    },
    {
      name: 'AIAnalysis',
      fields: 'id, model, summary, riskLevel, riskReason, categories, sentiment, keyChanges, suggestions, tokensUsed, latencyMs, status',
      relations: 'event',
    },
    {
      name: 'FilterRule',
      fields: 'id, userId, name, description, conditions, action, isActive, priority',
      relations: 'user',
    },
    {
      name: 'Approval',
      fields: 'id, eventId, reviewerId, status, originalContent, editedContent, comment, createdAt, reviewedAt',
      relations: 'event, reviewer',
    },
    {
      name: 'Notification',
      fields: 'id, userId, eventId, channel, title, content, status, sentAt, readAt, metadata',
      relations: 'user, event',
    },
    {
      name: 'Workspace',
      fields: 'id, userId, name, layout, widgets, isDefault',
      relations: 'user',
    },
    {
      name: 'Report',
      fields: 'id, type, title, content, format, repositoryIds, dateFrom, dateTo, generatedBy, status, fileUrl',
      relations: '',
    },
  ];

  const enums = [
    { name: 'Role', values: 'ADMIN, MANAGER, MEMBER, VIEWER' },
    { name: 'Platform', values: 'GITHUB, GITLAB' },
    { name: 'EventType', values: 'PUSH, PR_OPENED, PR_MERGED, PR_CLOSED, PR_REVIEW, ISSUE_OPENED, ISSUE_CLOSED, ISSUE_COMMENT, RELEASE, BRANCH_CREATED, BRANCH_DELETED' },
    { name: 'RiskLevel', values: 'LOW, MEDIUM, HIGH, CRITICAL' },
    { name: 'AnalysisStatus', values: 'PENDING, PROCESSING, COMPLETED, FAILED' },
    { name: 'FilterAction', values: 'INCLUDE, EXCLUDE, TAG' },
    { name: 'ApprovalStatus', values: 'PENDING, APPROVED, REJECTED, EDITED' },
    { name: 'NotificationChannel', values: 'EMAIL, DINGTALK, FEISHU, WEBHOOK, IN_APP' },
    { name: 'NotificationStatus', values: 'PENDING, SENT, FAILED, READ' },
    { name: 'ReportType', values: 'WEEKLY, MONTHLY, CUSTOM' },
    { name: 'ReportFormat', values: 'MARKDOWN, PDF, HTML' },
    { name: 'ReportStatus', values: 'GENERATING, COMPLETED, FAILED' },
  ];

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold">Prisma {isZh ? '数据模型' : 'Data Models'}</h2>
        <p className="text-muted-foreground mt-1">
          {isZh
            ? '9 个核心数据模型 + 12 个枚举类型，所有 ID 使用 cuid()'
            : '9 core data models + 12 enum types, all IDs use cuid()'}
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{isZh ? '数据模型' : 'Data Models'}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {models.map((model) => (
              <div key={model.name} className="space-y-1">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{model.name}</Badge>
                </div>
                <p className="text-xs text-muted-foreground">{model.fields}</p>
                {model.relations && (
                  <p className="text-xs text-muted-foreground">→ {model.relations}</p>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Enum {isZh ? '枚举类型' : 'Types'}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {enums.map ( (enumItem) => (
              <div key={enumItem.name} className="space-y-1">
                <Badge variant="outline">{enumItem.name}</Badge>
                <p className="text-xs text-muted-foreground">{enumItem.values}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function AIProviderContent({ isZh }: { isZh: boolean }) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold">AI {isZh ? '多模型抽象层' : 'Multi-model Abstraction'}</h2>
        <p className="text-muted-foreground mt-1">
          {isZh
            ? '统一的 AI Provider 接口，支持 OpenAI/Anthropic/Ollama，模型切换与 fallback 链'
            : 'Unified AI Provider interface, support OpenAI/Anthropic/Ollama, model switching and fallback chain'}
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>AIProvider {isZh ? '接口定义' : 'Interface'}</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-muted p-4 rounded-lg text-sm font-mono overflow-x-auto">
{`interface AIProvider {
  readonly name: string;
  readonly models: string[];

  analyze(input: AnalysisInput): Promise<AnalysisOutput>;

  analyzeStream(input: AnalysisInput): AsyncIterable<AnalysisChunk>;

  isAvailable(): Promise<boolean>;
}

interface AnalysisInput {
  eventType: string;
  title: string;
  body: string;
  diff?: string;
  comments?: string[];
  context?: Record<string, unknown>;
  language?: 'zh' | 'en';
}

interface AnalysisOutput {
  summary: string;
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  riskReason?: string;
  categories: string[];
  keyChanges: string[];
  suggestions: string[];
  tokensUsed: number;
  latencyMs: number;
}`}
          </pre>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>OpenAI</CardTitle>
            <CardDescription>GPT-4o / GPT-4o-mini</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{isZh ? '默认模型' : 'Default'}</span>
                <span>gpt-4o-mini</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{isZh ? '上下文' : 'Context'}</span>
                <span>128K</span>
              </div>
              <Badge className="mt-2">{isZh ? '默认使用' : 'Default'}</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Anthropic</CardTitle>
            <CardDescription>Claude Sonnet / Haiku</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{isZh ? '默认模型' : 'Default'}</span>
                <span>claude-sonnet-4-20250514</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{isZh ? '上下文' : 'Context'}</span>
                <span>200K</span>
              </div>
              <Badge variant="outline" className="mt-2">{isZh ? '备选' : 'Alternative'}</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ollama</CardTitle>
            <CardDescription>{isZh ? '本地模型' : 'Local Models'}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{isZh ? '支持模型' : 'Models'}</span>
                <span>llama3, qwen2</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{isZh ? '部署' : 'Deploy'}</span>
                <span>{isZh ? '本地' : 'Local'}</span>
              </div>
              <Badge variant="outline" className="mt-2">{isZh ? '本地部署' : 'Self-hosted'}</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{isZh ? '路由策略' : 'Routing Strategy'}</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
            <li>{isZh ? '用户可在设置中选择默认模型' : 'User can select default model in settings'}</li>
            <li>{isZh ? '系统支持 fallback 链（主模型不可用时自动切换备用模型）' : 'System supports fallback chain (auto-switch when primary fails)'}</li>
            <li>{isZh ? '每个请求记录 tokensUsed 和 latencyMs 用于成本分析' : 'Each request records tokensUsed and latencyMs for cost analysis'}</li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
}

function QueueArchitectureContent({ isZh }: { isZh: boolean }) {
  const queues = [
    { name: 'webhook-events', desc: isZh ? 'Webhook 事件入队、签名验证、事件标准化' : 'Webhook events, signature validation, event standardization', workers: '1-5' },
    { name: 'ai-analysis', desc: isZh ? 'AI 分析任务、分析结果存储、状态更新' : 'AI analysis task, result storage, status update', workers: '1-10' },
    { name: 'notifications', desc: isZh ? '通知发送、渠道路由、重试机制' : 'Notification sending, channel routing, retry', workers: '1-5' },
    { name: 'report-generation', desc: isZh ? '报告生成、模板渲染、文件上传' : 'Report generation, template rendering, file upload', workers: '1-3' },
    { name: 'repository-sync', desc: isZh ? '仓库同步、分支更新、PR 列表拉取' : 'Repository sync, branch update, PR list pull', workers: '1-3' },
  ];

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold">BullMQ {isZh ? '队列架构' : 'Queue Architecture'}</h2>
        <p className="text-muted-foreground mt-1">
          {isZh
            ? '5 个独立队列，支持并发控制、重试、死信队列'
            : '5 independent queues, supporting concurrency control, retry, dead letter queue'}
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{isZh ? '队列列表' : 'Queue List'}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {queues.map((queue) => (
              <div key={queue.name} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <code className="text-sm font-medium">{queue.name}</code>
                  <p className="text-xs text-muted-foreground">{queue.desc}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-muted-foreground">{isZh ? '并发' : 'Workers'}</span>
                  <p className="text-sm">{queue.workers}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{isZh ? '队列配置' : 'Queue Configuration'}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-medium mb-2">{isZh ? '重试策略' : 'Retry Strategy'}</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• {isZh ? '最多重试 3 次' : 'Max 3 retries'}</li>
                <li>• {isZh ? '指数退避 (2s, 4s, 8s)' : 'Exponential backoff (2s, 4s, 8s)'}</li>
                <li>• {isZh ? '失败后进入死信队列' : 'Failed jobs go to DLQ'}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">{isZh ? '并发控制' : 'Concurrency Control'}</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• {isZh ? 'AI 分析队列可配置并发数' : 'AI queue configurable concurrency'}</li>
                <li>• {isZh ? '基于 Redis 限流' : 'Redis-based rate limiting'}</li>
                <li>• {isZh ? '防止 API 配额超限' : 'Prevent API quota overflow'}</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function APIResponseFormatContent({ isZh }: { isZh: boolean }) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold">API {isZh ? '统一响应格式' : 'Response Format'}</h2>
        <p className="text-muted-foreground mt-1">
          {isZh
            ? '所有 API 响应采用统一格式，便于前端处理'
            : 'All API responses use unified format for frontend handling'}
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{isZh ? '响应结构' : 'Response Structure'}</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-muted p-4 rounded-lg text-sm font-mono overflow-x-auto">
{`{
  "code": number,        // 状态码: 0=成功, 1=失败
  "data": T,             // 响应数据
  "message": string,     // 提示信息
  "timestamp": string    // ISO 时间戳
}

// 成功响应示例
{
  "code": 0,
  "data": { "id": "xxx", "name": "test" },
  "message": "操作成功",
  "timestamp": "2024-01-01T00:00:00.000Z"
}

// 错误响应示例
{
  "code": 401,
  "data": null,
  "message": "未授权",
  "timestamp": "2024-01-01T00:00:00.000Z"
}`}
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>HTTP {isZh ? '状态码' : 'Status Codes'}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2 md:grid-cols-4">
            <Badge variant="outline">200 OK</Badge>
            <Badge variant="outline">201 Created</Badge>
            <Badge variant="outline">400 Bad Request</Badge>
            <Badge variant="outline">401 Unauthorized</Badge>
            <Badge variant="outline">403 Forbidden</Badge>
            <Badge variant="outline">404 Not Found</Badge>
            <Badge variant="outline">422 Validation Error</Badge>
            <Badge variant="outline">500 Server Error</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
