import { ScrollArea } from '@/components/ui/scroll-area';
import { OverviewSection } from './sections/OverviewSection';
import { RequirementsSection } from './sections/RequirementsSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { UserScenariosSection } from './sections/UserScenariosSection';
import { ArchitectureSection } from './sections/ArchitectureSection';
import { RoadmapSection } from './sections/RoadmapSection';
import { AppendixSection } from './sections/AppendixSection';
import { TechArchitectureSection } from './sections/TechArchitectureSection';
import { BackendDesignSection } from './sections/BackendDesignSection';
import { ImplementationPlanSection } from './sections/ImplementationPlanSection';
import { DevStandardsSection } from './sections/DevStandardsSection';

interface ContentProps {
  activeSection: string;
}

export function Content({ activeSection }: ContentProps) {
  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return <OverviewSection />;
      case 'overview-intro':
        return <OverviewSection activeSubsection="intro" />;
      case 'requirements':
        return <RequirementsSection activeSubsection="overview" />;
      case 'user-personas':
        return <RequirementsSection activeSubsection="user-personas" />;
      case 'pain-points':
        return <RequirementsSection activeSubsection="pain-points" />;
      case 'market-research':
        return <RequirementsSection activeSubsection="market-research" />;
      case 'features':
        return <FeaturesSection activeSubsection="overview" />;
      case 'data-listening':
        return <FeaturesSection activeSubsection="data-listening" />;
      case 'ai-analysis':
        return <FeaturesSection activeSubsection="ai-analysis" />;
      case 'filtering':
        return <FeaturesSection activeSubsection="filtering" />;
      case 'approval':
        return <FeaturesSection activeSubsection="approval" />;
      case 'notification':
        return <FeaturesSection activeSubsection="notification" />;
      case 'dashboard':
        return <FeaturesSection activeSubsection="dashboard" />;
      case 'reporting':
        return <FeaturesSection activeSubsection="reporting" />;
      case 'comparison':
        return <FeaturesSection activeSubsection="comparison" />;
      case 'architecture':
        return <ArchitectureSection activeSubsection="overview" />;
      case 'system-design':
        return <ArchitectureSection activeSubsection="system-design" />;
      case 'tech-stack':
        return <ArchitectureSection activeSubsection="tech-stack" />;
      case 'data-flow':
        return <ArchitectureSection activeSubsection="data-flow" />;
      case 'user-scenarios':
        return <UserScenariosSection activeSubsection="overview" />;
      case 'personal-mode':
        return <UserScenariosSection activeSubsection="personal-mode" />;
      case 'team-mode':
        return <UserScenariosSection activeSubsection="team-mode" />;
      case 'manager-mode':
        return <UserScenariosSection activeSubsection="manager-mode" />;
      case 'roadmap':
        return <RoadmapSection />;
      case 'appendix':
        return <AppendixSection activeSubsection="overview" />;
      case 'glossary':
        return <AppendixSection activeSubsection="glossary" />;
      case 'references':
        return <AppendixSection activeSubsection="references" />;
      case 'project-plan':
        return <TechArchitectureSection />;
      case 'tech-architecture':
        return <TechArchitectureSection />;
      case 'backend-design':
        return <BackendDesignSection />;
      case 'implementation-plan':
        return <ImplementationPlanSection />;
      case 'dev-standards':
        return <DevStandardsSection />;
      default:
        return <OverviewSection />;
    }
  };

  return (
    <ScrollArea className="h-[calc(100vh-3.5rem)]">
      <div className="max-w-4xl mx-auto p-8">
        {renderSection()}
      </div>
    </ScrollArea>
  );
}
