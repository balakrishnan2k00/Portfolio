import {
  Bot,
  Braces,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers,
  MessageSquareText,
  Network,
  Server,
  Workflow,
} from 'lucide-react'
import { FaMicrosoft } from 'react-icons/fa'
import { DiMsqlServer, DiPostgresql } from 'react-icons/di'
import {
  SiDotnet,
  SiFastapi,
  SiFigma,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiMongodb,
  SiPython,
  SiReact,
  SiReactquery,
  SiSass,
  SiVite,
} from 'react-icons/si'
import { TbBrandCSharp } from 'react-icons/tb'

const iconMap = {
  'React.js': SiReact,
  JavaScript: SiJavascript,
  'React Hooks': SiReact,
  'Context API': Layers,
  'React Query': SiReactquery,
  HTML5: SiHtml5,
  'CSS/SCSS': SiSass,
  Figma: SiFigma,
  'C#': TbBrandCSharp,
  '.NET Core': SiDotnet,
  'ASP.NET': SiDotnet,
  'Web API': Server,
  'EF Core': Database,
  Python: SiPython,
  FastAPI: SiFastapi,
  'Azure Functions': FaMicrosoft,
  'App Services': Cloud,
  'Cosmos DB': Database,
  'Key Vault': FaMicrosoft,
  'Service Bus': FaMicrosoft,
  'Azure DevOps': FaMicrosoft,
  'Azure OpenAI': Bot,
  'Prompt Engineering': MessageSquareText,
  'LLM Orchestration': Network,
  'Agent Frameworks': Bot,
  'SQL Server': DiMsqlServer,
  PostgreSQL: DiPostgresql,
  MongoDB: SiMongodb,
  'Microsoft Fabric': Workflow,
  Tableau: Braces,
  Git: SiGit,
  'CI/CD': GitBranch,
  Vite: SiVite,
  JIRA: SiJira,
  Agile: Workflow,
  'REST APIs': Braces,
}

export function getSkillIconKey(name) {
  const Icon = iconMap[name] ?? Code2
  return Icon.name || name
}

/** One tile per distinct icon; combined label when several skills share an icon. */
export function getUniqueSkillTiles(items) {
  const byIcon = new Map()

  for (const name of items) {
    const key = getSkillIconKey(name)
    const list = byIcon.get(key) ?? []
    list.push(name)
    byIcon.set(key, list)
  }

  return Array.from(byIcon.values()).map((names) => ({
    name: names[0],
    label: names.length > 1 ? names.join(' · ') : names[0],
  }))
}

export function SkillIcon({ name, size = 22 }) {
  const Icon = iconMap[name] ?? Code2
  return <Icon size={size} aria-hidden="true" />
}
