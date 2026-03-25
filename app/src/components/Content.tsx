import { ScrollArea } from '@/components/ui/scroll-area';
import { OverviewSection } from './sections/OverviewSection';
import { RequirementsSection } from './sections/RequirementsSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { ArchitectureSection } from './sections/ArchitectureSection';
import { UserScenariosSection } from './sections/UserScenariosSection';
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
      case 'overview-intro':
      case 'requirements':
      case 'user-personas':
      case 'pain-points':
      case 'market-research':
      case 'features':
      case 'data-listening':
      case 'ai-analysis':
      case 'filtering':
      case 'approval':
      case 'notification':
      case 'dashboard':
      case 'reporting':
      case 'comparison':
      case 'architecture':
      case 'system-design':
      case 'tech-stack':
      case 'data-flow':
      case 'user-scenarios':
      case 'personal-mode':
      case 'team-mode':
      case 'manager-mode':
      case 'roadmap':
      case 'appendix':
      case 'glossary':
      case 'references':
        return <OverviewSection />;
      case 'project-plan':
      case 'tech-architecture':
        return <TechArchitectureSection activeSubsection={activeSection} />;
      case 'backend-design':
        return <BackendDesignSection activeSubsection={activeSection} />;
      case 'implementation-plan':
        return <ImplementationPlanSection activeSubsection={activeSection} />;
      case 'dev-standards':
        return <DevStandardsSection activeSubsection={activeSection} />;
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
